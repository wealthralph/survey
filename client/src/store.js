import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./utilities/slices/authSlice.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  devTools: true
});
