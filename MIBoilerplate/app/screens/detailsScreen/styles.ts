import {StyleSheet} from 'react-native';

const styles = (theme: any) =>
  StyleSheet.create({
    detailContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.primary,
    },
    boldText: {
      fontSize: 18,
      color: theme.shadowColor,
    },
    button: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 13,
      borderWidth: 1,
      borderColor: '#ccc',
      marginTop: 15,
    },
  });

export default styles;
