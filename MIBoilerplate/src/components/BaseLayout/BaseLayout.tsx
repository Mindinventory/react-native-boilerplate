import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import { useColor } from '@src/context';
import { Palette } from '@src/utils';

export type BaseLayoutProps = React.PropsWithChildren & {
  style?: StyleProp<ViewStyle>;
};

export const BaseLayout = React.memo(({ children, style }: BaseLayoutProps) => {
  const { appTheme, color } = useColor();
  const styles = baseLayoutStyles(color);

  return (
    <SafeAreaView style={[styles.safeAreaStyle, style]}>
      <StatusBar
        barStyle={appTheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={color.backgroundColor}
      />
      {children}
    </SafeAreaView>
  );
});

export const baseLayoutStyles = ({ backgroundColor }: Palette) =>
  StyleSheet.create({
    safeAreaStyle: {
      backgroundColor: backgroundColor,
      flex: 1,
    },
  });
