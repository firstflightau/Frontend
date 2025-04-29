import React, { useCallback, useEffect, useState } from "react";
import FlightBreadcrumb from "../components/FlightBreadcrumb";
// import OnewayFilterBox from "../components/searchResult/onewaySearchResult/onewayFilterBox";
import OnewayResultCard from "../components/searchResult/onewaySearchResult/OnewayResultCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFlightData,
  fetchFlightReturnData,
} from "../redux/slices/flightSearchResult/flightSearchResultSlice";
import { useLocation, useNavigate } from "react-router-dom";

import FlightFilterScalationBig from "../components/searchResult/onewaySearchResult/FlightFilterScalationBig";
import FlightFilterScalationRight from "../components/searchResult/onewaySearchResult/FlightFilterScalationRight";
import SearchResultLoader from "../components/SearchResultLoader";
import OnewayFilterBox from "../components/searchResult/onewaySearchResult/OnewayFilterBox";
import ReturnResultCard from "../components/searchResult/onewaySearchResult/ReturnResultCard";
import { findAirlineByCode } from "../redux/slices/feature2/utils";
import { setSelectedFlight } from "../redux/slices/SelectedFlight/selectedFlightSlice";
import { PenLine } from "lucide-react";
import ReturnSearchFormInner from "../components/ReturnForm/ReturnSearchFormInner";
import FlightBreadcrumbReturn from "../components/FlightBreadcrumbReturn";

