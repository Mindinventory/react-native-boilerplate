import Config from 'react-native-config';

export type ConfigTypes = {
  ENV: string;
  API_URL: string;
  API_KEY: string;
};

export const AppConfig = Config as ConfigTypes;
