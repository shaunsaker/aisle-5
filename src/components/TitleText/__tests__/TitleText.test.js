import React from 'react';
import renderer from 'react-test-renderer';

import TitleText from '..';

describe('TitleText', () => {
  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<TitleText />);

      expect(component).toMatchSnapshot();
    });
  });
});
