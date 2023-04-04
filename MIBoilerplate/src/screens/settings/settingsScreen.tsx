import React from 'react';
import {View} from 'react-native';

import {Text} from '@app/blueprints';

import useSettings from './useSettings';

const SettingsScreen = () => {
  const {styles} = useSettings();

  return (
    <View style={styles.container}>
      <Text preset="h1">Settings Screen</Text>
    </View>
  );
};

export default React.memo(SettingsScreen);
