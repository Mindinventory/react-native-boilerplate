import React from 'react';
import {View} from 'react-native';

import {Text} from '@app/blueprints';
import {MMKV} from 'react-native-mmkv';

export const storageMmkv = new MMKV();

export const MainApp = () => {
  return (
    <View>
      <Text preset="h1">index</Text>
    </View>
  );
};
