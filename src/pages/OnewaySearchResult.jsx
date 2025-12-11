import React, { useCallback, useEffect, useState } from "react";
import FlightBreadcrumb from "../components/FlightBreadcrumb";
import OnewayResultCard from "../components/searchResult/onewaySearchResult/OnewayResultCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlightData } from "../redux/slices/flightSearchResult/flightSearchResultSlice";
import { useLocation, useNavigate } from "react-router-dom";
import FlightFilterScalationBig from "../components/searchResult/onewaySearchResult/FlightFilterScalationBig";
import FlightFilterScalationRight from "../components/searchResult/onewaySearchResult/FlightFilterScalationRight";
import SearchResultLoader from "../components/SearchResultLoader";
import OnewayFilterBox from "../components/searchResult/onewaySearchResult/OnewayFilterBox";
import { PenLine } from "lucide-react";
import { clearWorkBench } from "../redux/slices/workbench/workBenchSlice";
import { clearPassengerData } from "../redux/slices/passenger/passengerSlice";
import { Helmet } from "react-helmet-async";
import { addMarkup } from "../utils/utils";

// 1. IMPORT addMarkup - Make sure this path is correct for your project!

const OnewaySearchResult = () => {
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  let from = queryParams.get("from");
  let to = queryParams.get("to");
  const fromName = queryParams.get("fromName");
  const toName = queryParams.get("toName");
  let date = queryParams.get("date");
  let retrunDate = queryParams.get("retrunDate");
  let Adult = queryParams.get("Adult");
  let Child = queryParams.get("Child");
  let Infant = queryParams.get("Infant");
  let FlightCabinClass = queryParams.get("class");

  let { journeyFlight, isLoading, isError, CatalogProductOfferingsId } =
    reducerState?.flightSearchResult;
  const [jornyFlights, setJornyFlights] = useState(journeyFlight);

  const navigate = useNavigate();
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
  // console.log(journeyFlight, "journeyFlight");

  // 2. MODIFIED: calculatePriceRange to use addMarkup
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

    const findStopes = (flight, stopes, markedUpPrice) => {
      if (flight?.flights.length === 1) {
        let count = stopes.nonStop.count + 1;
        let stopPrice = stopes.nonStop.minPrice;
        let stopMinPrice = Math.min(stopPrice, markedUpPrice); // Use markedUpPrice
        stopes.nonStop = { count: count, minPrice: stopMinPrice };
      } else if (flight?.flights.length == 2) {
        let count = stopes.oneStop.count + 1;
        let stopPrice = stopes.oneStop.minPrice;
        let stopMinPrice = Math.min(stopPrice, markedUpPrice); // Use markedUpPrice
        stopes.oneStop = { count: count, minPrice: stopMinPrice };
      } else {
        let count = stopes.moreThanOneStop.count + 1;
        let stopPrice = stopes.moreThanOneStop.minPrice;
        let stopMinPrice = Math.min(stopPrice, markedUpPrice); // Use markedUpPrice
        stopes.moreThanOneStop = { count: count, minPrice: stopMinPrice };
      }
    };
    const findAireLine = (flight, Airlines, markedUpPrice) => {
      let flightName = flight?.flights?.[0]?.carrier;
      if (!Airlines[flightName]) {
        Airlines[flightName] = { count: 0, minPrice: Infinity };
      }
      Airlines[flightName].count++;
      Airlines[flightName].minPrice = Math.min(
        Airlines[flightName].minPrice,
        markedUpPrice // Use markedUpPrice
      );
    };

    standardizedFlights1?.forEach((flight) => {
      // Get base price
      let price = flight?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice;

      // --- MARKUP LOGIC ---
      const onwardDestination =
        flight?.flights?.[flight?.flights?.length - 1]?.Arrival?.location;
      const markup = addMarkup
        ? addMarkup(price, "oneway", onwardDestination) // Assuming 'oneway' for trip type
        : 0;
      const grandTotal = Number(price) + Number(markup);
      const markedUpPrice = Math.round(grandTotal);
      // --- END MARKUP LOGIC ---

      findStopes(flight, stopes, markedUpPrice); // Pass markedUpPrice

      min = Math.min(min, markedUpPrice); // Use markedUpPrice
      max = Math.max(max, markedUpPrice); // Use markedUpPrice

      findAireLine(flight, Airlines, markedUpPrice); // Pass markedUpPrice

      let newStopsAirline = {
        JourneyStopes: stopes,
        Airlines: Airlines,
      };

      // Set state with marked-up prices
      setMinPrice(min);
      setMaxPrice(max);
      setPriceRange(max); // This sets the slider's initial position to max
      setMinDuration(minDur);
      setMaxDuration(maxDur);
      setDurationRange([minDur, maxDur]);
      setStopsAirline(newStopsAirline);
    });
  };

  // 3. MODIFIED: handleFilter to use addMarkup
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
      if (Array.isArray(standardizedFlights1)) {
        const filteredJorny = standardizedFlights1?.filter((flight) => {
          let airCode = flight?.flights?.[0]?.carrier;
          let stops = flight?.flights?.length;

          // Get base price
          let price =
            flight?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice;

          // --- MARKUP LOGIC ---
          const onwardDestination =
            flight?.flights?.[flight?.flights?.length - 1]?.Arrival?.location;
          const markup = addMarkup
            ? addMarkup(price, "oneway", onwardDestination) // Assuming 'oneway'
            : 0;
          const grandTotal = Number(price) + Number(markup);
          const markedUpPrice = Math.round(grandTotal);
          // --- END MARKUP LOGIC ---

          let departureTime = "";
          let arrivalTime = "";
          let normalizedDepartureTime = "";
          let normalizedArrivalTime = "";

          // Filter using the markedUpPrice
          const matchprice = !priceRange || markedUpPrice <= priceRange;

          const matchStops =
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
            true || // This was hardcoded to true in your original code
            selectedArrivalTimes?.length === 0 ||
            selectedArrivalTimes?.some((timeRange) => {
              const [startHour, endHour] = timeRange;
              const flightHour = parseInt(
                flight?.arrivalTime?.split(":")[0],
                10
              );
              return flightHour >= startHour && flightHour <= endHour;
            });

          return (
            matchprice &&
            matchStops &&
            matchTime &&
            matchArrivalTime &&
            matchAirline
          );
        });

        setJornyFlights([...filteredJorny]);
      }
    },
    [standardizedFlights1, addMarkup] // Add addMarkup dependency
  );

  useEffect(() => {
    if (standardizedFlights1 && standardizedFlights1.length > 0) {
      calculatePriceRange();
    }
  }, [standardizedFlights1, addMarkup]); // Add addMarkup dependency

  useEffect(() => {
    setStandardizedFlights1(journeyFlight);
    setJornyFlights(journeyFlight);
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
      //  let class= ,
      FlightCabinClass,
    };

    // Dispatch fetchFlightData with type and payload
    dispatch(
      fetchFlightData({
        type: "journey",
        payload: { tptoken: tpToken, requestData },
      })
    );
    dispatch(clearWorkBench());
    dispatch(clearPassengerData());

    window.scrollTo(0, 0);
  }, [from, to, date, retrunDate, Adult, Child, Infant]);

  const homeData = useSelector(
    (state) => state?.metaData?.allMetaData?.onewaysearchresult
  );

  return (
    <div>
      {(homeData || from || to) && (
        <Helmet>
          {/* Main SEO Tags */}
          <title>
            {`flight for ${from} to ${to}, flight for ${fromName?.toLowerCase()} to ${toName?.toLowerCase()}`}
          </title>
          <meta name="description" content={homeData?.description} />
          <meta name="keywords" content={homeData?.keywords} />
          <link rel="canonical" href={homeData?.canonical} />

          {/* Open Graph (Social Media) Tags */}
          <meta property="og:title" content={homeData?.ogTitle} />
          <meta property="og:description" content={homeData?.ogDescription} />
          <meta property="og:image" content={homeData?.ogImage} />
          <meta property="og:url" content={homeData?.canonical} />
          <meta property="og:type" content="website" />
        </Helmet>
      )}
      <FlightBreadcrumb />
      <div className="tour-list-section section-padding2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              {isLoading ? (
                <FlightFilterScalationBig />
              ) : (
                // These props (minPrice, maxPrice, etc.) are now the marked-up values
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
            <div className="col-lg-9">
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
                      // 4. Pass addMarkup to the Result Card
                      <OnewayResultCard
                        data={jornyFlights}
                        addMarkup={addMarkup}
                      />
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

export default OnewaySearchResult;
