import React, {useCallback, useMemo, useRef, useState} from 'react';

import {IndicatorRef, IndicatorView} from '@app/blueprints';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {
  AppContext,
  AppContextType,
  ContentLanguage,
  defaultContent,
  storage,
} from './context';
import {defaultStyles} from './context/styles';
import i18n from './i18n';
import {AppNavigation} from './navigation';
import {appServices} from './services';
import store, {persistor} from './store';

export const MainApp = () => {
  const loader = useRef<IndicatorRef>(null);

  const [language, setLanguage] = useState<ContentLanguage>(
    ContentLanguage.English
  );

  /**
   * For setLanguage change content lang
   * i18n.locale = ContentLanguage.France
   * @return void change app content language.
   */
  const setLanguageInApp = useCallback((lang: ContentLanguage) => {
    i18n.locale = lang;
    setLanguage(lang);
  }, []);

  const context: AppContextType = useMemo(() => {
    return {
      contents: (obj, key) => defaultContent(obj, key),
      language,
      loader,
      services: appServices,
      setLanguageInApp,
      storage,
      styles: defaultStyles(),
    };
  }, [language, setLanguageInApp]);

  return (
    <Provider store={store}>
      <AppContext.Provider value={context}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation />
          <IndicatorView ref={loader} />
        </PersistGate>
      </AppContext.Provider>
    </Provider>
  );
};
