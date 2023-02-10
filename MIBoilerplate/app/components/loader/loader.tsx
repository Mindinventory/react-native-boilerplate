import React from 'react';
import {ActivityIndicator} from 'react-native';

import {palette} from 'app-constants';

interface Props {
  size?: number | 'large' | 'small' | undefined;
  color?: string;
}

const Loader = ({color = palette.redPrimary, size = 'large'}: Props) => {
  return <ActivityIndicator size={size} color={color} />;
};

export default Loader;
