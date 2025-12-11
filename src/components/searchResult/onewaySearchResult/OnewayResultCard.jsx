import React, { useEffect, useState } from "react";
import FlightResultCard from "./FlightResultCard";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import {
  cheapesBestFastest,
  cheapesBestFastestPrice,
} from "../../../utils/utils";
import { useDispatch } from "react-redux";
import { openSidebar } from "../../../redux/slices/sidebarToggle/sidebarSlice";

dayjs.extend(duration);

const OnewayResultCard = ({
  data,
  addMarkup, // 1. Accept addMarkup prop
}) => {
  const [activeBox, setActiveBox] = useState(null);
  const [sortedData, setSortedData] = useState(data);
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState("Cheapest");
  const [priceTab, setPriceTab] = useState({
    bestPrice: 0,
    cheapestPrice: 0,
    fastestPrice: 0,
  });
  const handleFilter = (key) => {
    setSelectedType(key);
    setActiveBox(key);

    // 2. Pass addMarkup to the sorting function
    const filterAirline = cheapesBestFastest({ sortedData, key, addMarkup });
    setSortedData(filterAirline);
  };

  // 🔹 Sync sortedData with updated data from props
  useEffect(() => {
    if (data) {
      // 3. Pass addMarkup to the price tab calculation function
      const filterPrice = cheapesBestFastestPrice({
        sortedData: data,
        addMarkup,
      });
      setPriceTab(filterPrice);
    }
    setSortedData(data);
  }, [data, addMarkup]); // 4. Add addMarkup to dependency array

  const handleClickBurger = (e) => {
    e.stopPropagation();
    dispatch(openSidebar());
  };

  return (
    <>
      <div className="flex mb-4 flex-grow space-x-4">
        <div class=" flex justify-between h-full">
          <div class="flex h-full items-center">
            <div
              class="expand-icon hamburger flex d-lg-none"
              id="hamburger"
              onClick={handleClickBurger}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 7H10M10 7C10 8.65685 11.3431 10 13 10H14C15.6569 10 17 8.65685 17 7C17 5.34315 15.6569 4 14 4H13C11.3431 4 10 5.34315 10 7ZM16 17H21M20 7H21M3 17H6M6 17C6 18.6569 7.34315 20 9 20H10C11.6569 20 13 18.6569 13 17C13 15.3431 11.6569 14 10 14H9C7.34315 14 6 15.3431 6 17Z"
                  stroke="#071516"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-grow gap-2">
          {/* Best Box - Now shows marked-up price */}
          <div
            className={`flex-grow cursor-pointer px-2 md:px-4 py-2 rounded-lg text-center ${
              activeBox === "Best"
                ? "bg-primary-6000 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => handleFilter("Best")}
          >
            <span className="text-xs md:text-lg">
              Best ${(priceTab?.bestPrice).toFixed(0)}
            </span>
          </div>

          {/* Cheapest Box - Now shows marked-up price */}
          <div
            className={`flex-grow cursor-pointer px-2 md:px-4 py-2 rounded-lg text-center ${
              activeBox === "Cheapest"
                ? "bg-primary-6000 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => handleFilter("Cheapest")}
          >
            <span className="text-xs md:text-lg">
              Cheapest ${(priceTab?.cheapestPrice).toFixed(0)}
            </span>
          </div>

          {/* Fastest Box - Now shows marked-up price */}
          <div
            className={`flex-grow cursor-pointer px-2 md:px-4 py-2 rounded-lg text-center ${
              activeBox === "Fastest"
                ? "bg-primary-6000 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => handleFilter("Fastest")}
          >
            <span className="text-xs md:text-lg">
              Fastest ${(priceTab?.fastestPrice).toFixed(0)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {sortedData &&
          sortedData?.map((item, index) => {
            return (
              // 5. Pass addMarkup down to the individual card
              <FlightResultCard
                key={`FlightResultCard-${index}`}
                item={item}
                addMarkup={addMarkup}
              />
            );
          })}
      </div>
    </>
  );
};

export default OnewayResultCard;
