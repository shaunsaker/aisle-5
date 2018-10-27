import React from 'react';
import renderer from 'react-test-renderer';

import TouchableIcon from '..';

describe('TouchableIcon', () => {
  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<TouchableIcon />);

      expect(component).toMatchSnapshot();
    });
  });
});
