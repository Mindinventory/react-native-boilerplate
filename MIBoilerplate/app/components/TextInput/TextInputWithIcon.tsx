import React from 'react';
import {TextInput as RNTextInput, TextInputProps, View} from 'react-native';
import {
  iconContainer,
  inputStyle,
  InputWithIconPresets,
  inputWithIconPresets,
} from './Presets';

interface TextInputWithIcon extends TextInputProps {
  preset?: InputWithIconPresets;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

const TextInputWithIcon: React.FC<TextInputWithIcon> = ({
  preset = 'primary',
  leftIcon,
  rightIcon,
  ...props
}) => {
  const inputContainerStyle = [inputWithIconPresets[preset], props.style];

  const setWidthForInput = () => {
    if (leftIcon === undefined && rightIcon === undefined) {
      return {width: '100%'};
    } else if (leftIcon === undefined || rightIcon === undefined) {
      return {width: '88%'};
    } else {
      return {width: '76%'};
    }
  };

  return (
    <View style={inputContainerStyle}>
      {leftIcon !== undefined && <View style={iconContainer}>{leftIcon}</View>}
      <RNTextInput {...props} style={[setWidthForInput(), inputStyle]} />
      {rightIcon !== undefined && (
        <View style={iconContainer}>{rightIcon}</View>
      )}
    </View>
  );
};

export default TextInputWithIcon;
