// import { configureStore } from "@reduxjs/toolkit";
// import feature1Reducer from "./slices/feature1/feature1Slice";
// import loginReducer from "./slices/login/loginSlice";

// export const store = configureStore({
//   reducer: {
//     feature1: feature1Reducer,
//     auth: loginReducer,
//   },
// });
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import feature1Reducer from "./slices/feature1/feature1Slice";
import flightSearchPyReducer from "./slices/SearchFlightPayload/searchFlightPayloadSlice";
import loginReducer from "./slices/login/loginSlice";

import ipReducer from "./slices/token/tokenSlice";
import airportResucer from "./slices/AirportList/airportSlice";
import airlineResucer from "./slices/AirlineList/AirlineListSlice";
import flightSearchResult from "./slices/flightSearchResult/flightSearchResultSlice";
import selectedFlightReducer from "./slices/SelectedFlight/selectedFlightSlice";
import passengerReducer from "./slices/passenger/passengerSlice";
import workbenchReducer from "./slices/workbench/workBenchSlice";
import addOfferReducer from "./slices/workbench/addOfferSlice";
import addPassengerReducer from "./slices/passenger/addTravellerSlice";
import addPNRReducer from "./slices/pnr/generatePNRSlice";
import markupReducer from "./slices/markup/markupSlice"
// Load persisted state
import { saveToLocalStorage, loadFromLocalStorage } from "./localStorageHelper";
const persistedState = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    feature1: feature1Reducer,
    auth: loginReducer,
    tpToken: ipReducer,
    flightSearchResult: flightSearchResult,
    airportList: airportResucer,
    airlineList: airlineResucer,
    searchFlighPY: flightSearchPyReducer,
    selectedFlight: selectedFlightReducer,
    passenger: passengerReducer,
    workbench: workbenchReducer,
    addOffer: addOfferReducer,
    addPassenger: addPassengerReducer,
    pnr: addPNRReducer,
    markupData: markupReducer
  },
  preloadedState: persistedState, // Use the persisted state
});

// Save the entire state to localStorage on changes
store.subscribe(() => {
  saveToLocalStorage(store.getState()); // Persist the entire Redux state
});

export default store;
