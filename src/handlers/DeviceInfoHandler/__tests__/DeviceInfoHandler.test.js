import React from 'react';
import renderer from 'react-test-renderer';

import { DeviceInfoHandler } from '..';

describe('DeviceInfoHandler', () => {
  const spies = [];
  const dispatch = jest.fn();

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<DeviceInfoHandler dispatch={dispatch} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    it('should handle getUniqueID', () => {
      const component = renderer.create(<DeviceInfoHandler dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.getUniqueID();

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toMatchSnapshot();
    });
  });

  describe('lifecycle methods', () => {
    it('should call getUniqueID in componentDidMount', () => {
      spies[0] = jest.spyOn(DeviceInfoHandler.prototype, 'getUniqueID');
      renderer.create(<DeviceInfoHandler dispatch={dispatch} />);

      expect(spies[0]).toHaveBeenCalled();
    });
  });

  afterEach(() => {
    spies.forEach((spy) => {
      if (spy) {
        spy.mockClear();
      }
    });
    dispatch.mockClear();
  });
});
