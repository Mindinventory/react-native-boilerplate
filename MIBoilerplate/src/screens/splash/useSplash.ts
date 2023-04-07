import { useAppContext } from '@src/context';

const useSplash = () => {
  const { styles } = useAppContext();

  // add your code here

  return {
    styles: styles.homeStyle,
  };
};

export default useSplash;
