import { useCallback } from 'react';

import { router, useLocalSearchParams } from 'expo-router';

import { contents, useAppContext } from '@src/context';
import { NewsResult } from '@src/services';

import { newsDetailStyles } from './NewsDetail.style';

const useNewsDetail = () => {
  const { color } = useAppContext();
  const { item } = useLocalSearchParams<{ item: string }>();

  const data: NewsResult = item ? JSON.parse(item) : null;

  const getPublishedMonth = useCallback((val: number) => {
    const publishedAt = new Date(val).toString();
    return publishedAt.split(' ').slice(0, 3).join(' ');
  }, []);

  const handleGoBack = useCallback(async () => {
    router.back();
  }, []);

  return {
    contents,
    data,
    getPublishedMonth,
    handleGoBack,
    styles: newsDetailStyles(color),
  };
};

export default useNewsDetail;
