import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const RouteNames = {
  Home: 'Home',
  Setting: 'Setting',
} as const;

export type RootStackParams = {
  [RouteNames.Home]: undefined;
  [RouteNames.Setting]: undefined;
};

export type AppNavigationProp = NativeStackNavigationProp<RootStackParams>;
