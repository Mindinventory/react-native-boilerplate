import { useCallback } from 'react';

import { router } from 'expo-router';

import { useAppContext } from '@src/context';
import { ContentLanguage } from '@src/i18n';
import { Theme } from '@src/utils';

import { settingStyles } from './Setting.style';

const themes = ['Dark', 'Light', 'Theme1', 'Theme2', 'Theme3'];

const languages = Object.keys(ContentLanguage);

const useSetting = () => {
  const { appTheme, color, language, setAppTheme, setLanguageInApp } =
    useAppContext();

  const handleChangeTheme = useCallback(
    (m: string) => () => {
      setAppTheme(m as Theme);
      console.log('Theme changed to: ', m);
    },
    [setAppTheme]
  );

  const handleChangeLanguage = useCallback(
    (m: string) => async () => {
      await setLanguageInApp(
        ContentLanguage[m as keyof typeof ContentLanguage]
      );
    },
    [setLanguageInApp]
  );

  const handleLogin = useCallback(() => {
    router.push('/login');
  }, []);

  return {
    appTheme,
    color,
    handleChangeLanguage,
    handleChangeTheme,
    handleLogin,
    language,
    languages,
    styles: settingStyles(color),
    themes,
  };
};

export default useSetting;
