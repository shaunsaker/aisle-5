import React from 'react';
import renderer from 'react-test-renderer';

import ItemsList from '..';
import ITEM from '../../../mockData/item';

jest.mock('../../ShoppingItem', () => 'ShoppingItem');
jest.mock('../../ItemSeparator', () => 'ItemSeparator');

// Fixes _bezier is not a function bug
jest.useFakeTimers();

describe('ItemsList', () => {
  const data = [ITEM];

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<ItemsList data={data} />);

      expect(component).toMatchSnapshot();
    });
  });

  // NOTE: We assume the actions are handled correctly
});
