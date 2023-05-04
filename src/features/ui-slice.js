import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { notification: true },
    reducers: {
        showNotification(state, action) {
            state.notification = {
                open: action.payload.open,
            }
        }
    }
})
export const uiActions = uiSlice.actions;

export default uiSlice;


