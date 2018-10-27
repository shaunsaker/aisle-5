import React from 'react';
import renderer from 'react-test-renderer';

import Counter from '..';

describe('Counter', () => {
  const value = 1;

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<Counter value={value} />);

      expect(component).toMatchSnapshot();
    });

    it('renders the default state', () => {
      const component = renderer.create(<Counter value={value + 1} />);

      expect(component).toMatchSnapshot();
    });
  });
});
