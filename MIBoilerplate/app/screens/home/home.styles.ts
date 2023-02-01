import {StyleSheet} from 'react-native';

import {constants, palette} from 'app-constants';
import {PaletteType} from 'app-contexts';
import {scaleHeight, scaleWidth} from 'app-utils';

const {IS_ANDROID} = constants;
const cardWidth = constants.DEVICE_WIDTH - scaleWidth(30);

const homeStyles = (theme: PaletteType) =>
  StyleSheet.create({
    appContainer: {
      alignItems: 'center',
      backgroundColor: theme.primary,
      flex: 1,
      justifyContent: 'space-between',
    },
    cardLayout: {
      borderRadius: 8,
      elevation: 5,
      margin: 6,
      padding: 8,
      paddingVertical: scaleHeight(12),
      shadowColor: theme.shadowColor,
      shadowOffset: {
        height: 2,
        width: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      width: cardWidth,
    },
    cardText: {
      color: palette.darkBlack,
    },
    flatListContainer: {
      paddingVertical: 20,
    },
    headerText: {
      color: theme.themeFontColor,
    },
    imgContainer: {
      alignItems: 'center',

      backgroundColor: theme.primary,
      borderRadius: 15,
      elevation: 5,
      height: scaleHeight(160),
      justifyContent: 'center',
      marginVertical: scaleHeight(25),
      padding: 10,
      shadowColor: theme.shadowColor,
      shadowOffset: {
        height: IS_ANDROID ? 2 : 4,
        width: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: IS_ANDROID ? 3.84 : 4,

      width: constants.DEVICE_WIDTH - scaleWidth(30),
    },
    logo: {
      height: scaleHeight(70),
      width: scaleWidth(200),
    },
  });

export default homeStyles;
