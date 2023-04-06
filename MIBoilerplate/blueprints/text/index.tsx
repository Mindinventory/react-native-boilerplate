import React from 'react';
import {
  // eslint-disable-next-line no-restricted-imports
  Text as RNText,
  StyleProp,
  StyleSheet,
  TextProps as TextProperties,
  TextStyle,
} from 'react-native';

import { useAppContext } from '@src/context';

import { Palette, scaledSize } from '../../src/utils';

const BASE_TEXT: TextStyle = {
  fontSize: scaledSize(14),
};

export const presets = {
  default: BASE_TEXT,
  h1: {
    ...BASE_TEXT,
    fontSize: scaledSize(48),
    fontWeight: '900',
  } as TextStyle,
  h2: {
    ...BASE_TEXT,
    fontSize: scaledSize(42),
    fontWeight: '700',
  } as TextStyle,
  h3: {
    ...BASE_TEXT,
    fontSize: scaledSize(36),
    fontWeight: '500',
  } as TextStyle,
  h4: {
    ...BASE_TEXT,
    fontSize: scaledSize(30),
    fontWeight: '400',
  } as TextStyle,
  h5: {
    ...BASE_TEXT,
    fontSize: scaledSize(24),
    fontWeight: '400',
  } as TextStyle,
  h6: {
    ...BASE_TEXT,
    fontSize: scaledSize(18),
    fontWeight: '500',
  } as TextStyle,
  small: {
    ...BASE_TEXT,
    fontSize: scaledSize(12),
  } as TextStyle,
  title: {
    ...BASE_TEXT,
    fontSize: scaledSize(26),
    fontWeight: '600',
  } as TextStyle,
};

export type TextPresets = keyof typeof presets;

export interface TextProps extends TextProperties {
  style?: StyleProp<TextStyle>;
  preset?: TextPresets;
  color?: string;
}

export const Text = ({ children, ...props }: TextProps) => {
  const { preset = 'default', style: styleOverride, color, ...rest } = props;

  const { styles } = useAppContext();

  return (
    <RNText
      {...rest}
      style={[
        presets[preset] as TextProps,
        color ? { color } : styles.textStyle.content,
        styleOverride,
      ]}>
      {children}
    </RNText>
  );
};

export const textStyles = ({ black }: Palette) =>
  StyleSheet.create({
    content: {
      color: black,
    },
  });
