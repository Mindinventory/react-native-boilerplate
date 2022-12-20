import React from 'react';
import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from 'app-navigation';
import { useTheme } from 'app-theme';
import { AppButton, AppText } from 'app-components';
import { useLocalization } from 'app-utils';
import { useSetting } from './useSetting';
import settingStyles from './setting.style';

export type SettingNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'Setting'
>;

const Setting = () => {
  const { palette } = useTheme();
  const { t } = useLocalization();
  const styles = settingStyles(palette);
  const { onPressGoBack } = useSetting();
  return (
    <View style={styles.settingContainer}>
      <AppButton onPress={onPressGoBack} style={styles.backBtn}>
        <AppText style={styles.backBtnText} preset="bold">
          {t('goBack')}
        </AppText>
      </AppButton>
    </View>
  );
};

export default Setting;
