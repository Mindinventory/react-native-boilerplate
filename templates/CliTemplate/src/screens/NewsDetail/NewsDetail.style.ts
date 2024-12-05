import { StyleSheet } from 'react-native';

import { Palette, scaleHeight, scaleWidth, screenWidth } from '@src/utils';

export const newsDetailStyles = ({}: Palette) =>
  StyleSheet.create({
    descriptionText: {},
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: scaleHeight(16),
    },
    newsImage: {
      height: screenWidth * 0.8,
      width: screenWidth - scaleWidth(20),
    },
    scrollViewContainer: { paddingHorizontal: scaleWidth(10) },
    title: {
      marginBottom: scaleHeight(15),
      textAlign: 'center',
    },
  });
