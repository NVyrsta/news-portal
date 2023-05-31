import { createSlice } from '@reduxjs/toolkit';

const querySlice = createSlice({
  name: 'query',
  initialState: '',
  reducers: {
    setQuery: (_, action) => action.payload,

    clearQuery: () => '',
  },
});

export const { setQuery, clearQuery } = querySlice.actions;

export default querySlice.reducer;
