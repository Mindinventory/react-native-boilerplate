import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  NetworkloggerScreen,
  NewsdetailScreen,
  NewslistScreen,
} from '@src/screens';

import { NavStackParams, Screen } from './appNavigation.type';

const Stack = createNativeStackNavigator<NavStackParams>();

const screenOptions = {
  headerShown: false,
};

export const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={Screen.NEWS_LIST} component={NewslistScreen} />
      <Stack.Screen name={Screen.NEWS_DETAIL} component={NewsdetailScreen} />
      {__DEV__ && (
        <Stack.Screen name={Screen.SETTING} component={NetworkloggerScreen} />
      )}
    </Stack.Navigator>
  );
};
