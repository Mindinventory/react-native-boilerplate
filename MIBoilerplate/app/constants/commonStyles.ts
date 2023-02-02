import {StyleSheet} from 'react-native';

import {scaleHeight, scaleWidth} from 'app-utils';

import {palette} from './color';

const commonStyles = StyleSheet.create({
  headerImg: {
    height: scaleHeight(40),
    width: scaleWidth(40),
  },
  iconView: {
    alignItems: 'center',

    height: scaleHeight(40),
    justifyContent: 'center',
    padding: 5,
    width: scaleWidth(40),
  },
  marginTop10: {
    marginTop: scaleHeight(10),
  },
  menuIcon: {
    height: scaleHeight(30),
    tintColor: palette.redPrimary,
    width: scaleWidth(30),
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});

export default commonStyles;
