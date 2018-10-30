import React from 'react';
import renderer from 'react-test-renderer';

import { List } from '..';
import USER_LISTS from '../../../../mockData/userLists';
import USER_ITEMS from '../../../../mockData/userItems';
import TABS from '../tabs';

describe('List', () => {
  const spies = [];
  const dispatch = jest.fn();
  const selectedTab = TABS[0];

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<List userLists={USER_LISTS} userItems={USER_ITEMS} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    it('should handle onTabPress', () => {
      spies[0] = jest.spyOn(List.prototype, 'setActiveTab');
      const component = renderer.create(<List userLists={USER_LISTS} userItems={USER_ITEMS} />);
      const instance = component.getInstance();

      instance.onTabPress(selectedTab);

      expect(spies[0]).toHaveBeenCalledWith(selectedTab);
    });

    it('should handle setActiveTab', () => {
      const component = renderer.create(<List userLists={USER_LISTS} userItems={USER_ITEMS} />);
      const instance = component.getInstance();

      instance.setActiveTab(selectedTab);

      expect(instance.state.activeTab).toEqual(selectedTab);
    });
  });

  describe('actions', () => {
    it('should call onTabPress on tab button press', () => {
      spies[0] = jest.spyOn(List.prototype, 'onTabPress');
      const component = renderer.create(<List userLists={USER_LISTS} userItems={USER_ITEMS} />);
      const { root } = component;
      const targetComponent = root.findByProps({
        testID: `lists.headerTabs.button.${selectedTab.text}`,
      });

      targetComponent.props.onPress();

      expect(spies[0]).toHaveBeenCalledWith(selectedTab);
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
