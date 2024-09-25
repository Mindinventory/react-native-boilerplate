import AsyncStorage from '@react-native-async-storage/async-storage';
import { Storage as ReduxStorage } from 'redux-persist';

import type { STORAGES_KEY } from '@src/constants';
import { logger } from '@src/utils';

export type dataStoreType = 'string' | 'boolean' | 'number' | 'object';

export const getData = async (key: STORAGES_KEY, _type?: dataStoreType) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data) {
      const parseData = JSON.parse(data);
      return parseData;
    }
  } catch (error) {
    logger('storage getData', error);
  }
};

export const setData = async (key: STORAGES_KEY, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    logger('storage setData', error);
  }
};

export const getStorageKey = async () => {
  const keys = await AsyncStorage.getAllKeys();
  return keys;
};

export const deleteStorage = async (key: STORAGES_KEY) => {
  return await AsyncStorage.removeItem(key);
};

export const storage = {
  deleteStorage,
  getData,
  getStorageKey,
  setData,
};

export const reduxStorage: ReduxStorage = {
  getItem: async key => {
    const value = await AsyncStorage.getItem(key);
    return Promise.resolve(value);
  },
  removeItem: async key => {
    await AsyncStorage.removeItem(key);
    return Promise.resolve();
  },
  setItem: async (key, value) => {
    await AsyncStorage.setItem(key, value);
    return Promise.resolve(true);
  },
};

export type Storage = typeof storage;
