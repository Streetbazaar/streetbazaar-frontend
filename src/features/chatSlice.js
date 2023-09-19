import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    currentChat: null
}


export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        updateIsOpen: (state, action) => {
            state.isOpen = action.payload
        },
        updateCurrentChat: (state, action) => {
            state.currentChat = action.payload
        }
    }
})

export const {updateIsOpen, updateCurrentChat} = chatSlice.actions

export default chatSlice.reducer