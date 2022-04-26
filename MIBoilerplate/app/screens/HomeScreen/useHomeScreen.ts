import {useState, useEffect} from 'react';
import {API, TodosRes} from 'app-services';
import {getRandomColor} from 'app-constants';
import {HomeScreenNavigationProps} from './HomeScreen';
import {RouteNames} from 'app-navigation';
import {useNavigation} from '@react-navigation/native';

export const useHomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const [todoData, setTodoData] = useState<TodosRes[] | []>([]);

  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = async () => {
    try {
      const getAllTodosRes = await API.getAllTodos();
      if (getAllTodosRes) {
        getAllTodosRes.forEach(val => {
          val.backgroundColor = getRandomColor();
        });
        setTodoData(getAllTodosRes);
      }
    } catch (error) {
      console.log('getAllTodos Err >>> ', error);

      return Promise.reject(error);
    }
  };

  const onPressCard = () => {
    navigation.navigate(RouteNames.DetailsScreen);
  };

  return {
    todoData,
    onPressCard,
  };
};
