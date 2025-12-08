import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Stores user data after successful OTP verification
  isAuthenticated: false,
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logout } = loginSlice.actions;
export default loginSlice.reducer;
