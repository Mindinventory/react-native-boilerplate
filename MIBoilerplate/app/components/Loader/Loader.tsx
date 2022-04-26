import React from 'react';
import {ActivityIndicator} from 'react-native';
import {palette} from 'app-constants';

interface Props {
  size?: number | 'large' | 'small' | undefined;
  color?: string;
}

const Loader: React.FC<Props> = ({
  color = palette.redPrimary,
  size = 'large',
}) => {
  return <ActivityIndicator size={size} color={color} />;
};

export default Loader;
