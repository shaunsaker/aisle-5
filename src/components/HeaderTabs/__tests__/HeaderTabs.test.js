import React from 'react';
import renderer from 'react-test-renderer';

import HeaderTabs from '..';

describe('HeaderTabs', () => {
  const tabs = [
    {
      text: 'Foo',
    },
    {
      text: 'Bar',
    },
  ];
  const activeTab = tabs[0];
  const handleTabPress = jest.fn();

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(
        <HeaderTabs tabs={tabs} activeTab={activeTab} handleTabPress={handleTabPress} />,
      );

      expect(component).toMatchSnapshot();
    });
  });
});
