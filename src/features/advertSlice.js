import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { API_ENDPOINT } from "../components/api";
import axios from "axios";

const initialState = {
    advertStatus: "idle",
    advertsList: [],
    advertsError: ""
}


export const fetchAdverts = createAsyncThunk(
    "adverts/fetchAdverts",
    async () => {
        const response = await axios.get(`${API_ENDPOINT}/api/adverts/`)
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
            state.advertsList = action.payload
        });
        builder.addCase(fetchAdverts.rejected, (state, action)=> {
            state.advertStatus = "rejected"
        });
    }
})

export const {} = advertSlice.actions

export default advertSlice.reducer