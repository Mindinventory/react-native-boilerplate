import { useCallback } from 'react';

import { NavigationProp, useNavigation } from '@react-navigation/native';

import { useAppContext } from '@src/context';
import { ContentLanguage } from '@src/i18n';
import { Theme } from '@src/utils';

import { settingStyles } from './Setting.style';
import { NavStackParams, Screen } from '../../navigation/appNavigation.type';

const themes = ['Dark', 'Light', 'Theme1', 'Theme2', 'Theme3'];

const languages = Object.keys(ContentLanguage);

const useSetting = () => {
  const { appTheme, color, language, setAppTheme, setLanguageInApp } =
    useAppContext();
  const { navigate } =
    useNavigation<NavigationProp<NavStackParams, Screen.SETTING>>();

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
    navigate(Screen.LOGIN);
  }, [navigate]);

  return {
    appTheme,
    color,
    handleChangeLanguage,
    handleChangeTheme,
    handleLogin,
    language,
    languages,
    navigate,
    styles: settingStyles(color),
    themes,
  };
};

export default useSetting;
