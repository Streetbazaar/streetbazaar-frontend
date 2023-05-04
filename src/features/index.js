import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../app/auth-slice";
import uiSlice from "../app/ui-slice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
    },
});
export default store;
