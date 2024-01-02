import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import chatReducer from "../features/chatSlice";
import inputReducer from "../features/inputSlice";
import userReducer from "../features/userSlice";
import advertReducer from "../features/advertSlice"
import userAdvertReducer from "../features/userAdvertSlice";


const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
  input: inputReducer,
  adverts: advertReducer,
  userAdverts: userAdvertReducer 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
