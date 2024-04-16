import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { rootReducer } from "./rootReducer";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['auth'],
  debug: true,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({reducer: persistedReducer,});

export const persister = persistStore(store);
