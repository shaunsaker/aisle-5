import React from 'react';
import renderer from 'react-test-renderer';

import { InfoModal } from '..';

// Fixes _bezier is not a function bug
jest.useFakeTimers();

describe('InfoModal', () => {
  const spies = [];
  const dispatch = jest.fn();

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<InfoModal />);

      expect(component).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    it('should handle onClose', () => {
      spies[0] = jest.spyOn(InfoModal.prototype, 'navigate');
      const component = renderer.create(<InfoModal />);
      const instance = component.getInstance();

      instance.onClose();

      expect(spies[0]).toHaveBeenCalled();
    });

    it('should handle navigate', () => {
      const component = renderer.create(<InfoModal />);
      const instance = component.getInstance();

      instance.navigate();
    });
  });

  describe('actions', () => {
    spies[0] = jest.spyOn(InfoModal.prototype, 'onClose');
    const component = renderer.create(<InfoModal />);
    const { root } = component;
    const targetComponent = root.findByProps({ testID: 'infoModal.button.submit' });

    targetComponent.props.handlePress();

    expect(spies[0]).toHaveBeenCalled();
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
