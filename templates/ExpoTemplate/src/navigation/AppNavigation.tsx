import React from 'react';

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainerRef } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { SVGIcons } from '@src/assets';
import { SvgIcon } from '@src/components';
import { useAppContext } from '@src/context';
import { isForceUpdate } from '@src/store';

import { NavStackParams, Screen } from './appNavigation.type';
import { ForUpdateStack } from './ForceupdateStack';
import { NewsListNavigation } from './NewsListNavigation';
import { SettingNavigation } from './SettingNavigation';

export const navigationRef =
  React.createRef<NavigationContainerRef<NavStackParams>>();

export const AppNavigation = () => {
  const { color } = useAppContext();

  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarStyle: { backgroundColor: color.backgroundColor },
  };

  const isForceUpdateApp = useSelector(isForceUpdate);

  const Tab = createBottomTabNavigator();

  return (
    <>
      {isForceUpdateApp ? (
        <ForUpdateStack />
      ) : (
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name={Screen.NEWS_TAB}
            component={NewsListNavigation}
            options={{
              tabBarActiveTintColor: color.primaryColor,
              tabBarIcon: () => (
                <SvgIcon
                  icon={SVGIcons.NEWS}
                  height={25}
                  width={25}
                  color={color.primaryColor}
                />
              ),
              title: 'News',
            }}
          />
          <Tab.Screen
            name={Screen.SETTING_TAB}
            component={SettingNavigation}
            options={{
              tabBarActiveTintColor: color.primaryColor,
              tabBarIcon: () => (
                <SvgIcon
                  icon={SVGIcons.SETTING}
                  height={25}
                  width={25}
                  color={color.primaryColor}
                />
              ),
              title: 'Setting',
            }}
          />
        </Tab.Navigator>
      )}
    </>
  );
};
