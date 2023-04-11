import { useAppContext } from '@src/context';

const useNetworklogger = () => {
  const { navigation, styles } = useAppContext();

  // add your code here

  return {
    navigation,
    styles: styles.homeStyle,
  };
};

export default useNetworklogger;
