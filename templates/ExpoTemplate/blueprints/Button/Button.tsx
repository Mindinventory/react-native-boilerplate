// import React, { memo } from 'react';
// import {
//   StyleProp,
//   StyleSheet,
//   TextStyle,
//   TouchableOpacity,
//   TouchableOpacityProps,
//   View,
//   ViewStyle,
// } from 'react-native';

// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
//   WithSpringConfig,
// } from 'react-native-reanimated';

// import { useColor } from '@src/context';
// import { moderateScale, Palette, scaleHeight } from '@src/utils';

// import { Text } from '../Text/Text';

// const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

// interface ExtraButtonProps {
//   buttonContainerStyle?: StyleProp<ViewStyle>;
//   titleContainerStyle?: StyleProp<ViewStyle>;
//   titleStyle?: StyleProp<TextStyle>;
//   title?: React.ReactNode;
//   rightIcon?: JSX.Element;
//   leftIcon?: JSX.Element;
//   activeOpacity?: number;
//   springConfig?: WithSpringConfig;
//   disableScaleAnimation?: boolean;
// }

// export type AnimatedButtonProps = Omit<
//   TouchableOpacityProps,
//   'onPressIn' | 'onPressOut' | 'style'
// > & {
//   containerStyle?: StyleProp<ViewStyle>;
// };

// export type ButtonProps = AnimatedButtonProps & ExtraButtonProps;

// export const AnimatedTouchableOpacity = memo(
//   ({
//     activeOpacity = 0.8,
//     children,
//     containerStyle,
//     disableScaleAnimation = false,
//     springConfig,
//     ...rest
//   }: AnimatedButtonProps & ExtraButtonProps) => {
//     const scaleValue = useSharedValue(1);

//     const animatedButtonStyle = useAnimatedStyle(() => {
//       return {
//         transform: [{ scale: scaleValue.value }],
//       };
//     });

//     const handlePressIn = () => {
//       if (!disableScaleAnimation) {
//         scaleValue.value = withSpring(0.9, springConfig);
//       }
//     };

//     const handlePressOut = () => {
//       if (!disableScaleAnimation) {
//         scaleValue.value = withSpring(1, springConfig);
//       }
//     };

//     return (
//       <AnimatedTouchable
//         style={[containerStyle, animatedButtonStyle]}
//         onPressIn={handlePressIn}
//         onPressOut={handlePressOut}
//         activeOpacity={activeOpacity}
//         {...rest}>
//         {children}
//       </AnimatedTouchable>
//     );
//   }
// );

// export const Button = memo((props: ButtonProps) => {
//   const {
//     activeOpacity,
//     buttonContainerStyle,
//     disableScaleAnimation,
//     leftIcon,
//     rightIcon,
//     springConfig,
//     title,
//     titleContainerStyle,
//     titleStyle,
//     ...rest
//   } = props;

//   const { color } = useColor();
//   const styles = createButtonStyles(color);

//   return (
//     <AnimatedTouchableOpacity
//       containerStyle={[styles.buttonContainer, buttonContainerStyle]}
//       activeOpacity={activeOpacity}
//       springConfig={springConfig}
//       disableScaleAnimation={disableScaleAnimation}
//       {...rest}>
//       <View style={[styles.titleContainer, titleContainerStyle]}>
//         {leftIcon}
//         {title && (
//           <Text color={color.textColor} style={titleStyle}>
//             {title}
//           </Text>
//         )}
//         {rightIcon}
//       </View>
//     </AnimatedTouchableOpacity>
//   );
// });

// const createButtonStyles = ({ primaryColor }: Palette) =>
//   StyleSheet.create({
//     buttonContainer: {
//       alignItems: 'center',
//       backgroundColor: primaryColor,
//       borderRadius: moderateScale(60),
//       height: scaleHeight(45),
//       width: '100%',
//     },
//     titleContainer: {
//       alignItems: 'center',
//       flexDirection: 'row',
//       height: '100%',
//       justifyContent: 'center',
//       width: '100%',
//     },
//   });
import React, { memo } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from 'react-native-reanimated';

