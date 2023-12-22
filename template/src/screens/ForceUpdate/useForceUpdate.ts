import { useCallback } from 'react';
import { Linking } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import { AppConfig, isIOS } from '@src/constants';
import { useAppContext } from '@src/context';
import { logger } from '@src/utils';

import { forceUpdateStyles } from './ForceUpdate.style';

const useForceUpdate = () => {
  const { color, ...props } = useAppContext();

  const styles = forceUpdateStyles(color);

  const onUpdatePress = useCallback(() => {
    try {
      const URLToOpen = isIOS
        ? AppConfig.APP_STORE_URL
        : AppConfig.PLAY_STORE_URL;
      Linking.canOpenURL(URLToOpen)
        .then(res => {
          res && Linking.openURL(URLToOpen);
        })
        .catch(error => {
          logger(`Error:: ${error}`);
        });
    } catch (error) {
      logger(`Error:: ${error}`);
    }
  }, []);

  const onRetryPress = useCallback(() => {}, []);

  useFocusEffect(
    useCallback(() => {
      onRetryPress();
    }, [onRetryPress])
  );

  return {
    onRetryPress,
    onUpdatePress,
    styles,
    ...props,
  };
};

export default useForceUpdate;
