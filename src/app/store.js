import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import chatReducer from "../features/chatSlice";
import inputReducer from "../features/inputSlice";
import userReducer from "../features/userSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    chat: chatReducer,
    input: inputReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
