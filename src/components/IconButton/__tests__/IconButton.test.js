import React from 'react';
import renderer from 'react-test-renderer';

import IconButton from '..';

describe('IconButton', () => {
  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<IconButton />);

      expect(component).toMatchSnapshot();
    });

    it('renders the small state', () => {
      const component = renderer.create(<IconButton small />);

      expect(component).toMatchSnapshot();
    });

    it('renders the secondary state', () => {
      const component = renderer.create(<IconButton secondary />);

      expect(component).toMatchSnapshot();
    });
  });
});
