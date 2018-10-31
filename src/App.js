import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import codepush from 'react-native-code-push';

import { store, persistor } from './store';
import Routes from './Routes';

import ErrorHandler from './handlers/ErrorHandler';
import SystemMessageHandler from './handlers/SystemMessageHandler';
import AuthHandler from './handlers/AuthHandler';
import DatabaseHandler from './handlers/DatabaseHandler';
import DeviceInfoHandler from './handlers/DeviceInfoHandler';
import NetworkHandler from './handlers/NetworkHandler';
import CodePushHandler from './handlers/CodePushHandler';
import AndroidBackHandler from './handlers/AndroidBackHandler';

import PageLoader from './components/PageLoader';

// Helper to clear local storage during development
// if (__DEV__) {
//   persistor.purge();
// }

// Disable remote debugger warnings
console.ignoredYellowBox = ['Remote debugger', 'Warning: isMounted(...) is deprecated'];

export function App() {
  return (
    <Provider store={store}>
      <ErrorHandler>
        <PersistGate loading={<PageLoader />} persistor={persistor}>
          <SystemMessageHandler>
            <CodePushHandler />
            <AuthHandler />
            <DatabaseHandler />
            <DeviceInfoHandler />
            <NetworkHandler />
            <Routes />
            <AndroidBackHandler />
          </SystemMessageHandler>
        </PersistGate>
      </ErrorHandler>
    </Provider>
  );
}

export default codepush(App);
