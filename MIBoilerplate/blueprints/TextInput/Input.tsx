import React, { useCallback } from 'react';
import {
  NativeSyntheticEvent,
  Platform,
  TextInput as RNTextInput,
  StyleSheet,
  TargetedEvent,
  TextInputFocusEventData,
  TextInputProps,
  View,
} from 'react-native';

import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useColor } from '@src/context';
import { Palette } from '@src/utils';

import { InputProps } from './TextInputProps';
import { Text } from '../Text/Text';

const AnimatedTextInput = Animated.createAnimatedComponent(RNTextInput);

export const Input = React.memo(
  React.forwardRef((props: InputProps, ref?: React.Ref<RNTextInput | null>) => {
    const {
      backgroundColor = 'white',
      borderColor = 'black',
      error,
      errorContainerStyle,
      errorStyle,
      inputContainerStyle,
      inputStyle,
      label,
      labelColor = 'black',
      leftIcon,
      leftIconContainerStyle,
      onBlur,
      onFocus,
      onFocusBackgroundColor = '#e9e9e9',
      onFocusBorderColor = '#0c5fed',
      onFocusLabelColor = '#0c5fed',
      onHoverBackgroundColor = '#e9e9e9',
      onMouseEnter,
      onMouseLeave,
      outlineGapColor = 'white',
      placeholder,
      rightIcon,
      rightIconContainerStyle,
      style,
      variant = 'filled',
      ...rest
    } = props;

    const { color } = useColor();

    const styles = inputStyles(color);

    const hovered = useSharedValue(false);
    const focused = useSharedValue(false);

    const handleMouseEnter = useCallback(
      (event: NativeSyntheticEvent<TargetedEvent>) => {
        onMouseEnter?.(event);
        hovered.value = true;
      },
      [hovered, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (event: NativeSyntheticEvent<TargetedEvent>) => {
        onMouseLeave?.(event);
        hovered.value = false;
      },
      [hovered, onMouseLeave]
    );

    const handleFocus = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onFocus?.(event);
        focused.value = true;
      },
      [focused, onFocus]
    );

    const handleBlur = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onBlur?.(event);
        focused.value = false;
      },
      [focused, onBlur]
    );

    const focusAnimation = useSharedValue(0);

    useDerivedValue(() => {
      focusAnimation.value = withTiming(focused.value ? 1 : 0, {
        duration: 200,
        easing: Easing.out(Easing.ease),
      });
    }, [focused.value, focusAnimation.value]);

    const active = useDerivedValue(
      () => focused.value || (rest.value?.length || 0) > 0,
      [focused.value, rest.value]
    );

    const activeAnimation = useSharedValue(0);

    useDerivedValue(() => {
      activeAnimation.value = withTiming(active.value ? 1 : 0, {
        duration: 200,
        easing: Easing.out(Easing.ease),
      });
    }, [active.value, activeAnimation.value]);

    const animatedInputContainerStyle = useAnimatedStyle(() => {
      return {
        backgroundColor:
          variant === 'filled'
            ? focused.value
              ? onFocusBackgroundColor
              : hovered.value
              ? onHoverBackgroundColor
              : backgroundColor
            : variant === 'outlined'
            ? backgroundColor
            : backgroundColor,
        borderBottomEndRadius: variant !== 'standard' ? 4 : 0,
        borderBottomStartRadius: variant !== 'standard' ? 4 : 0,
        borderTopEndRadius: 4,
        borderTopStartRadius: 4,
      };
    }, [focused.value, hovered.value, variant]);

    const animatedInput = useAnimatedStyle(() => {
      return {
        fontSize: 16,
        minHeight: variant === 'standard' ? 48 : 56,
        paddingEnd: rightIcon ? 12 : variant === 'standard' ? 0 : 16,
        paddingStart: leftIcon ? 12 : variant === 'standard' ? 0 : 16,
        paddingTop: variant === 'filled' && label ? 18 : 0,
      };
    }, [variant, leftIcon, rightIcon]);

    const animatedLeading = useAnimatedStyle(() => {
      return {
        marginStart: variant === 'standard' ? 0 : 12,
        marginVertical: variant === 'standard' ? 12 : 16,
      };
    }, [variant]);

    const animatedTrailing = useAnimatedStyle(() => {
      return {
        marginEnd: variant === 'standard' ? 0 : 12,
        marginVertical: variant === 'standard' ? 12 : 16,
      };
    }, [variant]);

    const animatedOutline = useAnimatedStyle(() => {
      return {
        borderBottomEndRadius: 4,
        borderBottomStartRadius: 4,
        borderColor: focused.value
          ? onFocusBorderColor
          : hovered.value
          ? onFocusBorderColor
          : borderColor,
        borderTopEndRadius: 4,
        borderTopStartRadius: 4,
        borderWidth: focused.value ? 2 : 1,
      };
    }, [focused.value, hovered.value]);

    const animatedOutlineLabelGap = useAnimatedStyle(() => {
      return {
        height: focused.value ? 2 : 1,
      };
    }, [focused.value]);

    const animatedLabelContainer = useAnimatedStyle(() => {
      return {
        height: variant === 'standard' ? 48 : 56,
        start:
          variant === 'standard' ? (leftIcon ? 36 : 0) : leftIcon ? 48 : 16,
      };
    }, [variant, leftIcon]);

    const animatedLabel = useAnimatedStyle(() => {
      return {
        color: interpolateColor(
          focusAnimation.value,
          [0, 1],
          [labelColor, onFocusLabelColor]
        ),
        fontSize: interpolate(activeAnimation.value, [0, 1], [16, 12]),
        transform: [
          {
            translateY: interpolate(
              activeAnimation.value,
              [0, 1],
              [
                0,
                variant === 'filled' ? -12 : variant === 'outlined' ? -28 : -24,
              ]
            ),
          },
        ],
      };
    }, [focusAnimation, activeAnimation]);

    const animatedPlaceholder = useAnimatedProps<TextInputProps>(() => {
      return {
        placeholder: label ? (focused.value ? placeholder : '') : placeholder,
      };
    }, [label, focused, placeholder]);

    const animatedUnderline = useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          focusAnimation.value,
          [0, 1],
          [borderColor, onFocusBorderColor]
        ),
        transform: [{ scaleX: focusAnimation.value }],
      };
    }, [focusAnimation.value]);

    const animatedOutlineLabel = useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          activeAnimation.value,
          [0, 1],
          [backgroundColor, outlineGapColor]
        ),
        transform: [{ scaleX: activeAnimation.value }],
      };
    }, [activeAnimation.value]);

    return (
      <View style={style}>
        <Animated.View
          style={[
            styles.inputContainer,
            animatedInputContainerStyle,
            inputContainerStyle,
          ]}>
          {leftIcon && (
            <Animated.View
              style={[styles.leading, animatedLeading, leftIconContainerStyle]}>
              {leftIcon}
            </Animated.View>
          )}

          <AnimatedTextInput
            ref={ref}
            style={[styles.input, animatedInput, inputStyle]}
            animatedProps={animatedPlaceholder}
            placeholderTextColor={color.textColor}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...({
              onMouseEnter: handleMouseEnter,
              onMouseLeave: handleMouseLeave,
              ...rest,
            } as any)}
          />

          {rightIcon && (
            <Animated.View
              style={[
                styles.trailing,
                animatedTrailing,
                rightIconContainerStyle,
              ]}>
              {rightIcon}
            </Animated.View>
          )}

          {(variant === 'filled' || variant === 'standard') && (
            <>
              <View
                style={[styles.underline, { backgroundColor: borderColor }]}
                pointerEvents="none"
              />
              <Animated.View
                style={[styles.underlineFocused, animatedUnderline]}
                pointerEvents="none"
              />
            </>
          )}

          {variant === 'outlined' && (
            <Animated.View
              style={[StyleSheet.absoluteFill, animatedOutline, styles.outline]}
              pointerEvents="none"
            />
          )}

          {label ? (
            <Animated.View
              style={[styles.labelContainer, animatedLabelContainer]}
              pointerEvents="none">
              {variant === 'outlined' && (
                <Animated.View
                  style={[
                    styles.outlineLabelGap,
                    animatedOutlineLabel,
                    animatedOutlineLabelGap,
                  ]}
                />
              )}
              <Animated.Text style={animatedLabel}>{label}</Animated.Text>
            </Animated.View>
          ) : null}
        </Animated.View>
        <View style={[styles.errorView, errorContainerStyle]}>
          {error ? (
            <Text style={[styles.helperText, errorStyle]}>{error}</Text>
          ) : null}
        </View>
      </View>
    );
  })
);

const inputStyles = ({ backgroundColor }: Palette) =>
  StyleSheet.create({
    errorView: {
      marginHorizontal: 16,
      marginTop: 4,
    },
    helperText: {
      fontSize: 14,
    },
    input: {
      flex: 1,
      ...Platform.select({
        web: {
          outlineStyle: 'none',
        },
      }),
    },
    inputContainer: {
      flexDirection: 'row',
    },
    labelContainer: {
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
    },
    leading: {
      alignItems: 'center',
      height: 24,
      justifyContent: 'center',
      width: 24,
    },
    outline: {},
    outlineLabelGap: {
      backgroundColor: backgroundColor,
      end: -4,
      position: 'absolute',
      start: -4,
      top: 0,
    },
    trailing: {
      alignItems: 'center',
      height: 24,
      justifyContent: 'center',
      width: 24,
    },
    underline: {
      bottom: 0,
      end: 0,
      height: 1,
      position: 'absolute',
      start: 0,
    },
    underlineFocused: {
      bottom: 0,
      end: 0,
      height: 2,
      position: 'absolute',
      start: 0,
    },
  });
