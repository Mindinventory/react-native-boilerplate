import React from 'react';
import {
  // eslint-disable-next-line no-restricted-imports
  Text as RNText,
  StyleProp,
  TextProps as TextProperties,
  TextStyle,
} from 'react-native';

import { useAppContext } from '@src/context';
import { scaledSize } from '@src/utils';

export enum Fonts {
  Poppins = 'Poppins',
}

const BASE_TEXT: TextStyle = {
  fontSize: scaledSize(7),
};

export const presets = {
  default: BASE_TEXT,
  h1: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(24),
    fontWeight: '700',
  } as TextStyle,
  h2: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(21),
    fontWeight: '700',
  } as TextStyle,
  h3: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(18),
    fontWeight: '500',
  } as TextStyle,
  h4: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(15),
    fontWeight: '500',
  } as TextStyle,
  h5: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(12),
    fontWeight: '300',
  } as TextStyle,
  h6: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(9),
    fontWeight: '300',
  } as TextStyle,
  small: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(6),
    fontWeight: '300',
  } as TextStyle,
  title: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(13),
    fontWeight: '700',
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

  const { color: palette } = useAppContext();

  return (
    <RNText
      {...rest}
      style={[
        presets[preset] as TextProps,
        { color: color ? color : palette.textColor },
        styleOverride,
      ]}>
      {children}
    </RNText>
  );
};
