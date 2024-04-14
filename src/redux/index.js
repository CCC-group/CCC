import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./authSlice";
import clientSlice from "./clientSlice";

const persistConfig = {
  key: "root",
  storage,
};
const reducers = combineReducers({ auth: authSlice, clients: clientSlice });
const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({reducer: persistedReducer,});

export const persister = persistStore(store);