import { ColorSchemeName } from 'react-native/types';

export const color = {
  dark: {
    backgroundColor: '#212121',
    // off-white
    buttonTextColor: '#FFFFFF',

    // light grey
    primaryColor: '#0a84ff',

    // bright blue
    secondaryColor: '#dcdcdc',
    // dark grey
    textColor: '#f8f9fa',
  },
  light: {
    backgroundColor: '#f8f9fa',
    // dark grey
    buttonTextColor: '#FFFFFF',

    // grey
    primaryColor: '#000080',

    // blue
    secondaryColor: '#6c757d',
    // off-white
    textColor: '#343a40',
  },
  theme1: {
    backgroundColor: '#f8f8f8',
    // dark grey
    buttonTextColor: '#FFFFFF',

    // light pink
    primaryColor: '#ff5a5f',

    // red
    secondaryColor: '#f2c9c9',
    // off-white
    textColor: '#424242',
  },
  theme2: {
    backgroundColor: '#e5e5e5',
    // dark grey
    buttonTextColor: '#FFFFFF',

    // wheat
    primaryColor: '#000080',

    // navy blue
    secondaryColor: '#f5deb3',
    // light grey
    textColor: '#333333',
  },
  theme3: {
    backgroundColor: '#f0f0f0',
    // dark slate grey
    buttonTextColor: '#FFFFFF',

    // light yellow
    primaryColor: '#800000',

    // maroon
    secondaryColor: '#ffffe0',
    // light grey
    textColor: '#2f4f4f',
  },
  theme4: {
    backgroundColor: '#f5f5f5',
    // dark grey
    buttonTextColor: '#FFFFFF',

    // misty rose
    primaryColor: '#663399',

    // rebecca purple
    secondaryColor: '#ffe4e1',
    // light grey
    textColor: '#333333',
  },
};

export type Palette = (typeof color)[keyof typeof color];

export type Theme = ColorSchemeName | keyof typeof color;
