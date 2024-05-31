import { ColorSchemeName } from 'react-native';

export const color = {
  dark: {
    backgroundColor: '#212121', // light grey
    primaryColor: '#0a84ff', // bright blue
    secondaryColor: '#dcdcdc', // dark grey
    textColor: '#f8f9fa', // off-white
  },
  light: {
    backgroundColor: '#f8f9fa', // grey
    primaryColor: '#000080', // blue
    secondaryColor: '#6c757d', // off-white
    textColor: '#343a40', // dark grey
  },
  theme1: {
    backgroundColor: '#f8f8f8', // light pink
    primaryColor: '#ff5a5f', // red
    secondaryColor: '#f2c9c9', // off-white
    textColor: '#424242', // dark grey
  },
  theme2: {
    backgroundColor: '#e5e5e5', // wheat
    primaryColor: '#000080', // navy blue
    secondaryColor: '#f5deb3', // light grey
    textColor: '#333333', // dark grey
  },
  theme3: {
    backgroundColor: '#f0f0f0', // light yellow
    primaryColor: '#800000', // maroon
    secondaryColor: '#ffffe0', // light grey
    textColor: '#2f4f4f', // dark slate grey
  },
  theme4: {
    backgroundColor: '#f5f5f5', // misty rose
    primaryColor: '#663399', // rebecca purple
    secondaryColor: '#ffe4e1', // light grey
    textColor: '#333333', // dark grey
  },
};

export type Palette = (typeof color)[keyof typeof color];

export type Theme = ColorSchemeName | keyof typeof color;
