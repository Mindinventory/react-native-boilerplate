import React from 'react';
import { View } from 'react-native';

import { AnimatedTouchableOpacity, Button, Text } from '@app/blueprints';

import { BaseLayout } from '@src/components';
import { contents } from '@src/context';
import { ContentLanguage } from '@src/i18n';

import useSetting from './useSetting';

const SettingScreen = () => {
  const {
    appTheme,
    handleChangeLanguage,
    handleChangeTheme,
    handleLogin,
    language,
    languages,
    styles,
    themes,
  } = useSetting();

  return (
    <BaseLayout>
      <View style={styles.header}>
        <Text preset="h1">{contents('setting.settingScreen')}</Text>
      </View>
      <View style={styles.content}>
        <Text preset="h3" textAlign="center">
          {contents('setting.theme')}
        </Text>
        {themes.map(m => {
          return (
            <AnimatedTouchableOpacity
              containerStyle={styles.themes}
              onPress={handleChangeTheme(m.toLowerCase())}
              key={`${m}`}>
              <Text preset="h4">{m}</Text>
              <AnimatedTouchableOpacity
                onPress={handleChangeTheme(m.toLowerCase())}
                containerStyle={styles.radio}>
                {appTheme === m.toLowerCase() ? (
                  <View style={styles.selectedRadio} />
                ) : null}
              </AnimatedTouchableOpacity>
            </AnimatedTouchableOpacity>
          );
        })}

        <Text preset="h3" textAlign="center">
          {contents('setting.languages')}
        </Text>
        {languages.map(m => {
          return (
            <AnimatedTouchableOpacity
              onPress={handleChangeLanguage(m)}
              containerStyle={styles.themes}
              key={`${m}`}>
              <Text preset="h4">{m}</Text>
              <AnimatedTouchableOpacity
                onPress={handleChangeLanguage(m)}
                containerStyle={styles.radio}>
                {ContentLanguage[m as keyof typeof ContentLanguage] ===
                language ? (
                  <View style={styles.selectedRadio} />
                ) : null}
              </AnimatedTouchableOpacity>
            </AnimatedTouchableOpacity>
          );
        })}
        <Button
          title="Login"
          buttonContainerStyle={styles.btn}
          onPress={handleLogin}
        />
      </View>
    </BaseLayout>
  );
};

export default React.memo(SettingScreen);
