import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';

import { Color, scaledSize } from '@src/utils';

import { Text } from '../text';

export interface IndicatorProps {}

export type IndicatorRef = {
  hide: () => void;
  isLoading: boolean;
  show: () => void;
};

export const IndicatorViewRef = (
  _props: IndicatorProps,
  ref: React.Ref<IndicatorRef>
) => {
  const [isLoading, setIsLoading] = useState(false);

  const pressCount = useRef(0);

  const show = useCallback(() => setIsLoading(true), []);

  const hide = useCallback(() => setIsLoading(false), []);

  const handlePressCount = useCallback(() => {
    pressCount.current = pressCount.current + 1;

    if (pressCount.current === 2) {
      setIsLoading(false);
      pressCount.current = 0;
    }
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return {
        hide,
        isLoading,
        show,
      };
    },
    [hide, isLoading, show]
  );

  if (!isLoading) return <></>;

  return (
    <Pressable onPress={handlePressCount} style={styles.container}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator
          size={'large'}
          color={Color.blue}
          style={styles.loaderStyle}
        />
        <Text preset="h2" color={Color.white}>
          Please wait ...
        </Text>
      </View>
    </Pressable>
  );
};

export const IndicatorView = React.forwardRef<IndicatorRef, IndicatorProps>(
  IndicatorViewRef
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  loaderContainer: {
    alignItems: 'center',
    backgroundColor: Color.black,
    borderRadius: scaledSize(15),
    justifyContent: 'center',
    padding: scaledSize(20),
  },
  loaderStyle: {
    padding: scaledSize(15),
  },
});
