import {
  NativeSyntheticEvent,
  TextInputProps as RNTextInputProps,
  StyleProp,
  TargetedEvent,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface TextInputProps extends InputProps {
  name: string;
}

export type Variant = 'filled' | 'outlined' | 'standard';

export interface InputProps extends RNTextInputProps {
  /**
   * The variant of the TextInput style.
   * @default "filled"
   */
  variant?: Variant;
  /**
   * The label to display.
   */
  label?: string;
  /**
   * The element placed before the text input.
   */
  leftIcon?: React.ReactNode | null;
  /**
   * The element placed after the text input.
   */
  rightIcon?: React.ReactNode | null;
  /**
   * The helper text to display.
   */
  error?: string;
  /**
   * Callback function to call when user moves pointer over the input.
   */
  onMouseEnter?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  /**
   * Callback function to call when user moves pointer away from the input.
   */
  onMouseLeave?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  /**
   * The style of the container view.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * The style of the text input container view.
   */
  inputContainerStyle?: StyleProp<ViewStyle>;
  /**
   * The style of the text input.
   */
  inputStyle?: RNTextInputProps['style'];
  /**
   * The style of the text input's leading element container.
   */
  leftIconContainerStyle?: StyleProp<ViewStyle>;
  /**
   * The style of the text input's trailing element container.
   */
  rightIconContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Background color of the input container style.
   * @default "white"
   */
  backgroundColor?: string;
  /**
   * On focus background color of the input container style.
   * @default "#e9e9e9"
   */
  onFocusBackgroundColor?: string;
  /**
   * Border color of the outline input container style.
   * @default "black"
   */
  borderColor?: string;
  /**
   * On focus Border color of the outline input container style.
   * @default "#0c5fed"
   */
  onFocusBorderColor?: string;
  /**
   * On hover background color of the filled input container style.
   * @default "#e9e9e9"
   */
  onHoverBackgroundColor?: string;
  /**
   * Label text color of the input.
   * @default "black"
   */
  labelColor?: string;
  /**
   * On focus Label text color change.
   * @default "#0c5fed"
   */
  onFocusLabelColor?: string;
  /**
   * On error or any helper text below text Input container style.
   */
  errorContainerStyle?: StyleProp<ViewStyle>;
  /**
   * On error or any helper text below text Input Text-Style.
   */
  errorStyle?: StyleProp<TextStyle>;
  /**
   * In outlined variant the gap border color.
   * @default white
   */
  outlineGapColor?: string;
}
