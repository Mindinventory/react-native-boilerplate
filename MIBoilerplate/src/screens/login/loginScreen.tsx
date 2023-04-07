import React from 'react';
import { View } from 'react-native';

import { Text } from '@app/blueprints';

import useLogin from './useLogin';

const LoginScreen = () => {
  const { styles } = useLogin();

  return (
    <View style={styles.container}>
      <Text preset="h1">Login Screen</Text>
    </View>
  );
};

export default React.memo(LoginScreen);
