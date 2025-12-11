import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlightReturnData } from "../redux/slices/flightSearchResult/flightSearchResultSlice";
import { useLocation, useNavigate } from "react-router-dom";
import SearchResultLoader from "../components/SearchResultLoader";
import FlightBreadcrumbReturn from "../components/FlightBreadcrumbReturn";
import { setSelectedFlight } from "../redux/slices/SelectedFlight/selectedFlightSlice";
import { PenLine } from "lucide-react";
import RoundTripSearchResults from "./RoundTripSearchResults";
import RoundTripFilterBox from "./RoundTripFilterBox";
import { Helmet } from "react-helmet-async";
import { addMarkup } from "../utils/utils";

// 1. IMPORT addMarkup - Make sure this path is correct for your project!
// import { addMarkup } from "../utils/markup"; // <-- UPDATE THIS PATH

const ReturnSearchResult = () => {
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const from = queryParams.get("from");
  const to = queryParams.get("to");
  const fromName = queryParams.get("fromName");
  const toName = queryParams.get("toName");
  const date = queryParams.get("date");
  const retrunDate = queryParams.get("retrunDate");
  const Adult = queryParams.get("Adult");
  const Child = queryParams.get("Child");
  const Infant = queryParams.get("Infant");
  const FlightCabinClass = queryParams.get("class");

  const {
    journeyFlight,
    returnFlight,
    isLoading,
    isError,
    CatalogProductOfferingsId,
  } = reducerState?.flightSearchResult;

  const [combinations, setCombinations] = useState([]);
  const [filteredCombinations, setFilteredCombinations] = useState([]);

  useEffect(() => {
    const tpToken = reducerState?.tpToken?.tpTokenData?.access_token;

    const requestData = {
      from,
      to,
      date,
      retrunDate,
      Adult,
      Child,
      Infant,
      FlightCabinClass,
    };

    dispatch(
      fetchFlightReturnData({
        type: "journey",
        payload: { tptoken: tpToken, requestData },
      })
    );
  }, [from, to, date, retrunDate, Adult, Child, Infant, FlightCabinClass]);

  // Build combinations
  useEffect(() => {
    if (journeyFlight?.length && returnFlight?.length) {
      const grouped = {};

      // Group by CombinabilityCode
      [...journeyFlight, ...returnFlight].forEach((item) => {
        const code = item?.productsoption?.[0]?.CombinabilityCode?.[0];
        if (!grouped[code]) grouped[code] = { outbound: [], inbound: [] };

        const depLoc = item?.flights?.[0]?.Departure?.location;
        if (depLoc === from) {
          grouped[code].outbound.push(item);
        } else {
          grouped[code].inbound.push(item);
        }
      });

      // Generate combos
      const combos = [];
      Object.entries(grouped).forEach(([code, group]) => {
        group.outbound.forEach((out) => {
          group.inbound.forEach((ret) => {
            combos.push({
              combinabilityCode: code,
              outbound: out,
              inbound: ret,
            });
          });
        });
      });

      setCombinations(combos);
      setFilteredCombinations(combos); // Initialize filtered combinations
    }
  }, [journeyFlight, returnFlight]);

  // Filter function - FIXED THE COMBO REFERENCE ERROR
  const handleFilterChange = (filters) => {
    let filtered = [...combinations];

    // Filter by stops
    if (filters.stops.length > 0) {
      filtered = filtered.filter((combo) => {
        const outboundStops = combo.outbound?.flights?.length - 1 || 0;
        const inboundStops = combo.inbound?.flights?.length - 1 || 0;
        const totalStops = Math.max(outboundStops, inboundStops);

        if (filters.stops.includes("nonStop") && totalStops === 0) return true;
        if (filters.stops.includes("oneStop") && totalStops === 1) return true;
        if (filters.stops.includes("twoPlusStops") && totalStops >= 2)
          return true;
        return false;
      });
    }

    // Filter by airlines
    if (filters.airlines.length > 0) {
      filtered = filtered.filter((combo) => {
        const outboundAirline = combo.outbound?.flights?.[0]?.carrier;
        const inboundAirline = combo.inbound?.flights?.[0]?.carrier;

        return (
          filters.airlines.includes(outboundAirline) ||
          filters.airlines.includes(inboundAirline)
        );
      });
    }

    // 2. Filter by price (using markup)
    filtered = filtered.filter((combo) => {
      const price = Number(
        combo.outbound?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice ||
          0
      );

      // --- START MARKUP LOGIC ---
      const onwardDestination =
        combo.outbound?.flights?.[combo.outbound?.flights?.length - 1]?.Arrival
          ?.location;

      // Use the imported addMarkup function
      const markup = addMarkup(price, "return", onwardDestination);
      const grandTotal = Number(price) + Number(markup);
      // --- END MARKUP LOGIC ---

      return (
        grandTotal >= filters.priceRange[0] &&
        grandTotal <= filters.priceRange[1]
      ); // Filter by grandTotal
    });

    setFilteredCombinations(filtered);
  };

  const handleSelect = (outbound, inbound) => {
    dispatch(
      setSelectedFlight({
        Onward: outbound,
        Return: inbound,
      })
    );
    const newWindow = window.open("/flight/review", "_blank");
    if (newWindow) newWindow.focus();
  };

  const homeData = useSelector(
    (state) => state?.metaData?.allMetaData?.returnsearchresult
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
      <FlightBreadcrumbReturn />
      <div className="tour-list-section pt-[40px]">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              {/* 3. Pass addMarkup as a prop */}
              <RoundTripFilterBox
                combinations={combinations}
                onFilterChange={handleFilterChange}
                addMarkup={addMarkup}
              />
            </div>
            <div className="col-lg-9">
              {isLoading ? (
                <SearchResultLoader text="Hold on! We are searching for the flight in this route" />
              ) : isError || CatalogProductOfferingsId === undefined ? (
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
                    Please modify your search
                  </p>
                </div>
              ) : (
                <RoundTripSearchResults
                  combinations={filteredCombinations}
                  onSelect={handleSelect}
                  addMarkup={addMarkup}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnSearchResult;
