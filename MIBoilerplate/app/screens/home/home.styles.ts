import { StyleSheet } from 'react-native';
import { palette } from 'app-constants';
import { constants } from 'app-constants';
import { scaleWidth, scaleHeight } from 'app-utils';
import { PaletteType } from 'app-contexts';

const { IS_ANDROID } = constants;
const cardWidth = constants.DEVICE_WIDTH - scaleWidth(30);

const homeStyles = (theme: PaletteType) =>
  StyleSheet.create({
    appContainer: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.primary,
    },
    logo: {
      height: scaleHeight(70),
      width: scaleWidth(200),
    },
    button: {
      width: scaleWidth(200),
      height: scaleHeight(50),
      borderRadius: 13,
      borderWidth: 1,
      borderColor: theme.darkGray,
      backgroundColor: palette.redPrimary,
    },
    btnTxt: {
      color: palette.white,
    },
    cardLayout: {
      margin: 6,
      borderRadius: 8,
      padding: 8,
      width: cardWidth,
      paddingVertical: scaleHeight(12),
      shadowColor: theme.shadowColor,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    flatListContainer: {
      paddingVertical: 20,
    },
    columnWrapper: {
      justifyContent: 'space-between',
    },
    cardText: {
      color: palette.darkBlack,
    },
    imgContainer: {
      backgroundColor: theme.primary,

      width: constants.DEVICE_WIDTH - scaleWidth(30),
      height: scaleHeight(160),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      padding: 10,
      marginVertical: scaleHeight(25),
      shadowColor: theme.shadowColor,
      shadowOffset: {
        width: 0,
        height: IS_ANDROID ? 2 : 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: IS_ANDROID ? 3.84 : 4,

      elevation: 5,
    },
    headerText: {
      color: theme.themeFontColor,
    },
  });

export default homeStyles;
