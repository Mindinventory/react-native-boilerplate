import React from 'react';
import {
  Pressable,
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';

import {AppText} from 'app-components';

import {ButtonPresets, textPresets, viewPresets} from './presets';

export interface Props extends TouchableOpacityProps {
  textStyle?: StyleProp<TextStyle>;
  text?: string;
  preset?: ButtonPresets;
}

export const AppButton: React.FC<Props> = ({
  style: containerStyleOverride,
  textStyle: textStyleOverride,
  preset = 'primary',
  text,
  children,
  ...rest
}) => {
  const containerStyle = [viewPresets[preset], containerStyleOverride];
  const textStyle = [textPresets[preset], textStyleOverride];

  const content = children || (
    <AppText style={textStyle} preset={'bold'}>
      {text}
    </AppText>
  );

  return (
    <Pressable style={containerStyle} {...rest}>
      {content}
    </Pressable>
  );
};
