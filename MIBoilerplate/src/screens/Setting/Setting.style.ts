import { StyleSheet } from 'react-native';

import { Palette, scaled, scaleHeight, scaleWidth } from '@src/utils';

export const settingStyles = ({ primaryColor }: Palette) =>
  StyleSheet.create({
    content: {
      marginTop: scaleHeight(25),
      paddingHorizontal: scaleWidth(15),
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
      marginRight: '20%',
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
