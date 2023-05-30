import { StyleSheet } from 'react-native';

import {
  Palette,
  scaledSize,
  scaleHeight,
  scaleWidth,
  screenWidth,
} from '@src/utils';

export const newsDetailStyles = ({}: Palette) =>
  StyleSheet.create({
    descriptionText: { lineHeight: scaledSize(25), marginTop: scaleHeight(5) },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: scaleHeight(8),
    },
    newsImage: {
      height: screenWidth * 0.8,
      width: screenWidth - scaleWidth(20),
    },
    scrollViewContainer: { paddingHorizontal: scaleWidth(10) },
  });
