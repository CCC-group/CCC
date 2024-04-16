import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import clientSlice from "./clientSlice";

export const rootReducer = combineReducers({
  auth: authSlice,
  clients: clientSlice,
});
