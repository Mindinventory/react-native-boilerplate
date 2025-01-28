import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {
  LoginScreen,
  NetworkLoggerScreen,
  NewsDetailScreen,
  NewsListScreen,
  SettingScreen,
} from '@src/screens';

import { NavStackParams, Screen } from './appNavigation.type';

const Stack = createNativeStackNavigator<NavStackParams>();

const screenOptions: NativeStackNavigationOptions = {
  animation: 'slide_from_right',
  headerShown: false,
};

export const SettingNavigation = () => {
  return (
    <>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={Screen.SETTING} component={SettingScreen} />
        <Stack.Screen name={Screen.LOGIN} component={LoginScreen} />
      </Stack.Navigator>
    </>
  );
};
