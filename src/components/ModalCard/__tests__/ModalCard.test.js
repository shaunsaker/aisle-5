import React from 'react';
import renderer from 'react-test-renderer';

import ModalCard from '..';

describe('ModalCard', () => {
  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<ModalCard />);

      expect(component).toMatchSnapshot();
    });
  });
});
