export const color = {
  dark: {
    black: '#262626',
    blue: '#1471A4',
    darkBlack: '#000000',
    green: '#61BF66',
    grey: '#D7D7D7',
    red: '#FF2424',
    transparent: 'transparent',
    white: '#F5F5F5',
    whiteAlpha: '#FFFFFF',
  },
  light: {
    black: '#F5F5F5',
    blue: '#1471A4',
    darkBlack: '#FFFFFF',
    green: '#61BF66',
    grey: '#D7D7D7',
    red: '#FF2424',
    transparent: 'transparent',
    white: '#262626',
    whiteAlpha: '#000000',
  },
};

export type Palette = (typeof color)[keyof typeof color];
