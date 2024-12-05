import React, { useEffect, useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import {
  ActivityIndicator,
  LayoutRectangle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import {
  Image as ExpoImage,
  ImageProps as ExpoImageProps,
  ImageSource as ExpoImageSource,
  ImageStyle,
} from 'expo-image';

import { useColor } from '@src/context';

type ImgPriority = 'low' | 'normal' | 'high' | null;

export interface ImageProps extends Omit<ExpoImageProps, 'source'> {
  containerStyle?: StyleProp<ViewStyle>;
  style?: ImageStyle;
  priority?: ImgPriority;
  uploading?: boolean;
  width?: number;
  height?: number;
  children?: React.ReactNode;
  showIndicator?: boolean;
  indicatorSize?: number;
  source?: string | ExpoImageSource | number;
  loaderColor?: string;
}

export const Image = React.memo((props: ImageProps) => {
  const {
    children,
    containerStyle,
    indicatorSize = 20,
    loaderColor,
    priority,
    showIndicator = true,
    source,
    style = { backgroundColor: 'red', flex: 1 },
    uploading,
    width,
    ...rest
  } = props;
  const { color } = useColor();

  const [loading, setLoading] = useState(false);
  const [layout, setLayout] = useState<LayoutRectangle | null>(null);

  useEffect(() => {
    if (typeof uploading !== 'undefined' && uploading !== loading) {
      setLoading(uploading);
    }
  }, [loading, uploading]);

  const onLayout = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout;
    if (layout && layout.height === height && layout.width === width) {
      return;
    }
    setLayout(e.nativeEvent.layout);
  };

  const shouldShowIndicator =
    showIndicator &&
    typeof source === 'string' &&
    (source.startsWith('http') || source.startsWith('https'));

  let indicator = null;
  if (loading && shouldShowIndicator) {
    indicator = (
      <View style={styles.indicator}>
        <ActivityIndicator
          color={loaderColor ?? color.primaryColor}
          size={indicatorSize}
          animating={loading}
        />
      </View>
    );
  }

  let imageSource: number | ExpoImageSource | undefined = {
    uri: source as string,
  };

  if (typeof source !== 'string') {
    // Local image
    imageSource = source;
  }

  let imageStyle: ImageStyle = style || {};

  if (imageStyle.flex === 1 && layout) {
    imageStyle = { ...style };
    delete imageStyle.flex;
    imageStyle = { ...imageStyle, ...layout };
  }

  return (
    <View style={[styles.container, containerStyle]} onLayout={onLayout}>
      <ExpoImage
        style={imageStyle}
        source={imageSource}
        onLoadStart={() => {
          !loading && setLoading(true);
        }}
        onError={() => {
          loading && setLoading(false);
        }}
        onLoadEnd={() => {
          loading && setLoading(false);
        }}
        priority={priority || 'normal'}
        {...rest}>
        {children}
      </ExpoImage>
      {indicator}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
  indicator: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
