import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: 'general',
  reducers: {
    setCategory: (_, action) => {
      return action.payload;
    },
  }
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
