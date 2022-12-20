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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  marginTop10: {
    marginTop: scaleHeight(10),
  },
});

export default commonStyles;
