import type {RouteProp} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum Screen {
  HOME = 'HOME',
  SETTING = 'SETTING',
}

export type NavStackParams = {
  [Screen.HOME]: undefined;
  [Screen.SETTING]: undefined;
};

export type SecretWorldNavigationProp =
  NativeStackNavigationProp<NavStackParams>;

export type SettingScreenNavigationProp = RouteProp<
  NavStackParams,
  Screen.SETTING
>;
