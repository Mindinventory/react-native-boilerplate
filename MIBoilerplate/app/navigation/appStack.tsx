import React, { useState, useContext, useLayoutEffect, useMemo } from 'react';
import { Image, Switch } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, DetailsScreen } from 'app-screens';
import { RouteNames } from './routes';
import { miLogo } from 'app-assets';
import { commonStyles } from 'app-constants';
import { ThemeContext } from 'app-theme';
import { setItemToStorage } from 'app-utils';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const { setThemeMode, palette, dark } = useContext(ThemeContext);
  const toggleSwitch = async (toggle: boolean) => {
    setThemeMode(toggle);
    setIsEnabled(toggle);
    await setItemToStorage('is_dark_mode', JSON.stringify(toggle));
  };

  const getThemeModeFromStorage = useMemo(async () => {
    setIsEnabled(dark);
  }, [dark]);

  useLayoutEffect(() => {
    getThemeModeFromStorage;
  }, [getThemeModeFromStorage]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <Image
            source={miLogo}
            resizeMode="contain"
            style={commonStyles.headerImg}
          />
        ),
        headerRight: () => (
          <Switch
            trackColor={{
              false: palette.grayChateau,
              true: palette.whiteEDDFF6,
            }}
            thumbColor={isEnabled ? palette.redPrimary : palette.whiteF5FCFF}
            onValueChange={(val) => toggleSwitch(val)}
            value={isEnabled}
          />
        ),
        headerTitleAlign: 'center',
        headerTintColor: palette.redPrimary,
        headerStyle: {
          backgroundColor: palette.primary,
        },
      }}
    >
      <Stack.Screen
        name={RouteNames.HomeScreen}
        component={HomeScreen}
        initialParams={{ userId: '001' }}
      />
      <Stack.Screen name={RouteNames.DetailsScreen} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
