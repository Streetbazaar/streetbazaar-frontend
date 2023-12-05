// inputSlice.js
import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    adId: "",
    title: "",
    category: "",
    subCategory: "",
    state: "",
    city: "",
    address: "",
    priceType: "",
    price: 0,
    condition: "",
    description: "",
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
      state.imageURLs = [...action.payload];
    },
    updateAdId: (state, action) => {
      state.adId = action.payload
    },
    clearFields: (state) => {
      state.adId = "";
      state.title = "";
      state.category = "";
      state.subCategory = "";
      state.state = "";
      state.city = "";
      state.address = "";
      state.priceType = "";
      state.price = 0;
      state.condition = "";
      state.description = "";
      state.imageURLs = [];
    },
  },
});

export const { updateInput, appendImages, updateImages, clearFields, updateAdId } = inputSlice.actions;
export default inputSlice.reducer;
