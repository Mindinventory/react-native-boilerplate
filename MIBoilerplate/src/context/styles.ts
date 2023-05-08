import { baseLayoutStyles } from '@src/components';
import { newsdetailStyles } from '@src/screens/newsDetail/newsdetail.style';
import { newslistStyles } from '@src/screens/newsList/newslist.style';
import { Palette } from '@src/utils';

import { indicatorStyles } from '../../blueprints/indicator';

export const defaultStyles = (theme: Palette) => {
  return {
    baseLayoutStyle: baseLayoutStyles(theme),
    indicatorStyle: indicatorStyles(theme),
    newsDetailStyle: newsdetailStyles(theme),
    newsListStyle: newslistStyles(theme),
  };
};
