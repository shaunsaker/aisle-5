import React from 'react';
import renderer from 'react-test-renderer';

import Triangle from '..';

describe('Triangle', () => {
  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<Triangle />);

      expect(component).toMatchSnapshot();
    });
  });
});
