import { StyleSheet } from 'react-native';

import { Palette, scaled, scaleHeight, scaleWidth } from '@src/utils';

export const settingStyles = ({ primaryColor }: Palette) =>
  StyleSheet.create({
    btn: {
      marginTop: scaleHeight(30),
    },
    content: {
      marginTop: scaleHeight(25),
      paddingHorizontal: scaleWidth(50),
    },
    header: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    radio: {
      ...scaled(20),
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 1,
      justifyContent: 'center',
    },
    selectedRadio: {
      ...scaled(10),
      backgroundColor: primaryColor,
      borderRadius: 10,
    },
    themes: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: scaleHeight(5),
    },
  });
