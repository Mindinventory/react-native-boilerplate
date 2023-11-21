import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';

import { StorageKeys } from '@src/constants';
import { color, Palette, Theme } from '@src/utils';

import { storage } from './storage';

export interface AppThemeContextType {
  /**
   * The appTheme variable is used to define the color scheme used for the application. It takes a ColorSchemeName as its value.
   */
  appTheme: Theme;
  /**
   * This function is used to set the theme of the application. It takes a single argument, _theme, which should be of type ColorSchemeName.
   * @example setAppTheme('dark');
   * @param theme ColorSchemeName
   * @returns void
   */
  setAppTheme: (theme: Theme) => void;
  /**
   * Get app palette colors.
   */
  color: Palette;
}

export const AppThemeContext = createContext<AppThemeContextType | undefined>(
  undefined
);

export const useColor = () => {
  const context = useContext(AppThemeContext);
  if (!context) throw Error('useColor must be used inside AppThemeContext');
  return context;
};

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const colorScheme = useColorScheme();

  const [appTheme, setTheme] = useState<Theme>(colorScheme);

  /**
   * For setAppTheme change app theming.
   * setTheme(ColorSchemeName)
   * @return void change app Theme.
   */
  const setAppTheme = useCallback((theme: Theme) => {
    storage.setData(StorageKeys.APP_THEME, theme);
    setTheme(theme);
  }, []);

  const value: AppThemeContextType = useMemo(() => {
    return {
      appTheme,
      color: color[appTheme || 'light'],
      setAppTheme,
    };
  }, [appTheme, setAppTheme]);

  useEffect(() => {
    const theme = storage.getData(StorageKeys.APP_THEME);
    if (theme) {
      setTheme(theme);
    } else {
      setTheme(colorScheme);
    }
  }, [colorScheme, setAppTheme]);

  return (
    <AppThemeContext.Provider value={value}>
      {children}
    </AppThemeContext.Provider>
  );
};
