import React, {memo} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {bar_ic, miLogo} from 'app-assets';
import {commonStyles} from 'app-constants';
import {useLocalization, useTheme} from 'app-contexts';
import {Home, Setting} from 'app-screens';

import {AppNavigationProp, RouteNames} from './navigation.type';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const {palette} = useTheme();
  const {t} = useLocalization();

  const screenOptions: NativeStackNavigationOptions = {
    headerLeft: () => <HeaderLeft />,

    headerStyle: {
      backgroundColor: palette.primary,
    },
    headerTintColor: palette.redPrimary,
    headerTitleAlign: 'center',
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        options={({navigation}) => ({
          headerRight: () => <HeaderRight navigation={navigation} />,
          title: `${t('home')}`,
        })}
        name={RouteNames.Home}
        component={Home}
      />
      <Stack.Screen
        options={{
          title: `${t('setting')}`,
        }}
        name={RouteNames.Setting}
        component={Setting}
      />
    </Stack.Navigator>
  );
};

const HeaderLeft = memo(() => {
  return (
    <Image
      source={miLogo}
      resizeMode="contain"
      style={commonStyles.headerImg}
    />
  );
});

const HeaderRight = memo(({navigation}: {navigation: AppNavigationProp}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(RouteNames.Setting)}
      style={commonStyles.iconView}>
      <Image
        source={bar_ic}
        resizeMode="contain"
        style={commonStyles.menuIcon}
      />
    </TouchableOpacity>
  );
});

export default AppStack;
