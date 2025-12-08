// src/redux/slices/workbench/addOfferSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiURL } from "../../../constant/Constant";

export const addOffer = createAsyncThunk(
  "addOffer/post",
  async (payload, { getState }) => {
    const state = getState();
    const tpToken = state.tpToken.tpTokenData?.access_token;
    const reservationIdDevKit =
      state.workbench.data?.data?.ReservationResponse?.Reservation?.Identifier
        ?.value;

    try {
      const response = await axios.post(
        `${apiURL.baseURL}/api/flight/addoffer`,
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

const addOfferSlice = createSlice({
  name: "addOffer",
  initialState,
  reducers: {
    clearAddOffer: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOffer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addOffer.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(addOffer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { clearAddOffer } = addOfferSlice.actions;
export default addOfferSlice.reducer;
