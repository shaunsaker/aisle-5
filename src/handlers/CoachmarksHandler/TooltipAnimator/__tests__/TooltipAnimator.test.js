import React from 'react';
import renderer from 'react-test-renderer';

import TooltipAnimator from '..';

jest.useFakeTimers();

describe('TooltipAnimator', () => {
  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<TooltipAnimator />);

      expect(component).toMatchSnapshot();
    });
  });
});
