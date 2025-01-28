import React from 'react';
import {
  // eslint-disable-next-line no-restricted-imports
  Text as RNText,
  StyleProp,
  TextProps as TextProperties,
  TextStyle,
} from 'react-native';

import { useColor } from '@src/context';

export enum Fonts {
  Poppins = 'Poppins',
}

export interface TextProps extends TextProperties {
  style?: StyleProp<TextStyle>;
  color?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  fontSize?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

export const Text = ({
  children,
  fontSize = 16,
  fontWeight = 'normal',
  ...props
}: TextProps) => {
  const { color, style: styleOverride, textAlign = 'auto', ...rest } = props;

  const { color: palette } = useColor();

  return (
    <RNText
      {...rest}
      style={[
        {
          color: color ? color : palette.textColor,
          fontSize: fontSize,
          fontWeight: fontWeight,
          textAlign: textAlign,
        },
        styleOverride,
      ]}>
      {children}
    </RNText>
  );
};
