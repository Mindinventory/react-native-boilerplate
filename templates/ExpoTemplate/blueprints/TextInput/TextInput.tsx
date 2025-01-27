// import React from 'react';
// import { TextInput as RNTextInput } from 'react-native';

// import { Field, FieldProps } from 'formik';

// import { Input } from './Input';
// import { TextInputProps } from './TextInputProps';

// export const TextInput = React.memo(
//   React.forwardRef(
//     ({ ...props }: TextInputProps, ref?: React.Ref<RNTextInput>) => {
//       const { name } = props;
//       return (
//         <Field name={name}>
//           {({ form, meta }: FieldProps) => {
//             return (
//               <Input
//                 variant="standard"
//                 onChangeText={(text: string | React.ChangeEvent<any>) => {
//                   form?.handleChange(name)(text);
//                 }}
//                 onBlur={form?.handleBlur(name)}
//                 value={meta?.value}
//                 error={meta?.error && meta?.touched ? (meta?.error ?? '') : ''}
//                 ref={ref}
//                 {...props}
//               />
//             );
//           }}
//         </Field>
//       );
//     }
//   )
// );

import React from 'react';
import {
  TextInput as RNTextInput,
  StyleProp,
  StyleSheet,
  Text,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { useField } from 'formik';

import { moderateScale, scaleHeight } from '@src/utils'; // Replace with your project utils

type Variant = 'outlined' | 'filled' | 'standard';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onRightIconPress?: () => void;
  onLeftIconPress?: () => void;
  variant?: Variant;
  disabled?: boolean;
  name: string; // Formik field name
  colors?: {
    borderColor?: string;
    backgroundColor?: string;
    errorColor?: string;
    errorTextColor?: string;
    disabledBorderColor?: string;
    disabledBackgroundColor?: string;
    disabledTextColor?: string;
    textColor?: string;
    placeholderColor?: string;
  };
}

export const TextInput: React.FC<CustomTextInputProps> = ({
  colors = {},
  containerStyle,
  disabled = false,
  errorStyle,
  inputStyle,
  label,
  leftIcon,
  name,
  onLeftIconPress,
  onRightIconPress,
  placeholder,
  rightIcon,
  variant = 'standard',
  ...rest
}) => {
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
          borderRadius: moderateScale(8),
          borderWidth: 1,
        };
      case 'filled':
        return {
          backgroundColor: hasError
            ? errorColor
            : disabled
              ? disabledBackgroundColor
              : backgroundColor,
          borderRadius: moderateScale(8),
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
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[styles.label, { color: textColor }]}>{label}</Text>
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
          style={[styles.input, { color: getInputColor() }, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={disabled ? disabledTextColor : placeholderColor}
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
        <Text style={[styles.errorText, { color: errorTextColor }, errorStyle]}>
          {meta.error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: scaleHeight(16),
  },
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
    fontSize: moderateScale(14),
    marginBottom: scaleHeight(8),
  },
});
