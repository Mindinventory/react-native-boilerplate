import React from 'react';

import { Image, ImageProps } from '@app/blueprints';

import { Images } from '@src/assets';

export type ImageSource = Images | string;

export const getAppImagesSource = (image: ImageSource, props?: ImageProps) => {
  return (
    <Image source={image} {...props} defaultSource={Images.PLACEHOLDER_IMAGE} />
  );
};
