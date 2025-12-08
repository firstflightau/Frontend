import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Onward: [],
  Return: [],
};

const selectedFligthSlice = createSlice({
  name: "selectedFlights",
  initialState,
  reducers: {
    setSelectedFlight: (state, action) => {
      console.log(action.payload, "action.payloadsetSelectedFlight");

      const { Onward, Return } = action.payload;

      state.Onward = Onward; // Assign directly without optional chaining
      state.Return = Return; // Assign directly without optional chaining
    },
    clearSelectedFlight: (state) => {
      state.Onward = [];
      state.Return = [];
    },
  },
});

export const { setSelectedFlight, clearSelectedFlight } =
  selectedFligthSlice.actions;
export default selectedFligthSlice.reducer;
