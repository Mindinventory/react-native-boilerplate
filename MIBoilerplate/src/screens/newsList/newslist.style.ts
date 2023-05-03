import { StyleSheet } from 'react-native';

import {
  Palette,
  scaled,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '@src/utils';

export const newslistStyles = ({ backgroundColor }: Palette) =>
  StyleSheet.create({
    debugIcon: {
      ...scaled(45),
    },
    flatlistStyles: { paddingHorizontal: scaledSize(10) },
    headerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: scaledSize(20),
    },
    networkButton: {
      position: 'absolute',
      right: scaleWidth(10),
      ...scaled(40),
    },
    newsImage: {
      borderRadius: scaledSize(10),
      height: scaleHeight(190),
      width: scaleWidth(240),
    },
    newsItemContainer: {
      backgroundColor,
      borderRadius: scaledSize(10),
      flex: 1,
      flexDirection: 'row',
      marginBottom: scaleHeight(10),
      marginTop: scaleHeight(10),
    },
    newsTextView: {
      flex: 1,
      padding: scaledSize(10),
    },
  });
