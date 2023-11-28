import { createRef } from 'react';

import NetInfo from '@react-native-community/netinfo';

import { scaledSize } from './dimensions';
import { IndicatorRef } from '../../blueprints/Indicator/Indicator';

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

export function boxShadow(
  color: string,
  offset = { height: 2, width: 2 },
  radius = 8,
  opacity = 0.2
) {
  return {
    elevation: radius,
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
  };
}

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve as () => void, ms));
}

export const loader = createRef<IndicatorRef>();
