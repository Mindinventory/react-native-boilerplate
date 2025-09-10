import { NewsResult } from '@src/services';

export enum Screen {
  FORCE_UPDATE_SCREEN = 'force-update',
  NETWORK_CHECK = 'network-check',
  NEWS_DETAIL = 'news-detail',
  NEWS_LIST = 'news',
  NEWS_TAB = 'news',
  SETTING_TAB = 'setting',
  SETTING = 'setting',
  LOGIN = 'login',
  SIGNUP = 'signup',
}

export type NewsDetailParams = {
  item: NewsResult;
};

// Expo Router navigation types
export type RootStackParamList = {
  '(tabs)': undefined;
  'news-detail': NewsDetailParams;
  'login': undefined;
  'force-update': undefined;
  '+not-found': undefined;
};

export type TabParamList = {
  news: undefined;
  setting: undefined;
};
