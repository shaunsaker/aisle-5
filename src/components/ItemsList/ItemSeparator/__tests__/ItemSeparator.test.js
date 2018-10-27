import React from 'react';
import renderer from 'react-test-renderer';

import ItemSeparator from '..';

describe('ItemSeparator', () => {
  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<ItemSeparator />);

      expect(component).toMatchSnapshot();
    });
  });
});
