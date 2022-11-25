import React, {useState, useContext} from 'react';
import {Image, Switch} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, DetailsScreen} from 'app-screens';
import {RouteNames} from './routes';
import {miLogo} from 'app-assets';
import {commonStyles} from 'app-constants';
import {ThemeContext} from 'app-theme';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const {setThemeMode, palette} = useContext(ThemeContext);
  const toggleSwitch = (toggle: boolean) => {
    setThemeMode(toggle);
    setIsEnabled(toggle);
  };

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
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={val => toggleSwitch(val)}
            value={isEnabled}
          />
        ),
        headerTitleAlign: 'center',
        headerTintColor: palette.redPrimary,
        headerStyle: {
          backgroundColor: palette.primary,
        },
      }}>
      <Stack.Screen
        name={RouteNames.HomeScreen}
        component={HomeScreen}
        initialParams={{userId: '001'}}
      />
      <Stack.Screen name={RouteNames.DetailsScreen} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
