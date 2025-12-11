// src/redux/slices/passenger/passengerSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  passengerData: null,
};

const passengerSlice = createSlice({
  name: "passenger",
  initialState,
  reducers: {
    setPassengerData: (state, action) => {
      state.passengerData = action.payload;
    },
    clearPassengerData: (state) => {
      state.passengerData = null;
    },
  },
});

export const { setPassengerData, clearPassengerData } = passengerSlice.actions;
export default passengerSlice.reducer;
