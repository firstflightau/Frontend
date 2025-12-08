// src/redux/slices/workbench/workbenchSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiURL } from "../../../constant/Constant";

export const initiateWorkbench = createAsyncThunk(
  "workbench/initiate",
  async (_, { getState }) => {
    const state = getState();
    const tpToken = state.tpToken.tpTokenData?.access_token;

    try {
      const response = await axios.get(
        `${apiURL.baseURL}/api/flight/initiateworkbench`,
        {
          headers: {
            "Content-Type": "application/json",
            tptoken: tpToken,
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

const workbenchSlice = createSlice({
  name: "workbench",
  initialState,
  reducers: {
    clearWorkBench: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initiateWorkbench.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(initiateWorkbench.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(initiateWorkbench.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { clearWorkBench } = workbenchSlice.actions;

export default workbenchSlice.reducer;
