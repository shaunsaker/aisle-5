import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import { ErrorHandler } from '..';

jest.mock('../../../scenes/pages/Error'); // Error scene that is displayed on error

const ProblemChild = () => {
  throw new Error('Error thrown from problem child');
  return <div>Error</div>; // eslint-disable-line
};

describe('ErrorHandler', () => {
  const spies = [];
  const dispatch = jest.fn();

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(
        <ErrorHandler dispatch={dispatch}>
          <View />
        </ErrorHandler>,
      );

      expect(component).toMatchSnapshot();
    });

    it('renders the error state', () => {
      const component = renderer.create(
        <ErrorHandler dispatch={dispatch}>
          <View />
        </ErrorHandler>,
      );
      const instance = component.getInstance();

      // Setup
      instance.setErrorMessage('Test');

      expect(component).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    it('should handle setErrorMessage', () => {
      const component = renderer.create(
        <ErrorHandler dispatch={dispatch}>
          <View />
        </ErrorHandler>,
      );
      const instance = component.getInstance();

      instance.setErrorMessage('Test');

      expect(instance.state.errorMessage).toEqual('Test');
    });

    it('should handle logError', () => {
      const component = renderer.create(
        <ErrorHandler dispatch={dispatch}>
          <View />
        </ErrorHandler>,
      );
      const instance = component.getInstance();
      const error = new Error('foo');

      instance.logError(error);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toMatchSnapshot();
    });
  });

  describe('lifecycle methods', () => {
    it('calls setErrorMessage and logError in componentDidCatch', () => {
      spies[0] = jest.spyOn(ErrorHandler.prototype, 'setErrorMessage');
      spies[1] = jest.spyOn(ErrorHandler.prototype, 'logError');
      renderer.create(
        <ErrorHandler dispatch={dispatch}>
          <ProblemChild />
        </ErrorHandler>,
      );

      expect(spies[0]).toHaveBeenCalled();
      expect(spies[1]).toHaveBeenCalled();
    });
  });

  afterEach(() => {
    spies.forEach((spy) => {
      if (spy) {
        spy.mockClear();
      }
    });

    jest.clearAllMocks();
  });
});
