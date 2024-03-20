import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import clientSlice from "./clientSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    clients: clientSlice,
  },
});
