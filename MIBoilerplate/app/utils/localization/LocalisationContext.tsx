import React, { useCallback, useState, useContext } from 'react';
import i18n from './i18n';

interface LocalizationContextProps {
  locale: string;
  handleLocalizationChange: (key: string) => void;
  t: (key: string) => string;
}
const initialState: LocalizationContextProps = {
  locale: i18n.locale,
  handleLocalizationChange: (_: string) => {},
  t: (_key: string) => '',
};

const LocalizationContext =
  React.createContext<LocalizationContextProps>(initialState);
export const useLocalization = () =>
  useContext<LocalizationContextProps>(LocalizationContext);

interface Props {}

export const LocalizationProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [locale, setLocale] = useState(i18n.locale);

  const handleLocalizationChange = useCallback((newLocale: string) => {
    i18n.locale = newLocale;
    i18n.defaultLocale = newLocale;
    setLocale(i18n.locale);
  }, []);

  const t = (key: string) => {
    return i18n.t(key);
  };

  return (
    <LocalizationContext.Provider
      value={{ locale, t, handleLocalizationChange }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};