const ReturnSearchResult = () => {
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  // console.log(reducerState, "reducer state");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  let from = queryParams.get("from");
  let to = queryParams.get("to");

  let date = queryParams.get("date");
  let retrunDate = queryParams.get("retrunDate");
  let Adult = queryParams.get("Adult");
  let Child = queryParams.get("Child");
  let Infant = queryParams.get("Infant");
  //  let class= ,
  let FlightCabinClass = queryParams.get("class");
  let {
    journeyFlight,
    returnFlight,
    isLoading,
    isError,
    CatalogProductOfferingsId,
  } = reducerState?.flightSearchResult;
  const [jornyFlights, setJornyFlights] = useState(journeyFlight);
  const [returnFlights, setReturnFlights] = useState(returnFlight);

  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [loaderFilter, setLoaderFilter] = useState(false);
  const [selectedFlights, setSelectedFlights] = useState({
    onward: jornyFlights?.[0],
    return: returnFlights?.[0],
  });
  const [selectedIndex, setSelectedIndex] = useState({
    onward: 0,
    return: 0,
  });
  const [airlineCodes, setAirlineCodes] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [priceRange, setPriceRange] = useState(0);
  const [minDuration, setMinDuration] = useState(0);
  const [maxDuration, setMaxDuration] = useState(1200);
  const [durationRange, setDurationRange] = useState([0, 1200]);
  const [stopsAirline, setStopsAirline] = useState(null);
  const [standardizedFlights1, setStandardizedFlights1] = useState(
    journeyFlight || []
  );
  const [standardizedFlights2, setStandardizedFlights2] = useState(
    returnFlight || []
  );
  // console.log(
  //   journeyFlight,
  //   selectedFlights,
  //   "selectedFlights",
  //   "journeyFlight"
  // );

  console.log(isError, "catalogue");
  const calculatePriceRange = (data) => {
    let min = Infinity;
    let max = -Infinity;
    let minDur = Infinity;
    let maxDur = -Infinity;
    let stopes = {
      nonStop: { count: 0, minPrice: Infinity },
      oneStop: { count: 0, minPrice: Infinity },
      moreThanOneStop: { count: 0, minPrice: Infinity },
    };
    let Airlines = {};
    // let selectedFlights = [];
    const findStopes = (flight, stopes) => {
      if (flight?.flights.length === 1) {
        let count = stopes.nonStop.count + 1;
        let flightPrice =
          flight?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice;
        let stopPrice = stopes.nonStop.minPrice;
        let stopMinPrice = Math.min(stopPrice, flightPrice);
        stopes.nonStop = { count: count, minPrice: stopMinPrice };
      } else if (flight?.flights.length == 2) {
        let count = stopes.oneStop.count + 1;
        let flightPrice =
          flight?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice;
        let stopPrice = stopes.oneStop.minPrice;
        let stopMinPrice = Math.min(stopPrice, flightPrice);
        stopes.oneStop = { count: count, minPrice: stopMinPrice };
      } else {
        let count = stopes.moreThanOneStop.count + 1;
        let flightPrice =
          flight?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice;
        let stopPrice = stopes.moreThanOneStop.minPrice;
        let stopMinPrice = Math.min(stopPrice, flightPrice);
        stopes.moreThanOneStop = { count: count, minPrice: stopMinPrice };
      }
    };
    const findAireLine = (flight, Airlines, price) => {
      let flightName = flight?.flights?.[0]?.carrier;
      if (!Airlines[flightName]) {
        Airlines[flightName] = { count: 0, minPrice: Infinity };
      }
      Airlines[flightName].count++;
      Airlines[flightName].minPrice = Math.min(
        Airlines[flightName].minPrice,
        price
      );
    };
    standardizedFlights1?.forEach((flight) => {
      // console.log(flight, "flighttt");
      findStopes(flight, stopes);
      let price = flight?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice;
      //  let dur = flight?.layover;
      min = Math.min(min, price);
      max = Math.max(max, price);
      findStopes(flight, stopes);
      findAireLine(flight, Airlines, price);
      let newStopsAirline = {
        JourneyStopes: stopes,
        //   ReturnStopes: stopesReturn,
        Airlines: Airlines,
      };
      setMinPrice(min);
      setMaxPrice(max);
      // setPriceRange([min, max]);
      setPriceRange(max);
      setMinDuration(minDur);
      setMaxDuration(maxDur);
      setDurationRange([minDur, maxDur]);
      setStopsAirline(newStopsAirline);
      // console.log(stopes, "stopessss");
      //  findAireLine(flight, Airlines, price);
    });
    standardizedFlights2?.forEach((flight) => {
      // console.log(flight, "flighttt");
      findStopes(flight, stopes);
      let price = flight?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice;
      //  let dur = flight?.layover;
      min = Math.min(min, price);
      max = Math.max(max, price);
      findStopes(flight, stopes);
      findAireLine(flight, Airlines, price);
      let newStopsAirline = {
        JourneyStopes: stopes,
        //   ReturnStopes: stopesReturn,
        Airlines: Airlines,
      };
      setMinPrice(min);
      setMaxPrice(max);
      // setPriceRange([min, max]);
      setPriceRange(max);
      setMinDuration(minDur);
      setMaxDuration(maxDur);
      setDurationRange([minDur, maxDur]);
      setStopsAirline(newStopsAirline);
      console.log(stopes, "stopessss");
      //  findAireLine(flight, Airlines, price);
    });
  };
  const handleFilter = useCallback(
    (
      selectedCodes,
      selectedStops,
      priceRange,
      selectedTimes,
      selectedArrivalTimes,
      durationRange,
      selectedStopsReturn,
      selectedTimesReturn,
      selectedArrivalTimesReturn,
      airlineCodes
    ) => {
      // console.log(
      //   selectedStops,
      //   priceRange,
      //   selectedTimes,
      //   selectedArrivalTimes,

      //   selectedStopsReturn,
      //   selectedTimesReturn,
      //   selectedArrivalTimesReturn,
      //   airlineCodes,
      //   "selectedStops"
      // );
      if (Array.isArray(standardizedFlights1)) {
        const filteredJorny = standardizedFlights1?.filter((flight) => {
          // console.log(flight, "flightfilter");
          // return flight;
          let airCode = flight?.flights?.[0]?.carrier;
          let stops = flight?.flights?.length;
          let price =
            flight?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice;
          let departureTime = "";
          let arrivalTime = "";
          let normalizedDepartureTime = "";
          let normalizedArrivalTime = "";
          // console.log(priceRange, price, "priceRange, price");

          const matchprice =
            // true ||
            !priceRange ||
            // (price >= priceRange?.[0] && price <= priceRange?.[1]);
            price <= priceRange;

          const matchStops =
            // true ||
            selectedStops?.length === 0 || selectedStops?.includes(stops - 1);

          const matchAirline =
            airlineCodes?.length === 0 || airlineCodes?.includes(airCode);

          const matchTime =
            selectedTimes?.length === 0 ||
            selectedTimes?.some((timeRange) => {
              const [startHour, endHour] = timeRange;
              const flightHour = parseInt(
                flight?.departureTime?.split(":")[0],
                10
              );
              return flightHour >= startHour && flightHour <= endHour;
            });
          const matchArrivalTime =
            true ||
            selectedArrivalTimes?.length === 0 ||
            selectedArrivalTimes?.some((timeRange) => {
              const [startHour, endHour] = timeRange;
              const flightHour = parseInt(
                flight?.arrivalTime?.split(":")[0],
                10
              );
              return flightHour >= startHour && flightHour <= endHour;
            });
          // console.log(matchTime, "matchTime");
          return (
            matchprice &&
            matchStops &&
            matchTime &&
            matchArrivalTime &&
            matchAirline
          );
        });
        // [...filteredJorny];

        //  const filteredReturn = standardizedFlights2?.filter((flight) => {
        //    let airCode = flight?.flightName;
        //    let stops = flight?.stopes;
        //    let price = flight?.price;
        //    let departureTime = "";
        //    let arrivalTime = "";
        //    let normalizedDepartureTime = "";
        //    let normalizedArrivalTime = "";
        //    // console.log("peicernfe", priceRange, standardizedFlights2?.length);

        //    const matchprice =
        //      !priceRange ||
        //      (price >= priceRange?.[0] && price <= priceRange?.[1]);

        //    const matchAirline =
        //      airlineCodes?.length === 0 || airlineCodes?.includes(airCode);

        //    const matchStops =
        //      selectedStopsReturn?.length === 0 ||
        //      selectedStopsReturn?.includes(stops);

        //    const matchTime =
        //      selectedTimesReturn?.length === 0 ||
        //      selectedTimesReturn?.some((timeRange) => {
        //        const [startHour, endHour] = timeRange;
        //        const flightHour = parseInt(
        //          flight?.departureTime?.split(":")[0],
        //          10
        //        );
        //        return flightHour >= startHour && flightHour <= endHour;
        //      });
        //    const matchArrivalTime =
        //      selectedArrivalTimesReturn?.length === 0 ||
        //      selectedArrivalTimesReturn?.some((timeRange) => {
        //        const [startHour, endHour] = timeRange;
        //        const flightHour = parseInt(
        //          flight?.arrivalTime?.split(":")[0],
        //          10
        //        );
        //        return flightHour >= startHour && flightHour <= endHour;
        //      });
        //    // console.log(
        //    //   matchprice,
        //    //   matchStops,
        //    //   matchTime,
        //    //   matchArrivalTime,
        //    //   "matchTime"
        //    // );
        //    return (
        //      matchprice &&
        //      matchStops &&
        //      matchTime &&
        //      matchArrivalTime &&
        //      matchAirline
        //    );
        //  });

        //  setJornyFlights([...filteredJorny]);
        //  setReturnFlights([...filteredReturn]);
        // console.log(
        //   filteredJorny?.length,
        //   filteredReturn?.length,
        //   "after filter"
        // );
        // console.log(filteredJorny, "after filter");

        setJornyFlights([...filteredJorny]);
      }
      if (Array.isArray(standardizedFlights2)) {
        const filteredReturn = standardizedFlights2?.filter((flight) => {
          // console.log(flight, "flightfilter");
          // return flight;
          let airCode = flight?.flights?.[0]?.carrier;
          let stops = flight?.flights?.length;
          let price =
            flight?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice;
          let departureTime = "";
          let arrivalTime = "";
          let normalizedDepartureTime = "";
          let normalizedArrivalTime = "";
          // console.log(priceRange, price, "priceRange, price");

          const matchprice =
            // true ||
            !priceRange ||
            // (price >= priceRange?.[0] && price <= priceRange?.[1]);
            price <= priceRange;

          const matchStops =
            // true ||
            selectedStops?.length === 0 || selectedStops?.includes(stops - 1);

          const matchAirline =
            airlineCodes?.length === 0 || airlineCodes?.includes(airCode);

          const matchTime =
            selectedTimes?.length === 0 ||
            selectedTimes?.some((timeRange) => {
              const [startHour, endHour] = timeRange;
              const flightHour = parseInt(
                flight?.departureTime?.split(":")[0],
                10
              );
              return flightHour >= startHour && flightHour <= endHour;
            });
          const matchArrivalTime =
            true ||
            selectedArrivalTimes?.length === 0 ||
            selectedArrivalTimes?.some((timeRange) => {
              const [startHour, endHour] = timeRange;
              const flightHour = parseInt(
                flight?.arrivalTime?.split(":")[0],
                10
              );
              return flightHour >= startHour && flightHour <= endHour;
            });
          // console.log(matchTime, "matchTime");
          return (
            matchprice &&
            matchStops &&
            matchTime &&
            matchArrivalTime &&
            matchAirline
          );
        });
        // [...filteredJorny];

        //  const filteredReturn = standardizedFlights2?.filter((flight) => {
        //    let airCode = flight?.flightName;
        //    let stops = flight?.stopes;
        //    let price = flight?.price;
        //    let departureTime = "";
        //    let arrivalTime = "";
        //    let normalizedDepartureTime = "";
        //    let normalizedArrivalTime = "";
        //    // console.log("peicernfe", priceRange, standardizedFlights2?.length);

        //    const matchprice =
        //      !priceRange ||
        //      (price >= priceRange?.[0] && price <= priceRange?.[1]);

        //    const matchAirline =
        //      airlineCodes?.length === 0 || airlineCodes?.includes(airCode);

        //    const matchStops =
        //      selectedStopsReturn?.length === 0 ||
        //      selectedStopsReturn?.includes(stops);

        //    const matchTime =
        //      selectedTimesReturn?.length === 0 ||
        //      selectedTimesReturn?.some((timeRange) => {
        //        const [startHour, endHour] = timeRange;
        //        const flightHour = parseInt(
        //          flight?.departureTime?.split(":")[0],
        //          10
        //        );
        //        return flightHour >= startHour && flightHour <= endHour;
        //      });
        //    const matchArrivalTime =
        //      selectedArrivalTimesReturn?.length === 0 ||
        //      selectedArrivalTimesReturn?.some((timeRange) => {
        //        const [startHour, endHour] = timeRange;
        //        const flightHour = parseInt(
        //          flight?.arrivalTime?.split(":")[0],
        //          10
        //        );
        //        return flightHour >= startHour && flightHour <= endHour;
        //      });
        //    // console.log(
        //    //   matchprice,
        //    //   matchStops,
        //    //   matchTime,
        //    //   matchArrivalTime,
        //    //   "matchTime"
        //    // );
        //    return (
        //      matchprice &&
        //      matchStops &&
        //      matchTime &&
        //      matchArrivalTime &&
        //      matchAirline
        //    );
        //  });

        //  setJornyFlights([...filteredJorny]);
        //  setReturnFlights([...filteredReturn]);
        // console.log(
        //   filteredJorny?.length,
        //   filteredReturn?.length,
        //   "after filter"
        // );
        // console.log(filteredJorny, "after filter");

        setReturnFlights([...filteredReturn]);
      }
    },
    [standardizedFlights1]
  );
  useEffect(() => {
    if (standardizedFlights1 && standardizedFlights1.length > 0) {
      calculatePriceRange();
      // handleFilter();
      // setJornyFlights(journeyFlight);
    }
  }, [standardizedFlights1]);
  useEffect(() => {
    // if (journeyFlight && journeyFlight.length > 0) {
    // calculatePriceRange();
    // handleFilter();
    // setJornyFlights(journeyFlight);
    setStandardizedFlights1(journeyFlight);
    setStandardizedFlights2(returnFlight);
    setJornyFlights(journeyFlight);
    setReturnFlights(returnFlight);
    // }
  }, [reducerState]);

  useEffect(() => {
    const tpToken = reducerState?.tpToken?.tpTokenData?.access_token; // Replace with actual token (or fetch from Redux state)

    const requestData = {
      from,
      to,

      date,
      retrunDate,
      Adult,
      Child,
      Infant,
      //  let class= ,
      FlightCabinClass,
    };

    // Dispatch fetchFlightData with type and payload
    dispatch(
      fetchFlightReturnData({
        type: "journey",
        payload: { tptoken: tpToken, requestData },
      })
    );
  }, [from, to, date, retrunDate, Adult, Child, Infant]);
  // console.log(journeyFlight, jornyFlights, "setJornyFlightsss");

  // let selectedFlights = [];
  function handleSelectedFlightChange(type, flight, index) {
    console.log(
      type,
      flight,
      index,
      "handleSelectedFlightChangeff",
      selectedFlights
    );
    setSelectedFlights((pre) => {
      const newObj = { ...pre };
      newObj[type] = flight;
      // console.log(newObj, "newobject");
      return newObj;
    });
    setSelectedIndex((pre) => {
      const newObj = { ...pre };
      newObj[type] = index;
      // console.log(newObj, "newobjectindex");
      return newObj;
    });
  }
  const ArrowRight = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
    );
  };
  const handleBook = () => {
    dispatch(
      setSelectedFlight({
        Onward: selectedFlights?.onward,
        Return: selectedFlights?.return,
      })
    );
    const newWindow = window.open("/flight/review", "_blank");
    if (newWindow) {
      newWindow.focus();
    }
    // navigate("/flight/review");
  };
  return (
    <div>
      {/* <ReturnSearchFormInner /> */}
      <FlightBreadcrumbReturn />
      <div className="tour-list-section section-padding2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              {isLoading ? (
                <FlightFilterScalationBig />
              ) : (
                <OnewayFilterBox
                  airlineCodes={airlineCodes}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  priceRange={priceRange}
                  minDuration={minDuration}
                  maxDuration={maxDuration}
                  durationRange={durationRange}
                  onFilter={handleFilter}
                  stopsAirline={stopsAirline}
                />
              )}
            </div>
            <div className="col-lg-9 relative ">
              {isLoading ? (
                <>
                  <SearchResultLoader
                    text={
                      "Hold on! We are searching for the flight in this route"
                    }
                  />
                  <FlightFilterScalationRight />
                </>
              ) : (
                <>
                  {isError || CatalogProductOfferingsId === undefined ? (
                    <div className="flex items-center justify-center flex-col gap-2">
                      <h1 className="text-3xl text-center font-semibold">
                        No Result Found
                      </h1>
                      <p
                        onClick={() => {
                          navigate("/");
                        }}
                        className="text-center text-xl underline cursor-pointer text-red-700 flex gap-2 items-center"
                      >
                        <PenLine size={16} />
                        please Modify your Search
                      </p>
                    </div>
                  ) : (
                    jornyFlights && (
                      <>
                        <div className="flex flex-row gap-2 items-start">
                          <ReturnResultCard
                            data={jornyFlights}
                            // chepest={isChepest}
                            isOnward={true}
                            handleSelectedChange={handleSelectedFlightChange}
                            selectedIndex={selectedIndex}
                          />
                          <ReturnResultCard
                            data={returnFlights}
                            // chepest={isChepest}
                            isOnward={false}
                            handleSelectedChange={handleSelectedFlightChange}
                            selectedIndex={selectedIndex}
                          />
                        </div>
                        {selectedFlights?.onward?.flights?.[0] &&
                          selectedFlights?.return?.flights?.[0] && (
                            <div className=" sticky w-[100%+30px] bottom-0 z-5 bg-secondary-6000  p-3 shadow-2xl rounded-t-2xl flex text-white justify-between gap-2  ">
                              <div className="flex justify-between flex-1 gap-2">
                                <div className="flex-1  border-r-2 border-gray-50">
                                  <div className="flex gap-2 ">
                                    <p className=" font-bold text-white">
                                      Onward
                                    </p>
                                    <p className="text-white">
                                      •{" "}
                                      {
                                        findAirlineByCode(
                                          selectedFlights?.onward?.flights?.[0]
                                            ?.carrier
                                        )?.airlineName
                                      }
                                    </p>
                                    <p className="text-white">
                                      •{" "}
                                      {
                                        selectedFlights?.onward?.flights?.[0]
                                          ?.carrier
                                      }{" "}
                                      {
                                        selectedFlights?.onward?.flights?.[0]
                                          ?.number
                                      }
                                    </p>
                                  </div>
                                  <div className="flex gap-2">
                                    <div className=" content-center">
                                      <img
                                        src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/QF.png`}
                                        // src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/${selectedFlights?.onward?.flights?.[0]?.carrier}.png`}
                                        // src=""
                                        alt={
                                          selectedFlights?.onward?.flights?.[0]
                                            ?.carrier
                                        }
                                        className=" rounded-lg"
                                        width="30px"
                                        height="30px"
                                      />
                                    </div>
                                    <div>
                                      <p className=" content-center text-2xl font-bold  flex items-center text-white">
                                        {selectedFlights?.onward?.flights?.[0]?.Departure?.time?.slice(
                                          0,
                                          5
                                        )}
                                        {/* <HiArrowNarrowRight /> */}
                                        <ArrowRight />

                                        {selectedFlights?.onward?.flights?.[0]?.Arrival?.time?.slice(
                                          0,
                                          5
                                        )}
                                      </p>
                                      <p className="text-sm font-light text-white">
                                        {selectedFlights?.onward?.layover} •
                                        {selectedFlights?.onward?.flights
                                          ?.length == 1
                                          ? "Non-stop"
                                          : `${selectedFlights?.onward?.flights?.length} stop`}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-1  border-r-2 border-gray-50 ">
                                  <div className="flex gap-2">
                                    <p className=" font-bold text-white">
                                      Return
                                    </p>
                                    <p className="text-white">
                                      •{" "}
                                      {
                                        findAirlineByCode(
                                          selectedFlights?.return?.flights?.[0]
                                            ?.carrier
                                        )?.airlineName
                                      }
                                    </p>
                                    <p className="text-white">
                                      •{" "}
                                      {
                                        selectedFlights?.return?.flights?.[0]
                                          ?.carrier
                                      }{" "}
                                      {
                                        selectedFlights?.return?.flights?.[0]
                                          ?.number
                                      }
                                    </p>
                                  </div>
                                  <div className="flex gap-2">
                                    <div className=" content-center">
                                      <img
                                        // src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/${selectedFlights?.return?.flights?.[0]?.carrier}.png`}
                                        src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/QF.png`}
                                        alt=""
                                        className=" rounded-lg"
                                        width="30px"
                                        height="30px"
                                      />
                                    </div>
                                    <div>
                                      <p className=" content-center text-2xl font-bold  flex items-center text-white">
                                        {selectedFlights?.return?.flights?.[0]?.Departure?.time?.slice(
                                          0,
                                          5
                                        )}
                                        {/* <HiArrowNarrowRight /> */}
                                        <ArrowRight />
                                        {selectedFlights?.return?.flights?.[0]?.Arrival?.time?.slice(
                                          0,
                                          5
                                        )}
                                      </p>
                                      <p className="text-sm font-light text-white">
                                        {selectedFlights?.return?.layover} •
                                        {selectedFlights?.return?.flights
                                          ?.length == 1
                                          ? "Non-stop"
                                          : `${selectedFlights?.return?.flights?.length} stop`}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="">
                                {/* <p>Flight Details</p> */}
                                <div className="flex justify-center gap-2 flex-col items-center">
                                  <div>
                                    <p className="text-xl font-bold text-white">
                                      ${" "}
                                      {(
                                        selectedFlights?.onward
                                          ?.productsoption?.[0]
                                          ?.BestCombinablePrice?.TotalPrice +
                                        selectedFlights?.return
                                          ?.productsoption?.[0]
                                          ?.BestCombinablePrice?.TotalPrice
                                      )?.toFixed(2)}
                                    </p>
                                    {/* <p className="text-xs">Extra 64% off</p> */}
                                  </div>
                                  <div
                                    onClick={() => handleBook()}
                                    className="bg-white rounded-full px-4 justify-center items-center py-1 text-center text-secondary-6000 font-bold content-center"
                                  >
                                    <button className="text-center">
                                      Book
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                      </>
                    )
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnSearchResult;
