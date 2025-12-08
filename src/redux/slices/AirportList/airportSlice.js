import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAirports } from "./airportListAPI";
export const fetchAirportList = createAsyncThunk(
  "airportList/fetchAirports",
  async (__, { rejectWithValue }) => {
    try {
      const response = await fetchAirports();
      const { data } = response; // Axios response contains `data`

      if (data.statusCode !== 200) {
        throw new Error("Failed to fetch airlines");
      }

      return data?.data;
    } catch (error) {
      // Axios error handling
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to fetch flights";
      return rejectWithValue({ message });
    }
  }
);

const airportSlice = createSlice({
  name: "airportList",
  initialState: {
    isLoading: false,
    isError: false,
    errorMessage: "",
    airports: [],
    countryList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAirportList.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(fetchAirportList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.airports = action.payload;
        // state.countryList = action.
        const countryListData = [
          ...new Map(
            action.payload.map((item) => [
              item?.CountryCode,
              {
                countryName: item?.CountryName,
                countryCode: item?.CountryCode,
              },
            ])
          ).values(),
        ].sort((a, b) => a.countryName.localeCompare(b.countryName));

        state.countryList = countryListData;
      })
      .addCase(fetchAirportList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});
export default airportSlice.reducer;
