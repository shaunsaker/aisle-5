import React from 'react';
import renderer from 'react-test-renderer';

import PredictedItem from '..';
import PREDICTED_ITEMS_LIST from '../../../../mockData/predictedItemsList';

jest.mock('../ProgressBar', () => 'ProgressBar');

describe('PredictedItem', () => {
  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<PredictedItem />);

      expect(component).toMatchSnapshot();
    });

    it('renders the not enough data state', () => {
      const predictedItem = PREDICTED_ITEMS_LIST[0];
      const component = renderer.create(<PredictedItem {...predictedItem} />);

      expect(component).toMatchSnapshot();
    });

    it('renders the out of stock state', () => {
      const predictedItem = PREDICTED_ITEMS_LIST[1];
      const component = renderer.create(<PredictedItem {...predictedItem} />);

      expect(component).toMatchSnapshot();
    });

    it('renders the default state', () => {
      const predictedItem = PREDICTED_ITEMS_LIST[2];
      const component = renderer.create(<PredictedItem {...predictedItem} />);

      expect(component).toMatchSnapshot();
    });
  });
});
