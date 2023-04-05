import {useMemo} from 'react';

import {useAppContext} from '@src/context';

export const useHome = () => {
  const {contents, loader, styles, setLanguageInApp, language, navigation} =
    useAppContext();

  console.log('loader: ', loader);

  return {
    contents,
    language,
    loader: loader.current,
    navigation,
    setLanguageInApp,
    styles: styles.homeStyle,
  };
};
