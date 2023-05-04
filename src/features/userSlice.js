import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: "",
  isLoggedIn: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload
    },
    toggleIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToken, toggleIsLoggedIn } = userSlice.actions

export default userSlice.reducer