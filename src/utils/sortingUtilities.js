// utils/sortingUtils.js
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

// Calculate total duration for a flight combo
export const calculateTotalDuration = (combo) => {
  const outbound = combo.outbound;
  const inbound = combo.inbound;
  const outboundFlight = outbound?.flights || [];
  const inboundFlight = inbound?.flights || [];

  const outboundStart = outboundFlight[0]?.Departure;
  const outboundEnd = outboundFlight[outboundFlight.length - 1]?.Arrival;
  const inboundStart = inboundFlight[0]?.Departure;
  const inboundEnd = inboundFlight[inboundFlight.length - 1]?.Arrival;

  if (!outboundStart || !outboundEnd || !inboundStart || !inboundEnd) return 0;

  const outboundDuration = dayjs.duration(
    dayjs(`${outboundEnd.date} ${outboundEnd.time}`).diff(
      dayjs(`${outboundStart.date} ${outboundStart.time}`)
    )
  );

  const inboundDuration = dayjs.duration(
    dayjs(`${inboundEnd.date} ${inboundEnd.time}`).diff(
      dayjs(`${inboundStart.date} ${inboundStart.time}`)
    )
  );

  return outboundDuration.asMilliseconds() + inboundDuration.asMilliseconds();
};

// Calculate total price for a flight combo
export const calculateTotalPrice = (combo) => {
  const outbound = combo.outbound;
  return Number(
    outbound?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice || 0
  );
};

// Calculate score for "Best" sorting (combination of price and duration)
export const calculateBestScore = (combo) => {
  const price = calculateTotalPrice(combo);
  const duration = calculateTotalDuration(combo);

  // Normalize and weight these values (adjust weights as needed)
  return price * 0.7 + (duration / 60000) * 0.3; // duration in minutes
};

// Sort functions
export const sortCombinations = (combinations, sortType) => {
  const sorted = [...combinations];

  switch (sortType) {
    case "Cheapest":
      return sorted.sort(
        (a, b) => calculateTotalPrice(a) - calculateTotalPrice(b)
      );

    case "Fastest":
      return sorted.sort(
        (a, b) => calculateTotalDuration(a) - calculateTotalDuration(b)
      );

    case "Best":
      return sorted.sort(
        (a, b) => calculateBestScore(a) - calculateBestScore(b)
      );

    default:
      return sorted;
  }
};

// Get price values for tabs
export const getPriceTabs = (combinations) => {
  if (!combinations || combinations.length === 0) {
    return { bestPrice: 0, cheapestPrice: 0, fastestPrice: 0 };
  }

  // Create sorted arrays for each type
  const cheapestSorted = sortCombinations(combinations, "Cheapest");
  const fastestSorted = sortCombinations(combinations, "Fastest");
  const bestSorted = sortCombinations(combinations, "Best");

  return {
    bestPrice: calculateTotalPrice(bestSorted[0]).toFixed(0),
    cheapestPrice: calculateTotalPrice(cheapestSorted[0]).toFixed(0),
    fastestPrice: calculateTotalPrice(fastestSorted[0]).toFixed(0),
  };
};
