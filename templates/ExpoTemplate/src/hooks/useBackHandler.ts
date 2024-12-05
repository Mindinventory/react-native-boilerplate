import { useEffect } from 'react';
import { BackHandler } from 'react-native';

export const useBackHandler = () => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        BackHandler.exitApp();
        return true;
      }
    );

    return () => backHandler.remove();
  }, []);
};
