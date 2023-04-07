import React from 'react';
import { View } from 'react-native';

import { IndicatorView } from '@app/blueprints';

import useSplash from './useSplash';

const SplashScreen = () => {
  const { styles } = useSplash();

  return (
    <View style={styles.container}>
      <IndicatorView isLoading={true} />
    </View>
  );
};

export default React.memo(SplashScreen);
