import React from 'react';

import {
  NavigationContainer,
  type NavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, SettingsScreen } from '@src/screens';

import { NavStackParams, Screen } from './appNavigation.type';

export const navigationRef =
  React.createRef<NavigationContainerRef<NavStackParams>>();

const Stack = createNativeStackNavigator<NavStackParams>();

const screenOptions = {
  headerShown: false,
};

export const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={Screen.HOME} component={Home} />
        <Stack.Screen name={Screen.SETTING} component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
