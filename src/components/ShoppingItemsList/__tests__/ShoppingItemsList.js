import React from 'react';
import renderer from 'react-test-renderer';

import ItemsList from '..';
import ITEM from '../../../mockData/item';

jest.mock('../Item', () => 'Item');
jest.mock('../../ItemSeparator', () => 'ItemSeparator');

// Fixes _bezier is not a function bug
jest.useFakeTimers();

describe('ItemsList', () => {
  const spies = [];
  const dispatch = jest.fn();
  const data = [ITEM];
  const newData = [ITEM, { id: '2' }];

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<ItemsList data={data} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    it('should handle scrollToEnd', () => {
      const component = renderer.create(<ItemsList data={data} />);
      const instance = component.getInstance();

      instance.scrollToEnd();
    });

    it('should handle setDidChange', () => {
      const component = renderer.create(<ItemsList data={data} />);
      const instance = component.getInstance();

      expect(instance.state.didChange).toEqual(false);

      instance.setDidChange(true);

      expect(instance.state.didChange).toEqual(true);
    });

    it('should handle onSwipeStart', () => {
      spies[0] = jest.spyOn(ItemsList.prototype, 'setScrollEnabled');
      const component = renderer.create(<ItemsList data={data} />);
      const instance = component.getInstance();

      instance.onSwipeStart();

      expect(spies[0]).toHaveBeenCalledWith(false);
    });

    it('should handle onSwipeEnd', () => {
      spies[0] = jest.spyOn(ItemsList.prototype, 'setScrollEnabled');
      const component = renderer.create(<ItemsList data={data} />);
      const instance = component.getInstance();

      instance.onSwipeEnd();

      expect(spies[0]).toHaveBeenCalledWith(true);
    });

    it('should handle setScrollEnabled', () => {
      const component = renderer.create(<ItemsList data={data} />);
      const instance = component.getInstance();

      expect(instance.state.scrollEnabled).toEqual(true);

      instance.setScrollEnabled(false);

      expect(instance.state.scrollEnabled).toEqual(false);
    });

    it('should handle renderItem', () => {
      // NOTE: We assume this works (handled by RN FlatList)
    });

    it('should handle renderItemSeparator', () => {
      // NOTE: We assume this works (handled by RN FlatList)
    });
  });

  describe('lifecycle methods', () => {
    it('should call methods in componentDidUpdate', () => {
      spies[0] = jest.spyOn(ItemsList.prototype, 'setDidChange');
      spies[1] = jest.spyOn(ItemsList.prototype, 'scrollToEnd');
      const component = renderer.create(<ItemsList data={data} />);

      component.update(<ItemsList data={newData} />);

      expect(spies[0]).toHaveBeenCalledWith(true);
      expect(spies[1]).toHaveBeenCalled();
    });
  });

  // NOTE: We assume the actions are handled correctly

  afterEach(() => {
    spies.forEach((spy) => {
      if (spy) {
        spy.mockClear();
      }
    });
    dispatch.mockClear();
  });
});
