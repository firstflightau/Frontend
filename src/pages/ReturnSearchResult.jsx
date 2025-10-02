// ReturnSearchResult.jsx
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

const ReturnSearchResult = () => {
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(reducerState, "reducer state");
  const queryParams = new URLSearchParams(location.search);
  const from = queryParams.get("from");
  const to = queryParams.get("to");
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

    // Filter by price
    filtered = filtered.filter((combo) => {
      const price = Number(
        combo.outbound?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice ||
          0
      );

      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
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

  return (
    <div>
      <FlightBreadcrumbReturn />
      <div className="tour-list-section pt-[40px]">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <RoundTripFilterBox
                combinations={combinations}
                onFilterChange={handleFilterChange}
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
