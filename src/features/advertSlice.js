import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINT } from "../components/api";
import axios from "axios";

const initialState = {
  advertsList: [],
  investmentAdList: [],
  categoriesList: [],
  advertsListNextLink: null,
  investmendAdListNextLink: null,
  advertsError: "",
  categoriesError: "",
  advertStatus: "idle",
  investmentAdStatus: "idle",
  categoriesStatus: "idle",
};

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAdverts",
  async () => {
    const response = await axios.get(`${API_ENDPOINT}/api/adverts/`);
    return response.data;
  }
);

export const fetchInvestmentAdverts = createAsyncThunk(
  "adverts/fetchInvestmentAdverts",
  async () => {
    const response = await axios.get(`${API_ENDPOINT}/api/invest-ads/`);
    return response.data;
  }
);

export const loadMoreAdverts = createAsyncThunk(
  "adverts/loadMoreAdverts",
  async (url) => {
    const response = await axios.get(`${url}`);
    return response.data;
  }
);

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get(`${API_ENDPOINT}/api/categories/`);
    return response.data;
  }
);

export const advertSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* Advert reducers */
    builder.addCase(fetchAdverts.pending, (state, action) => {
      state.advertStatus = "loading";
    });
    builder.addCase(fetchAdverts.fulfilled, (state, action) => {
      state.advertStatus = "success";
      state.advertsList = action.payload.results;
      state.investmendAdListNextLink = action.payload.next;
    });
    builder.addCase(fetchAdverts.rejected, (state, action) => {
      state.advertStatus = "rejected";
    });

    /* Investment Advert extra reducers */
    builder.addCase(fetchInvestmentAdverts.pending, (state, action) => {
      state.investmentAdStatus = "loading";
    });
    builder.addCase(fetchInvestmentAdverts.fulfilled, (state, action) => {
      state.investmentAdStatus = "success";
      state.investmentAdList = action.payload.results
      state.advertsListNextLink = action.payload.next;
      // state.advertsListNextLink = action.payload.next
    });
    builder.addCase(fetchInvestmentAdverts.rejected, (state, action) => {
      state.investmentAdStatus = "rejected";
    });

    builder.addCase(loadMoreAdverts.pending, (state, action) => {
      state.advertStatus = "loading";
    });
    builder.addCase(loadMoreAdverts.fulfilled, (state, action) => {
      state.advertStatus = "success";
      // Append the new results to the existing advertsList array
      state.advertsList = [...state.advertsList, ...action.payload.results];
      state.advertsListNextLink = action.payload.next;
    });
    builder.addCase(loadMoreAdverts.rejected, (state, action) => {
      state.advertStatus = "rejected";
    });

    builder.addCase(fetchCategories.pending, (state, action) => {
      state.categoriesStatus = "loading";
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categoriesStatus = "success";
      state.categoriesList = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.categoriesStatus = "rejected";
    });
  },
});

export const {} = advertSlice.actions;

export default advertSlice.reducer;
