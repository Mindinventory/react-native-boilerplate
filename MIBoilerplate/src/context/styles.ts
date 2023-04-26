import { baseLayoutStyles } from '@src/components';
import { homeStyles } from '@src/screens/home/home.style';
import { Palette } from '@src/utils';

import { indicatorStyles } from '../../blueprints/indicator';
import { textStyles } from '../../blueprints/text';

export const defaultStyles = (theme: Palette) => {
  return {
    baseLayoutStyle: baseLayoutStyles(theme),
    homeStyle: homeStyles(theme),
    indicatorStyle: indicatorStyles(theme),
    textStyle: textStyles(theme),
  };
};
