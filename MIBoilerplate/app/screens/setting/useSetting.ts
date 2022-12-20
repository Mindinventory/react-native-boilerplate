import { useNavigation } from '@react-navigation/native';
import { languageOptions, LanguageOptions } from 'app-constants';
import { useTheme } from 'app-theme';
import { setItemToStorage, useLocalization } from 'app-utils';
import { useLayoutEffect, useMemo, useState } from 'react';
import { SettingNavigationProps } from './setting';

export const useSetting = () => {
  const { palette, setThemeMode, dark } = useTheme();
  const { handleLocalizationChange } = useLocalization();
  const navigation = useNavigation<SettingNavigationProps>();
  const [isEnabled, setIsEnabled] = useState(false);
  const [languagesData, setLanguagesData] =
    useState<LanguageOptions[]>(languageOptions);

  const getThemeModeFromStorage = useMemo(async () => {
    setIsEnabled(dark);
  }, [dark]);

  useLayoutEffect(() => {
    getThemeModeFromStorage;
  }, [getThemeModeFromStorage]);

  const onPressLangBtn = (langObj: LanguageOptions) => {
    handleLocalizationChange(langObj.langCode);
    const langIndex = languagesData.findIndex(
      (val: LanguageOptions) =>
        val.title === langObj.title && val.langCode === langObj.langCode
    );
    const cloneLangData = languagesData.filter(
      (item: LanguageOptions, index: number) => {
        if (index === langIndex) {
          item.isSelected = true;
        } else {
          item.isSelected = false;
        }
        return item;
      }
    );
    setLanguagesData([...cloneLangData]);
  };

  const toggleSwitch = async (toggle: boolean) => {
    setThemeMode(toggle);
    setIsEnabled(toggle);
    await setItemToStorage('is_dark_mode', JSON.stringify(toggle));
  };

  const onPressGoBack = () => {
    navigation.goBack();
  };

  return {
    onPressGoBack,
    toggleSwitch,
    palette,
    isEnabled,
    languagesData,
    onPressLangBtn,
  };
};
