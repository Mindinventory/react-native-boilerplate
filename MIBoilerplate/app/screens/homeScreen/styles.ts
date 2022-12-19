import { StyleSheet } from 'react-native';
import { palette } from 'app-constants';
import { constants } from 'app-constants';

const { IS_ANDROID } = constants;
const cardWidth = constants.DEVICE_WIDTH - 30;

const styles = (theme: any) =>
  StyleSheet.create({
    appContainer: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.primary,
    },
    logo: {
      height: 80,
      width: 250,
      marginTop: 235,
    },
    button: {
      width: 200,
      height: 50,
      borderRadius: 13,
      borderWidth: 1,
      borderColor: '#ccc',
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
      paddingBottom: 8,
    },
    columnWrapper: {
      justifyContent: 'space-between',
    },
    cardText: {
      color: palette.darkBlack,
    },
    imgContainer: {
      backgroundColor: theme.primary,
      width: constants.DEVICE_WIDTH + 220,
      height: constants.DEVICE_HEIGHT / 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: 300,
      borderBottomRightRadius: 300,
      marginBottom: 20,
      marginTop: -250,
      shadowColor: theme.shadowColor,
      shadowOffset: {
        width: 0,
        height: IS_ANDROID ? 2 : 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: IS_ANDROID ? 3.84 : 14.5,

      elevation: 5,
    },
  });

export default styles;
