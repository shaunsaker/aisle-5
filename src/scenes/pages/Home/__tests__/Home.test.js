import React from 'react';
import renderer from 'react-test-renderer';

import { Home } from '..';
import ITEM from '../../../../mockData/item';
import USER_ITEMS from '../../../../mockData/userItems';

jest.mock('../../../../components/Page', () => 'Page');
jest.mock('../../../../components/HeaderBar', () => 'HeaderBar');
jest.mock('../../../../components/Logo', () => 'Logo');
jest.mock('../../../../components/BlankState', () => 'BlankState');
jest.mock('../../../../components/ItemsList', () => 'ItemsList');
jest.mock('../../../../components/TouchableIcon', () => 'TouchableIcon');
jest.mock('../../../../components/InputContainer', () => 'InputContainer');
jest.mock('../../../../components/TextInput', () => 'TextInput');
jest.mock('../../../../components/ItemSuggestionsList', () => 'ItemSuggestionsList');
jest.mock('../../../../components/IconButton', () => 'IconButton');
jest.mock('../../../../components/Button', () => 'Button');
jest.mock('../../../../components/TabBar', () => 'TabBar');

describe('Home', () => {
  const spies = [];
  const dispatch = jest.fn();
  const pendingList = { 1: ITEM };

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<Home dispatch={dispatch} />);

      expect(component).toMatchSnapshot();
    });

    // TODO: renders the list state
  });

  describe('methods', () => {
    it('should handle keyboardDidHide', () => {
      spies[0] = jest.spyOn(Home.prototype, 'hideInput');
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.keyboardDidHide();

      expect(spies[0]).toHaveBeenCalled();
    });

    it('should handle onAddItem', () => {
      spies[0] = jest.spyOn(Home.prototype, 'setShowInput');
      spies[1] = jest.spyOn(Home.prototype, 'focusInput');
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      // setup
      instance.input = {};
      instance.input.focus = jest.fn();

      instance.onAddItem();

      expect(spies[0]).toHaveBeenCalledWith(true);
      expect(spies[1]).toHaveBeenCalled();
    });

    it('should handle setShowInput', () => {
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      expect(instance.state.showInput).toEqual(false);

      instance.setShowInput(true);

      expect(instance.state.showInput).toEqual(true);
    });

    it('should handle onBack', () => {
      spies[0] = jest.spyOn(Home.prototype, 'hideInput');
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.onBack();

      expect(spies[0]).toHaveBeenCalled();
    });

    it('should handle onSetItem', () => {
      spies[0] = jest.spyOn(Home.prototype, 'setItem');
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.onSetItem(ITEM.name);

      expect(spies[0]).toHaveBeenCalledWith(ITEM.name);
    });

    it('should handle setItem', () => {
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.setItem(ITEM.name);

      expect(instance.state.item).toEqual(ITEM.name);
    });

    it('should handle onClearItem', () => {
      spies[0] = jest.spyOn(Home.prototype, 'setItem');
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.onClearItem();

      expect(spies[0]).toHaveBeenCalledWith(null);
    });

    it('should handle onSubmitItem', () => {
      spies[0] = jest.spyOn(Home.prototype, 'submitItem');
      spies[1] = jest.spyOn(Home.prototype, 'setItem');
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.onSubmitItem();

      expect(spies[0]).toHaveBeenCalled();
      expect(spies[1]).toHaveBeenCalled();
    });

    describe('should handle submitItem', () => {
      it('when the item is already present in user items', () => {
        spies[0] = jest.spyOn(Home.prototype, 'saveItem');
        spies[1] = jest.spyOn(Home.prototype, 'addItem');
        const component = renderer.create(<Home dispatch={dispatch} userItems={USER_ITEMS} />);
        const instance = component.getInstance();

        // Setup
        instance.setItem(ITEM.name);

        instance.submitItem();

        expect(spies[0]).not.toHaveBeenCalled();
        expect(spies[1]).toHaveBeenCalledWith(ITEM.name);
      });

      it('when the item is not already present in user items', () => {
        spies[0] = jest.spyOn(Home.prototype, 'saveItem');
        spies[1] = jest.spyOn(Home.prototype, 'addItem');
        const component = renderer.create(<Home dispatch={dispatch} />);
        const instance = component.getInstance();

        // Setup
        instance.setItem(ITEM.name);

        instance.submitItem();

        expect(spies[0]).toHaveBeenCalledWith(ITEM.name);
        expect(spies[1]).toHaveBeenCalledWith(ITEM.name);
      });
    });

    it('should handle saveItem', () => {
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.saveItem();

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toMatchSnapshot();
    });

    it('should handle addItem', () => {
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.addItem();

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toMatchSnapshot();
    });

    it('should handle hideInput', () => {
      spies[0] = jest.spyOn(Home.prototype, 'setShowInput');
      spies[1] = jest.spyOn(Home.prototype, 'setItem');
      spies[2] = jest.spyOn(Home.prototype, 'dismissKeyboard');
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.hideInput();

      expect(spies[0]).toHaveBeenCalled();
      expect(spies[1]).toHaveBeenCalledWith(null);
      expect(spies[2]).toHaveBeenCalled();
    });

    it('should handle focusInput', () => {
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      // setup
      instance.input = {};
      instance.input.focus = jest.fn();

      instance.focusInput();
    });

    it('should handle dismissKeyboard', () => {
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.dismissKeyboard();
    });

    it('should handle onItemSuggestion', () => {
      spies[0] = jest.spyOn(Home.prototype, 'setItem');
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.onItemSuggestion(ITEM.name);

      expect(spies[0]).toHaveBeenCalledWith(ITEM.name);
    });

    describe('should handle onSetPendingListItemIsChecked', () => {
      it('when isChecked is true', () => {
        spies[0] = jest.spyOn(Home.prototype, 'setPendingListItemIsChecked');
        spies[1] = jest.spyOn(Home.prototype, 'setPendingListItemDatePurchased');
        const component = renderer.create(<Home dispatch={dispatch} />);
        const instance = component.getInstance();
        const isChecked = true;
        const now = Date.now();

        instance.onSetPendingListItemIsChecked(ITEM.id, isChecked);

        expect(spies[0]).toHaveBeenCalledWith(ITEM.id, isChecked);
        expect(spies[1]).toHaveBeenCalledWith(ITEM.id, now);
      });

      it('when isChecked is false', () => {
        spies[0] = jest.spyOn(Home.prototype, 'setPendingListItemIsChecked');
        spies[1] = jest.spyOn(Home.prototype, 'setPendingListItemDatePurchased');
        const component = renderer.create(<Home dispatch={dispatch} />);
        const instance = component.getInstance();
        const isChecked = false;

        instance.onSetPendingListItemIsChecked(ITEM.id, isChecked);

        expect(spies[0]).toHaveBeenCalledWith(ITEM.id, isChecked);
        expect(spies[1]).not.toHaveBeenCalled();
      });
    });

    it('should handle setPendingListItemIsChecked', () => {
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.setPendingListItemIsChecked(ITEM.id, ITEM.isChecked);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toMatchSnapshot();
    });

    it('should handle setPendingListItemDatePurchased', () => {
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();
      const now = Date.now();

      instance.setPendingListItemDatePurchased(ITEM.id, now);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toMatchSnapshot();
    });

    describe('should handle onSetPendingListItemQuantity', () => {
      it('when quantity is 0', () => {
        spies[0] = jest.spyOn(Home.prototype, 'navigate');
        const component = renderer.create(<Home dispatch={dispatch} />);
        const instance = component.getInstance();

        instance.onSetPendingListItemQuantity(ITEM.id, 0);

        expect(spies[0]).toHaveBeenCalledWith('removePendingItemModal', { itemName: ITEM.id });
      });

      it('when quantity is not 0', () => {
        spies[0] = jest.spyOn(Home.prototype, 'setPendingListItemQuantity');
        const component = renderer.create(<Home dispatch={dispatch} />);
        const instance = component.getInstance();

        instance.onSetPendingListItemQuantity(ITEM.id, ITEM.quantity);

        expect(spies[0]).toHaveBeenCalledWith(ITEM.id, ITEM.quantity);
      });
    });

    it('should handle setPendingListItemQuantity', () => {
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.setPendingListItemIsChecked(ITEM.id, ITEM.quantity);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toMatchSnapshot();
    });

    it('should handle onRemovePendingListItem', () => {
      spies[0] = jest.spyOn(Home.prototype, 'removePendingListItem');
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.onRemovePendingListItem(ITEM.id);

      expect(spies[0]).toHaveBeenCalledWith(ITEM.id);
    });

    it('should handle removePendingListItem', () => {
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.setPendingListItemIsChecked(ITEM.id);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toMatchSnapshot();
    });

    it('should handle onSubmitList', () => {
      spies[0] = jest.spyOn(Home.prototype, 'saveList');
      spies[1] = jest.spyOn(Home.prototype, 'removePendingListItem');
      spies[2] = jest.spyOn(Home.prototype, 'setSystemMessage');
      const component = renderer.create(
        <Home dispatch={dispatch} userItems={USER_ITEMS} pendingList={pendingList} />,
      );
      const instance = component.getInstance();

      instance.onSubmitList();

      expect(spies[0]).toHaveBeenCalled();
      expect(spies[1]).toHaveBeenCalled(); // TODO: More ellaborate testing needed
      expect(spies[2]).toHaveBeenCalledWith(expect.any(String));
    });

    it('should handle saveList', () => {
      const component = renderer.create(
        <Home dispatch={dispatch} userItems={USER_ITEMS} pendingList={pendingList} />,
      );
      const instance = component.getInstance();

      instance.saveList();

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toMatchSnapshot();
    });

    it('should handle setSystemMessage', () => {
      const component = renderer.create(<Home dispatch={dispatch} />);
      const instance = component.getInstance();

      instance.setSystemMessage();

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toMatchSnapshot();
    });
  });

  describe('lifecycle methods', () => {
    // TODO: Test the event listeners
  });

  describe('actions', () => {
    // TODO: Test these actions
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
