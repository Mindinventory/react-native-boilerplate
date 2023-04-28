import { baseLayoutStyles } from '@src/components';
import { homeStyles } from '@src/screens/home/home.style';
import { Palette } from '@src/utils';

import { indicatorStyles } from '../../blueprints/indicator';

export const defaultStyles = (theme: Palette) => {
  return {
    baseLayoutStyle: baseLayoutStyles(theme),
    homeStyle: homeStyles(theme),
    indicatorStyle: indicatorStyles(theme),
  };
};
