import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItemFromStorage = async (key: string) => {
  try {
    const getItem = await AsyncStorage.getItem(key);
    return getItem;
  } catch (error) {
    console.error('getItemFromStorage Err >>> ', error);
    Promise.reject(error);
  }
};

export const setItemToStorage = async (key: string, value: string) => {
  try {
    const setItem = await AsyncStorage.setItem(key, value);
    return setItem;
  } catch (error) {
    console.error('setItemToStorage Err >>> ', error);
    Promise.reject(error);
  }
};

export const clearStorage = async () => {
  try {
    const clearStorageRes = await AsyncStorage.clear();
    return clearStorageRes;
  } catch (error) {
    console.error('clearStorage Err >>> ', error);
    Promise.reject(error);
  }
};
