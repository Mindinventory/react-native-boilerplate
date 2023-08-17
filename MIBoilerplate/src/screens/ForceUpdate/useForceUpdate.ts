import { useCallback } from 'react';
import { Linking } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import { AppConfig, isIOS } from '@src/constants';
import { useAppContext } from '@src/context';

import { forceUpdateStyles } from './ForceUpdate.style';

const useForceUpdate = () => {
  const { color, ...props } = useAppContext();

  const styles = forceUpdateStyles(color);

  const onUpdatePress = useCallback(() => {
    Linking.openURL(isIOS ? AppConfig.APP_STORE_URL : AppConfig.PLAY_STORE_URL);
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
