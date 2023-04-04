import {useAppContext} from '@src/context';

export const useHome = () => {
  const {contents, loader, styles, setLanguageInApp, language, navigation} =
    useAppContext();

  return {
    contents,
    language,
    loader: loader.current,
    navigation,
    setLanguageInApp,
    styles: styles.homeStyle,
  };
};
