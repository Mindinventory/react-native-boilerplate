import React from 'react';
import {
  TextStyle,
  TextProps as TextProperties,
  Text as RNText,
  StyleProp,
} from 'react-native';

const BASE_TEXT: TextStyle = {
  fontSize: 14,
};

export const presets = {
  default: BASE_TEXT,
  bold: {...BASE_TEXT, fontWeight: '700'} as TextStyle,
  header: {...BASE_TEXT, fontSize: 24, fontWeight: 'bold'} as TextStyle,
};

export type TextPresets = keyof typeof presets;

export interface TextProps extends TextProperties {
  style?: StyleProp<TextStyle>;
  preset?: TextPresets;
}

const AppText: React.FC<TextProps> = ({children, ...props}) => {
  const {preset = 'default', style: styleOverride, ...rest} = props;

  return (
    <RNText {...rest} style={[presets[preset], styleOverride]}>
      {children}
    </RNText>
  );
};

export default AppText;
