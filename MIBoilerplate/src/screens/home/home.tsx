import React from 'react';
import { View } from 'react-native';

import { Text } from '@app/blueprints';

import { BaseLayout } from '@src/components';

import { useHome } from './useHome';

const Home = () => {
  const { styles, contents } = useHome();

  return (
    <BaseLayout>
      <View style={styles.container}>
        <Text preset="h1">{contents('common', 'coming_soon_title')}</Text>
      </View>
    </BaseLayout>
  );
};

export default Home;
