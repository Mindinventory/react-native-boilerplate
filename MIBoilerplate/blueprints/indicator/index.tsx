import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';

import { useAppContext } from '@src/context';
import { Palette, scaledSize } from '@src/utils';

import { Text } from '../text';

export interface IndicatorProps {
  isLoading: boolean;
}

export type IndicatorRef = {
  hide: () => void;
  isLoading: boolean;
  show: () => void;
};

export const IndicatorViewRef = (
  props: IndicatorProps,
  ref: React.Ref<IndicatorRef>
) => {
  const { isLoading = true } = props;
  const { styles } = useAppContext();
  const [loading, setIsLoading] = useState(isLoading);

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
        isLoading: loading,
        show,
      };
    },
    [hide, loading, show]
  );

  const indicatorStyle = styles.indicatorStyle;

  if (!loading) return <></>;

  return (
    <Pressable onPress={handlePressCount} style={indicatorStyle.container}>
      <View style={indicatorStyle.loaderContainer}>
        <ActivityIndicator
          size={'large'}
          color={indicatorStyle.loaderStyle.color}
          style={indicatorStyle.loaderStyle}
        />
        <Text preset="h2" color={indicatorStyle.text.color}>
          Please wait ...
        </Text>
      </View>
    </Pressable>
  );
};

export const IndicatorView = React.forwardRef<IndicatorRef, IndicatorProps>(
  IndicatorViewRef
);

export const indicatorStyles = ({
  primaryColor,
  textColor,
  backgroundColor,
}: Palette) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      ...StyleSheet.absoluteFillObject,
    },
    loaderContainer: {
      alignItems: 'center',
      backgroundColor: backgroundColor,
      borderRadius: scaledSize(15),
      justifyContent: 'center',
      padding: scaledSize(20),
    },
    loaderStyle: {
      color: primaryColor,
      padding: scaledSize(15),
    },
    text: {
      color: textColor,
    },
  });
