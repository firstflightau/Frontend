import React, { useEffect, useState } from "react";
import {
  findAirlineByCode,
  findAirportByCode,
} from "../redux/slices/feature2/utils";
import {
  standardizeFlightDetailResponse,
  standardizeFlightFareResponse,
  standardizeFlightBaggageResponse,
  addMarkup,
} from "../utils/utils";
import { Clock, MapPin, Calendar } from "lucide-react";

const FlightDetailTabs = ({ outbound, inbound }) => {
  const [activeTab, setActiveTab] = useState("flight");

  const tabs = [
    { id: "flight", label: "Flight Details" },
    { id: "fare", label: "Fare Details" },
    { id: "baggage", label: "Baggage" },
  ];

  return (
    <div className="mt-4">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.id
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-4">
        {activeTab === "flight" && (
          <FlightDetails outbound={outbound} inbound={inbound} />
        )}

        {activeTab === "fare" && (
          <FareDetails outbound={outbound} inbound={inbound} />
        )}

        {activeTab === "baggage" && (
          <BaggageDetails outbound={outbound} inbound={inbound} />
        )}
      </div>
    </div>
  );
};

// Flight Details Component
const FlightDetails = ({ outbound, inbound }) => {
  const outboundFlights = outbound?.flights || [];
  const inboundFlights = inbound?.flights || [];

  const renderFlightSegment = (flight, index, isOutbound = true) => {
    const airline = findAirlineByCode(flight.carrier);
    const departureAirport = findAirportByCode(flight.Departure?.location);
    const arrivalAirport = findAirportByCode(flight.Arrival?.location);

    return (
      <div key={index} className="mb-6">
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 mr-2">
            <img
              src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/${flight.carrier}.png`}
              alt={flight.carrier}
              className="w-full h-full object-contain rounded"
            />
          </div>
          <div>
            <div className="font-medium">
              {airline?.airlineName || flight.carrier}
            </div>
            <div className="text-sm text-gray-500">
              {flight.carrier} {flight.number} • {flight.equipment}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold">{flight.Departure?.time}</div>
            <div className="text-sm text-gray-500">
              {flight.Departure?.date}
            </div>
            <div className="text-sm font-medium mt-1">
              {departureAirport?.name}
            </div>
            <div className="text-xs text-gray-500">
              Terminal: {flight.Departure?.terminal || "N/A"}
            </div>
          </div>

          <div className="flex flex-col items-center mx-4">
            <div className="text-sm text-gray-500">
              {calculateDuration(flight.Departure, flight.Arrival)}
            </div>
            <div className="relative w-32 h-px bg-gray-300 my-2">
              <div className="absolute inset-0 flex items-center justify-between">
                <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                <div className="w-1 h-1 rounded-full bg-gray-300"></div>
              </div>
            </div>
            <div className="text-xs text-gray-500">Direct</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold">{flight.Arrival?.time}</div>
            <div className="text-sm text-gray-500">{flight.Arrival?.date}</div>
            <div className="text-sm font-medium mt-1">
              {arrivalAirport?.name}
            </div>
            <div className="text-xs text-gray-500">
              Terminal: {flight.Arrival?.terminal || "N/A"}
            </div>
          </div>
        </div>

        {index < (isOutbound ? outboundFlights : inboundFlights).length - 1 && (
          <div className="my-4 flex items-center justify-center">
            <div className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-500">
              Layover at {arrivalAirport?.name} •{" "}
              {calculateLayoverDuration(
                flight.Arrival,
                (isOutbound ? outboundFlights : inboundFlights)[index + 1]
                  .Departure
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {/* Outbound Flight */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          <MapPin size={18} className="mr-2" />
          Outbound Flight • {outboundFlights[0]?.Departure?.location} to{" "}
          {outboundFlights[outboundFlights.length - 1]?.Arrival?.location}
        </h3>
        {outboundFlights.map((flight, index) =>
          renderFlightSegment(flight, index, true)
        )}
      </div>

      {/* Inbound Flight */}
      <div>
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          <MapPin size={18} className="mr-2" />
          Return Flight • {inboundFlights[0]?.Departure?.location} to{" "}
          {inboundFlights[inboundFlights.length - 1]?.Arrival?.location}
        </h3>
        {inboundFlights.map((flight, index) =>
          renderFlightSegment(flight, index, false)
        )}
      </div>
    </div>
  );
};

// Fare Details Component
const FareDetails = ({ outbound, inbound }) => {
  const onwardPrice =
    outbound?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice;
  const onwardDestination =
    outbound?.flights?.[outbound?.flights?.length - 1]?.Arrival?.location; // for example: "DXB"
  const onwardMarkup = addMarkup(onwardPrice, "return", onwardDestination);
  const grandTotal = Number(onwardPrice) + Number(onwardMarkup);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="text-lg font-semibold mb-4">Fare Breakdown</h3>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Base Fare</span>
          <span>$ {grandTotal.toFixed(2)} AUD</span>
        </div>

        <div className="flex justify-between border-t border-gray-200 pt-3 font-semibold">
          <span>Total</span>
          <span className="text-blue-600">$ {grandTotal.toFixed(2)} AUD</span>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>
          All Prices (including taxes meals drinks airport surcharges and fee)
          are quoted in AUD
        </p>
      </div>
    </div>
  );
};

const BaggageDetails = ({ outbound, inbound }) => {
  const [outboundBaggage, setOutboundBaggage] = useState([]);
  const [inboundBaggage, setInboundBaggage] = useState([]);

  useEffect(() => {
    // Process outbound baggage
    if (outbound) {
      let BaggageAllowance =
        outbound?.productsoption?.[0]?.TermsAndConditions?.BaggageAllowance;
      if (BaggageAllowance) {
        const data = standardizeFlightBaggageResponse(BaggageAllowance);
        setOutboundBaggage(data);
      }
    }

    // Process inbound baggage
    if (inbound) {
      let BaggageAllowance =
        inbound?.productsoption?.[0]?.TermsAndConditions?.BaggageAllowance;
      if (BaggageAllowance) {
        const data = standardizeFlightBaggageResponse(BaggageAllowance);
        setInboundBaggage(data);
      }
    }
  }, [outbound, inbound]);

  if (!outboundBaggage && !inboundBaggage) {
    return (
      <div className="p-4 text-gray-500">Loading baggage information...</div>
    );
  }

  // Get unique baggage types from both flights
  const allBaggageTypes = [
    ...new Set([
      ...Object.keys(outboundBaggage),
      ...Object.keys(inboundBaggage),
    ]),
  ];

  return (
    <div className="space-y-6">
      {/* Outbound Flight Baggage */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-blue-50 px-4 py-2 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-blue-800">
            Outbound Flight Baggage Allowance
          </h3>
          <p className="text-sm text-gray-600">
            {outbound?.flights?.[0]?.carrier} {outbound?.flights?.[0]?.number} •
            {outbound?.flights?.[0]?.Departure?.location} to{" "}
            {
              outbound?.flights?.[outbound.flights.length - 1]?.Arrival
                ?.location
            }
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-center">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-medium text-gray-700 uppercase">
                  Passenger Type
                </th>
                <th className="px-4 py-3 font-medium text-gray-700 uppercase">
                  Check-in Baggage
                </th>
                <th className="px-4 py-3 font-medium text-gray-700 uppercase">
                  Cabin Baggage
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {allBaggageTypes.map((baggageType, index) => (
                <tr
                  key={`outbound-${index}`}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {baggageType}
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {outboundBaggage[baggageType]?.FirstCheckedBag ||
                      "Not specified"}
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {outboundBaggage[baggageType]?.CarryOn || "Not specified"}
                  </td>
                </tr>
              ))}

              {allBaggageTypes.length === 0 && (
                <tr>
                  <td
                    colSpan="3"
                    className="px-4 py-4 text-center text-gray-500"
                  >
                    No baggage information available for outbound flight
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inbound Flight Baggage */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-green-50 px-4 py-2 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-green-800">
            Return Flight Baggage Allowance
          </h3>
          <p className="text-sm text-gray-600">
            {inbound?.flights?.[0]?.carrier} {inbound?.flights?.[0]?.number} •
            {inbound?.flights?.[0]?.Departure?.location} to{" "}
            {inbound?.flights?.[inbound.flights.length - 1]?.Arrival?.location}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-center">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-medium text-gray-700 uppercase">
                  Passenger Type
                </th>
                <th className="px-4 py-3 font-medium text-gray-700 uppercase">
                  Check-in Baggage
                </th>
                <th className="px-4 py-3 font-medium text-gray-700 uppercase">
                  Cabin Baggage
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {allBaggageTypes.map((baggageType, index) => (
                <tr
                  key={`inbound-${index}`}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {baggageType}
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {inboundBaggage[baggageType]?.FirstCheckedBag ||
                      "Not specified"}
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {inboundBaggage[baggageType]?.CarryOn || "Not specified"}
                  </td>
                </tr>
              ))}

              {allBaggageTypes.length === 0 && (
                <tr>
                  <td
                    colSpan="3"
                    className="px-4 py-4 text-center text-gray-500"
                  >
                    No baggage information available for return flight
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">Important Notes</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Additional fees apply for excess baggage</li>
          <li>• Some fare types may have different baggage allowances</li>
          <li>• Weight and size restrictions are strictly enforced</li>
          <li>
            • Contact the airline for special items (sports equipment, musical
            instruments, etc.)
          </li>
        </ul>
      </div>
    </div>
  );
};

// Helper functions
const calculateDuration = (departure, arrival) => {
  if (!departure || !arrival) return "N/A";

  const depTime = new Date(`${departure.date}T${departure.time}`);
  const arrTime = new Date(`${arrival.date}T${arrival.time}`);

  const diffMs = arrTime - depTime;
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours}h ${minutes}m`;
};

const calculateLayoverDuration = (arrival, nextDeparture) => {
  if (!arrival || !nextDeparture) return "N/A";

  const arrTime = new Date(`${arrival.date}T${arrival.time}`);
  const depTime = new Date(`${nextDeparture.date}T${nextDeparture.time}`);

  const diffMs = depTime - arrTime;
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours}h ${minutes}m`;
};

export default FlightDetailTabs;
