import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {Home, Setting} from 'app-screens';
import {RouteNames} from './navigation.type';
import {bar_ic, miLogo} from 'app-assets';
import {commonStyles} from 'app-constants';
import {useTheme, useLocalization} from 'app-contexts';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const {palette} = useTheme();
  const {t} = useLocalization();

  const screenOptions: NativeStackNavigationOptions = {
    headerLeft: () => (
      <Image
        source={miLogo}
        resizeMode="contain"
        style={commonStyles.headerImg}
      />
    ),

    headerTitleAlign: 'center',
    headerTintColor: palette.redPrimary,
    headerStyle: {
      backgroundColor: palette.primary,
    },
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        options={({navigation}) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate(RouteNames.Setting)}
              style={commonStyles.iconView}>
              <Image
                source={bar_ic}
                resizeMode="contain"
                style={commonStyles.menuIcon}
              />
            </TouchableOpacity>
          ),
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

export default AppStack;
