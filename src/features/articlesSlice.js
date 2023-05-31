import { createSlice } from '@reduxjs/toolkit';

const articlesSlice = createSlice({
  name: 'articles',
  initialState: [],
  reducers: {
    addArticle: (state, action) => {
      state.push(action.payload);
    },
    
    resetArticles: () => {
      return [];
    }
  }
});

export const { addArticle, removeArticle, resetArticles } =
  articlesSlice.actions;

export default articlesSlice.reducer;
