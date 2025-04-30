import React, { useEffect, useState } from "react";

import airIndia from "../../../assets/images/logo/AI.png";
import FlightResultCard from "./FlightResultCard";
// import { dummyFlightdata } from "../../../utils/dummyflightResponse";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import {
  cheapesBestFastest,
  cheapesBestFastestPrice,
} from "../../../utils/utils";

dayjs.extend(duration);

const OnewayResultCard = ({
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
    }
    setSortedData(data);
  }, [data]);
  // console.log(data, "dataa");

  return (
    <>
      <div className="flex mb-4 flex-grow space-x-4">
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
        <div className="flex  flex-grow gap-2">
          {/* Best Box */}
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

          {/* Cheapest Box */}
          <div
            className={`flex-grow cursor-pointer px-2 md:px-4  py-2 rounded-lg text-center ${
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

          {/* Fastest Box */}
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
              <FlightResultCard key={`FlightResultCard-${index}`} item={item} />
            );
          })}
      </div>
      {/* <div>
        <div className="package-card mt-3">
          <div className="package-content">
            <div className="location">
              <img src={airIndia} />
              <div className="name">
                {" "}
                <i class="fa-solid fa-plane-departure"></i> <b>Air India</b>
              </div>
            </div>
            <div className="packages-person">
              <div className="count">
                <i class="fa-regular fa-clock"></i>
                <p className="pera">14:20 DEL - 07:10 SYD</p>
              </div>
              <div className="count">
                <p className="pera">17 deals from</p>
                <br />
                <h4>$1,553</h4>
                <br />
                <p className="pera">$3,106 total</p>
                <br />
                <a href="#">
                  <div className="px-3 py-2 rounded-md bg-primary-6000 text-white">
                    <span className="text-sm">Select</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default OnewayResultCard;
