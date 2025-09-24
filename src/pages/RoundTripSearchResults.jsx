// components/RoundTripSearchResults.js
import React, { useState, useEffect } from "react";
import RoundTripResultCard from "./RoundTripResultCard";
import { sortCombinations, getPriceTabs } from "../utils/sortingUtilities";

const RoundTripSearchResults = ({ combinations, onSelect }) => {
  const [sortedCombinations, setSortedCombinations] = useState(
    combinations || []
  );
  const [activeSort, setActiveSort] = useState("Cheapest");
  const [priceTabs, setPriceTabs] = useState({
    bestPrice: 0,
    cheapestPrice: 0,
    fastestPrice: 0,
  });

  // Initialize with default sorting
  useEffect(() => {
    if (combinations && combinations.length > 0) {
      const sorted = sortCombinations(combinations, "Cheapest");
      setSortedCombinations(sorted);

      const prices = getPriceTabs(combinations);
      setPriceTabs(prices);
    }
  }, [combinations]);

  // Handle sort change
  const handleSortChange = (sortType) => {
    setActiveSort(sortType);
    const sorted = sortCombinations(combinations, sortType);
    setSortedCombinations(sorted);
  };

  if (!combinations || combinations.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">No flights found</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Sorting Tabs */}
      <div className="flex mb-6 bg-gray-100 p-2 rounded-lg">
        <div className="flex flex-1 gap-2">
          <button
            className={`flex-1 py-1 rounded-lg text-center transition-all ${
              activeSort === "Cheapest"
                ? "bg-primary-6000 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => handleSortChange("Cheapest")}
          >
            <span className="text-sm font-medium">Cheapest</span>
            <div className="text-xs mt-1">$ {priceTabs.cheapestPrice} AUD</div>
          </button>
          <button
            className={`flex-1 py-1 rounded-lg text-center transition-all ${
              activeSort === "Best"
                ? "bg-primary-6000 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => handleSortChange("Best")}
          >
            <span className="text-sm font-medium">Best</span>
            <div className="text-xs mt-1">$ {priceTabs.bestPrice} AUD</div>
          </button>

          <button
            className={`flex-1 py-1 rounded-lg text-center transition-all ${
              activeSort === "Fastest"
                ? "bg-primary-6000 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => handleSortChange("Fastest")}
          >
            <span className="text-sm font-medium">Fastest</span>
            <div className="text-xs mt-1">$ {priceTabs.fastestPrice} AUD</div>
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-gray-600">
          Found {sortedCombinations.length} flight options
        </p>
      </div>

      {/* Flight Results */}
      <div className="space-y-4">
        {sortedCombinations.map((combo, idx) => (
          <RoundTripResultCard key={idx} combo={combo} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
};

export default RoundTripSearchResults;
