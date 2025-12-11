import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import {
  cheapesBestFastest,
  cheapesBestFastestPrice,
} from "../../../utils/utils";
import ReturnFlightResultCard from "./ReturnFlightResultCard";

dayjs.extend(duration);

const ReturnResultCard = ({
  data,
  item,
  handleSelectedChange,
  key,
  index,
  isOnward,
  selectedIndex,
}) => {
  const [activeBox, setActiveBox] = useState(null);
  const [sortedData, setSortedData] = useState(data);
  const [selectedType, setSelectedType] = useState("Cheapest");
  const [priceTab, setPriceTab] = useState({
    bestPrice: 0,
    cheapestPrice: 0,
    fastestPrice: 0,
  });

  const handleFilter = (key) => {
    setSelectedType(key);
    setActiveBox(key);

    const filterAirline = cheapesBestFastest({ sortedData, key });
    setSortedData(filterAirline);
  };
  // 🔹 Sync sortedData with updated data from props
  useEffect(() => {
    if (data) {
      // console.log("Sorting data", data);
      const filterPrice = cheapesBestFastestPrice({ sortedData: data });
      setPriceTab(filterPrice);
      // console.log(filterPrice, "filterPriceTAB");
      const type = isOnward ? "onward" : "return";
      handleSelectedChange(type, data[0], 0);
    }
    setSortedData(data);
  }, [data]);
  // console.log(data, "dataa");

  return (
    <div className="flex flex-col w-full">
      <div className="flex mb-4 flex-1  w-full  flex-grow ">
        <div class=" flex justify-between h-full">
          <div class="flex h-full items-center">
            <div class="expand-icon hamburger flex d-lg-none" id="hamburger">
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
        <div className="flex flex-1    justify-between  flex-grow gap-2">
          {/* Best Box */}
          <div
            className={`flex-grow flex-1 cursor-pointer   py-2 rounded-lg text-center ${
              activeBox === "Best"
                ? "bg-primary-6000 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => handleFilter("Best")}
          >
            <span className="text-[12px]">Best ${priceTab?.bestPrice}</span>
          </div>

          {/* Cheapest Box */}
          <div
            className={`flex-grow flex-1 cursor-pointer   py-2 rounded-lg text-center ${
              activeBox === "Cheapest"
                ? "bg-primary-6000 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => handleFilter("Cheapest")}
          >
            <span className="text-[12px]">
              Cheapest ${priceTab?.cheapestPrice}
            </span>
          </div>

          {/* Fastest Box */}
          <div
            className={`flex-grow flex-1 cursor-pointer  py-2 rounded-lg text-center ${
              activeBox === "Fastest"
                ? "bg-primary-6000 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => handleFilter("Fastest")}
          >
            <span className="text-[12px]">
              Fastest ${priceTab?.fastestPrice}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full flex-1">
        {sortedData &&
          sortedData?.map((item, index) => {
            return (
              <ReturnFlightResultCard
                key={`FlightResultCard-${index}`}
                item={item}
                isOnward={isOnward}
                index={index}
                selectedIndex={selectedIndex}
                handleSelectedChange={handleSelectedChange}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ReturnResultCard;
