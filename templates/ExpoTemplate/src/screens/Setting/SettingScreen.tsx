import React from 'react';
import { View } from 'react-native';

import {
  AnimatedTouchableOpacity,
  Button,
  Text,
  TextInput,
} from '@app/blueprints';
import { Formik } from 'formik';

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
        <Text>{contents('setting.settingScreen')}</Text>
      </View>
      <View style={styles.content}>
        <Text textAlign="center">{contents('setting.theme')}</Text>
        {themes.map(m => {
          return (
            <AnimatedTouchableOpacity
              containerStyle={styles.themes}
              onPress={handleChangeTheme(m.toLowerCase())}
              key={`${m}`}>
              <Text>{m}</Text>
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

        <Text textAlign="center">{contents('setting.languages')}</Text>
        {languages.map(m => {
          return (
            <AnimatedTouchableOpacity
              onPress={handleChangeLanguage(m)}
              containerStyle={styles.themes}
              key={`${m}`}>
              <Text>{m}</Text>
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
        <Formik initialValues={{ email: '' }} onSubmit={() => {}}>
          {({ resetForm, submitForm }) => (
            <View>
              <TextInput
                name="email"
                variant="outlined"
                secureTextEntry={true}
                colors={{
                  backgroundColor: 'red',
                  borderColor: 'red',
                  disabledBackgroundColor: 'gray',
                }}
                containerStyle={{
                  borderRadius: 20,
                  marginTop: 20,
                }}
                placeholder={contents('login.yourEmailId')}
                onSubmitEditing={() => {}}
              />
              <TextInput
                name="password"
                variant="outlined"
                containerStyle={{ marginTop: 20 }}
                placeholder={contents('login.yourEmailId')}
                onSubmitEditing={() => {}}
              />
            </View>
          )}
        </Formik>
      </View>
    </BaseLayout>
  );
};

export default React.memo(SettingScreen);
