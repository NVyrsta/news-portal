import { createSlice } from '@reduxjs/toolkit';

const articlesCountSlice = createSlice({
  name: 'articlesCount',
  initialState: 10,
  reducers: {
    incrementArticlesCount: (state) => {
      return state + 10;
    },
    
    resetArticlesCount: () => 10
  }
});

export const { incrementArticlesCount, resetArticlesCount } =
  articlesCountSlice.actions;

export default articlesCountSlice.reducer;
