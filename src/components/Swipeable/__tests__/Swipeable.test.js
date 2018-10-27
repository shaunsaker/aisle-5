import React from 'react';
import renderer from 'react-test-renderer';

import Swipeable from '..';

describe('Swipeable', () => {
  const width = 100;

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<Swipeable width={width} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe('lifecycle methods', () => {
    // FIXME: How to test these event listeners
  });
});
