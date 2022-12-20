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
    },
    backBtnText: {
      color: palette.white,
      fontSize: 16,
    },
  });

export default settingStyles;
