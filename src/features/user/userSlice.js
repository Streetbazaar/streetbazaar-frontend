import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToken } = userSlice.actions

export default userSlice.reducer