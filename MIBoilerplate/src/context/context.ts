import { createContext, useContext } from 'react';

import type { ImageProps, IndicatorRef } from '@app/blueprints';

import { Icons } from '@src/assets';
import { AppServices } from '@src/services';
import { Palette, Theme } from '@src/utils';

import type { ContentLanguage, DefaultContentType } from './content';
import { IconProps } from './iconFactory';
import { ImageSource } from './imageFactory';
import type { Storage } from './storage';
import type en from '../i18n/locales/en.json';
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
  contents: <T extends DefaultContentType, Key extends keyof (typeof en)[T]>(
    obj: T,
    key: Key
  ) => string;
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
  loader: React.RefObject<IndicatorRef>;
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
  /**
   * get all App icons from this
   * @example getIcons(Icons.DEBUG_ICONS)
   */
  getIcons: (icon: Icons, props?: IconProps) => JSX.Element;
  /**
   * get all App icons from this
   * @example getImages(Images.PLACEHOLDER_IMAGE)
   */
  getImages: (image: ImageSource, props?: ImageProps) => JSX.Element;
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
