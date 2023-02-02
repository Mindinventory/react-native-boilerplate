import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';

import {useNavigation} from '@react-navigation/native';
import {languageOptions, LanguageOptions} from 'app-constants';
import {useLocalization, useTheme} from 'app-contexts';
import {AppNavigationProp} from 'app-navigation';
import {setItemToStorage} from 'app-utils';

export const useSetting = () => {
  const {palette, setThemeMode, dark} = useTheme();
  const {handleLocalizationChange, locale} = useLocalization();
  const navigation = useNavigation<AppNavigationProp>();
  const [isEnabled, setIsEnabled] = useState(false);
  const [languagesData, setLanguagesData] =
    useState<LanguageOptions[]>(languageOptions);

  const findAndSetSelectedLang = useCallback((langCode: string) => {
    const langIndex = languagesData.findIndex(
      (val: LanguageOptions) => val.langCode === langCode
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
    return cloneLangData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setSelectedLangForData = useCallback(() => {
    const newLangOptions = findAndSetSelectedLang(locale);
    setLanguagesData([...newLangOptions]);
  }, [findAndSetSelectedLang, locale]);

  useEffect(() => {
    setSelectedLangForData();
  }, [setSelectedLangForData]);

  const getThemeModeFromStorage = useMemo(async () => {
    setIsEnabled(dark);
  }, [dark]);

  useLayoutEffect(() => {
    getThemeModeFromStorage;
  }, [getThemeModeFromStorage]);

  const onPressLangBtn = async (langObj: LanguageOptions) => {
    handleLocalizationChange(langObj.langCode);
    await setItemToStorage('selected_language', langObj.langCode);
    const newLangOptions = findAndSetSelectedLang(langObj.langCode);
    setLanguagesData([...newLangOptions]);
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
    isEnabled,
    languagesData,
    onPressGoBack,
    onPressLangBtn,
    palette,
    toggleSwitch,
  };
};
