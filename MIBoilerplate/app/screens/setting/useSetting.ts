import { useNavigation } from '@react-navigation/native';
import { SettingNavigationProps } from './setting';

export const useSetting = () => {
  const navigation = useNavigation<SettingNavigationProps>();
  const onPressGoBack = () => {
    navigation.goBack();
  };

  return {
    onPressGoBack,
  };
};
