import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") ?? null,
  user: localStorage.getItem("user") ?? null,
  isAuth: localStorage.getItem("isAuth") ?? false,
  userRole: localStorage.getItem("userRole") ?? null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    update: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.userRole = action.payload.userRole;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = authSlice.actions;

export default authSlice.reducer;
