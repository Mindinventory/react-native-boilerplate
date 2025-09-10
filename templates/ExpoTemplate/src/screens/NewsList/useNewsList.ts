import { useCallback, useEffect } from 'react';

import { router } from 'expo-router';
import { useSelector } from 'react-redux';

import { contents, useAppContext } from '@src/context';
import { NewsResult } from '@src/services';
import { getNewsData as newsData, setNews, useAppDispatch } from '@src/store';
import { logger } from '@src/utils';

import { newsListStyles } from './NewsList.style';

const useNewsList = () => {
  const { color, loader, services } = useAppContext();
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
    router.push('/network-check');
  }, []);

  const handleNavigationNewsItem = useCallback(
    (item: NewsResult) => () => {
      router.push({
        params: { item: JSON.stringify(item) },
        pathname: '/news-detail',
      });
    },
    []
  );

  const handleSetting = useCallback(() => {
    router.push('/setting');
  }, []);

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
