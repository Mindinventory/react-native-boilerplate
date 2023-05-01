import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, NetworkloggerScreen } from '@src/screens';

import { NavStackParams, Screen } from './appNavigation.type';

const Stack = createNativeStackNavigator<NavStackParams>();

const screenOptions = {
  headerShown: false,
};

export const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={Screen.HOME} component={Home} />
      {__DEV__ && (
        <Stack.Screen name={Screen.SETTING} component={NetworkloggerScreen} />
      )}
    </Stack.Navigator>
  );
};
