import React from 'react';
import renderer from 'react-test-renderer';

import Emoji from '..';

describe('Emoji', () => {
  const name = 'Beer';

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<Emoji />);

      expect(component).toMatchSnapshot();
    });

    it('renders the default state', () => {
      const component = renderer.create(<Emoji name={name} />);

      expect(component).toMatchSnapshot();
    });
  });
});
