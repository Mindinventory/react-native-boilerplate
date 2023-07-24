import { createContext, useContext } from 'react';

import type { IndicatorRef } from '@app/blueprints';
import { TranslateOptions } from 'i18n-js';

import { AppServices } from '@src/services';
import { Palette, Theme } from '@src/utils';

import type { ContentLanguage, TxKeyPath } from './content';
import type { Storage } from './storage';
import type { AppNavigationProp } from '../navigation/appNavigation.type';
import {
  useWithNavigation,
  WithNavigation,
} from '../navigation/withNavigation';

export type AppContextType = {
  /**
   * The appTheme variable is used to define the color scheme used for the application. It takes a ColorSchemeName as its value.
   */
  appTheme: Theme;
  /**
   * get language content for app.
   * @example contents('common', 'home')
   * @returns `String` app language content.
   * @constructor
   */
  contents: (key: TxKeyPath, options?: TranslateOptions) => string;
  /**
   * This variable is of type ContentLanguage and is used to store the language of content.
   * language = "English";
   */
  language: ContentLanguage;
  /**
   * to show loading indicator in app on API call or any process.
   * @example to show loader `loader.current.show()`.
   * @example to hide loader `loader.current.hide()`.
   * @example to get loader state is loading or not `loader.current.isLoading`.
   */
  loader: IndicatorRef | null;
  /**
   * This function is used to set the theme of the application. It takes a single argument, _theme, which should be of type ColorSchemeName.
   * @example setAppTheme('dark');
   * @param _theme ColorSchemeName
   * @returns void
   */
  setAppTheme: (_theme: Theme) => void;
  /**
   * For setLanguage change content lang
   * @example i18n.locale = ContentLanguage.France
   * @return void change app content language.
   */
  setLanguageInApp: (lang: ContentLanguage) => void;
  /**
   *Storage is a type that is used to store data. It can be used to store strings, numbers, objects, etc. It is typically used to store information that needs to be accessed quickly and efficiently.
   */
  storage: Storage;
  /**
   * AppServices is a service that provides an interface for applications to interact with a database.
   */
  services: AppServices;
  /**
   * Get app palette colors.
   */
  color: Palette;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContextOnly = () => {
  const context = useContext(AppContext);
  if (!context) throw Error('useAppContextOnly must be used inside AppContext');
  return context;
};

export const useAppContext = (): WithNavigation<
  AppNavigationProp,
  AppContextType
> => {
  return useWithNavigation<AppNavigationProp, AppContextType>(
    useAppContextOnly()
  );
};
