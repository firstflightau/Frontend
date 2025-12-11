import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFlights, fetchFlightReturn } from "./flightSearchResultAPI";
import dayjs from "dayjs";
// import store from "../../store";
const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  journeyFlight: [],
  returnFlight: [],
  CatalogProductOfferingsId: null,
};
const convertDateFormat = (inputDate) => {
  // Parse the input date
  const parsedDate = dayjs(inputDate, "DD MMM, YY");
  // Format the date as "YYYY-MM-DD"
  return parsedDate.format("YYYY-MM-DD");
};

export const fetchFlightData = createAsyncThunk(
  "flightSearchResult/fetchFlightData",
  async ({ type, payload }, { getState, rejectWithValue }) => {
    let {
      from,
      to,

      date,
      retrunDate,
      Adult,
      Child,
      Infant,
      //  let class= ,
      FlightCabinClass,
    } = payload?.requestData;

    const state = getState();
    // console.log(state, "state in the flight slice",f);

    const requestData = {
      CatalogProductOfferingsQueryRequest: {
        CatalogProductOfferingsRequest: {
          "@type": "CatalogProductOfferingsRequestAir",
          offersPerPage: 15,
          maxNumberOfUpsellsToReturn: 4,
          contentSourceList: ["GDS"],
          PassengerCriteria: [
            {
              "@type": "PassengerCriteria",
              number: Number(Adult),
              passengerTypeCode: "ADT",
            },
            {
              "@type": "PassengerCriteria",
              number: Number(Child),
              passengerTypeCode: "CHD",
            },
            {
              "@type": "PassengerCriteria",
              number: Number(Infant),
              passengerTypeCode: "INF",
            },
          ],
          SearchCriteriaFlight: [
            {
              "@type": "SearchCriteriaFlight",
              departureDate: convertDateFormat(date),
              From: { value: from },
              To: { value: to },
            },
          ],
          SearchModifiersAir: {
            "@type": "SearchModifiersAir",
            CabinPreference: [
              {
                "@type": "CabinPreference",
                preferenceType: "Permitted",
                cabins: [
                  JSON.parse(FlightCabinClass)?.value,

                  // "Economy"
                  // "PremiumEconomy"
                  // "Business"
                  // "First"
                  // "PremiumFirst"
                ],
              },
            ],
          },
        },
      },
    };
    try {
      const response = await fetchFlights({
        tptoken: payload?.tptoken,
        requestData: requestData,
      }); // Pass payload to fetchFlights

      // Handle axios response
      const { data } = response; // Axios response contains `data`

      return { type, data }; // Return both `type` and flight data
    } catch (error) {
      // Axios error handling
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to fetch flights";
      return rejectWithValue({ type, message });
    }
  }
);
export const fetchFlightReturnData = createAsyncThunk(
  "flightSearchResult/fetchFlightReturnData",
  async ({ type, payload }, { getState, rejectWithValue }) => {
    let {
      from,
      to,

      date,
      retrunDate,
      Adult,
      Child,
      Infant,
      //  let class= ,
      FlightCabinClass,
    } = payload?.requestData;

    const state = getState();
    // console.log(state, "state in the flight slice",f);

    const requestData = {
      CatalogProductOfferingsQueryRequest: {
        CatalogProductOfferingsRequest: {
          "@type": "CatalogProductOfferingsRequestAir",
          offersPerPage: 15,
          maxNumberOfUpsellsToReturn: 4,
          contentSourceList: ["GDS"],
          PassengerCriteria: [
            {
              "@type": "PassengerCriteria",
              number: Number(Adult),
              passengerTypeCode: "ADT",
            },
            {
              "@type": "PassengerCriteria",
              number: Number(Child),
              passengerTypeCode: "CHD",
            },
            {
              "@type": "PassengerCriteria",
              number: Number(Infant),
              passengerTypeCode: "INF",
            },
          ],
          SearchCriteriaFlight: [
            {
              "@type": "SearchCriteriaFlight",
              departureDate: convertDateFormat(date),
              From: { value: from },
              To: { value: to },
            },
            {
              "@type": "SearchCriteriaFlight",
              departureDate: convertDateFormat(retrunDate),
              From: { value: to },
              To: { value: from },
            },
          ],
          SearchModifiersAir: {
            "@type": "SearchModifiersAir",
            CabinPreference: [
              {
                "@type": "CabinPreference",
                preferenceType: "Permitted",
                cabins: [
                  JSON.parse(FlightCabinClass)?.value,

                  // "Economy"
                  // "PremiumEconomy"
                  // "Business"
                  // "First"
                  // "PremiumFirst"
                ],
              },
            ],
          },
        },
      },
    };
    try {
      const response = await fetchFlightReturn({
        tptoken: payload?.tptoken,
        requestData: requestData,
      }); // Pass payload to fetchFlights

      // Handle axios response
      const { data } = response; // Axios response contains `data`
      console.log(data, "return flight data");
      data.from = from;
      data.to = to;

      return { type, data }; // Return both `type` and flight data
    } catch (error) {
      // Axios error handling
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to fetch flights";
      return rejectWithValue({ type, message });
    }
  }
);

const flightSearchResultSlice = createSlice({
  name: "flightSearchResult",
  initialState,
  reducers: {
    resetError(state) {
      state.isError = false;
      state.errorMessage = "";
    },
    clearSearchResult: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
      state.journeyFlight = [];
      state.returnFlight = [];
      state.CatalogProductOfferingsId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlightData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFlightData.fulfilled, (state, action) => {
        const { type, data } = action.payload;
        state.isLoading = false;

        if (type === "journey") {
          state.journeyFlight = data?.data;
          state.CatalogProductOfferingsId = data?.CatalogProductOfferingsId;
        } else {
          state.returnFlight = data;
        }
      })
      .addCase(fetchFlightData.rejected, (state, action) => {
        const { type, message } = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = `Error in ${type} flights: ${message}`;
      })
      .addCase(fetchFlightReturnData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFlightReturnData.fulfilled, (state, action) => {
        const { type, data } = action.payload;
        state.isLoading = false;
        let journeyFlight = [];
        let returnFlight = [];
        // console.log(
        //   data,
        //   "element?.flights?.[0]?.Departure?.location"
        // )
        data?.data?.forEach((element) => {
          if (element?.flights?.[0]?.Departure?.location === data?.from) {
            journeyFlight.push(element);
          } else {
            returnFlight.push(element);
          }
        });

        if (type === "journey") {
          // console.log(
          //   data,
          //   journeyFlight,
          //   "journeyFlight",
          //   returnFlight,
          //   "return data",
          //   data.from
          // );

          state.journeyFlight = journeyFlight;
          state.returnFlight = returnFlight;
          state.CatalogProductOfferingsId = data?.CatalogProductOfferingsId;
        } else {
          state.returnFlight = data;
        }
      })
      .addCase(fetchFlightReturnData.rejected, (state, action) => {
        const { type, message } = action.payload;
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = `Error in ${type} flights: ${message}`;
      });
  },
});

export const { resetError, clearSearchResult } =
  flightSearchResultSlice.actions;
export default flightSearchResultSlice.reducer;
