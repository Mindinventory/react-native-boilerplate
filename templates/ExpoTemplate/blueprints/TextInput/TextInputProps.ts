import {
  TextInputProps as RNTextInputProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type Variant = 'outlined' | 'filled' | 'standard';

export interface TextInputProps extends RNTextInputProps {
  /**
   * The label text to display above the input field.
   */
  label?: string;

  /**
   * The font size of the label.
   */
  labelFontSize?: number;

  /**
   * Placeholder text to display when the input is empty.
   */
  placeholder?: string;

  /**
   * Custom style for the container wrapping the input and label.
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Custom style for the label text.
   */
  labelStyle?: StyleProp<TextStyle>;

  /**
   * Custom style for the input field text.
   */
  inputStyle?: StyleProp<TextStyle>;

  /**
   * Custom style for the error message text.
   */
  errorStyle?: StyleProp<TextStyle>;

  /**
   * JSX element to display as an icon on the left side of the input field.
   */
  leftIcon?: JSX.Element;

  /**
   * JSX element to display as an icon on the right side of the input field.
   */
  rightIcon?: JSX.Element;

  /**
   * Callback function triggered when the right icon is pressed.
   */
  onRightIconPress?: () => void;

  /**
   * Callback function triggered when the left icon is pressed.
   */
  onLeftIconPress?: () => void;

  /**
   * Defines the visual variant of the input field (e.g., outline, filled).
   */
  variant?: Variant;

  /**
   * Determines if the input field is disabled.
   */
  disabled?: boolean;

  /**
   * Name of the field, used in Formik for identifying the input.
   */
  name: string;

  /**
   * Border width for the input field.
   */
  borderWidth?: number;

  /**
   * Border radius for the input field corners.
   */
  borderRadius?: number;

  /**
   * Object to define various colors for different input field states.
   */
  colors?: {
    /**
     * Border color of the input field.
     */
    borderColor?: string;

    /**
     * Background color of the input field.
     */
    backgroundColor?: string;

    /**
     * Border color to display when there is an error.
     */
    errorColor?: string;

    /**
     * Text color for the error message.
     */
    errorTextColor?: string;

    /**
     * Border color to use when the input is disabled.
     */
    disabledBorderColor?: string;

    /**
     * Background color to use when the input is disabled.
     */
    disabledBackgroundColor?: string;

    /**
     * Text color to use when the input is disabled.
     */
    disabledTextColor?: string;

    /**
     * Default text color for the input.
     */
    textColor?: string;

    /**
     * Color for the placeholder text in the input field.
     */
    placeholderColor?: string;
  };
}
