import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ENDPOINT } from "../components/api";

export const fetchUser = createAsyncThunk("fetchUser", async (token) => {
  const response = await axios.get(`${API_ENDPOINT}/api/auth/user/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

const initialState = {
  token: "",
  isLoggedIn: false,
  userProfile: {},
  userProfileStatus: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    updateIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    updateUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    logoutUser: (state) => {
      state.userProfile = {};
      state.isLoggedIn = false;
      state.token = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.userProfileStatus = "loading";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.userProfileStatus = "success";
      state.userProfile = action.payload;
      console.log(action.payload, "from fetchUser")
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.userProfileStatus = "failed";
    });
  },
});

// Action creators are generated for each case reducer function
export const { updateToken, updateIsLoggedIn, updateUserProfile, logoutUser } =
  userSlice.actions;

export default userSlice.reducer;
