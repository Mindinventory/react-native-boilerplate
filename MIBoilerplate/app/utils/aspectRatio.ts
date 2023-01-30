import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const designWidth = 390;
export const designHeight = 844;

export const scaleWidth = (val: number): number => {
  return (width * val) / designWidth;
};

export const scaleHeight = (val: number): number => {
  return (height * val) / designHeight;
};

export const scaleFontSize = (size: number, factor = 1): number =>
  size + (scaleWidth(size) - size) * factor;
