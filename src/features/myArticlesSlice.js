import { createSlice } from '@reduxjs/toolkit';

const myArticlesSlice = createSlice({
  name: 'myArticles',
  initialState: [],
  reducers: {
    addMyArticle: (state, action) => {
      state.push(action.payload);
    },

    removeMyArticle: (state, action) => {
      const articleId = action.payload;
      return state.filter((article) => article.id !== articleId);
    },
    
    updateMyArticle: (state, action) => {
      const updatedArticle = action.payload;
      const articleIndex = state.findIndex(
        (article) => article.id === updatedArticle.id
      );
      if (articleIndex !== -1) {
        state[articleIndex] = updatedArticle;
      }
    }
  }
});

export const { addMyArticle, removeMyArticle, updateMyArticle } =
  myArticlesSlice.actions;

export default myArticlesSlice.reducer;
