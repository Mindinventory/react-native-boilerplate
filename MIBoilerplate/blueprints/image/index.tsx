import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Falsy,
  LayoutRectangle,
  RecursiveArray,
  RegisteredStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import type {LayoutChangeEvent} from 'react-native';

import FastImage, {
  FastImageProps as FastImageProp,
  ImageStyle,
  Priority,
  Source,
} from 'react-native-fast-image';

export type FastImageProps = Omit<FastImageProp, 'source'>;

export interface ImageProps extends FastImageProps {
  containerStyle?: StyleProp<ViewStyle>;
  style?: ImageStyle;
  priority?: Priority | undefined;
  uploading?: boolean;
  width?: number;
  height?: number;
  children?: React.ReactNode;
  showIndicator?: boolean;
  indicatorSize?: number;
  source?: string | Source | number | undefined;
}

export const Image = React.memo((props: ImageProps) => {
  const {
    containerStyle,
    style,
    source,
    resizeMode,
    priority,
    uploading,
    width,
    children,
    showIndicator = true,
    indicatorSize = 20,
    ...rest
  } = props;

  const [loading, setLoading] = useState(false);

  const [layout, setLayout] = useState<LayoutRectangle | null>(null);

  useEffect(() => {
    if (typeof uploading !== 'undefined' && uploading !== loading) {
      setLoading(uploading);
    }
  }, [loading, uploading]);

  // MARK: - Events

  const onLayout = (e: LayoutChangeEvent) => {
    const {height} = e.nativeEvent.layout;
    if (layout && layout.height === height && layout.width === width) {
      return;
    }
    setLayout(e.nativeEvent.layout);
  };

  // MARK: - UIs

  let indicator = null,
    _hideIndicator =
      !showIndicator ||
      typeof source !== 'string' ||
      (source && !source.startsWith('http') && !source.startsWith('https'));

  if (loading && !_hideIndicator) {
    indicator = (
      <View style={styles.indicator}>
        <ActivityIndicator
          color={'blue'}
          size={indicatorSize || 20}
          animating={loading}
        />
      </View>
    );
  }
  let imageSource: number | Source | undefined = {
    priority: priority || FastImage.priority.normal,
    uri: source as string,
  };
  if (typeof source !== 'string') {
    // Local image
    imageSource = source;
  }
  let _imageStyle:
    | ImageStyle
    | RegisteredStyle<ImageStyle>
    | RecursiveArray<Falsy | ImageStyle | RegisteredStyle<ImageStyle>> =
    style || {};
  if (
    _imageStyle &&
    !Array.isArray(_imageStyle) &&
    _imageStyle.flex === 1 &&
    layout
  ) {
    _imageStyle = {...(style || {})};
    delete _imageStyle.flex;
    _imageStyle = {..._imageStyle, ...layout};
  }

  return (
    <View style={[styles.container, containerStyle || {}]} onLayout={onLayout}>
      <FastImage
        style={[_imageStyle || {}]}
        source={imageSource}
        // defaultSource={
        //   props.defaultSource ? props.defaultSource : Images.PLACEHOLDER
        // }
        resizeMode={resizeMode || FastImage.resizeMode.contain}
        onLoadStart={() => {
          !loading && setLoading(true);
        }}
        onError={() => {
          loading && setLoading(false);
        }}
        onLoadEnd={() => {
          loading && setLoading(false);
        }}
        {...rest}>
        {children}
      </FastImage>
      {indicator}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
  indicator: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
