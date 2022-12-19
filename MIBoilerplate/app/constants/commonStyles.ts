import { StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth } from 'app-utils';

const commonStyles = StyleSheet.create({
  headerImg: {
    height: scaleHeight(40),
    width: scaleWidth(40),
  },
});

export default commonStyles;
