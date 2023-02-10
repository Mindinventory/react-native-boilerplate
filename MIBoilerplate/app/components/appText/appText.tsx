import React from 'react';
import {
  Text as RNText,
  StyleProp,
  TextProps as TextProperties,
  TextStyle,
} from 'react-native';

const BASE_TEXT: TextStyle = {
  fontSize: 14,
};

export const presets = {
  bold: {...BASE_TEXT, fontWeight: '700'} as TextStyle,
  default: BASE_TEXT,
  header: {...BASE_TEXT, fontSize: 24, fontWeight: 'bold'} as TextStyle,
};

export type TextPresets = keyof typeof presets;

export interface Props extends TextProperties {
  style?: StyleProp<TextStyle>;
  preset?: TextPresets;
}

const AppText: React.FC<Props> = ({children, ...props}) => {
  const {preset = 'default', style: styleOverride, ...rest} = props;

  return (
    <RNText {...rest} style={[presets[preset], styleOverride]}>
      {children}
    </RNText>
  );
};

export default AppText;
