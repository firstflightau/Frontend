import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

// Calculate total duration for a flight combo (No change)
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

// --- MODIFIED FUNCTION ---
// Calculate total price, now including markup
export const calculateTotalPrice = (combo, addMarkup) => {
  if (!combo) return 0;

  const outbound = combo.outbound;
  const basePrice = Number(
    outbound?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice || 0
  );

  // If addMarkup isn't a function, just return the base price
  if (typeof addMarkup !== "function") {
    return basePrice;
  }

  // Calculate markup logic
  const onwardDestination =
    outbound?.flights?.[outbound?.flights?.length - 1]?.Arrival?.location;

  const markup = addMarkup(basePrice, "return", onwardDestination);
  const grandTotal = Number(basePrice) + Number(markup);

  return grandTotal; // Return the final, marked-up price
};

// --- MODIFIED FUNCTION ---
// Calculate score, now using the marked-up price
export const calculateBestScore = (combo, addMarkup) => {
  const price = calculateTotalPrice(combo, addMarkup); // Pass addMarkup
  const duration = calculateTotalDuration(combo);

  // Normalize and weight these values (adjust weights as needed)
  return price * 0.7 + (duration / 60000) * 0.3; // duration in minutes
};

// --- MODIFIED FUNCTION ---
// Sort functions, now using the marked-up price
export const sortCombinations = (combinations, sortType, addMarkup) => {
  const sorted = [...combinations];

  switch (sortType) {
    case "Cheapest":
      return sorted.sort(
        (a, b) =>
          calculateTotalPrice(a, addMarkup) - calculateTotalPrice(b, addMarkup)
      );

    case "Fastest":
      return sorted.sort(
        (a, b) => calculateTotalDuration(a) - calculateTotalDuration(b)
      );

    case "Best":
      return sorted.sort(
        (a, b) =>
          calculateBestScore(a, addMarkup) - calculateBestScore(b, addMarkup)
      );

    default:
      return sorted;
  }
};

// --- MODIFIED FUNCTION ---
// Get price values for tabs, now using the marked-up price
export const getPriceTabs = (combinations, addMarkup) => {
  if (!combinations || combinations.length === 0) {
    return { bestPrice: 0, cheapestPrice: 0, fastestPrice: 0 };
  }

  // Create sorted arrays for each type, passing addMarkup
  const cheapestSorted = sortCombinations(combinations, "Cheapest", addMarkup);
  const fastestSorted = sortCombinations(combinations, "Fastest", addMarkup);
  const bestSorted = sortCombinations(combinations, "Best", addMarkup);

  // Get the marked-up price from the first item in each list
  return {
    bestPrice: calculateTotalPrice(bestSorted[0], addMarkup).toFixed(0),
    cheapestPrice: calculateTotalPrice(cheapestSorted[0], addMarkup).toFixed(0),
    fastestPrice: calculateTotalPrice(fastestSorted[0], addMarkup).toFixed(0),
  };
};
