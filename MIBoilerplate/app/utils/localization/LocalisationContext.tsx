import React, { useCallback, useMemo, useState, useContext } from 'react';
import i18n from './i18n';

interface LocalizationContextProps {
  // t: (key: string, options?: any) => string;
  locale: string;
  handleLocalizationChange: (key: string) => void;
  // i18n: {};
  //   shareLinkUrl: string | undefined;
  //   setShareLinkUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
}

// @ts-ignore
const LocalizationContext = React.createContext<LocalizationContextProps>();
export const useLocalization = () =>
  useContext<LocalizationContextProps>(LocalizationContext);

interface Props {}

export const LocalizationProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [locale, setLocale] = useState(i18n.locale);

  const handleLocalizationChange = useCallback((newLocale?: any) => {
    // const newSetLocale = setI18nConfig(newLocale);
    setLocale(newLocale);
  }, []);

  const localizationContext = useMemo(
    () => ({
      // t: (scope, options) => t(scope, { locale, ...options }),
      locale,
      handleLocalizationChange,
      // i18n,
    }),
    [handleLocalizationChange, locale]
  );

  return (
    <LocalizationContext.Provider value={localizationContext}>
      {children}
    </LocalizationContext.Provider>
  );
};
