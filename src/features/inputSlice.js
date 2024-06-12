// inputSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ENDPOINT } from "../components/api";

export const fetchPackages = createAsyncThunk(
	"fetchPackages",
	async (token) => {
		const response = await axios.get(`${API_ENDPOINT}/api/packages/`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		// console.log(response.data);
		return response.data;
	}
);

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
		price: "",
		condition: "",
		description: "",
		categoryId: "",
		subCategoryId: "",
		imageURLs: [], // Initialize the images array
		quantity: "",
		packages: [],
		packageStatus: "idle",
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
			state.adId = action.payload;
		},
		updateCategoryId: (state, action) => {
			state.categoryId = action.payload;
		},
		updateSubCategoryId: (state, action) => {
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
		builder.addCase(fetchPackages.pending, (state) => {
			state.packageStatus = "loading";
		});
		builder.addCase(fetchPackages.fulfilled, (state, action) => {
			state.packageStatus = "success";
			state.packages = action.payload;
			// console.log(action.payload);
		});
		builder.addCase(fetchPackages.rejected, (state, action) => {
			state.packageStatus = "rejected";
		});
	},
});

export const {
	updateInput,
	appendImages,
	updateImages,
	clearFields,
	updateAdId,
	updateCategoryId,
	updateSubCategoryId,
} = inputSlice.actions;
export default inputSlice.reducer;
