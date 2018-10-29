import React from 'react';
import renderer from 'react-test-renderer';

import PredictedItemsList from '..';
import PREDICTED_ITEMS_LIST from '../../../mockData/predictedItemsList';

jest.mock('../Header', () => 'Header');
jest.mock('../PredictedItem', () => 'PredictedItem');
jest.mock('../../ItemSeparator', () => 'ItemSeparator');

describe('PredictedItemsList', () => {
  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<PredictedItemsList data={PREDICTED_ITEMS_LIST} />);

      expect(component).toMatchSnapshot();
    });
  });
});