import { useColor } from '@src/context';
import { moderateScale, Palette, scaleHeight } from '@src/utils';

import { Text } from '../Text/Text';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

type ButtonVariant = 'standard' | 'outlined';

interface ExtraButtonProps {
  variant?: ButtonVariant; // Outlined or standard
  buttonContainerStyle?: StyleProp<ViewStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title?: React.ReactNode;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  activeOpacity?: number;
  springConfig?: WithSpringConfig;
  disableScaleAnimation?: boolean;
  isLoading?: boolean; // Show loader
  loaderColor?: string; // Default loader color customization
  customLoader?: React.ReactNode; // Custom loader component
  disabled?: boolean; // Disable the button
}

export type AnimatedButtonProps = Omit<
  TouchableOpacityProps,
  'onPressIn' | 'onPressOut' | 'style'
> & {
  containerStyle?: StyleProp<ViewStyle>;
};

export type ButtonProps = AnimatedButtonProps & ExtraButtonProps;

export const AnimatedTouchableOpacity = memo(
  ({
    activeOpacity = 0.8,
    children,
    containerStyle,
    disableScaleAnimation = false,
    springConfig,
    ...rest
  }: AnimatedButtonProps & ExtraButtonProps) => {
    const scaleValue = useSharedValue(1);

    const animatedButtonStyle = useAnimatedStyle(() => {
      return {
        transform: [{ scale: scaleValue.value }],
      };
    });

    const handlePressIn = () => {
      if (!disableScaleAnimation) {
        scaleValue.value = withSpring(0.9, springConfig);
      }
    };

    const handlePressOut = () => {
      if (!disableScaleAnimation) {
        scaleValue.value = withSpring(1, springConfig);
      }
    };

    return (
      <AnimatedTouchable
        style={[containerStyle, animatedButtonStyle]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={activeOpacity}
        {...rest}>
        {children}
      </AnimatedTouchable>
    );
  }
);

export const Button = memo((props: ButtonProps) => {
  const {
    activeOpacity,
    buttonContainerStyle,
    customLoader,
    disabled = false,
    disableScaleAnimation,
    isLoading = false,
    leftIcon,
    loaderColor,
    rightIcon,
    springConfig,
    title,
    titleContainerStyle,
    titleStyle,
    variant = 'standard',
    ...rest
  } = props;

  const { color } = useColor();
  const styles = createButtonStyles(color);

  // Determine styles based on variant
  const variantStyle =
    variant === 'outlined'
      ? {
          backgroundColor: 'transparent',
          borderColor: color.primaryColor,
          borderWidth: 2,
        }
      : {
          backgroundColor: disabled ? color.secondaryColor : color.primaryColor,
        };

  return (
    <AnimatedTouchableOpacity
      containerStyle={[
        styles.buttonContainer,
        variantStyle,
        buttonContainerStyle,
        disabled && styles.disabledContainer,
      ]}
      activeOpacity={disabled ? 1 : activeOpacity}
      springConfig={springConfig}
      disableScaleAnimation={disableScaleAnimation || disabled}
      disabled={disabled}
      {...rest}>
      <View style={[styles.titleContainer, titleContainerStyle]}>
        {isLoading ? (
          customLoader || (
            <ActivityIndicator
              color={loaderColor || color.textColor}
              style={styles.loader}
            />
          )
        ) : (
          <>
            {leftIcon}
            {title && (
              <Text
                color={
                  variant === 'outlined' ? color.primaryColor : color.textColor
                }
                style={[titleStyle, disabled && styles.disabledText]}>
                {title}
              </Text>
            )}
            {rightIcon}
          </>
        )}
      </View>
    </AnimatedTouchableOpacity>
  );
});

const createButtonStyles = ({ secondaryColor }: Palette) =>
  StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
      borderRadius: moderateScale(60),
      height: scaleHeight(45),
      width: '100%',
    },
    disabledContainer: {
      backgroundColor: secondaryColor,
    },
    disabledText: {
      color: secondaryColor,
    },
    loader: {
      height: scaleHeight(20),
    },
    titleContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    },
  });
