import { useCallback } from 'react';

import { useRoute } from '@react-navigation/native';

import { useAppContext } from '@src/context';
import { NewsDetailRoute } from '@src/navigation';

import { newsDetailStyles } from './NewsDetail.style';

const useNewsDetail = () => {
  const { navigation, getImages, contents, color } = useAppContext();

  const {
    params: { item: data },
  } = useRoute<NewsDetailRoute>();

  const getPublishedMonth = useCallback((val: number) => {
    const publishedAt = new Date(val).toString();
    return publishedAt.split(' ').slice(0, 3).join(' ');
  }, []);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    contents,
    data,
    getImages,
    getPublishedMonth,
    handleGoBack,
    navigation,
    styles: newsDetailStyles(color),
  };
};

export default useNewsDetail;
