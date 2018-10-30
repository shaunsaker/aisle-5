import React from 'react';
import renderer from 'react-test-renderer';

import ShoppingItem from '..';
import ITEM from '../../../../mockData/item';

describe('ShoppingItem', () => {
  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<ShoppingItem {...ITEM} />);

      expect(component).toMatchSnapshot();
    });
  });
});
