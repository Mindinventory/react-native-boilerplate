import { useCallback, useEffect } from 'react';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { contents, useAppContext } from '@src/context';
import { NewsResult } from '@src/services';
import { getNewsData as newsData, setNews, useAppDispatch } from '@src/store';
import { logger } from '@src/utils';

import { newsListStyles } from './NewsList.style';
import { NavStackParams, Screen } from '../../navigation/appNavigation.type';

const useNewsList = () => {
  const { color, loader, services } = useAppContext();
  const { navigate } =
    useNavigation<NavigationProp<NavStackParams, Screen.NEWS_LIST>>();
  const dispatch = useAppDispatch();

  const data = useSelector(newsData);

  const getNewsData = useCallback(async () => {
    loader.current?.show();
    try {
      const getNews = await services.getNews();
      dispatch(setNews(getNews));
    } catch (error) {
      logger('Error getNews>>', error);
    } finally {
      loader.current?.hide();
    }
  }, [loader, services, dispatch]);

  const handleNavigationNetwork = useCallback(() => {
    navigate(Screen.NETWORK_CHECK);
  }, [navigate]);

  const handleNavigationNewsItem = useCallback(
    (item: NewsResult) => () => {
      navigate(Screen.NEWS_DETAIL, { item });
    },
    [navigate]
  );

  const handleSetting = useCallback(() => {
    navigate(Screen.SETTING);
  }, [navigate]);

  useEffect(() => {
    getNewsData();
  }, [getNewsData]);

  return {
    color,
    contents,
    data,
    handleNavigationNetwork,
    handleNavigationNewsItem,
    handleSetting,
    styles: newsListStyles(color),
  };
};

export default useNewsList;
