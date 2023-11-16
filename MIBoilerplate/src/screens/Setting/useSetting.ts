import { useCallback } from 'react';

import { useAppContext } from '@src/context';
import { ContentLanguage } from '@src/i18n';
import { Theme } from '@src/utils';

import { settingStyles } from './Setting.style';

const themes = ['Dark', 'Light', 'Theme1', 'Theme2', 'Theme3'];

const languages = Object.keys(ContentLanguage);

const useSetting = () => {
  const {
    appTheme,
    color,
    language,
    navigation,
    setAppTheme,
    setLanguageInApp,
  } = useAppContext();

  const handleChangeTheme = useCallback(
    (m: string) => () => {
      setAppTheme(m as Theme);
    },
    [setAppTheme]
  );

  const handleChangeLanguage = useCallback(
    (m: string) => () => {
      setLanguageInApp(ContentLanguage[m as keyof typeof ContentLanguage]);
    },
    [setLanguageInApp]
  );

  // add your code here

  return {
    appTheme,
    color,
    handleChangeLanguage,
    handleChangeTheme,
    language,
    languages,
    navigation,
    styles: settingStyles(color),
    themes,
  };
};

export default useSetting;
