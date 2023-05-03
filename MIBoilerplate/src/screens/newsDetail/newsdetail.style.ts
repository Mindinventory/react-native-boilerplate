import { StyleSheet } from 'react-native';

import {
  Palette,
  scaledSize,
  scaleHeight,
  scaleWidth,
  screenWidth,
} from '@src/utils';

export const newsdetailStyles = ({}: Palette) =>
  StyleSheet.create({
    descriptionText: { lineHeight: scaledSize(50), marginTop: scaleHeight(10) },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: scaledSize(15),
    },
    newsImage: {
      height: screenWidth * 0.8,
      width: screenWidth - scaleWidth(40),
    },
    scrollViewContainer: { paddingHorizontal: scaleWidth(20) },
  });
