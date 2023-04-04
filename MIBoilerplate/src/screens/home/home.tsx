import React from 'react';
import {View} from 'react-native';

import {Text} from '@app/blueprints';

import {useHome} from './useHome';

const Home = () => {
  const {loader, styles, contents, setLanguageInApp, language, navigation} =
    useHome();

  return (
    <View style={styles.container}>
      <Text
        preset="h1"
        onPress={() => (loader?.isLoading ? loader.hide() : loader?.show())}>
        {contents('common', 'coming_soon_title')}
      </Text>
    </View>
  );
};

export default React.memo(Home);
