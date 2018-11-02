import React from 'react';
import renderer from 'react-test-renderer';

import HeadingText from '..';

describe('HeadingText', () => {
  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<HeadingText />);

      expect(component).toMatchSnapshot();
    });
  });
});
