// inputSlice.js
import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    title: '',
    category: '',
    subCategory: '',
    state: '',
    city: '',
    address: '',
    priceType: '',
    price: '',
    condition: '',
    description: '',
    images: [], // Initialize the images array
  },
  reducers: {
    updateInput: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateInput } = inputSlice.actions;
export default inputSlice.reducer;
