import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NewsResult } from '@src/services';

export enum Screen {
  FORCE_UPDATE_SCREEN = 'FORCE_UPDATE_SCREEN',
  NETWORK_CHECK = 'NETWORK_CHECK',
  NEWS_DETAIL = 'NEWS_DETAIL',
  NEWS_LIST = 'NEWS_LIST',
  SETTING = 'SETTING',
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
}

export type NavStackParams = {
  [Screen.FORCE_UPDATE_SCREEN]: undefined;
  [Screen.NETWORK_CHECK]: undefined;
  [Screen.NEWS_DETAIL]: NewsDetailParams;
  [Screen.NEWS_LIST]: undefined;
  [Screen.SETTING]: undefined;
  [Screen.LOGIN]: undefined;
  [Screen.SIGNUP]: undefined;
};

export type NewsDetailParams = {
  item: NewsResult;
};

export type AppNavigationProp = NativeStackNavigationProp<NavStackParams>;

export type NewsDetailRoute = RouteProp<NavStackParams, Screen.NEWS_DETAIL>;
