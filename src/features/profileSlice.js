import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ENDPOINT } from "../components/api";

export const fetchRenewalPackages = createAsyncThunk(
  "fetchRenewalPackages",
  async (token) => {
    const response = await axios.get(`${API_ENDPOINT}/api/packages/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

const profileSlice = createSlice({
  name: "profile",
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
    price: "",
    condition: "",
    description: "",
    categoryId: "",
    subCategoryId: "",
    imageURLs: [], // Initialize the images array
    quantity: "",
    renewalPackages: [],
    renewalPackageStatus: "idle",
  },
  reducers: {
    editAdvertItem: (state, action) => {
      return { ...state, ...action.payload };
    },
    appendAdImages: (state, action) => {
      state.imageURLs.push(action.payload);
    },
    updateAdImages: (state, action) => {
      state.imageURLs = [...action.payload];
    },
    editAdId: (state, action) => {
      state.adId = action.payload;
    },
    editCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    editSubCategoryId: (state, action) => {
      state.subCategoryId = action.payload;
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
      state.price = "";
      state.condition = "";
      state.description = "";
      state.imageURLs = [];
      state.subCategoryId = "";
      state.categoryId = "";
      state.quantity = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRenewalPackages.pending, (state) => {
      state.renewalPackageStatus = "loading";
    });
    builder.addCase(fetchRenewalPackages.fulfilled, (state, action) => {
      state.renewalPackageStatus = "success";
      state.renewalPackages = action.payload;
    });
    builder.addCase(fetchRenewalPackages.rejected, (state, action) => {
      state.renewalPackageStatus = "rejected";
    });
  },
});


export const { editAdvertItem, appendAdImages, updateAdImages, editAdId, editCategoryId, editSubCategoryId, clearFields } = profileSlice.actions;
export default profileSlice.reducer;