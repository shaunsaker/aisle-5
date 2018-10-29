import React from 'react';
import renderer from 'react-test-renderer';

import ProgressBar from '..';

// Fixes _bezier is not a function bug
jest.useFakeTimers();

describe('ProgressBar', () => {
  describe('renders', () => {
    const value = 50;

    it('renders with minimum required props', () => {
      const component = renderer.create(<ProgressBar value={value} />);

      expect(component).toMatchSnapshot();
    });
  });
});
