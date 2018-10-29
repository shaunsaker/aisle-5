import React from 'react';
import renderer from 'react-test-renderer';

import { Predictions } from '..';
import USER_LISTS from '../../../../mockData/userLists';
import USER_ITEMS from '../../../../mockData/userItems';
import HEADER_ITEMS from '../../../../components/PredictedItemsList/headerItems';

jest.mock('../../../../components/TabBar', () => 'TabBar');

describe('Predictions', () => {
  const spies = [];
  const dispatch = jest.fn();
  const selectedHeader = HEADER_ITEMS[0];
  const { fieldName } = selectedHeader;

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(
        <Predictions userLists={USER_LISTS} userItems={USER_ITEMS} />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    it('should handle onSortByFieldName', () => {
      spies[0] = jest.spyOn(Predictions.prototype, 'setSortByKey');
      spies[1] = jest.spyOn(Predictions.prototype, 'toggleReverseSort');
      const component = renderer.create(
        <Predictions userLists={USER_LISTS} userItems={USER_ITEMS} />,
      );
      const instance = component.getInstance();

      instance.onSortByFieldName(fieldName);

      expect(spies[0]).toHaveBeenCalledWith(fieldName);

      instance.onSortByFieldName(fieldName);

      expect(spies[1]).toHaveBeenCalled();
    });

    it('should handle setSortByKey', () => {
      const component = renderer.create(
        <Predictions userLists={USER_LISTS} userItems={USER_ITEMS} />,
      );
      const instance = component.getInstance();

      instance.setSortByKey(fieldName);

      expect(instance.state.sortByKey).toEqual(fieldName);
    });

    it('should handle toggleReverseSort', () => {
      const component = renderer.create(
        <Predictions userLists={USER_LISTS} userItems={USER_ITEMS} />,
      );
      const instance = component.getInstance();

      expect(instance.state.reverseSort).toEqual(false); // initial state

      instance.toggleReverseSort();

      expect(instance.state.reverseSort).toEqual(true);
    });
  });

  describe('actions', () => {
    it('should call onSortByFieldName on header item press', () => {
      const component = renderer.create(
        <Predictions userLists={USER_LISTS} userItems={USER_ITEMS} />,
      );
      const { root } = component;
      const targetComponent = root.findByProps({
        testID: `predictions.predictedItemsList.header.button.${selectedHeader.text}`,
      });

      targetComponent.props.onPress();

      expect(spies[0]).toHaveBeenCalledWith(fieldName);
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
