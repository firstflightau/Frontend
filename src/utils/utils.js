import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import store from "../redux/store";

dayjs.extend(duration);

// --- NEW HELPER FUNCTION ---
// Gets the final marked-up price for a single flight
const getMarkedUpPrice = (flight, addMarkup) => {
  if (!flight) return 0;

  const basePrice = Number(
    flight?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice || 0
  );

  // If addMarkup function isn't provided, return the base price
  if (typeof addMarkup !== "function") {
    return basePrice;
  }

  const onwardDestination =
    flight?.flights?.[flight?.flights?.length - 1]?.Arrival?.location;

  // Assuming "oneway" as this is the oneway flow
  const markup = addMarkup(basePrice, "oneway", onwardDestination);
  const grandTotal = Number(basePrice) + Number(markup);

  return grandTotal;
};

// --- MODIFIED FUNCTION ---
export const findCheapestFlight = (a, b, addMarkup) => {
  // Use the helper function to compare marked-up prices
  return getMarkedUpPrice(a, addMarkup) - getMarkedUpPrice(b, addMarkup);
};

export const findStopsFlight = (a, b) => {
  return a?.flights?.length - b?.flights?.length;
};

export const findFastestFlight = (a, b) => {
  let durations1 = calculateFlightDuration(
    a.flights?.[0]?.Departure,
    a.flights?.[a.flights?.length - 1]?.Arrival
  );
  let durations2 = calculateFlightDuration(
    b?.flights?.[0]?.Departure,
    b?.flights?.[b?.flights?.length - 1]?.Arrival
  );
  const timeDurationA = dayjs.duration({
    hours: parseInt(durations1.match(/\d+h/)?.[0]) || 0,
    minutes: parseInt(durations1.match(/\d+m/)?.[0]) || 0,
  });
  const timeDurationB = dayjs.duration({
    hours: parseInt(durations2.match(/\d+h/)?.[0]) || 0,
    minutes: parseInt(durations2.match(/\d+m/)?.[0]) || 0,
  });
  const totalMinutesA = timeDurationA.asMinutes();

  const totalMinutesB = timeDurationB.asMinutes();
  return totalMinutesA - totalMinutesB;
};

// --- MODIFIED FUNCTION ---
export const cheapesBestFastest = ({ sortedData, key, addMarkup }) => {
  if (!sortedData || !Array.isArray(sortedData)) return [];

  const sortedArray = [...sortedData];

  sortedArray.sort((a, b) => {
    switch (key) {
      case "Cheapest":
        // console.log("price");
        return findCheapestFlight(a, b, addMarkup); // Pass addMarkup
      case "Fastest":
        // console.log("price");

        return findFastestFlight(a, b);
      case "Best":
        // console.log("price");

        return (
          findStopsFlight(a, b) ||
          findFastestFlight(a, b) ||
          findCheapestFlight(a, b, addMarkup) // Pass addMarkup
        );
    }
  });
  // console.log("keyddddAFTER", key, sortedData);
  return sortedArray;
};

// --- MODIFIED FUNCTION ---
export const cheapesBestFastestPrice = ({ sortedData, addMarkup }) => {
  // Helper function to get the price for a given key
  const getPrice = (key) => {
    let newSorted = [...sortedData];

    // Get the top-sorted flight for the given key (e.g., the "Cheapest" flight)
    const resultFlight = cheapesBestFastest({
      sortedData: newSorted,
      key,
      addMarkup, // Pass addMarkup to the sorting function
    })?.[0];

    // Get the final marked-up price of that specific flight
    const markedUpPrice = getMarkedUpPrice(resultFlight, addMarkup);

    return markedUpPrice || 0; // Default to 0 if the result is undefined or null
  };

  // Calculate prices
  const cheapestPrice = getPrice("Cheapest");
  const fastestPrice = getPrice("Fastest");
  const bestPrice = getPrice("Best");

  // Return the result object
  return {
    cheapestPrice,
    fastestPrice,
    bestPrice,
  };
};

export function calculateFlightDuration(Departure, Arrival) {
  const departureDateTime = dayjs(`${Departure?.date} ${Departure?.time}`);
  const arrivalDateTime = dayjs(`${Arrival?.date} ${Arrival?.time}`);

  const diff = arrivalDateTime.diff(departureDateTime);
  const flightDuration = dayjs.duration(diff);

  return `${flightDuration.hours()}h ${flightDuration.minutes()}m`;
}

