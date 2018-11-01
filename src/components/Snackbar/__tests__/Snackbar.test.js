import React from 'react';
import renderer from 'react-test-renderer';

import Snackbar from '..';

describe('Snackbar', () => {
  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<Snackbar text="Test" />);

      expect(component).toMatchSnapshot();
    });
  });
});
