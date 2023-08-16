import { StyleSheet } from 'react-native';

import { Palette, scaledSize, scaleWidth } from '@src/utils';

export const forceUpdateStyles = ({ backgroundColor, textColor }: Palette) =>
  StyleSheet.create({
    buttonContainer: {
      marginTop: 40,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: scaleWidth(50),
    },
    messageStyle: {
      color: textColor,
      fontSize: scaledSize(18),
      marginBottom: 40,
      textAlign: 'center',
    },
    retryButton: {
      backgroundColor: backgroundColor,
      borderColor: textColor,
      borderWidth: 1,
      marginTop: 20,
    },
    retryText: {
      color: textColor,
    },
    updateText: {
      color: backgroundColor,
    },
  });
