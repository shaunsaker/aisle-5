import React from 'react';
import renderer from 'react-test-renderer';

import { RemovePendingItemModal } from '..';

// Fixes _bezier is not a function bug
jest.useFakeTimers();

describe('RemovePendingItemModal', () => {
  const spies = [];
  const dispatch = jest.fn();
  const itemName = 'Beer';

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<RemovePendingItemModal dispatch={dispatch} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    it('should handle onCancel', () => {
      spies[0] = jest.spyOn(RemovePendingItemModal.prototype, 'navigate');
      const component = renderer.create(<RemovePendingItemModal dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.onCancel();

      expect(spies[0]).toHaveBeenCalled();
    });

    it('should handle onSubmit', () => {
      spies[0] = jest.spyOn(RemovePendingItemModal.prototype, 'removePendingListItem');
      spies[1] = jest.spyOn(RemovePendingItemModal.prototype, 'navigate');
      const component = renderer.create(
        <RemovePendingItemModal dispatch={dispatch} itemName={itemName} />,
      );
      const instance = component.getInstance();

      instance.onSubmit();

      expect(spies[0]).toHaveBeenCalledWith(itemName);
      expect(spies[1]).toHaveBeenCalled();
    });

    it('should handle removePendingListItem', () => {
      const component = renderer.create(
        <RemovePendingItemModal dispatch={dispatch} itemName={itemName} />,
      );
      const instance = component.getInstance();

      instance.removePendingListItem(itemName);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toMatchSnapshot();
    });

    it('should handle navigate', () => {
      const component = renderer.create(
        <RemovePendingItemModal dispatch={dispatch} itemName={itemName} />,
      );
      const instance = component.getInstance();

      instance.navigate();
    });
  });

  describe('actions', () => {
    it('should call onCancel on cancel button press', () => {
      spies[0] = jest.spyOn(RemovePendingItemModal.prototype, 'onCancel');
      const component = renderer.create(
        <RemovePendingItemModal dispatch={dispatch} itemName={itemName} />,
      );
      const { root } = component;
      const targetComponent = root.findByProps({ testID: 'removePendingItemModal.button.cancel' });

      targetComponent.props.handlePress();

      expect(spies[0]).toHaveBeenCalled();
    });

    it('should call onSubmit on submit button press', () => {
      spies[0] = jest.spyOn(RemovePendingItemModal.prototype, 'onSubmit');
      const component = renderer.create(
        <RemovePendingItemModal dispatch={dispatch} itemName={itemName} />,
      );
      const { root } = component;
      const targetComponent = root.findByProps({ testID: 'removePendingItemModal.button.submit' });

      targetComponent.props.handlePress();

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
