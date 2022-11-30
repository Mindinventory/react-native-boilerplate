import { useNavigation } from '@react-navigation/native';
import { DetailsScreenNavigationProps } from './detailsScreen';

export const useDetailsScreen = () => {
  const navigation = useNavigation<DetailsScreenNavigationProps>();

  const onPressGoBack = () => {
    navigation.goBack();
  };

  return {
    onPressGoBack,
  };
};
