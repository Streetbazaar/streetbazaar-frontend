// inputSlice.js
import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    isLoading: false,
    adId: "",
    title: "",
    category: "",
    subCategory: "",
    state: "",
    city: "",
    address: "",
    priceType: "",
    price: null,
    condition: "",
    description: "",
    categoryId: null,
    subCategoryId: null,
    imageURLs: [], // Initialize the images array
    quantity: null
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
    updateCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
    updateSubCategoryId: (state, action) => {
      state.subCategoryId = action.payload
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
      state.price = null;
      state.condition = "";
      state.description = "";
      state.imageURLs = [];
      state.subCategoryId = null;
      state.categoryId = null;
      state.quantity = null
    },
  },
});

export const { updateInput, appendImages, updateImages, clearFields, updateAdId, updateCategoryId, updateSubCategoryId } = inputSlice.actions;
export default inputSlice.reducer;
