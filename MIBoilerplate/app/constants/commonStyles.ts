import { StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth } from 'app-utils';
import { palette } from './color';

const commonStyles = StyleSheet.create({
  headerImg: {
    height: scaleHeight(40),
    width: scaleWidth(40),
  },
  iconView: {
    padding: 5,

    justifyContent: 'center',
    alignItems: 'center',
    height: scaleHeight(40),
    width: scaleWidth(40),
  },
  menuIcon: {
    height: scaleHeight(30),
    width: scaleWidth(30),
    tintColor: palette.redPrimary,
  },
});

export default commonStyles;
