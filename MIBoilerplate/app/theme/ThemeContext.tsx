import React, { useEffect, useState, useContext } from 'react';
import { lightTheme, darkTheme } from 'app-constants';
import { getItemFromStorage } from 'app-utils';

type paletteType = typeof lightTheme;

interface ThemeContextType {
  dark: boolean;
  setThemeMode: (isDark: boolean) => void;
  palette: paletteType;
}

const initialState: ThemeContextType = {
  dark: false,
  palette: lightTheme,
  setThemeMode: (_: boolean) => {},
};

const ThemeContext = React.createContext<ThemeContextType>(initialState);
export const useTheme = () => useContext<ThemeContextType>(ThemeContext);

interface Props {}

export const ThemeProvider: React.FC<Props> = (props) => {
  const { children } = props;
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
    <ThemeContext.Provider value={{ palette, dark, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
