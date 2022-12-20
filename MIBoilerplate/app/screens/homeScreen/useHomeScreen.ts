import { useState, useEffect } from 'react';
import { API, packageObj } from 'app-services';
import { getRandomColor } from 'app-constants';

export const useHomeScreen = () => {
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

  return {
    packagesListData,
  };
};
