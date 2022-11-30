import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'app-theme';
import AppStack from './appStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AppStack />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default Navigation;
