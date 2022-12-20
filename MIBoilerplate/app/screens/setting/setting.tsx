import React from 'react';
import { View, Switch, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from 'app-navigation';
import { AppButton, AppText } from 'app-components';
import { useLocalization } from 'app-utils';
import { useSetting } from './useSetting';
import settingStyles from './setting.style';
import { commonStyles, LanguageOptions } from 'app-constants';

export type SettingNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'Setting'
>;

const Setting = () => {
  const { t } = useLocalization();
  const {
    onPressGoBack,
    palette,
    isEnabled,
    toggleSwitch,
    languagesData,
    onPressLangBtn,
  } = useSetting();
  const styles = settingStyles(palette);

  const renderItem = ({ item }: { item: LanguageOptions }) => {
    return (
      <AppButton
        key={item.langCode}
        onPress={() => onPressLangBtn(item)}
        preset="secondary"
        style={[styles.langBtn, item.isSelected && styles.redPrimaryBg]}
      >
        <AppText
          style={[styles.langBtnText, item.isSelected && styles.backBtnText]}
          preset="bold"
        >
          {item.title}
        </AppText>
      </AppButton>
    );
  };

  return (
    <View style={styles.settingContainer}>
      <View style={styles.sectionLayout}>
        <View style={styles.sectionTitleView}>
          <AppText style={styles.sectionTitle} preset="bold">
            {t('theme')}:
          </AppText>
        </View>
        <View
          style={[
            commonStyles.row,
            commonStyles.spaceBetween,
            commonStyles.marginTop10,
          ]}
        >
          <AppText style={styles.sectionItemText}>{t('darkMode')}</AppText>
          <Switch
            trackColor={{
              false: palette.grayChateau,
              true: palette.whiteEDDFF6,
            }}
            thumbColor={isEnabled ? palette.redPrimary : palette.whiteF5FCFF}
            onValueChange={(val) => toggleSwitch(val)}
            value={isEnabled}
          />
        </View>
      </View>

      {/* Languages */}
      <View style={styles.sectionLayout}>
        <View style={styles.sectionTitleView}>
          <AppText style={styles.sectionTitle} preset="bold">
            {t('language')}:
          </AppText>
        </View>
        <View style={[commonStyles.marginTop10]}>
          <AppText style={styles.sectionItemText}>{t('changeLang')}</AppText>

          <View>
            <FlatList
              data={languagesData}
              renderItem={renderItem}
              keyExtractor={(item) => item.title}
            />
          </View>
        </View>
      </View>
      <AppButton onPress={onPressGoBack} style={styles.backBtn}>
        <AppText style={styles.backBtnText} preset="bold">
          {t('goBack')}
        </AppText>
      </AppButton>
    </View>
  );
};

export default Setting;
