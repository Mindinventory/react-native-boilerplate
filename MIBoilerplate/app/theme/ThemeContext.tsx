import React, {useEffect, useState} from 'react';
import {lightTheme, darkTheme} from 'app-constants';
// import AsyncStorage from "@react-native-async-storage/async-storage"
// import { palette as theme, darkPalette, paletteType } from "./palette"

const initialState = {
  dark: false,
  palette: lightTheme,
  setThemeMode: (isDark: boolean) => {},
};

const ThemeContext = React.createContext(initialState);

interface Props {}

const ThemeProvider: React.FC<Props> = props => {
  const {children} = props;
  const [dark, setDark] = useState(false);

  //   const setDarkMode = async () => {
  //     const isDarkMode = await AsyncStorage.getItem("is_dark_mode")
  //     setDark(isDarkMode === "true")
  //   }

  //   useEffect(() => {
  //     setDarkMode()
  //   }, [])

  const setThemeMode = (isDark: boolean) => {
    setDark(isDark);
  };

  const palette = dark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{palette, dark, setThemeMode}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeProvider, ThemeContext};
