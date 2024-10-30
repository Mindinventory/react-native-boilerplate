import { StyleSheet } from 'react-native';

import { Palette, scaledSize, scaleHeight, scaleWidth } from '@src/utils';

export const loginStyles = ({ backgroundColor, secondaryColor }: Palette) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    content: {
      backgroundColor: backgroundColor,
      borderRadius: scaledSize(30),
      flex: 2,
      paddingHorizontal: scaleWidth(15),
      paddingTop: scaleHeight(25),
      top: -scaleHeight(25),
    },
    fieldContainer: {},
    header: {
      backgroundColor: secondaryColor,
      flex: 1,
    },
    input: {
      marginVertical: scaleHeight(10),
    },
    loginBtn: {
      marginTop: scaleHeight(15),
    },
  });
