import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import { SystemMessageHandler } from '..';

// Fixes _bezier is not a function bug
jest.useFakeTimers();

describe('SystemMessageHandler', () => {
  const spies = [];
  const dispatch = jest.fn();
  const children = <View />;
  const systemMessage = 'Test';

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(
        <SystemMessageHandler dispatch={dispatch}>{children}</SystemMessageHandler>,
      );

      expect(component).toMatchSnapshot();
    });

    it('renders the snackbar state', () => {
      const component = renderer.create(
        <SystemMessageHandler dispatch={dispatch} systemMessage={systemMessage}>
          {children}
        </SystemMessageHandler>,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    it('should handle setHideSnackbar', () => {
      const component = renderer.create(
        <SystemMessageHandler dispatch={dispatch}>{children}</SystemMessageHandler>,
      );
      const instance = component.getInstance();

      expect(instance.state.hideSnackbar).toEqual(false);

      instance.setHideSnackbar(true);

      expect(instance.state.hideSnackbar).toEqual(true);
    });

    it('should handle onAnimateOut', () => {
      spies[0] = jest.spyOn(SystemMessageHandler.prototype, 'resetSystemMessage');
      const component = renderer.create(
        <SystemMessageHandler dispatch={dispatch}>{children}</SystemMessageHandler>,
      );
      const instance = component.getInstance();

      instance.onAnimateOut();

      expect(spies[0]).toHaveBeenCalled();
    });

    it('should handle resetSystemMessage', () => {
      const component = renderer.create(
        <SystemMessageHandler dispatch={dispatch}>{children}</SystemMessageHandler>,
      );
      const instance = component.getInstance();

      instance.resetSystemMessage();

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toMatchSnapshot();
    });

    it('should handle clearTimer', () => {
      const component = renderer.create(
        <SystemMessageHandler dispatch={dispatch}>{children}</SystemMessageHandler>,
      );
      const instance = component.getInstance();

      instance.clearTimer();
    });

    it('should handle onSnackbarPress', () => {
      spies[0] = jest.spyOn(SystemMessageHandler.prototype, 'clearTimer');
      spies[1] = jest.spyOn(SystemMessageHandler.prototype, 'setHideSnackbar');
      const component = renderer.create(
        <SystemMessageHandler dispatch={dispatch}>{children}</SystemMessageHandler>,
      );
      const instance = component.getInstance();

      instance.onSnackbarPress();

      expect(spies[0]).toHaveBeenCalled();
      expect(spies[1]).toHaveBeenCalledWith(true);
    });
  });

  describe('lifecycle methods', () => {
    it('should call setHideSnackbar and resetSystemMessage if systemMessage changed in componentDidUpdate', () => {
      spies[0] = jest.spyOn(SystemMessageHandler.prototype, 'clearTimer');
      spies[1] = jest.spyOn(SystemMessageHandler.prototype, 'setHideSnackbar');

      const component = renderer.create(
        <SystemMessageHandler dispatch={dispatch} systemMessage="Something went wrong">
          <View />
        </SystemMessageHandler>,
      );
      const instance = component.getInstance();

      // Setup
      instance.timer = true;

      component.update(
        <SystemMessageHandler dispatch={dispatch} systemMessage="Same same, but different">
          <View />
        </SystemMessageHandler>,
      );

      expect(spies[0]).toHaveBeenCalled();
      expect(spies[1]).toHaveBeenCalledWith(false);

      // FIXME: How to test this?
      // setTimeout(() => {
      //   expect(spies[1]).toHaveBeenCalledWith(true);

      //   done();
      // }, instance.snackbarDuration);
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
