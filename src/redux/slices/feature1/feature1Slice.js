import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Example: Fetching data from an API
export const fetchData = createAsyncThunk(
    'feature1/fetchData',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) throw new Error('Failed to fetch data');
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    value: 0,
    data: [],
    loading: false,
    error: null,
};

const feature1Slice = createSlice({
    name: 'feature1',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        setValue: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { increment, decrement, setValue } = feature1Slice.actions;
export default feature1Slice.reducer;
