import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import store from "../redux/store";
export const findCheapestFlight = (a, b) => {
  // console.log(
  //   a?.productsoption?.[0]?.Price?.TotalPrice,
  //   b?.productsoption?.[0]?.Price?.TotalPrice,
  //   "findCheapestFlight"
  // );
  return (
    // a?.productsoption?.[0]?.Price?.TotalPrice -
    // b?.productsoption?.[0]?.Price?.TotalPrice
    a?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice -
    b?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice

  );
};
export const findStopsFlight = (a, b) => {
  return a?.flights?.length - b?.flights?.length;
};
export const findFastestFlight = (a, b) => {
  // let durations1 = a?.flights?.reduce((sum, dur) => {
  //   // console.log(dur, dur?.duration, "|djhdsbf");
  //   return sum.add(dayjs.duration(dur?.duration));
  // }, dayjs.duration(0));
  let durations1 = calculateFlightDuration(
    a.flights?.[0]?.Departure,
    a.flights?.[a.flights?.length - 1]?.Arrival
  );
  // let durations11 = `PT${durations1.hours()}H${durations1.minutes()}M`;

  // let durations2 = b?.flights?.reduce((sum, dur) => {
  //   return sum.add(dayjs.duration(dur?.duration));
  // }, dayjs.duration(0));
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

  // Get the total minutes
  const totalMinutesB = timeDurationB.asMinutes();
  // let durations22 = `PT${durations2.hours()}H${durations1.minutes()}M`;
  // const durationA = dayjs.duration(durations11).asMinutes();
  // const durationB = dayjs.duration(durations22).asMinutes();
  //   console.log(
  //     durations1,
  //     durations11,
  //     durations2,
  //     durations22,
  //     durationA,
  //     durationB,
  //     "durationAB"
  //   );
  // return durationA - durationB;
  // console.log("durationsss", totalMinutesA, totalMinutesB);
  return totalMinutesA - totalMinutesB;
};
export const cheapesBestFastest = ({ sortedData, key }) => {
  // console.log("keydddd", key, sortedData);
  if (!sortedData || !Array.isArray(sortedData)) return [];

  // Clone the array to avoid mutating the original reference
  const sortedArray = [...sortedData];

  sortedArray.sort((a, b) => {
    switch (key) {
      case "Cheapest":
        // console.log("price");
        return findCheapestFlight(a, b);
      case "Fastest":
        // console.log("price");

        return findFastestFlight(a, b);
      case "Best":
        // console.log("price");

        return (
          findStopsFlight(a, b) ||
          findFastestFlight(a, b) ||
          findCheapestFlight(a, b)
        );
    }
  });
  console.log("keyddddAFTER", key, sortedData);
  return sortedArray;
};
export const cheapesBestFastestPrice = ({ sortedData }) => {
  // Helper function to get the price for a given key
  const getPrice = (key) => {
    let newSorted = [...sortedData];
    // const result = cheapesBestFastest({ sortedData: newSorted, key })?.[0]
    //   ?.productsoption?.[0]?.Price?.TotalPrice;
    const result = cheapesBestFastest({ sortedData: newSorted, key })?.[0]
      ?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice;

    return result || 0; // Default to 0 if the result is undefined or null
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
  let PriceBreakdown = flight?.productsoption?.[0]?.BestCombinablePrice?.PriceBreakdown;
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
    // console.log(item?.BaggageItem?.[0], "FirstCheckedBag");
    // if (baggageType == "FirstCheckedBag") {
    //     baggageItem = `${item.BaggageItem[0]?.Measurement?.[0]?.value}  ${item.BaggageItem[0]?.Measurement?.[0]?.unit}`;

    // }
    // else if (baggageType == "CarryOn") {
    //     if (item.BaggageItem[0]?.Measurement) {

    //         baggageItem = `${item.BaggageItem[0]?.Measurement?.[0]?.value}  ${item.BaggageItem[0]?.Measurement?.[0]?.unit}`;
    //     }
    //     else {

    //         baggageItem = item?.BaggageItem[0]?.Text || "Not applicable"
    //     }

    // }
    if (item.BaggageItem[0]?.Measurement) {
      baggageItem = `${item.BaggageItem[0]?.Measurement?.[0]?.value}  ${item.BaggageItem[0]?.Measurement?.[0]?.unit}`;
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

export function addMarkup(value, percentage) {
  const reducerState = store.getState();
  let markup = reducerState?.
    markupData?.
    markupAmount?.
    markup


  return value * (markup / 100);
}