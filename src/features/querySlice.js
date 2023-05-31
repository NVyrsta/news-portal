import { createSlice } from '@reduxjs/toolkit';

const querySlice = createSlice({
  name: 'query',
  initialState: '',
  reducers: {
    setQuery: (_, action) => {
      return action.payload;
    },

    clearQuery: () => {
      return '';
    }
  }
});

export const { setQuery, clearQuery } = querySlice.actions;

export default querySlice.reducer;
