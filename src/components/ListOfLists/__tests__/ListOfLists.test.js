import React from 'react';
import renderer from 'react-test-renderer';

import ListOfLists from '..';
import ITEM from '../../../mockData/item';

describe('ListOfLists', () => {
  const sections = [
    {
      title: 'Test',
      data: [ITEM],
    },
  ];

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<ListOfLists sections={sections} />);

      expect(component).toMatchSnapshot();
    });
  });
});
