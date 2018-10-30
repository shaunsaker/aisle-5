import React from 'react';
import renderer from 'react-test-renderer';

import HeaderTabs from '..';

describe('HeaderTabs', () => {
  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<HeaderTabs />);

      expect(component).toMatchSnapshot();
    });
  });
});
