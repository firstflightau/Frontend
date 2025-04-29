import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Checkbox, RangeSlider } from "flowbite-react";
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
  // console.log(stopsAirline, "stopsAirlinedddd");
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
  const debounceTimer = useRef(null); // Use ref to store the timer
  const flightList = useSelector((state) => state?.flightList);
  const [airlines, setAirlines] = useState([]);
  const [airports, setAirports] = useState([]);
  const handlePriceChange = (value) => {
    setCurrentPriceRange(value?.target?.value);

    setCurrentPriceRangeNew(value?.target?.value);
    // Clear existing timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    let newValue = value?.target?.value;
    // console.log(newValue, "newValue");

    // Apply debounce to prevent frequent updates
    debounceTimer.current = setTimeout(() => {
      onFilter(
        selectedCodes,
        selectedStops,
        newValue, // Use the latest price range
        selectedTimes,
        selectedLandingTimes,
        currentDurationRange,
        selectedStopsReturn,
        selectedTimesReturn,
        selectedLandingTimesReturn,
        airlines
      );
    }, 300);
  };

  const handleAirlineChange = (event) => {
    const { value, checked } = event.target;
    // console.log(value, checked, "valueChecked");
    const airlineValue = value;
    setAirlines((prev) => {
      const updateAirline = checked
        ? [...prev, airlineValue]
        : prev.filter((air) => air !== airlineValue);
      onFilter(
        selectedCodes,
        selectedStops,
        currentPriceRange,
        selectedTimes,
        selectedLandingTimes,
        currentDurationRange,
        selectedStopsReturn,
        selectedTimesReturn,
        selectedLandingTimesReturn,
        updateAirline
      );
      // console.log(updateAirline, "updateAirline");
      return updateAirline;
    }); // 300ms delay (adjust as needed)
  };
  const handleStopChange = (event) => {
    const { value, checked } = event.target;
    const stopValue = parseInt(value, 10);
    setSelectedStops((prev) => {
      const updateStop = checked
        ? [...prev, stopValue]
        : prev.filter((stop) => stop !== stopValue);
      onFilter(
        selectedCodes,
        updateStop,
        currentPriceRange,
        selectedTimes,
        selectedLandingTimes,
        currentDurationRange,
        selectedStopsReturn,
        selectedTimesReturn,
        selectedLandingTimesReturn,
        airlines
      );
      return updateStop;
    });
  };
  const handleStopChangeRetrun = (event) => {
    const { value, checked } = event.target;
    const stopValue = parseInt(value, 10);
    setSelectedStopsRetrun((prev) => {
      const updateStopsreturn = checked
        ? [...prev, stopValue]
        : prev.filter((stop) => stop !== stopValue);
      onFilter(
        selectedCodes,
        selectedStops,
        currentPriceRange,
        selectedTimes,
        selectedLandingTimes,
        currentDurationRange,
        updateStopsreturn,
        selectedTimesReturn,
        selectedLandingTimesReturn,
        airlines
      );
      return updateStopsreturn;
    });
  };
  const handleTimeChange = (event) => {
    const { value, checked } = event.target;
    const timeRange = value.split("-").map((v) => parseInt(v, 10));
    setSelectedTimes((prev) => {
      const updateSelectedTimes = checked
        ? [...prev, timeRange]
        : prev.filter((range) => range.join("-") !== value);
      // console.log(updateSelectedTimes, "updateSelectedTimes");
      onFilter(
        selectedCodes,
        selectedStops,
        currentPriceRange,
        updateSelectedTimes,
        selectedLandingTimes,
        currentDurationRange,
        selectedStopsReturn,
        selectedTimesReturn,
        selectedLandingTimesReturn,
        airlines
      );
      return updateSelectedTimes;
    });
  };
  const handleTimeChangeReturn = (event) => {
    const { value, checked } = event.target;
    const timeRange = value.split("-").map((v) => parseInt(v, 10));
    setSelectedTimesReturn((prev) => {
      const updateSelectedTimesReturn = checked
        ? [...prev, timeRange]
        : prev.filter((range) => range.join("-") !== value);
      onFilter(
        selectedCodes,
        selectedStops,
        currentPriceRange,
        selectedTimes,
        selectedLandingTimes,
        currentDurationRange,
        selectedStopsReturn,
        updateSelectedTimesReturn,
        selectedLandingTimesReturn,
        airlines
      );
      return updateSelectedTimesReturn;
    });
  };
  const handleLandingTimeChange = (event) => {
    const { value, checked } = event.target;
    const timeRange = value.split("-").map((v) => parseInt(v, 10));
    setSelectedLandingTimes((prev) => {
      const updateSelectedLandingTimes = checked
        ? [...prev, timeRange]
        : prev.filter((range) => range.join("-") !== value);
      onFilter(
        selectedCodes,
        selectedStops,
        currentPriceRange,
        selectedTimes,
        updateSelectedLandingTimes,
        currentDurationRange,
        selectedStopsReturn,
        selectedTimesReturn,
        selectedLandingTimesReturn,
        airlines
      );
      return updateSelectedLandingTimes;
    });
  };
  const handleLandingTimeChangeReturn = (event) => {
    const { value, checked } = event.target;
    const timeRange = value.split("-").map((v) => parseInt(v, 10));
    setSelectedLandingTimesReturn((prev) => {
      const updateLandingTimesReturn = checked
        ? [...prev, timeRange]
        : prev.filter((range) => range.join("-") !== value);
      onFilter(
        selectedCodes,
        selectedStops,
        currentPriceRange,
        selectedTimes,
        selectedLandingTimes,
        currentDurationRange,
        selectedStopsReturn,
        selectedTimesReturn,
        updateLandingTimesReturn,
        airlines
      );

      return updateLandingTimesReturn;
    });
  };
  const StopFilter = ({ handleStopChange, stops, selected }) => {
    return (
      <div className="bg-white  rounded-lg ">
        <p className="text-lg font-semibold text-gray-800 mb-3">
          Filter by Stops
        </p>

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
  // const StopFilter = ({ handleStopChange, stops, selected }) => {
  //   return (
  //     <div className="PackagetagFilters flight-filter-aireline">
  //       <p>Filter By Stop's</p>
  //       <>
  //         {stops &&
  //           Object.keys(stops).map((key, index) => {
  //             const isItem = stops[key]?.count > 0;
  //             const price = stops[key]?.minPrice;
  //             const count = stops[key]?.count;

  //             let itemShow = isItem ? (
  //               <div className="flex justify-between items-center w-full">
  //                 {/* Flowbite Checkbox */}
  //                 <div className="flex items-center">
  //                   <Checkbox
  //                     id={`stop-${index}`}
  //                     value={index}
  //                     checked={selected?.includes(index)}
  //                     onChange={handleStopChange}
  //                   />
  //                   <label
  //                     htmlFor={`stop-${index}`}
  //                     className="ml-2 text-sm font-medium text-gray-900"
  //                   >
  //                     {key === "moreThanOneStop" ? "2+ stops" : key}
  //                   </label>
  //                 </div>

  //                 {/* Price and Count */}
  //                 <div className="flex items-center gap-1">
  //                   <div className="flex">
  //                     <p className="text-green-400 text-nowrap text-sm">₹</p>
  //                     <p className="font-medium text-sm">{price}</p>
  //                   </div>
  //                   <p className="text-sm font-medium">{`${count}`}</p>
  //                 </div>
  //               </div>
  //             ) : null;
  //             return itemShow;
  //           })}
  //       </>
  //     </div>
  //   );
  // };

  // const AirlineFilter = () => {
  //   const Airlines = stopsAirline?.Airlines;

  //   return (
  //     <div className="bg-white">
  //       <p className="text-lg font-semibold text-gray-800 mb-3">
  //         Filter By Airlines
  //       </p>

  //       <div className="flex flex-col gap-2">
  //         {Airlines &&
  //           Object.keys(Airlines).map((key) => {
  //             const Price = Airlines?.[key]?.minPrice;

  //             return (
  //               <div
  //                 key={key}
  //                 className="flex justify-between items-center p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition w-full"
  //               >
  //                 <label className="flex items-center gap-2 w-full cursor-pointer">
  //                   <Checkbox
  //                     value={key}
  //                     className="w-4 h-4 text-blue-600"
  //                     checked={airlines.includes(key)}
  //                     onChange={handleAirlineChange}
  //                   />
  //                   <img
  //                     src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/${key}.png`}
  //                     alt="flight"
  //                     className="w-6 h-6 rounded-md"
  //                   />
  //                   <p className="text-sm font-medium text-gray-900">{key}</p>
  //                 </label>

  //                 <div className="flex items-center gap-1 min-w-[50px]">
  //                   <p className="text-green-500 text-sm font-medium text-nowrap">
  //                     {`$ ${Price}`}
  //                   </p>
  //                 </div>
  //               </div>
  //             );
  //           })}
  //       </div>
  //     </div>
  //   );
  // };
  const AirlineFilter = () => {
    const Airlines = stopsAirline?.Airlines;

    return (
      <div className="bg-white">
        <p className="text-lg font-semibold text-gray-800 mb-3">
          Filter By Airlines
        </p>

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
                    {/* Hidden Checkbox */}
                    <Checkbox
                      value={key}
                      className="hidden"
                      checked={isChecked}
                      onChange={handleAirlineChange}
                    />

                    <img
                      src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/${key}.png`}
                      // src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/QF.png`}
                      alt="flight"
                      className="w-6 h-6 rounded-md"
                    />
                    <p className="text-sm font-medium text-gray-900">{key}</p>
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

  return (
    <>
      <div className="p-3.5 sm:p-2 lg:p-4 sticky top-28 search-filter-section rounded-lg bg-white border border-gray-200 space-y-4 ">
        <div className="expand-icon close-btn flex text-gray-500 d-lg-none">
          <i class="fa-solid fa-angles-left"></i>
        </div>
        <StopFilter
          handleStopChange={handleStopChange}
          stops={stopsAirline?.JourneyStopes}
          selected={selectedStops}
        />

        <AirlineFilter />

        {/* Price Filter Section */}
        <div className="bg-white ">
          <p className="text-lg font-semibold text-gray-800 mb-3">
            Filter By Price
          </p>
          {/* <RangeSlider
            className=""
            
            
            
           
          /> */}
          <input
            id="default-range"
            onChange={handlePriceChange}
            type="range"
            min={minPrice}
            max={maxPrice + 1}
            value={currentPriceRangeNew || maxPrice}
            class="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer "
          ></input>

          <div className="flex justify-between items-center mt-2">
            <span className="font-semibold text-sm">{`$ ${currentPriceRangeNew}`}</span>
            <span className="font-semibold text-sm">$ {maxPrice}</span>
          </div>
        </div>
      </div>
      <div class="cover"></div>
    </>
  );
};
export default OnewayFilterBox;
