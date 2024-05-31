import { RootState } from '../index';

export const getNewsData = (state: RootState) => state.newsData.news;
