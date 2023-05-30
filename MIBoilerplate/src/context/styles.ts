import { baseLayoutStyles } from '@src/components';
import { newsDetailStyles } from '@src/screens/NewsDetail/NewsDetail.style';
import { newsListStyles } from '@src/screens/NewsList/NewsList.style';
import { Palette } from '@src/utils';

import { indicatorStyles } from '../../blueprints/Indicator/Indicator';

export const defaultStyles = (theme: Palette) => {
  return {
    baseLayoutStyle: baseLayoutStyles(theme),
    indicatorStyle: indicatorStyles(theme),
    newsDetailStyle: newsDetailStyles(theme),
    newsListStyle: newsListStyles(theme),
  };
};
