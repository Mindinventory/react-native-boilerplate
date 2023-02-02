import React from 'react';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';

import {InputPresets, inputPresets} from './presets';

interface Props extends TextInputProps {
  preset?: InputPresets;
}

const TextInput = ({
  placeholder = 'Enter Text',
  preset = 'primary',
  ...props
}: Props) => {
  const inputStyle = [inputPresets[preset], props.style];

  return (
    <RNTextInput {...props} placeholder={placeholder} style={inputStyle} />
  );
};

export default TextInput;
