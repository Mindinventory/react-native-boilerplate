import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NewsResult } from '@src/services';

type NewsData = {
  news: NewsResult[];
};

const initialState: NewsData = {
  news: [],
};

export const newsDataSlice = createSlice({
  initialState,
  name: 'newsData',
  reducers: {
    resetNewsData: () => initialState,
    setNews: (state, { payload }: PayloadAction<NewsResult[] | []>) => {
      state.news = payload;
    },
  },
});

export const {
  reducer: newsData,
  actions: { resetNewsData, setNews },
  name: newsDataName,
} = newsDataSlice;
