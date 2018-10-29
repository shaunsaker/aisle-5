import utils from '../..';

const MS_IN_ONE_DAY = 1000 * 60 * 60 * 24;

const getPredictedItemsList = (userLists, userItems) => {
  // Convert userLists to array
  const userListsArray = !utils.objects.isEmptyObject(userLists)
    ? utils.objects.convertObjectToArray(userLists)
    : [];

  // Collect all the items from the list fields
  const itemArrays = userListsArray.map((userList) => userList.list.map((item) => item));

  // Concat the arrays of items from each list
  const allItems =
    itemArrays.length && itemArrays.reduce((totalItems, nextItem) => totalItems.concat(nextItem));

  // Group the items by item_user_id
  const groupedItems = allItems && utils.arrays.groupArrayOfObjectsByKey(allItems, 'user_item_id');

  const predictedItemsList = Object.keys(groupedItems).map((id) => {
    const items = groupedItems[id];

    // Sort the items by date_purchased
    const sortedItems = utils.arrays.sortArrayOfObjectsByKey(items, 'date_purchased');

    const usagesPerDay = sortedItems.map((item, index, src) => {
      // Only start calculating if we have more than 1 item in the array of items
      if (index > 0) {
        const previousItem = src[index - 1];
        const previousDatePurchased = previousItem.date_purchased;
        const previousQuantity = previousItem.quantity;
        const dateAdded = item.date_added;
        const timeDifference = dateAdded - previousDatePurchased;
        const timeDifferenceInDays = timeDifference / MS_IN_ONE_DAY;
        const usagePerDay = previousQuantity / timeDifferenceInDays;

        return usagePerDay;
      }

      return null;
    });

    // First element will always be null so let's shift it off
    usagesPerDay.shift();

    // Calculate the average usage per day based on all usages
    const totalUsagesPerDay =
      usagesPerDay.length && usagesPerDay.reduce((total, usage) => total + usage);

    // Get the item name
    const { name } = userItems[id];

    let averageUsagePerDay = null;
    let previouslyPurchasedQuantity = null;
    let remainingQuantity = null;
    let remainingQuantityPercentage = null;
    let daysLeftUntilZeroQuantity = null;

    if (totalUsagesPerDay) {
      // We have enough data to start averaging out
      const numberOfUsagesPerDay = usagesPerDay.length;
      averageUsagePerDay = totalUsagesPerDay / numberOfUsagesPerDay;

      // Calculate the remainingQuantityPercentage
      const previouslyPurchasedItem = sortedItems[sortedItems.length - 1];
      const previouslyPurchasedDate = previouslyPurchasedItem.date_purchased;
      previouslyPurchasedQuantity = previouslyPurchasedItem.quantity;
      const now = Date.now();
      const timeSinceLastPurchase = now - previouslyPurchasedDate;
      const daysSinceLastPurchase = timeSinceLastPurchase / MS_IN_ONE_DAY;
      const quantityConsumed = daysSinceLastPurchase * averageUsagePerDay;
      remainingQuantity = previouslyPurchasedQuantity - quantityConsumed;

      // Only allow remainingQuantity above or equal to 0
      const realRemainingQuantity = remainingQuantity >= 0 ? remainingQuantity : 0;

      remainingQuantityPercentage = (100 * realRemainingQuantity) / previouslyPurchasedQuantity;

      // Calculate the daysLeftUntilZeroQuantity
      daysLeftUntilZeroQuantity = realRemainingQuantity / averageUsagePerDay;
    }

    return {
      id,
      name,
      averageUsagePerDay,
      remainingQuantity,
      previouslyPurchasedQuantity,
      remainingQuantityPercentage,
      daysLeftUntilZeroQuantity,
    };
  });

  return predictedItemsList;
};

export default getPredictedItemsList;
