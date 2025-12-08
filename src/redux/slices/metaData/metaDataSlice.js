import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllMetaDataAPI } from "./metaDataApi";

export const fetchAllMetaData = createAsyncThunk(
  "metaData/fetchAllMetaData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAllMetaDataAPI();
      const { data } = response;
      if (data.status !== 200) {
        throw new Error("Failed to fetch metadata");
      }
      return data?.data; // This will be the object { home: {...}, ... }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to fetch metadata";
      return rejectWithValue({ message });
    }
  }
);

const metaDataSlice = createSlice({
  name: "metaData",
  initialState: {
    isLoading: false,
    isError: false,
    errorMessage: "",
    allMetaData: {}, // Store as an object for easy lookup
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMetaData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(fetchAllMetaData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allMetaData = action.payload;
      })
      .addCase(fetchAllMetaData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload.message;
        state.allMetaData = {};
      });
  },
});

export default metaDataSlice.reducer;
