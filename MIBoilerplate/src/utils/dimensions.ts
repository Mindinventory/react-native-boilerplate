import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const designWidth = 750;
export const designHeight = 1641;

const scaleWidth = (val: number) => {
  return (screenWidth * val) / designWidth;
};

const scaleHeight = (val: number) => {
  return (screenHeight * val) / designHeight;
};

const scale = Math.min(screenWidth / designWidth, screenHeight / designHeight);

const moderateScale = (size: number, factor = 1) =>
  size + (scaleWidth(size) - size) * factor;

const scaledSize = (size: number) => Math.ceil(size * scale);

export {
  moderateScale,
  scaledSize,
  scaleHeight,
  scaleWidth,
  screenHeight,
  screenWidth,
};
