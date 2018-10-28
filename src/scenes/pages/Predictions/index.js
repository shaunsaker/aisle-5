import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

import utils from '../../../utils';

import Page from '../../../components/Page';
import HeaderBar from '../../../components/HeaderBar';
import TitleText from '../../../components/TitleText';
import BlankState from '../../../components/BlankState';
import TabBar from '../../../components/TabBar';

export class Predictions extends React.Component {
  constructor(props) {
    super(props);

    this.msInDay = 1000 * 60 * 60 * 24; // ms * sec * min * hrs

    this.state = {};
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    userLists: PropTypes.shape({}),
    userItems: PropTypes.shape({}),
  };

  static defaultProps = {};

  render() {
    const { userLists, userItems } = this.props;

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
    const groupedItems =
      allItems && utils.arrays.groupArrayOfObjectsByKey(allItems, 'user_item_id');

    const processedItems = Object.keys(groupedItems).map((id) => {
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
          const timeDifferenceInDays = timeDifference / this.msInDay;
          const usagePerDay = previousQuantity / timeDifferenceInDays;

          return usagePerDay;
        }

        return null;
      });

      // First element will always be null so let's shift it off
      usagesPerDay.shift();

      // Calculate the average usage per day based on all usages
      const totalUsagesPerDay = usagesPerDay.reduce((total, usage) => total + usage);
      const numberOfUsagesPerDay = usagesPerDay.length;
      const averageUsagePerDay = totalUsagesPerDay / numberOfUsagesPerDay;

      // Calculate the remainingQuantityPercentage
      //
      const lastPurchasedItem = sortedItems[sortedItems.length - 1];
      const lastPurchasedDate = lastPurchasedItem.date_purchased;
      const lastPurchasedQuantity = lastPurchasedItem.quantity;
      const now = Date.now();
      const timeSinceLastPurchase = now - lastPurchasedDate;
      const daysSinceLastPurchase = timeSinceLastPurchase / this.msInDay;
      const quantityConsumed = daysSinceLastPurchase * averageUsagePerDay;
      const remainingQuantity = lastPurchasedQuantity - quantityConsumed;
      const remainingQuantityPercentage = (100 * remainingQuantity) / lastPurchasedQuantity;

      // Calculate the daysLeftUntilZeroQuantity
      const daysLeftUntilZeroQuantity = remainingQuantity / averageUsagePerDay;

      // Get the item name
      const { name } = userItems[id];

      return {
        id,
        name,
        averageUsagePerDay,
        remainingQuantityPercentage,
        daysLeftUntilZeroQuantity,
      };
    });

    console.log(processedItems);

    return (
      <Page>
        <HeaderBar>
          <TitleText text="Predictions" />
        </HeaderBar>

        <View style={{ flex: 1 }} />

        <TabBar />
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    userLists: state.userLists,
    userItems: state.userItems,
  };
}

export default connect(mapStateToProps)(Predictions);
