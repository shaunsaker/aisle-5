import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import HeaderBar from '..';

jest.mock('../../NetworkActivityIndicator', () => 'NetworkActivityIndicator');

describe('HeaderBar', () => {
  const children = <View />;
  const style = { backgroundColor: 'red' };

  describe('renders', () => {
    it('renders', () => {
      const component = renderer.create(<HeaderBar style={style}>{children}</HeaderBar>);

      expect(component).toMatchSnapshot();
    });
  });
});
