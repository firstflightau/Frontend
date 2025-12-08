import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  from: "",
  to: "",

  date: "",
  retrunDate: "",
  Adult: "",
  Child: 0,
  Infant: 0,
  class: 0,
  FlightCabinClass: "",
};

const searchFlightPayloadSlice = createSlice({
  name: "searchFlightPayload",
  initialState,
  reducers: {
    searchpy: (state, action) => {
      console.log("Searchpycalled", action.payload);
      let {
        from,
        to,

        date,
        retrunDate,
        Adult,
        Child,
        Infant,
        // class,
        FlightCabinClass,
      } = action.payload;
      (state.Adult = Adult),
        (state.Child = Child),
        (state.Infant = Infant),
        (state.from = from),
        (state.to = to),
        (state.FlightCabinClass = FlightCabinClass),
        (state.date = date),
        // state.class = class,
        (state.retrunDate = retrunDate);
    },
  },
});

export const { searchpy } = searchFlightPayloadSlice.actions;
export default searchFlightPayloadSlice.reducer;
