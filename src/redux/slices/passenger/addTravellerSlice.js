// src/redux/slices/workbench/addOfferSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiURL } from "../../../constant/Constant";

export const addPassenger = createAsyncThunk(
  "addPassenger/post",
  async (payload, { getState }) => {
    const state = getState();
    const tpToken = state.tpToken.tpTokenData?.access_token;
    const reservationIdDevKit =
      state.workbench.data?.data?.ReservationResponse?.Reservation?.Identifier
        ?.value;

    try {
      const response = await axios.post(
        `${apiURL.baseURL}/api/flight/addtraveler`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            tptoken: tpToken,
            reservationIdDevKit: reservationIdDevKit,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const addPassengerSlice = createSlice({
  name: "addedPassenger",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPassenger.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPassenger.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(addPassenger.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default addPassengerSlice.reducer;
