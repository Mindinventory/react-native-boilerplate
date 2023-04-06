import { StyleSheet } from 'react-native';

import { Palette } from '@src/utils';

export const homeStyles = ({ blue, white }: Palette) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: white,
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: blue,
    },
  });
