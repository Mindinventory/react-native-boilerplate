import {StyleSheet} from 'react-native';

import {palette} from 'app-constants';
import {PaletteType} from 'app-contexts';
import {scaleHeight, scaleWidth} from 'app-utils';

const settingStyles = (theme: PaletteType) =>
  StyleSheet.create({
    backBtn: {
      backgroundColor: palette.redPrimary,
      height: scaleHeight(48),
      marginTop: scaleHeight(200),
    },
    backBtnText: {
      color: palette.white,
      fontSize: 16,
    },
    langBtn: {
      borderColor: palette.redPrimary,
      height: scaleHeight(48),
      marginVertical: scaleHeight(10),
    },
    langBtnText: {
      color: palette.redPrimary,
    },
    redPrimaryBg: {
      backgroundColor: palette.redPrimary,
    },
    sectionItemText: {
      color: theme.themeFontColor,
    },
    sectionLayout: {
      // backgroundColor: '#ccc',
      marginVertical: scaleHeight(25),
    },
    sectionTitle: {
      color: theme.themeFontColor,
    },
    sectionTitleView: {
      backgroundColor: palette.grayChateau,
      borderRadius: 4,
      paddingLeft: 2,
      paddingVertical: 2,
    },
    settingContainer: {
      backgroundColor: theme.primary,
      flex: 1,
      paddingHorizontal: scaleWidth(20),
    },
  });

export default settingStyles;
