import React from 'react';
// eslint-disable-next-line no-restricted-imports
import { Image, ImageProps } from 'react-native';

import { SvgProps } from 'react-native-svg';

import { Icons, SVGIcons } from '@src/assets';
import { scaled } from '@src/utils';

export type IconProps = Omit<ImageProps, 'source'>;

export const getAppIconSource = (icon: Icons, props?: IconProps) => {
  return <Image source={icon} style={{ ...scaled(13) }} {...props} />;
};

/**
 * SVG ICON
 */
export type SVGIcons = keyof typeof SVGIcons;

export type SVGIconProps = SvgProps & {
  height?: number | string;
  width?: number | string;
};

export const getAppSVGIconSource = (
  icon: SVGIcons,
  iconProps: SVGIconProps
) => {
  const IconsImage = SVGIcons[icon];

  return <IconsImage {...scaled(12)} {...iconProps} />;
};
