import React from 'react';
import renderer from 'react-test-renderer';

import { NetworkActivityIndicator } from '..';

describe('NetworkActivityIndicator', () => {
  const spies = [];
  const network = {
    online: {
      type: 'wifi',
    },
    offline: {
      type: 'none',
    },
  };
  const pendingTransactions = {
    empty: [],
    notEmpty: [{}],
  };

  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(
        <NetworkActivityIndicator
          network={network.online}
          pendingTransactions={pendingTransactions.empty}
        />,
      );

      expect(component).toMatchSnapshot();
    });

    it('renders the offline state', () => {
      const component = renderer.create(
        <NetworkActivityIndicator
          network={network.offline}
          pendingTransactions={pendingTransactions.empty}
        />,
      );

      expect(component).toMatchSnapshot();
    });

    it('renders the loading state', () => {
      const component = renderer.create(
        <NetworkActivityIndicator
          network={network.online}
          pendingTransactions={pendingTransactions.notEmpty}
        />,
      );

      expect(component).toMatchSnapshot();
    });
  });

  afterEach(() => {
    spies.forEach((spy) => {
      if (spy) {
        spy.mockClear();
      }
    });
  });
});
