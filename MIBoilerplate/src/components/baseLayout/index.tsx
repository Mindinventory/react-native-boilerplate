import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import { useAppContext } from '@src/context';
import { Palette } from '@src/utils';

export type BaseLayoutProps = React.PropsWithChildren & {
  style?: StyleProp<ViewStyle>;
};

export const BaseLayout = React.memo(({ children, style }: BaseLayoutProps) => {
  const { styles, color } = useAppContext();
  const baseLayoutStyles = styles.baseLayoutStyle;

  return (
    <SafeAreaView style={[baseLayoutStyles.safeAreaStyle, style]}>
      <StatusBar
        barStyle={'dark-content'}
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
