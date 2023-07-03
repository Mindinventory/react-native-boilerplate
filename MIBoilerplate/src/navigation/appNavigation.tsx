import React from 'react';

import { NavigationContainerRef } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {
  NetworkLoggerScreen,
  NewsDetailScreen,
  NewsListScreen,
} from '@src/screens';

import { NavStackParams, Screen } from './appNavigation.type';

export const navigationRef =
  React.createRef<NavigationContainerRef<NavStackParams>>();

const Stack = createNativeStackNavigator<NavStackParams>();

const screenOptions: NativeStackNavigationOptions = {
  animation: 'slide_from_right',
  headerShown: false,
};

export const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={Screen.NEWS_LIST} component={NewsListScreen} />
      <Stack.Screen name={Screen.NEWS_DETAIL} component={NewsDetailScreen} />
      {__DEV__ && (
        <Stack.Screen name={Screen.SETTING} component={NetworkLoggerScreen} />
      )}
    </Stack.Navigator>
  );
};
