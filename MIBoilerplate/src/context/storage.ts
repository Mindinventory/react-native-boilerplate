import { MMKV } from 'react-native-mmkv';

import type { STORAGES_KEY } from '@src/constants';
import { logger } from '@src/utils';

export type dataStoreType = 'string' | 'boolean' | 'number' | 'object';

export const storageMmkv = new MMKV();

export const getData = (key: STORAGES_KEY, type: dataStoreType) => {
  try {
    if (type === 'string') {
      return storageMmkv.getString(key);
    } else if (type === 'number') {
      return storageMmkv.getNumber(key);
    } else if (type === 'boolean') {
      return storageMmkv.getBoolean(key);
    } else {
      const data = storageMmkv.getString(key);
      const parseData = JSON.parse(data as string);
      return parseData;
    }
  } catch (error) {
    logger(error);
  }
};

export const setData = (key: STORAGES_KEY, value: any) => {
  try {
    if (typeof value === 'boolean') {
      storageMmkv.set(key, value);
    } else if (typeof value === 'number') {
      storageMmkv.set(key, value);
    } else {
      const jsonValue = JSON.stringify(value);
      storageMmkv.set(key, jsonValue);
    }
  } catch (error) {
    logger(error);
  }
};

export const getStorageKey = () => {
  const keys = storageMmkv.getAllKeys();
  return keys;
};

export const deleteStorage = (key: STORAGES_KEY) => {
  return storageMmkv.delete(key);
};

export const storage = {
  deleteStorage,
  getData,
  getStorageKey,
  setData,
};

export type Storage = typeof storage;
