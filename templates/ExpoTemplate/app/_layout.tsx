import React from 'react';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { LocalizationProvider, ThemeProvider } from '../src/context';
import { isForceUpdate } from '../src/store';
import store, { persistor } from '../src/store';
import { loader } from '../src/utils';
import { IndicatorView } from '@app/blueprints';

function AppContent() {
  const isForceUpdateApp = useSelector(isForceUpdate);

  if (isForceUpdateApp) {
    return (
      <Stack>
        <Stack.Screen name="force-update" options={{ headerShown: false }} />
      </Stack>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="news-detail" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins: require('../src/assets/fonts/Poppins.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider>
        <LocalizationProvider>
          <PersistGate loading={null} persistor={persistor}>
            <AppContent />
            <IndicatorView isLoading={false} ref={loader} />
            <StatusBar style="auto" />
          </PersistGate>
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
}
