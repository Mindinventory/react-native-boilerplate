import {useState, useEffect} from 'react';
import {API, PackageObj} from 'app-services';
import {getRandomColor} from 'app-constants';

export const useHome = () => {
  const [packagesListData, setPackagesListData] = useState<PackageObj[] | []>(
    [],
  );

  useEffect(() => {
    getAllPackages();
  }, []);

  const getAllPackages = async () => {
    try {
      const allPackages: PackageObj[] = await API.getAllPackages();
      if (allPackages) {
        allPackages.forEach(val => {
          val.backgroundColor = getRandomColor();
        });
        setPackagesListData(allPackages);
      }
    } catch (error) {
      console.log('getAllPackages Err >>> ', error);
    }
  };

  return {
    packagesListData,
  };
};
