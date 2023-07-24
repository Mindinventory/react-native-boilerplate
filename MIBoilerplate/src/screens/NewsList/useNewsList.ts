import { useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useAppContext } from '@src/context';
import { NewsResult } from '@src/services';
import { getNewsData as newsData, setNews, useAppDispatch } from '@src/store';
import { logger } from '@src/utils';

import { newsListStyles } from './NewsList.style';
import { Screen } from '../../navigation/appNavigation.type';

const useNewsList = () => {
  const { color, contents, loader, navigation, services } = useAppContext();
  const dispatch = useAppDispatch();

  const data = useSelector(newsData);

  const getNewsData = useCallback(async () => {
    loader?.show();
    try {
      const getNews = await services.getNews();
      dispatch(setNews(getNews));
    } catch (error) {
      logger('Error getNews>>', error);
    } finally {
      loader?.hide();
    }
  }, [dispatch, loader, services]);

  const handleNavigationNetwork = useCallback(() => {
    navigation.navigate(Screen.SETTING);
  }, [navigation]);

  const handleNavigationNewsItem = useCallback(
    (item: NewsResult) => () => {
      navigation.navigate(Screen.NEWS_DETAIL, {
        item,
      });
    },
    [navigation]
  );

  useEffect(() => {
    getNewsData();
  }, [getNewsData]);

  return {
    contents,
    data,
    handleNavigationNetwork,
    handleNavigationNewsItem,
    styles: newsListStyles(color),
  };
};

export default useNewsList;
