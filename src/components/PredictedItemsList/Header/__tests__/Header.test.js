import React from 'react';
import renderer from 'react-test-renderer';

import Header from '..';
import HEADER_ITEMS from '../../headerItems';

describe('Header', () => {
  describe('renders', () => {
    const handleHeaderItemPress = jest.fn();
    const height = 51;

    it('renders with minimum required props', () => {
      const component = renderer.create(
        <Header
          headerItems={HEADER_ITEMS}
          handleHeaderItemPress={handleHeaderItemPress}
          height={height}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
