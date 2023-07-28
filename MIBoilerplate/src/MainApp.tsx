import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useColorScheme } from 'react-native';

import { IndicatorRef, IndicatorView } from '@app/blueprints';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { StorageKeys } from './constants';
import {
  AppContext,
  AppContextType,
  ContentLanguage,
  storage,
} from './context';
import i18n from './i18n';
import { AppNavigation, navigationRef } from './navigation/AppNavigation';
import { ErrorBoundary } from './screens/ErrorBoundary/ErrorBoundary';
import { appServices } from './services';
import store, { persistor } from './store';
import { color, Theme } from './utils';

export const MainApp = () => {
  const loader = useRef<IndicatorRef>(null);

  const colorScheme = useColorScheme();

  const [appTheme, setTheme] = useState<Theme>(colorScheme);
  const [language, setLanguage] = useState<ContentLanguage>(
    ContentLanguage.English
  );

  /**
   * For setLanguage change content lang
   * i18n.locale = ContentLanguage.France
   * @return void change app content language.
   */
  const setLanguageInApp = useCallback((lang: ContentLanguage) => {
    loader.current?.show();
    i18n.locale = lang;
    setLanguage(lang);
    loader.current?.hide();
  }, []);

  /**
   * For setAppTheme change app theming.
   * setTheme(ColorSchemeName)
   * @return void change app Theme.
   */
  const setAppTheme = useCallback((_theme: Theme) => {
    loader.current?.show();
    storage.setData(StorageKeys.APP_THEME, _theme);
    setTheme(_theme);
    loader.current?.hide();
  }, []);

  const context: AppContextType = useMemo(() => {
    return {
      appTheme,
      color: color[appTheme || 'light'],
      language,
      loader: loader.current,
      services: appServices,
      setAppTheme,
      setLanguageInApp,
      storage,
    };
  }, [appTheme, language, setAppTheme, setLanguageInApp]);

  return (
    <Provider store={store}>
      <AppContext.Provider value={context}>
        <NavigationContainer ref={navigationRef}>
          <ErrorBoundary catchErrors={'always'}>
            {/**
             * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
             * and saved to redux.
             * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
             * for example `loading={<SplashScreen />}`.
             * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
             */}
            <PersistGate loading={null} persistor={persistor}>
              <AppNavigation />
              <IndicatorView isLoading={false} ref={loader} />
            </PersistGate>
          </ErrorBoundary>
        </NavigationContainer>
      </AppContext.Provider>
    </Provider>
  );
};
