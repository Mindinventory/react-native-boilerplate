import React from 'react';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';
import {InputPresets, inputPresets} from './Presets';

interface Props extends TextInputProps {
  preset?: InputPresets;
}

const TextInput: React.FC<Props> = ({
  placeholder = 'Enter Text',
  preset = 'primary',
  ...props
}) => {
  const inputStyle = [inputPresets[preset], props.style];

  return (
    <RNTextInput {...props} placeholder={placeholder} style={inputStyle} />
  );
};

export default TextInput;
