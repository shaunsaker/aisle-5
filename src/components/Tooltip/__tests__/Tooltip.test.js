import React from 'react';
import renderer from 'react-test-renderer';

import Tooltip from '..';

describe('Tooltip', () => {
  const spies = [];
  const horizontalOrientation = 90;

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<Tooltip />);

      expect(component).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    it('should handle getTrianglePosition', () => {
      const component = renderer.create(<Tooltip />);
      const instance = component.getInstance();
      const trianglePosition = instance.getTrianglePosition(horizontalOrientation);

      expect(trianglePosition).toEqual({ bottom: 0, right: 0, top: 0 }); // FIXME: not declarative
    });
  });

  afterEach(() => {
    spies.forEach((spy) => {
      if (spy) {
        spy.mockClear();
      }
    });
  });
});
