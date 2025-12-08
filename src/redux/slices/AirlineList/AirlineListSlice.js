import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAirline } from "./airlineListAPI"
export const fetchAirlineList = createAsyncThunk('airlineList/fetchAirline', async (__, { rejectWithValue }) => {
    try {
        const response = await fetchAirline();
        // Handle axios response
        const { data } = response; // Axios response contains `data`

        if (data.statusCode !== 200) {
            throw new Error('Failed to fetch airlines');
        }

        return data?.data;

    } catch (error) {
        // Axios error handling
        const message = error.response?.data?.message || error.message || 'Failed to fetch flights';
        return rejectWithValue({ message });
    }
})

const airlineSlice = createSlice({
    name: 'airlineList',
    initialState: {

        isLoading: false,
        isError: false,
        errorMessage: '',
        airlines: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAirlineList.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.errorMessage = ""
        }).addCase(fetchAirlineList.fulfilled, (state, action) => {
            // console.log(action, "airlineList.fulfilled");
            state.isLoading = false;
            state.airlines = action.payload;
        }).addCase(fetchAirlineList.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload;
            state.airlines = []
        })
    },
}


);
export default airlineSlice.reducer;


