import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import initStore from './store';
import {Platform} from 'react-native';
import RootContainer from './rootContainer';
const {store, persistor} = initStore();
// import {Sentry, SentrySeverity, SentryLog} from 'react-native-sentry';
// const sentryDsn = Platform.select({
//   android: 'https://1d19dbd920d1454d848c6e17d358f6b5@sentry.io/1531525',
//   ios: 'https://1d19dbd920d1454d848c6e17d358f6b5@sentry.io/1531525',
// });
// Sentry.config(sentryDsn, {
//   logLevel: SentryLog.Debug,
//   deactivateStacktraceMerging: false,
// }).install();

import OneSignal from 'react-native-onesignal';
OneSignal.init('c6ea3452-bace-4056-9d63-c2c4f4f58643', {
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
