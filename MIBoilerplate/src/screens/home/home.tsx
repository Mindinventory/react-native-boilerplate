import React, {useState} from 'react';
import {Button, View} from 'react-native';

import {Text} from '@app/blueprints';

import {useHome} from './useHome';

const Home = () => {
  const {loader, styles, contents, setLanguageInApp, language, navigation} =
    useHome();
  console.log('loader?.isLoading: ', loader?.isLoading, loader?.show);

  const [state, setState] = useState(false);

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
          console.log(loader);
        }}
      />
    </View>
  );
};

export default Home;
