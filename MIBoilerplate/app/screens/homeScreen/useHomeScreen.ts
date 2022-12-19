import { useState, useEffect } from 'react';
import { API, packageObj } from 'app-services';
import { getRandomColor } from 'app-constants';
import { HomeScreenNavigationProps } from './homeScreen';
import { RouteNames } from 'app-navigation';
import { useNavigation } from '@react-navigation/native';

export const useHomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const [packagesListData, setPackagesListData] = useState<packageObj[] | []>(
    []
  );

  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = async () => {
    try {
      const getAllTodosRes: packageObj[] = await API.getAllTodos();
      // const {} = getAllTodosRes

      if (getAllTodosRes) {
        getAllTodosRes.forEach((val) => {
          val.backgroundColor = getRandomColor();
        });
        setPackagesListData(getAllTodosRes);
      }
    } catch (error) {
      console.log('getAllTodos Err >>> ', error);
    }
  };

  const onPressCard = () => {
    navigation.navigate(RouteNames.DetailsScreen);
  };

  return {
    packagesListData,
    onPressCard,
  };
};
