import { createSlice } from '@reduxjs/toolkit';

const pinnedArticleSlice = createSlice({
  name: 'pinnedArticle',
  initialState: null,
  reducers: {
    pinArticle: (_, action) => action.payload,

    unpinArticle: () => null,
  },
});

export const { pinArticle, unpinArticle } = pinnedArticleSlice.actions;

export default pinnedArticleSlice.reducer;
