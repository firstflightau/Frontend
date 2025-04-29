import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { apiURL } from "../../../constant/Constant";
// Thunk to fetch IP address
export const fetchIpAddress = createAsyncThunk(
  "ip/fetchIpAddress",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${apiURL.baseURL}/api/flight/oauthtoken`);
      if (!response.ok) {
        throw new Error("Failed to fetch IP address");
      }
      // console.log(response, "RESPONSE");
      const data = await response.json();
      return data?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const ipSlice = createSlice({
  name: "ip",
  initialState: {
    tpTokenData: "",
    isLoading: false,
    isError: false,
    errorMessage: "",
    date: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIpAddress.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(fetchIpAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tpTokenData = action.payload;
        state.date = dayjs().format("YYYY-MM-DD");
      })
      .addCase(fetchIpAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export default ipSlice.reducer;
