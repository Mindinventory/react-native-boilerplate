import React from 'react';

import { NavigationContainerRef } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { ForceUpdateScreen, NetworkLoggerScreen } from '@src/screens';

import { NavStackParams, Screen } from './appNavigation.type';

export const navigationRef =
  React.createRef<NavigationContainerRef<NavStackParams>>();

const ForceUpdateStack = createNativeStackNavigator<NavStackParams>();

const screenOptions: NativeStackNavigationOptions = {
  animation: 'slide_from_right',
  headerShown: false,
};

export const ForUpdateStack = () => {
  return (
    <ForceUpdateStack.Navigator
      screenOptions={{ ...screenOptions, headerShown: false }}
      initialRouteName={Screen.FORCE_UPDATE_SCREEN}>
      <ForceUpdateStack.Screen
        name={Screen.FORCE_UPDATE_SCREEN}
        component={ForceUpdateScreen}
      />
      {__DEV__ && (
        <ForceUpdateStack.Screen
          name={Screen.SETTING}
          component={NetworkLoggerScreen}
        />
      )}
    </ForceUpdateStack.Navigator>
  );
};
