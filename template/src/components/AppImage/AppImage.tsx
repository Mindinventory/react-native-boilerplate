import React from 'react';

import { Image, ImageProps } from '@app/blueprints';

import { Images } from '@src/assets';

export type ImageSource = Images | string;

export interface AppImageProps extends Omit<ImageProps, 'source'> {
  source: ImageSource;
}

export const AppImage = (props: AppImageProps) => {
  return (
    <Image
      defaultSource={Images.PLACEHOLDER_IMAGE}
      resizeMode="contain"
      {...props}
    />
  );
};
