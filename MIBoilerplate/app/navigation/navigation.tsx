import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './appStack';
import {ThemeProvider} from 'app-theme';

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
