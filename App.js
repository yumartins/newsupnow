import React, { useState } from 'react';
import { StatusBar, YellowBox } from 'react-native';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
]);

const fetchFonts = () => Font.loadAsync({
  'SegoeUI': require('./assets/fonts/SegoeUI.ttf'), // eslint-disable-line
  'SegoeUI-SemiBold': require('./assets/fonts/SegoeUI-SemiBold.ttf'), // eslint-disable-line
  'SegoeUI-Bold': require('./assets/fonts/SegoeUI-Bold.ttf'), // eslint-disable-line
});

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (! dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#7D40E7"
      />
      <Routes />
    </>
  );
};

export default App;
