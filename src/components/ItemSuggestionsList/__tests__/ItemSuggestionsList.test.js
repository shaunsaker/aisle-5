import React from 'react';
import renderer from 'react-test-renderer';

import ItemSuggestionsList from '..';
import USER_ITEM from '../../../mockData/userItem';

// Fixes _bezier is not a function bug
jest.useFakeTimers();

describe('ItemSuggestionsList', () => {
  const spies = [];
  const dispatch = jest.fn();
  const data = [USER_ITEM];

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<ItemSuggestionsList data={data} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    it('should handle renderItem', () => {
      // NOTE: We assume this works and is handled by RN FlatList
    });
  });

  describe('actions', () => {
    // NOTE: We assume simple prop actions work here
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
