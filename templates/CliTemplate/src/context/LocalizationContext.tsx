import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { StorageKeys } from '@src/constants';
import i18n, { ContentLanguage } from '@src/i18n';

import { storage } from './storage';

export type LocalizationAppContextType = {
  /**
   * This variable is of type ContentLanguage and is used to store the language of content.
   * language = "English";
   */
  language: ContentLanguage;
  /**
   * For setLanguage change content lang
   * @example i18n.locale = ContentLanguage.France
   * @return void change app content language.
   */
  setLanguageInApp: (lang: ContentLanguage) => void;
};

export const LocalizationAppContext = createContext<
  LocalizationAppContextType | undefined
>(undefined);

export const useLanguage = () => {
  const context = useContext(LocalizationAppContext);
  if (!context)
    throw Error('useLanguage must be used inside LocalizationAppContext');
  return context;
};

export const LocalizationProvider = ({ children }: React.PropsWithChildren) => {
  const [language, setLanguage] = useState<ContentLanguage>(
    ContentLanguage.English
  );

  /**
   * For setLanguage change content lang
   * i18n.locale = ContentLanguage.France
   * @return void change app content language.
   */
  const setLanguageInApp = useCallback((lang: ContentLanguage) => {
    storage.setData(StorageKeys.APP_LANGUAGE, lang);
    i18n.locale = lang;
    setLanguage(lang);
  }, []);

  const value: LocalizationAppContextType = useMemo(() => {
    return {
      language,
      setLanguageInApp,
    };
  }, [language, setLanguageInApp]);

  useEffect(() => {
    const appLanguage = storage.getData(StorageKeys.APP_LANGUAGE);
    if (appLanguage) {
      setLanguageInApp(appLanguage);
    }
  }, [setLanguageInApp]);

  return (
    <LocalizationAppContext.Provider value={value}>
      {children}
    </LocalizationAppContext.Provider>
  );
};
