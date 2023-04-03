import React, {useCallback, useMemo, useRef, useState} from 'react';

import {IndicatorRef, IndicatorView} from '@app/blueprints';
import {MMKV} from 'react-native-mmkv';

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

export const storageMmkv = new MMKV();

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

      setLanguageInApp,
      storage,
      styles: defaultStyles(),
    };
  }, [language, setLanguageInApp]);

  return (
    <AppContext.Provider value={context}>
      <AppNavigation />
      <IndicatorView ref={loader} />
    </AppContext.Provider>
  );
};
