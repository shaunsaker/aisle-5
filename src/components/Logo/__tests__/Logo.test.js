import React from 'react';
import renderer from 'react-test-renderer';

import Logo from '..';

describe('Logo', () => {
  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<Logo />);

      expect(component).toMatchSnapshot();
    });
  });
});
