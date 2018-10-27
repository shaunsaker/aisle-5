import React from 'react';
import renderer from 'react-test-renderer';

import Item from '..';
import ITEM from '../../../../mockData/item';

describe('Item', () => {
  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<Item {...ITEM} />);

      expect(component).toMatchSnapshot();
    });

    it('renders the note checked state', () => {
      const component = renderer.create(<Item {...ITEM} isChecked={false} />);

      expect(component).toMatchSnapshot();
    });
  });
});