export function calculateFlightDurationNew(departure, arrival) {
  if (!departure || !arrival) return "";

  // Build full datetime strings
  const depDateTime = `${departure.date} ${departure.time}`;
  const arrDateTime = `${arrival.date} ${arrival.time}`;

  const dep = dayjs(depDateTime);
  const arr = dayjs(arrDateTime);

  if (!dep.isValid() || !arr.isValid()) return "";

  const diffMinutes = arr.diff(dep, "minute");
  const dur = dayjs.duration(diffMinutes, "minutes");

  const hours = dur.hours();
  const minutes = dur.minutes();
  const days = Math.floor(dur.asDays());

  if (days > 0) {
    return `${days}d ${hours}h ${minutes}m`;
  }
  return `${hours}h ${minutes}m`;
}
export const standardizeFlightDetailResponse = (flight) => {
  console.log(flight, "flight");

  let newData = flight?.map((item, index) => {
    let layover = false;
    if (flight.length > index + 1) {
      layover = calculateFlightDuration(
        item?.Arrival,
        flight?.[index + 1]?.Departure
      );
    }

    let Departure = item?.Departure?.location;
    let origin = item?.Departure?.location;
    let destination = item?.Arrival?.location;
    let Arrival = item?.Arrival?.location;
    let flightName = item?.carrier;
    let flightNumber = item?.number;
    let departureTime = item?.Departure?.time?.slice(0, 5);
    let arrivalTime = item?.Arrival?.time?.slice(0, 5);
    let dateOfArrival = item?.Arrival?.date;
    let dateOfDeparture = item?.Departure?.date;
    let terminalD = item?.Departure?.terminal;
    let terminalA = item?.Arrival?.terminal;
    let duration = calculateFlightDuration(item?.Departure, item?.Arrival);
    return {
      Departure: Departure,
      Arrival: Arrival,
      flightName: flightName,
      flightNumber: flightNumber,
      departureTime: departureTime,
      origin: origin,
      arrivalTime: arrivalTime,
      dateOfArrival: dateOfArrival,
      dateOfDeparture: dateOfDeparture,
      destination: destination,
      layover: layover,
      duration: duration,
      terminalD: terminalD,
      terminalA: terminalA,
    };
  });
  return newData;
};

export const standardizeFlightFareResponse = (flight) => {
  const result = {
    ADT: { Basic: 0, Taxes: 0, Total: 0 },
    CHD: { Basic: 0, Taxes: 0, Total: 0 },
    INF: { Basic: 0, Taxes: 0, Total: 0 },
  };
  // let PriceBreakdown = flight?.productsoption?.[0]?.Price?.PriceBreakdown;
  let PriceBreakdown =
    flight?.productsoption?.[0]?.BestCombinablePrice?.PriceBreakdown;
  // console.log(flight, PriceBreakdown, "PriceBreakdown")
  PriceBreakdown.forEach((item) => {
    let type = item?.requestedPassengerType;
    result[type].Basic = item?.Amount?.Base * item?.quantity;

    result[type].Taxes = item?.Amount?.Taxes?.TotalTaxes * item?.quantity;
    result[type].Total = item?.Amount?.Total * item?.quantity;
  });
  // console.log(result, "resultttt")
  return result;
};
export const standardizeFlightBaggageResponse = (BaggageAllowance) => {
  let baggage = {};
  // console.log(BaggageAllowance, "baggageAllowance");

  BaggageAllowance.forEach((item) => {
    let passengerTypeCodes = item.passengerTypeCodes[0];
    let baggageType = item.baggageType;
    let baggageItem;

    if (item.BaggageItem[0]?.Measurement) {
      baggageItem = `${item.BaggageItem[0]?.Measurement?.[0]?.value}  ${item.BaggageItem[0]?.Measurement?.[0]?.unit}`;
    } else if (item?.BaggageItem[0]?.Text) {
      baggageItem = item?.BaggageItem[0]?.Text || "Not applicable";
    } else {
      baggageItem = item?.BaggageItem[0]?.Text || "Not applicable";
    }

    if (!baggage[passengerTypeCodes]) {
      baggage[passengerTypeCodes] = {};
    }

    baggage[passengerTypeCodes][baggageType] = baggage[passengerTypeCodes][
      baggageType
    ]
      ? baggage[passengerTypeCodes][baggageType]
      : baggageItem;
    baggage[passengerTypeCodes]["Airline"] = item?.validatingAirlineCode;
  });

  // console.log(baggage);
  return baggage;
};

export function addMarkup(value, tripType = "onward", destinationCode = "") {
  const reducerState = store.getState();
  const markupData = reducerState?.markupData?.markupAmount;

  if (!markupData) return 0;

  let markupPercentage = 0;

  if (destinationCode && Array.isArray(markupData.destinationMarkups)) {
    const destMarkup = markupData.destinationMarkups.find(
      (dest) => dest.code.toUpperCase() === destinationCode.toUpperCase()
    );

    if (destMarkup) {
      markupPercentage =
        tripType === "return" ? destMarkup.return : destMarkup.onward;
    }
  }

  // ✅ Fallback to global markup if no destination match
  if (!markupPercentage) {
    markupPercentage =
      tripType === "return"
        ? markupData.markup.return
        : markupData.markup.onward;
  }

  return value * (markupPercentage / 100);
}
