import { useCallback } from 'react';

import { useRoute } from '@react-navigation/native';

import { contents, useAppContext } from '@src/context';

import { newsDetailStyles } from './NewsDetail.style';
import { NewsDetailRoute } from '../../navigation/appNavigation.type';

const useNewsDetail = () => {
  const { color, navigation } = useAppContext();

  const {
    params: { item: data },
  } = useRoute<NewsDetailRoute>();

  const getPublishedMonth = useCallback((val: number) => {
    const publishedAt = new Date(val).toString();
    return publishedAt.split(' ').slice(0, 3).join(' ');
  }, []);

  const handleGoBack = useCallback(async () => {
    navigation.goBack();
  }, [navigation]);

  return {
    contents,
    data,
    getPublishedMonth,
    handleGoBack,
    navigation,
    styles: newsDetailStyles(color),
  };
};

export default useNewsDetail;
