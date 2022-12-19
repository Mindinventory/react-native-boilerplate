import React, { useCallback, useState, useContext } from 'react';
import { Scope, TranslateOptions } from 'i18n-js';
import i18n from './i18n';

interface LocalizationContextProps {
  locale: string;
  handleLocalizationChange: (key: string) => void;
  t: (scope: Scope, options?: TranslateOptions | undefined) => string;
}
const initialState: LocalizationContextProps = {
  locale: i18n.locale,
  handleLocalizationChange: (_: string) => {},
  t: (_scope: Scope, _option?: TranslateOptions | undefined) => '',
};

const LocalizationContext =
  React.createContext<LocalizationContextProps>(initialState);
export const useLocalization = () =>
  useContext<LocalizationContextProps>(LocalizationContext);

interface Props {}

export const LocalizationProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [locale, setLocale] = useState(i18n.locale);
  const { t } = i18n;

  const handleLocalizationChange = useCallback((newLocale?: any) => {
    setLocale(newLocale);
  }, []);

  return (
    <LocalizationContext.Provider
      value={{ locale, t, handleLocalizationChange }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};
