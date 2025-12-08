import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { findAirlineByCode } from "../redux/slices/feature2/utils";

const RoundTripFilterBox = ({ combinations, onFilterChange }) => {
  const [filters, setFilters] = useState({
    stops: [],
    airlines: [],
    minPrice: 0,
    maxPrice: 5000,
    priceRange: [0, 5000],
  });

  const [expandedSections, setExpandedSections] = useState({
    stops: true,
    airlines: true,
    price: true,
  });

  const [allAirlines, setAllAirlines] = useState([]);
  const [maxPrice, setMaxPrice] = useState(5000);

  // Extract unique airlines and calculate max price from combinations
  useEffect(() => {
    if (combinations && combinations.length > 0) {
      const airlinesSet = new Set();
      let maxPriceValue = 0;

      combinations.forEach((combo) => {
        const price = Number(
          combo.outbound?.productsoption?.[0]?.BestCombinablePrice
            ?.TotalPrice || 0
        );

        if (price > maxPriceValue) maxPriceValue = price;

        if (combo.outbound?.flights?.[0]?.carrier) {
          airlinesSet.add(combo.outbound.flights[0].carrier);
        }

        if (combo.inbound?.flights?.[0]?.carrier) {
          airlinesSet.add(combo.inbound.flights[0].carrier);
        }
      });

      const sortedAirlines = Array.from(airlinesSet).sort();
      setAllAirlines(sortedAirlines);

      const roundedMaxPrice = Math.ceil(maxPriceValue);
      setMaxPrice(roundedMaxPrice);
      setFilters((prev) => ({
        ...prev,
        maxPrice: roundedMaxPrice,
        priceRange: [0, roundedMaxPrice],
      }));
    }
  }, [combinations]);

  // Calculate counts for stops and airlines
  const calculateCounts = () => {
    const stopsCount = { nonStop: 0, oneStop: 0, twoPlusStops: 0 };
    const airlineCounts = {};
    const airlinePrices = {};

    allAirlines.forEach((airline) => {
      airlineCounts[airline] = 0;
      airlinePrices[airline] = Infinity;
    });

    combinations.forEach((combo) => {
      const price = Number(
        combo.outbound?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice ||
          0
      );

      const outboundStops = combo.outbound?.flights?.length - 1 || 0;
      const inboundStops = combo.inbound?.flights?.length - 1 || 0;
      const totalStops = Math.max(outboundStops, inboundStops);

      if (totalStops === 0) stopsCount.nonStop++;
      else if (totalStops === 1) stopsCount.oneStop++;
      else stopsCount.twoPlusStops++;

      const outboundAirline = combo.outbound?.flights?.[0]?.carrier;
      const inboundAirline = combo.inbound?.flights?.[0]?.carrier;

      if (outboundAirline) {
        airlineCounts[outboundAirline]++;
        if (price < airlinePrices[outboundAirline]) {
          airlinePrices[outboundAirline] = price;
        }
      }

      if (inboundAirline && inboundAirline !== outboundAirline) {
        airlineCounts[inboundAirline]++;
        if (price < airlinePrices[inboundAirline]) {
          airlinePrices[inboundAirline] = price;
        }
      }
    });

    return { stopsCount, airlineCounts, airlinePrices };
  };

  const { stopsCount, airlineCounts, airlinePrices } = calculateCounts();

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleStopFilter = (stopType) => {
    setFilters((prev) => {
      const newStops = prev.stops.includes(stopType)
        ? prev.stops.filter((s) => s !== stopType)
        : [...prev.stops, stopType];

      const newFilters = { ...prev, stops: newStops };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleAirlineFilter = (airline) => {
    setFilters((prev) => {
      const newAirlines = prev.airlines.includes(airline)
        ? prev.airlines.filter((a) => a !== airline)
        : [...prev.airlines, airline];

      const newFilters = { ...prev, airlines: newAirlines };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handlePriceChange = (e, index) => {
    const value = parseInt(e.target.value);
    setFilters((prev) => {
      const newRange = [...prev.priceRange];
      newRange[index] = value;

      if (index === 0 && value > prev.priceRange[1]) newRange[1] = value;
      if (index === 1 && value < prev.priceRange[0]) newRange[0] = value;

      const newFilters = { ...prev, priceRange: newRange };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      stops: [],
      airlines: [],
      minPrice: 0,
      maxPrice: maxPrice,
      priceRange: [0, maxPrice],
    };

    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  // Handlers for Select All / Clear for a specific section
  const handleSelectAll = (section) => {
    setFilters((prev) => {
      let newFilters;
      if (section === "stops") {
        newFilters = { ...prev, stops: ["nonStop", "oneStop", "twoPlusStops"] };
      } else if (section === "airlines") {
        newFilters = { ...prev, airlines: [...allAirlines] };
      } else {
        return prev;
      }
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleClearSection = (section) => {
    setFilters((prev) => {
      let newFilters;
      if (section === "stops") {
        newFilters = { ...prev, stops: [] };
      } else if (section === "airlines") {
        newFilters = { ...prev, airlines: [] };
      } else {
        return prev;
      }
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const hasActiveFilters =
    filters.stops.length > 0 ||
    filters.airlines.length > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < maxPrice;

  const getAirlineLogo = (airlineCode) => {
    return `https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/${airlineCode}.png`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-blue-600 flex items-center hover:text-blue-800"
          >
            Clear all
            <X size={16} className="ml-1" />
          </button>
        )}
      </div>

      {/* Stops Filter */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("stops")}
        >
          <h4 className="font-medium text-gray-700">Filter by Stops</h4>
          {expandedSections.stops ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </div>

        {expandedSections.stops && (
          <>
            <div className="flex justify-end items-center text-xs mt-2 -mb-1">
              <span
                onClick={() => handleSelectAll("stops")}
                className="text-secondary-6000 hover:text-blue-800 font-medium cursor-pointer"
              >
                Select All
              </span>
              <span className="mx-1 text-gray-400">|</span>
              <span
                onClick={() => handleClearSection("stops")}
                className="text-gray-800 hover:text-blue-800 font-medium cursor-pointer"
              >
                Clear
              </span>
            </div>
            <div className="mt-3 space-y-3">
              <div
                className={`flex justify-between items-center p-2 rounded-lg cursor-pointer transition-colors ${
                  filters.stops.includes("nonStop")
                    ? "bg-blue-50 border border-blue-200"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => handleStopFilter("nonStop")}
              >
                <div className="flex items-center">
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center mr-2 ${
                      filters.stops.includes("nonStop")
                        ? "bg-primary-6000 border-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {filters.stops.includes("nonStop") && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm">Nonstop</span>
                </div>
                <span className="text-sm text-gray-600">
                  ({stopsCount.nonStop})
                </span>
              </div>
              <div
                className={`flex justify-between items-center p-2 rounded-lg cursor-pointer transition-colors ${
                  filters.stops.includes("oneStop")
                    ? "bg-blue-50 border border-blue-200"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => handleStopFilter("oneStop")}
              >
                <div className="flex items-center">
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center mr-2 ${
                      filters.stops.includes("oneStop")
                        ? "bg-primary-6000 border-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {filters.stops.includes("oneStop") && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm">1 Stop</span>
                </div>
                <span className="text-sm text-gray-600">
                  ({stopsCount.oneStop})
                </span>
              </div>
              <div
                className={`flex justify-between items-center p-2 rounded-lg cursor-pointer transition-colors ${
                  filters.stops.includes("twoPlusStops")
                    ? "bg-blue-50 border border-blue-200"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => handleStopFilter("twoPlusStops")}
              >
                <div className="flex items-center">
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center mr-2 ${
                      filters.stops.includes("twoPlusStops")
                        ? "bg-primary-6000 border-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {filters.stops.includes("twoPlusStops") && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm">2+ Stops</span>
                </div>
                <span className="text-sm text-gray-600">
                  ({stopsCount.twoPlusStops})
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Airlines Filter */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("airlines")}
        >
          <h4 className="font-medium text-gray-700">Filter By Airlines</h4>
          {expandedSections.airlines ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </div>

        {expandedSections.airlines && (
          <>
            <div className="flex justify-end items-center text-xs mt-2 -mb-1">
              <span
                onClick={() => handleSelectAll("airlines")}
                className="text-secondary-6000 hover:text-blue-800 font-medium cursor-pointer"
              >
                Select All
              </span>
              <span className="mx-1 text-gray-400">|</span>
              <span
                onClick={() => handleClearSection("airlines")}
                className="text-secondary-6000 hover:text-blue-800 font-medium cursor-pointer"
              >
                Clear
              </span>
            </div>
            <div className="mt-3 space-y-3 ">
              {allAirlines.map((airline) => (
                <div
                  key={airline}
                  className={`flex justify-between items-center p-2 rounded-lg cursor-pointer transition-colors ${
                    filters.airlines.includes(airline)
                      ? "bg-blue-50 border border-blue-200"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleAirlineFilter(airline)}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center mr-2 ${
                        filters.airlines.includes(airline)
                          ? "bg-primary-6000 border-blue-600"
                          : "border-gray-300"
                      }`}
                    >
                      {filters.airlines.includes(airline) && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="flex items-center">
                      <img
                        src={getAirlineLogo(airline)}
                        alt={airline}
                        className="w-6 h-6 object-contain mr-2"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/24x24?text=Airline";
                        }}
                      />
                      <span className="text-sm">
                        {" "}
                        {findAirlineByCode(airline)?.airlineName}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">
                    $
                    {airlineCounts[airline] > 0
                      ? Math.round(airlinePrices[airline] || 0)
                      : 0}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Price Filter */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("price")}
        >
          <h4 className="font-medium text-gray-700">Filter By Price</h4>
          {expandedSections.price ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </div>

        {expandedSections.price && (
          <div className="mt-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">
                ${filters.priceRange[0]}
              </span>
              <span className="text-sm text-gray-600">
                ${filters.priceRange[1]}
              </span>
            </div>
            <div className="relative h-2 bg-gray-200 rounded-full">
              <div
                className="absolute h-2 bg-blue-600 rounded-full"
                style={{
                  left: `${(filters.priceRange[0] / maxPrice) * 100}%`,
                  width: `${
                    ((filters.priceRange[1] - filters.priceRange[0]) /
                      maxPrice) *
                    100
                  }%`,
                }}
              ></div>
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                className="absolute w-full h-2 opacity-0 cursor-pointer z-10"
              />
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange(e, 1)}
                className="absolute w-full h-2 opacity-0 cursor-pointer z-10"
              />
              <div
                className="absolute w-4 h-4 bg-blue-600 rounded-full -mt-1 cursor-pointer"
                style={{
                  left: `${(filters.priceRange[0] / maxPrice) * 100}%`,
                }}
              ></div>
              <div
                className="absolute w-4 h-4 bg-blue-600 rounded-full -mt-1 cursor-pointer"
                style={{
                  left: `${(filters.priceRange[1] / maxPrice) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoundTripFilterBox;
