import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./featuers/auth/authSlice";
export const store = configureStore({
  reducer: { auth: authSlice },
});
