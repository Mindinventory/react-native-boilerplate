import React from 'react';
// eslint-disable-next-line no-restricted-imports
import { Button, View } from 'react-native';

import { Text } from '@app/blueprints';

import { ContentLanguage } from '@src/context';

import { useHome } from './useHome';

const Home = () => {
  const { loader, styles, contents, setLanguageInApp, language } = useHome();

  return (
    <View style={styles.container}>
      <Text
        preset="h1"
        onPress={() => (loader?.isLoading ? loader.hide : loader?.show())}>
        {contents('common', 'coming_soon_title')}
      </Text>
      <Button
        title="Press "
        onPress={() => {
          language === ContentLanguage.English
            ? setLanguageInApp(ContentLanguage.Hindi)
            : setLanguageInApp(ContentLanguage.English);
        }}
      />
    </View>
  );
};

export default Home;
