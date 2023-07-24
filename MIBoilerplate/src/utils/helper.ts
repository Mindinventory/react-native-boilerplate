import NetInfo from '@react-native-community/netinfo';

import { scaledSize } from './dimensions';

export const isNetworkConnected = async () => {
  const state = await NetInfo.refresh();
  return state.isConnected || false;
};

export function isEmpty(obj: object) {
  return Object.keys(obj).length === 0;
}

export const logger = (...args: any) => {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.log(...args);
  }
};

export const scaled = (value: number) => {
  return {
    height: scaledSize(value),
    width: scaledSize(value),
  };
};
