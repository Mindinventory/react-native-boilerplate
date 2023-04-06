import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

export type BaseLayoutProps = React.PropsWithChildren & {
  style?: StyleProp<ViewStyle>;
};

export const BaseLayout = React.memo(({ children, style }: BaseLayoutProps) => {
  return (
    <SafeAreaView style={[styles.safeAreaStyle, style]}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#FFFFFF" />
      {children}
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  safeAreaStyle: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});
