import { StyleSheet } from 'react-native';

import { Palette, screenHeight, screenWidth } from '@src/utils';

export const homeStyles = ({
  backgroundColor,
  primaryColor,
  secondaryColor,
}: Palette) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: backgroundColor,
      flex: 1,
      justifyContent: 'center',
    },
    item: {
      backgroundColor: secondaryColor,
      height: screenHeight * 0.5,
      marginHorizontal: screenWidth * 0.1,
      marginVertical: screenHeight * 0.1,
      width: screenWidth * 0.8,
    },
    text: {
      color: primaryColor,
    },
  });
