import { StyleSheet } from 'react-native';

import {
  Palette,
  scaled,
  scaledSize,
  scaleHeight,
  scaleWidth,
} from '@src/utils';

export const newsListStyles = ({ backgroundColor }: Palette) =>
  StyleSheet.create({
    debugIcon: {
      ...scaled(22),
    },
    flatlistStyles: { paddingHorizontal: scaledSize(5) },
    headerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: scaleHeight(10),
    },
    networkButton: {
      position: 'absolute',
      right: scaleWidth(5),
      ...scaled(20),
    },
    newsImage: {
      borderRadius: scaledSize(5),
      height: scaleHeight(95),
      width: scaleWidth(120),
    },
    newsItemContainer: {
      backgroundColor,
      borderRadius: scaledSize(5),
      flex: 1,
      flexDirection: 'row',
      marginBottom: scaleHeight(5),
      marginTop: scaleHeight(5),
    },
    newsTextView: {
      flex: 1,
      padding: scaledSize(5),
    },
  });
