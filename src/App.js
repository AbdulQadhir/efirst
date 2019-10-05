import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import initStore from './store';
import {Platform} from 'react-native';
import RootContainer from './rootContainer';
import Page from './pages/srdetails';
const {store, persistor} = initStore();
import {Sentry, SentrySeverity, SentryLog} from 'react-native-sentry';
const sentryDsn = Platform.select({
  android: 'https://1d19dbd920d1454d848c6e17d358f6b5@sentry.io/1531525',
  ios: 'https://1d19dbd920d1454d848c6e17d358f6b5@sentry.io/1531525',
});
Sentry.config(sentryDsn, {
  logLevel: SentryLog.Debug,
  deactivateStacktraceMerging: false,
}).install();

import OneSignal from 'react-native-onesignal';
OneSignal.init('83811424-4d3d-469e-adf6-f95169abe477', {
  kOSSettingsKeyAutoPrompt: true,
});
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RootContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
