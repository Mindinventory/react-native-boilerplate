import React from 'react';
import {
  TextInput as RNTextInput,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { useField } from 'formik';

import { moderateScale, scaleHeight } from '@src/utils'; // Replace with your project utils

import { TextInputProps } from './TextInputProps';
import { Text } from '../Text/Text';

export const TextInput = React.forwardRef(
  (
    {
      borderRadius = moderateScale(8),
      borderWidth = 1,
      colors = {},
      containerStyle,
      disabled = false,
      errorStyle,
      inputStyle,
      label,
      labelFontSize = 16,
      labelStyle,
      leftIcon,
      name,
      onLeftIconPress,
      onRightIconPress,
      placeholder,
      rightIcon,
      variant = 'standard',
      ...rest
    }: TextInputProps,
    ref?: React.Ref<RNTextInput>
  ) => {
    const [field, meta, helpers] = useField(name);
    const hasError = meta.touched && meta.error;

    // Default color values
    const {
      backgroundColor = '#ffffff',
      borderColor = 'gray',
      disabledBackgroundColor = '#f5f5f5',
      disabledBorderColor = '#d3d3d3',
      disabledTextColor = '#a9a9a9',
      errorColor = 'red',
      errorTextColor = 'red',
      placeholderColor = 'darkgray',
      textColor = 'black',
    } = colors;

    // Dynamic styles based on the variant and state
    const getVariantStyle = (): StyleProp<ViewStyle> => {
      switch (variant) {
        case 'outlined':
          return {
            borderColor: hasError
              ? errorColor
              : disabled
                ? disabledBorderColor
                : borderColor,
            borderRadius: borderRadius,
            borderWidth: borderWidth,
          };
        case 'filled':
          return {
            backgroundColor: hasError
              ? errorColor
              : disabled
                ? disabledBackgroundColor
                : backgroundColor,
            borderRadius: borderRadius,
          };
        case 'standard':
        default:
          return {
            borderBottomColor: hasError
              ? errorColor
              : disabled
                ? disabledBorderColor
                : borderColor,
            borderBottomWidth: 1,
          };
      }
    };

    const getInputColor = (): string => {
      if (disabled) return disabledTextColor;
      if (hasError) return errorTextColor;
      return textColor;
    };

    return (
      <View style={containerStyle}>
        {label && (
          <Text
            fontSize={labelFontSize}
            color={textColor}
            style={[styles.label, labelStyle]}>
            {label}
          </Text>
        )}
        <View style={[styles.inputContainer, getVariantStyle()]}>
          {leftIcon && (
            <TouchableOpacity
              onPress={onLeftIconPress}
              disabled={!onLeftIconPress}>
              {leftIcon}
            </TouchableOpacity>
          )}
          <RNTextInput
            ref={ref}
            style={[styles.input, { color: getInputColor() }, inputStyle]}
            placeholder={placeholder}
            placeholderTextColor={
              disabled ? disabledTextColor : placeholderColor
            }
            editable={!disabled}
            value={field.value}
            onChangeText={helpers.setValue}
            onBlur={() => helpers.setTouched(true)}
            {...rest}
          />
          {rightIcon && (
            <TouchableOpacity
              onPress={onRightIconPress}
              disabled={!onRightIconPress}>
              {rightIcon}
            </TouchableOpacity>
          )}
        </View>
        {hasError && (
          <Text
            style={[styles.errorText, { color: errorTextColor }, errorStyle]}>
            {meta.error}
          </Text>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  errorText: {
    fontSize: moderateScale(12),
    marginTop: scaleHeight(4),
  },
  input: {
    flex: 1,
    fontSize: moderateScale(14),
    height: '100%',
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: scaleHeight(45),
    paddingHorizontal: moderateScale(8),
  },
  label: {
    marginBottom: scaleHeight(8),
  },
});
