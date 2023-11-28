import { StyleSheet } from 'react-native';

import { Palette, scaledSize, scaleHeight, scaleWidth } from '@src/utils';

export const forceUpdateStyles = ({ backgroundColor, textColor }: Palette) =>
  StyleSheet.create({
    buttonContainer: {
      marginTop: scaleHeight(40),
    },
    container: {
      backgroundColor: backgroundColor,
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: scaleWidth(35),
    },
    messageStyle: {
      color: textColor,
      fontSize: scaledSize(18),
      marginBottom: scaleHeight(40),
      textAlign: 'center',
    },
    retryButton: {
      backgroundColor: backgroundColor,
      borderColor: textColor,
      borderWidth: scaleWidth(1),
      marginTop: scaleHeight(20),
    },
    retryText: {
      color: textColor,
    },
    updateText: {
      color: backgroundColor,
    },
  });
