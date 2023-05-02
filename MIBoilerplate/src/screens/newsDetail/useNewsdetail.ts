import { useRoute } from '@react-navigation/native';

import { useAppContext } from '@src/context';
import { NewsDetailRoute } from '@src/navigation';

const useNewsdetail = () => {
  const { navigation, styles, getImages, contents } = useAppContext();

  const {
    params: { item: data },
  } = useRoute<NewsDetailRoute>();

  const getPublishedMonth = (val: string) => {
    const publishedAt = new Date(val).toString();
    return publishedAt.split(' ').slice(0, 3).join(' ');
  };

  return {
    contents,
    data,
    getImages,
    getPublishedMonth,
    navigation,
    styles: styles.newsDetailStyle,
  };
};

export default useNewsdetail;
