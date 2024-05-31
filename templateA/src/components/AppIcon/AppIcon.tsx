import React from 'react';
// eslint-disable-next-line no-restricted-imports
import { Image, ImageProps } from 'react-native';

import { SvgProps } from 'react-native-svg';

import { Icons, SVGIcons, SVGIconsMapper } from '@src/assets';
import { scaled } from '@src/utils';

export type IconProps = Omit<ImageProps, 'source'> & {
  icon: Icons;
};

export const Icon = (props: IconProps) => {
  const { icon } = props;
  return (
    <Image
      source={icon}
      style={{ ...scaled(13) }}
      resizeMode="contain"
      {...props}
    />
  );
};

/**
 * SVG ICON
 */

export type SVGIconProps = SvgProps & {
  icon: SVGIcons;
  height?: number | string;
  width?: number | string;
  pathFill?: string;
};

export const SvgIcon = (props: SVGIconProps) => {
  const { icon, pathFill = '#FFF' } = props;
  const IconsImage = SVGIconsMapper[icon];

  return <IconsImage pathFill={pathFill} {...scaled(12)} {...props} />;
};
