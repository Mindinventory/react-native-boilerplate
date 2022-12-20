import { StyleSheet } from 'react-native';
import { palette } from 'app-constants';
import { scaleWidth, scaleHeight } from 'app-utils';
import { PaletteType } from 'app-theme';

const settingStyles = (theme: PaletteType) =>
  StyleSheet.create({
    settingContainer: {
      flex: 1,
      paddingHorizontal: scaleWidth(20),
      backgroundColor: theme.primary,
    },
    backBtn: {
      backgroundColor: palette.redPrimary,
      height: scaleHeight(48),
      marginTop: scaleHeight(200),
    },
    backBtnText: {
      color: palette.white,
      fontSize: 16,
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
    sectionItemText: {
      color: theme.themeFontColor,
    },
    langBtn: {
      height: scaleHeight(48),
      marginVertical: scaleHeight(10),
      borderColor: palette.redPrimary,
    },
    redPrimaryBg: {
      backgroundColor: palette.redPrimary,
    },
    langBtnText: {
      color: palette.redPrimary,
    },
  });

export default settingStyles;
