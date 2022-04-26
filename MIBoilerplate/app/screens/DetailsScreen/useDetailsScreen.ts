import {useNavigation} from '@react-navigation/native';
import {DetailsScreenNavigationProps} from './DetailsScreen';

export const useDetailsScreen = () => {
  const navigation = useNavigation<DetailsScreenNavigationProps>();

  const onPressGoBack = () => {
    navigation.goBack();
  };

  return {
    onPressGoBack,
  };
};
