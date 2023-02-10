import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {getItemFromStorage, i18n} from 'app-utils';

interface LocalizationContextProps {
  locale: string;
  handleLocalizationChange: (key: string) => void;
  t: (key: string) => string;
}
const initialState: LocalizationContextProps = {
  handleLocalizationChange: (_: string) => {},
  locale: i18n.locale,
  t: (_key: string) => '',
};

const LocalizationContext =
  React.createContext<LocalizationContextProps>(initialState);
export const useLocalization = () =>
  useContext<LocalizationContextProps>(LocalizationContext);

interface Props extends PropsWithChildren {}

export const LocalizationProvider: React.FC<Props> = props => {
  const {children} = props;
  const [locale, setLocale] = useState(i18n.locale);

  const setSelectedLang = async () => {
    const selectedLang = await getItemFromStorage('selected_language');
    if (selectedLang !== null && selectedLang !== undefined) {
      i18n.locale = selectedLang;
      i18n.defaultLocale = selectedLang;
      setLocale(i18n.locale);
    }
  };

  useEffect(() => {
    setSelectedLang();
  }, []);

  const handleLocalizationChange = useCallback((newLocale: string) => {
    i18n.locale = newLocale;
    i18n.defaultLocale = newLocale;
    setLocale(i18n.locale);
  }, []);

  const t = (key: string) => {
    return i18n.t(key);
  };

  return (
    <LocalizationContext.Provider value={{handleLocalizationChange, locale, t}}>
      {children}
    </LocalizationContext.Provider>
  );
};
