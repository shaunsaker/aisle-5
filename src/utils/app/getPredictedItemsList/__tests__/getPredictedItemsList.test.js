import getPredictedItemsList from '..';
import USER_LISTS from '../../../../mockData/userLists';
import USER_ITEMS from '../../../../mockData/userItems';

describe('getPredictedItemsList()', () => {
  it('should work with empty userLists', () => {
    expect(getPredictedItemsList({})).toEqual([]);
  });

  it('should work', () => {
    expect(getPredictedItemsList(USER_LISTS, USER_ITEMS)).toEqual([
      {
        averageUsagePerDay: 5184,
        daysLeftUntilZeroQuantity: 0.0023148148148148147,
        id: '1',
        name: 'Beer',
        previouslyPurchasedQuantity: 6,
        remainingQuantity: 12,
        remainingQuantityPercentage: 200,
      },
    ]);
  });
});
