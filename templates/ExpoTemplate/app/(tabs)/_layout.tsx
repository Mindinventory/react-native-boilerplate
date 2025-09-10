import React from 'react';
import { Tabs } from 'expo-router';

import { SVGIcons } from '@src/assets';
import { SvgIcon } from '@src/components';
import { useAppContext } from '@src/context';

export default function TabLayout() {
  const { color } = useAppContext();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: color.backgroundColor },
        tabBarActiveTintColor: color.primaryColor,
      }}
    >
      <Tabs.Screen
        name="news"
        options={{
          title: 'News',
          tabBarIcon: () => (
            <SvgIcon
              icon={SVGIcons.NEWS}
              height={25}
              width={25}
              color={color.primaryColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Setting',
          tabBarIcon: () => (
            <SvgIcon
              icon={SVGIcons.SETTING}
              height={25}
              width={25}
              color={color.primaryColor}
            />
          ),
        }}
      />
    </Tabs>
  );
}
