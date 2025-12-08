// components/RoundTripResultCard.js
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { addMarkup, calculateFlightDurationNew } from "../utils/utils";
import FlightDetailTabs from "./FlightDetailsTabs";

const RoundTripResultCard = ({ combo, onSelect }) => {
  const [showDetails, setShowDetails] = useState(false);
  const outbound = combo.outbound;
  const inbound = combo.inbound;
  const outboundFlight = outbound?.flights || [];
  const inboundFlight = inbound?.flights || [];

  const totalPrice = Number(
    outbound?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice || 0
  );

  const outboundDuration = calculateFlightDurationNew(
    outboundFlight[0]?.Departure,
    outboundFlight[outboundFlight.length - 1]?.Arrival
  );

  const inboundDuration = calculateFlightDurationNew(
    inboundFlight[0]?.Departure,
    inboundFlight[inboundFlight.length - 1]?.Arrival
  );

  const stopsText = (flights) => {
    const stops = flights.length - 1;
    return stops === 0 ? "Nonstop" : `${stops} Stop${stops > 1 ? "s" : ""}`;
  };

  const formatTime = (dateStr, timeStr) => {
    return `${timeStr}`;
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { day: "numeric", month: "short" });
  };

  // const type = "return" ;

  // outbound?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice;

  const onwardPrice =
    outbound?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice;
  const onwardTaxes =
    outbound?.productsoption?.[0]?.BestCombinablePrice?.TotalTaxes;
  const onwardDestination =
    outbound?.flights?.[outbound?.flights?.length - 1]?.Arrival?.location; // for example: "DXB"

  const onwardMarkup = addMarkup(onwardPrice, "return", onwardDestination);

  const totalTax = Number(onwardTaxes) + Number(onwardMarkup);
  const grandTotal = Number(onwardPrice) + Number(onwardMarkup);

  // Flight segment component for reusability
  const FlightSegment = ({ flight, duration, direction, title }) => {
    const firstFlight = flight[0];
    const lastFlight = flight[flight.length - 1];

    if (!firstFlight || !lastFlight) return null;

    return (
      <div className="mb-4 last:mb-0">
        {/* {title && (
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            {title}
          </div>
        )} */}

        <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
          <div className="flex items-center gap-2 mb-2 md:mb-0 md:w-1/4">
            <div className="w-8 h-8 flex-shrink-0">
              <img
                className="w-full h-full object-contain rounded"
                src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/${firstFlight.carrier}.png`}
                alt={firstFlight.carrier}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/32x32?text=Airline";
                }}
              />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {firstFlight.carrier} {firstFlight.number}
            </span>
          </div>

          <div className="flex items-center justify-between w-full md:w-3/4">
            <div className="text-right w-1/4">
              <div className="flex flex-col ">
                <div className="text-xl font-bold text-gray-900">
                  {formatTime(
                    firstFlight.Departure.date,
                    firstFlight.Departure.time
                  )}
                </div>
                <div className="text-sm text-gray-500">
                  {firstFlight.Departure.location}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {formatDate(firstFlight.Departure.date)}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center mx-2 w-2/4 max-w-xs">
              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {duration}
              </div>
              <div className="relative w-full h-px bg-gray-300 my-2">
                <div className="absolute inset-0 flex items-center justify-between">
                  <div className="w-2 h-2 rounded-full bg-secondary-6000"></div>
                  <div className="w-2 h-2 rounded-full bg-secondary-6000"></div>
                </div>
              </div>
              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {stopsText(flight)}
              </div>
            </div>

            <div className="text-left w-1/4">
              <div className="flex flex-col">
                <div className="text-xl font-bold text-gray-900">
                  {formatTime(lastFlight.Arrival.date, lastFlight.Arrival.time)}
                </div>
                <div className="text-sm text-gray-500">
                  {lastFlight.Arrival.location}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {formatDate(lastFlight.Arrival.date)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden mb-6 bg-white transition-all hover:shadow-md">
      <div className="flex flex-col md:flex-row">
        {/* Flight Information */}
        <div className="flex-1 p-4 md:p-6 md:border-r border-gray-200">
          <FlightSegment
            flight={outboundFlight}
            duration={outboundDuration}
            title="Departure"
          />

          <div className="my-4 border-t border-gray-200"></div>

          <FlightSegment
            flight={inboundFlight}
            duration={inboundDuration}
            title="Return"
          />
        </div>

        {/* Price and Actions - Full height section */}
        <div className="border-t w-full  md:border-t-0 border-gray-200 p-4 md:p-6 flex flex-col justify-between md:w-72">
          <div className="flex flex-col items-end mb-4">
            <div className="text-2xl font-bold text-primary-6000 mb-1">
              $ {grandTotal.toFixed(2)} AUD
              {/* $ {totalPrice.toFixed(2)} AUD */}
            </div>
            <div className="text-xs text-gray-500">Total for all travelers</div>
          </div>

          <div className="flex flex-col items-end space-y-3">
            <button
              onClick={() => onSelect(outbound, inbound)}
              className="bg-secondary-6000 hover:bg-secondary-700 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition-all w-full"
            >
              Select Flight
            </button>

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center justify-center text-sm text-secondary-6000 font-medium px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors w-full"
            >
              {showDetails ? (
                <>
                  <ChevronUp size={16} className="mr-1" />
                  Hide details
                </>
              ) : (
                <>
                  <ChevronDown size={16} className="mr-1" />
                  View details
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Flight Details */}
      {showDetails && (
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <FlightDetailTabs outbound={outbound} inbound={inbound} />
        </div>
      )}
    </div>
  );
};

export default RoundTripResultCard;
