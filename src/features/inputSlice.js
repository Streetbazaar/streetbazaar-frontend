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
    price: 0,
    condition: '',
    description: '',
    imageURLs: [], // Initialize the images array
  },
  reducers: {
    updateInput: (state, action) => {
      return { ...state, ...action.payload };
    },
    appendImages: (state, action) => {
      state.imageURLs.push(action.payload);
    },
    updateImages: (state, action) => {
      state.imageURLs = [...action.payload]
    },
  },
});

export const { updateInput, appendImages, updateImages } = inputSlice.actions;
export default inputSlice.reducer;
