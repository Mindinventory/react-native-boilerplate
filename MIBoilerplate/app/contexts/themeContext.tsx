import React, {PropsWithChildren, useContext, useEffect, useState} from 'react';

import {darkTheme, lightTheme} from 'app-constants';
import {getItemFromStorage} from 'app-utils';

export type PaletteType = typeof lightTheme;

interface ThemeContextType {
  dark: boolean;
  setThemeMode: (isDark: boolean) => void;
  palette: PaletteType;
}

const initialState: ThemeContextType = {
  dark: false,
  palette: lightTheme,
  setThemeMode: (_: boolean) => {},
};

const ThemeContext = React.createContext<ThemeContextType>(initialState);
export const useTheme = () => useContext<ThemeContextType>(ThemeContext);

interface Props extends PropsWithChildren {}

export const ThemeProvider: React.FC<Props> = props => {
  const {children} = props;
  const [dark, setDark] = useState(false);

  const setDarkMode = async () => {
    const isDarkMode = await getItemFromStorage('is_dark_mode');
    if (isDarkMode !== null) {
      setDark(isDarkMode === 'true');
    }
  };

  useEffect(() => {
    setDarkMode();
  }, []);

  const setThemeMode = (isDark: boolean) => {
    setDark(isDark);
  };

  const palette = dark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{dark, palette, setThemeMode}}>
      {children}
    </ThemeContext.Provider>
  );
};
