import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, DetailsScreen} from 'app-screens';
import {RouteNames} from './Routes';
import {miLogo} from 'app-assets';
import {palette, commonStyles} from 'app-constants';
const Stack = createNativeStackNavigator();

const AppStack = () => {
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
        headerTitleAlign: 'center',
        headerTintColor: palette.redPrimary,
      }}>
      <Stack.Screen name={RouteNames.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={RouteNames.DetailsScreen} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
