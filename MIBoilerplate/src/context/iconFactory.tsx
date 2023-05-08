import React from 'react';
// eslint-disable-next-line no-restricted-imports
import { Image, ImageProps } from 'react-native';

import { Icons } from '@src/assets';
import { scaled } from '@src/utils';

export type IconProps = Omit<ImageProps, 'source'>;

export const getAppIconSource = (icon: Icons, props?: IconProps) => {
  return <Image source={icon} style={{ ...scaled(13) }} {...props} />;
};
