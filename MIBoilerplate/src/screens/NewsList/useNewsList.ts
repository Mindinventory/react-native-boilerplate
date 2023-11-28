import { useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { contents, useAppContext } from '@src/context';
import { NewsResult } from '@src/services';
import { getNewsData as newsData, setNews, useAppDispatch } from '@src/store';
import { logger } from '@src/utils';

import { newsListStyles } from './NewsList.style';
import { Screen } from '../../navigation/appNavigation.type';

const useNewsList = () => {
  const { color, loader, navigation, services } = useAppContext();
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
    navigation.navigate(Screen.NETWORK_CHECK);
  }, [navigation]);

  const handleNavigationNewsItem = useCallback(
    (item: NewsResult) => () => {
      navigation.navigate(Screen.NEWS_DETAIL, {
        item,
      });
    },
    [navigation]
  );

  const handleSetting = useCallback(() => {
    navigation.navigate(Screen.SETTING);
  }, [navigation]);

  useEffect(() => {
    logger('Calling Use Effect');
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
