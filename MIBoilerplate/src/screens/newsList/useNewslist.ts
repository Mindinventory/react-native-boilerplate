import { useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useAppContext } from '@src/context';
import { Screen } from '@src/navigation';
import { Country, NewsReqParams, NewsResult } from '@src/services';
import { getNewsData as newsData, setNews, useAppDispatch } from '@src/store';

const PAGE_SIZE = 100;

const newsReqPrams: NewsReqParams = {
  country: Country.India,
  pageSize: PAGE_SIZE,
};

const useNewslist = () => {
  const { navigation, styles, loader, getIcons, contents, getImages } =
    useAppContext();
  const dispatch = useAppDispatch();
  const { services } = useAppContext();

  const data = useSelector(newsData);

  const getNewsData = useCallback(async () => {
    loader.current?.show();

    const getNews = await services.getNews(newsReqPrams);
    dispatch(setNews(getNews));

    loader.current?.hide();
  }, [dispatch, loader, services]);

  const onPressNetwork = () => {
    navigation.navigate(Screen.SETTING);
  };

  const onPressNewsItem = (item: NewsResult) => () => {
    navigation.navigate(Screen.NEWS_DETAIL, {
      item,
    });
  };

  useEffect(() => {
    if (data.length < 0) {
      getNewsData();
    }
  }, [data.length, getNewsData]);

  return {
    contents,
    data,
    getIcons,
    getImages,
    onPressNetwork,
    onPressNewsItem,
    styles: styles.newsListStyle,
  };
};

export default useNewslist;
