import { scaleFontSize } from './../../utils/aspectRatio';
import { StyleSheet } from 'react-native';
import { scaleWidth, scaleHeight } from 'app-utils';

const styles = (theme: any) =>
  StyleSheet.create({
    detailContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.primary,
    },
    boldText: {
      fontSize: scaleFontSize(18),
      color: theme.shadowColor,
    },
    button: {
      width: scaleWidth(200),
      height: scaleHeight(50),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 13,
      borderWidth: 1,
      borderColor: theme.darkGray,
    },
  });

export default styles;
