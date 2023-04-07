import { useAppContext } from '@src/context';

const useLogin = () => {
  const { navigation, styles } = useAppContext();

  // add your code here

  return {
    navigation,
    styles: styles.loginStyle,
  };
};

export default useLogin;
