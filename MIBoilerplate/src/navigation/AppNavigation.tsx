import React from 'react';

import { NavigationContainerRef } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import {
  ForceUpdateScreen,
  NetworkLoggerScreen,
  NewsDetailScreen,
  NewsListScreen,
} from '@src/screens';
import { isForceUpdate } from '@src/store';

import { NavStackParams, Screen } from './appNavigation.type';

export const navigationRef =
  React.createRef<NavigationContainerRef<NavStackParams>>();

const Stack = createNativeStackNavigator<NavStackParams>();
const ForceUpdateStack = createNativeStackNavigator<NavStackParams>();

const screenOptions: NativeStackNavigationOptions = {
  animation: 'slide_from_right',
  headerShown: false,
};

const ForUpdateStack = () => {
  return (
    <ForceUpdateStack.Navigator
      screenOptions={{ headerShown: false }}
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

export const AppNavigation = () => {
  const isForceUpdateApp = useSelector(isForceUpdate);

  return (
    <>
      {isForceUpdateApp ? (
        <ForUpdateStack />
      ) : (
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name={Screen.NEWS_LIST} component={NewsListScreen} />
          <Stack.Screen
            name={Screen.NEWS_DETAIL}
            component={NewsDetailScreen}
          />
          {__DEV__ && (
            <Stack.Screen
              name={Screen.SETTING}
              component={NetworkLoggerScreen}
            />
          )}
        </Stack.Navigator>
      )}
    </>
  );
};
