import { configureStore } from '@reduxjs/toolkit';

import articlesReducer from '../features/articlesSlice';

import userReducer from '../features/userSlice';
import articlesCountReducer from '../features/articlesCountSlice';
import myArticlesReducer from '../features/myArticlesSlice';
import pinnedArticleReducer from '../features/pinnedArticleSlice';
import queryReducer from '../features/querySlice';
import categoryReducer from '../features/categorySlice';

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    user: userReducer,
    articlesCount: articlesCountReducer,
    myArticles: myArticlesReducer,
    pinnedArticle: pinnedArticleReducer,
    query: queryReducer,
    category: categoryReducer,
  },
});

export default store;
