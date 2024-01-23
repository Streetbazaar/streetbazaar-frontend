import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { API_ENDPOINT } from "../components/api";
import axios from "axios";

const initialState = {
    advertStatus: "idle",
    advertsList: [],
    advertsListNextLink: null,
    advertsError: "",
    categoriesList: [],
    categoriesError: "",
    categoriesStatus: "idle"
}


export const fetchAdverts = createAsyncThunk(
    "adverts/fetchAdverts",
    async () => {
        const response = await axios.get(`${API_ENDPOINT}/api/adverts/`)
        return response.data
    }
)

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async () => {
        const response = await axios.get(`${API_ENDPOINT}/api/categories/`)
        return response.data
    }
)


export const advertSlice = createSlice({
    name: "adverts",
    initialState,
    reducers: {
       
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchAdverts.pending, (state, action)=> {
            state.advertStatus = "loading"
        });
        builder.addCase(fetchAdverts.fulfilled, (state, action)=> {
            state.advertStatus = "success"
            state.advertsList = action.payload.results
            state.advertsListNextLink = action.payload.next
            
        });
        builder.addCase(fetchAdverts.rejected, (state, action)=> {
            state.advertStatus = "rejected"
        });
        builder.addCase(fetchCategories.pending, (state, action)=> {
            state.categoriesStatus = "loading"
        });
        builder.addCase(fetchCategories.fulfilled, (state, action)=> {
            state.categoriesStatus = "success"
            state.categoriesList = action.payload
        });
        builder.addCase(fetchCategories.rejected, (state, action)=> {
            state.categoriesStatus = "rejected"
        });
    }
})

export const {} = advertSlice.actions

export default advertSlice.reducer