import React from 'react';
import {View} from 'react-native';
import {AppButton, AppText} from 'app-components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import type {RootStackParams} from 'app-navigation';
import styles from './styles';
import {useDetailsScreen} from './useDetailsScreen';

export type DetailsScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'DetailsScreen'
>;

export type DetailsScreenRouteProps = RouteProp<
  RootStackParams,
  'DetailsScreen'
>;

interface Props {}

const DetailsScreen: React.FC<Props> = () => {
  const {onPressGoBack} = useDetailsScreen();

  return (
    <View style={styles.detailContainer}>
      <AppButton
        preset="secondary"
        onPress={onPressGoBack}
        style={styles.button}>
        <AppText preset="bold">Go back</AppText>
      </AppButton>
    </View>
  );
};

export default DetailsScreen;
