import React from 'react';
import { View } from 'react-native';
import { AppButton, AppText } from 'app-components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import type { RootStackParams } from 'app-navigation';
// import styles as themeStyles from './styles';
import { default as themeStyles } from './styles';
import { useDetailsScreen } from './useDetailsScreen';
import { useTheme } from 'app-theme';

export type DetailsScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'DetailsScreen'
>;

export type DetailsScreenRouteProps = RouteProp<
  RootStackParams,
  'DetailsScreen'
>;

const DetailsScreen = () => {
  const { onPressGoBack } = useDetailsScreen();
  const { palette } = useTheme();
  const styles = themeStyles(palette);
  return (
    <View style={styles.detailContainer}>
      <AppButton
        preset="secondary"
        onPress={onPressGoBack}
        style={styles.button}
      >
        <AppText style={styles.boldText} preset="bold">
          Go back
        </AppText>
      </AppButton>
    </View>
  );
};

export default DetailsScreen;
