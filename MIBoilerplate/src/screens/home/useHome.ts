import {useAppContext} from '@src/context';

export const useHome = () => {
  const {contents, loader, styles, setLanguageInApp, language} =
    useAppContext();

  return {
    contents,
    language,
    loader: loader.current,
    setLanguageInApp,
    styles: styles.homeStyle,
  };
};
