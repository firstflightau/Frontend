import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "flowbite-react";
import { closeSidebar } from "../../../redux/slices/sidebarToggle/sidebarSlice";
import { findAirlineByCode } from "../../../redux/slices/feature2/utils";

const OnewayFilterBox = ({
  airlineCodes,
  minPrice,
  maxPrice,
  priceRange,
  onFilter,
  minDuration,
  maxDuration,
  durationRange,
  stopsAirline,
}) => {
  const isOpenBurger = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const handleCloseBurger = () => dispatch(closeSidebar());

  const [selectedCodes, setSelectedCodes] = useState([]);
  const [selectedStops, setSelectedStops] = useState([]);
  const [selectedStopsReturn, setSelectedStopsRetrun] = useState([]);
  const [currentPriceRange, setCurrentPriceRange] = useState(priceRange);
  const [currentPriceRangeNew, setCurrentPriceRangeNew] = useState(priceRange);
  const [currentDurationRange, setCurrentDurationRange] =
    useState(durationRange);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedTimesReturn, setSelectedTimesReturn] = useState([]);
  const [selectedLandingTimes, setSelectedLandingTimes] = useState([]);
  const [selectedLandingTimesReturn, setSelectedLandingTimesReturn] = useState(
    []
  );
  const [airlines, setAirlines] = useState([]);

  const debounceTimer = useRef(null);

  const triggerFilter = (updatedFilters) => {
    const defaults = {
      selectedCodes,
      selectedStops,
      currentPriceRange,
      selectedTimes,
      selectedLandingTimes,
      currentDurationRange,
      selectedStopsReturn,
      selectedTimesReturn,
      selectedLandingTimesReturn,
      airlines,
    };
    const finalFilters = { ...defaults, ...updatedFilters };
    onFilter(
      finalFilters.selectedCodes,
      finalFilters.selectedStops,
      finalFilters.currentPriceRange,
      finalFilters.selectedTimes,
      finalFilters.selectedLandingTimes,
      finalFilters.currentDurationRange,
      finalFilters.selectedStopsReturn,
      finalFilters.selectedTimesReturn,
      finalFilters.selectedLandingTimesReturn,
      finalFilters.airlines
    );
  };

  const handlePriceChange = (value) => {
    const newValue = value?.target?.value;
    setCurrentPriceRange(newValue);
    setCurrentPriceRangeNew(newValue);

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
      triggerFilter({ currentPriceRange: newValue });
    }, 300);
  };

  const handleAirlineChange = (event) => {
    const { value, checked } = event.target;
    const updatedAirlines = checked
      ? [...airlines, value]
      : airlines.filter((air) => air !== value);
    setAirlines(updatedAirlines);
    triggerFilter({ airlines: updatedAirlines });
  };

  const handleStopChange = (event) => {
    const { value, checked } = event.target;
    const stopValue = parseInt(value, 10);
    const updatedStops = checked
      ? [...selectedStops, stopValue]
      : selectedStops.filter((stop) => stop !== stopValue);
    setSelectedStops(updatedStops);
    triggerFilter({ selectedStops: updatedStops });
  };

  // --- New Handlers for Select All / Clear ---

  const handleSelectAllStops = () => {
    const allStops = Object.keys(stopsAirline?.JourneyStopes || {})
      .map((key, index) => ({ key, index }))
      .filter(({ key }) => stopsAirline.JourneyStopes[key]?.count > 0)
      .map(({ index }) => index);
    setSelectedStops(allStops);
    triggerFilter({ selectedStops: allStops });
  };

  const handleClearStops = () => {
    setSelectedStops([]);
    triggerFilter({ selectedStops: [] });
  };

  const handleSelectAllAirlines = () => {
    const allAirlines = Object.keys(stopsAirline?.Airlines || {});
    setAirlines(allAirlines);
    triggerFilter({ airlines: allAirlines });
  };

  const handleClearAirlines = () => {
    setAirlines([]);
    triggerFilter({ airlines: [] });
  };

  // --- Filter Sub-components ---

  const StopFilter = ({ handleStopChange, stops, selected }) => {
    return (
      <div className="bg-white rounded-lg">
        <p className="text-lg font-semibold text-gray-800 mb-3">
          Filter by Stops
        </p>
        <div className="flex justify-end items-center text-xs -mt-2 mb-2">
          <span
            onClick={handleSelectAllStops}
            className="text-secondary-6000 hover:text-blue-800 font-medium cursor-pointer"
          >
            Select All
          </span>
          <span className="mx-1 text-gray-400">|</span>
          <span
            onClick={handleClearStops}
            className="text-gray-800 hover:text-blue-800 font-medium cursor-pointer"
          >
            Clear
          </span>
        </div>
        <div className="space-y-3">
          {stops &&
            Object.keys(stops).map((key, index) => {
              const isItem = stops[key]?.count > 0;
              const price = stops[key]?.minPrice;
              const count = stops[key]?.count;

              return isItem ? (
                <div
                  key={index}
                  className="flex justify-between items-center p-2.5 sm:p-1.5 lg:p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={`stop-${index}`}
                      value={index}
                      checked={selected?.includes(index)}
                      onChange={handleStopChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <label
                      htmlFor={`stop-${index}`}
                      className="text-sm font-medium text-gray-900"
                    >
                      {key === "moreThanOneStop" ? "2+ stops" : key}
                    </label>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-1 lg:gap-2">
                    <p className="text-green-500 font-medium text-sm">{`$ ${price}`}</p>
                    <p className="text-xs text-gray-600">{`(${count})`}</p>
                  </div>
                </div>
              ) : null;
            })}
        </div>
      </div>
    );
  };

  const AirlineFilter = () => {
    const Airlines = stopsAirline?.Airlines;
    return (
      <div className="bg-white">
        <p className="text-lg font-semibold text-gray-800 mb-3">
          Filter By Airlines
        </p>
        <div className="flex justify-end items-center text-xs -mt-2 mb-2">
          <span
            onClick={handleSelectAllAirlines}
            className="text-secondary-6000 hover:text-blue-800 font-medium cursor-pointer"
          >
            Select All
          </span>
          <span className="mx-1 text-gray-400">|</span>
          <span
            onClick={handleClearAirlines}
            className="text-gray-800 hover:text-blue-800 font-medium cursor-pointer"
          >
            Clear
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {Airlines &&
            Object.keys(Airlines).map((key) => {
              const Price = Airlines?.[key]?.minPrice;
              const isChecked = airlines.includes(key);
              return (
                <div
                  key={key}
                  className={`flex justify-between items-center p-2.5 sm:p-1.5 lg:p-2 rounded-lg border transition w-full
                  ${
                    isChecked
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <label className="flex items-center gap-2 w-full cursor-pointer">
                    <Checkbox
                      value={key}
                      className="hidden"
                      checked={isChecked}
                      onChange={handleAirlineChange}
                    />
                    <img
                      src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/${key}.png`}
                      alt="flight"
                      className="w-6 h-6 rounded-md"
                    />
                    <p className="text-sm font-medium text-gray-900">
                      {findAirlineByCode(key)?.airlineName}
                    </p>
                  </label>
                  <div className="flex-1 items-center gap-1 ">
                    <p className="text-green-500 text-sm font-medium text-nowrap">
                      {`$ ${Price}`}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".search-filter-section") &&
        !e.target.closest("#hamburger")
      ) {
        dispatch(closeSidebar());
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [dispatch]);

  return (
    <>
      <div
        className={`p-3.5 sm:p-2 lg:p-4 sticky top-28 search-filter-section rounded-lg bg-white border border-gray-200 space-y-4 ${
          isOpenBurger ? "sidenav-active" : ""
        }`}
      >
        <div
          onClick={handleCloseBurger}
          className="expand-icon close-btn flex text-gray-500 d-lg-none"
        >
          <i className="fa-solid fa-angles-left"></i>
        </div>
        <StopFilter
          handleStopChange={handleStopChange}
          stops={stopsAirline?.JourneyStopes}
          selected={selectedStops}
        />
        <AirlineFilter />
        <div className="bg-white ">
          <p className="text-lg font-semibold text-gray-800 mb-3">
            Filter By Price
          </p>
          <input
            id="default-range"
            onChange={handlePriceChange}
            type="range"
            min={minPrice}
            max={maxPrice + 1}
            value={currentPriceRangeNew || maxPrice}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer "
          ></input>
          <div className="flex justify-between items-center mt-2">
            <span className="font-semibold text-sm">{`$ ${currentPriceRangeNew}`}</span>
            <span className="font-semibold text-sm">$ {maxPrice}</span>
          </div>
        </div>
      </div>
      <div className={`cover ${isOpenBurger ? "cover-active" : ""}`}></div>
    </>
  );
};

export default OnewayFilterBox;
