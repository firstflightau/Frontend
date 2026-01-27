import { PlaneTakeoff } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NcInputNumber from "./NcInputNumber";
import { searchpy } from "../redux/slices/SearchFlightPayload/searchFlightPayloadSlice";
import dayjs from "dayjs";
import { apiURL } from "../constant/Constant";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import SearchResultLoader from "./SearchResultLoader";

const TopFlightRouteDomestic = () => {
  const [filterType, setFilterType] = useState("DOMESTIC");

  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(1);
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(0);
  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState(0);

  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTopROute = async () => {
      try {
        const response = await axios.get(`${apiURL.baseURL}/api/toproute`);
        setData(response?.data?.routes);
        setLoader(false);
      } catch (error) {
        console.error("Failed to fetch markup data:", error);
      } finally {
        setLoader(false);
      }
    };

    fetchTopROute();
  }, []);

  const [recentSearches, setRecentSearches] = useState(
    JSON.parse(localStorage.getItem("FlightRecentSearchesFrom")) || []
  );
  const [recentSearchesTO, setRecentSearchesTO] = useState(
    JSON.parse(localStorage.getItem("FlightRecentSearchesTo")) || []
  );
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const flightClassOptions = [
    { id: 2, value: "Y", label: "Economy" },
    { id: 3, value: "W", label: "Premium Economy" },
    { id: 4, value: "C", label: "Business" },
    { id: 6, value: "F", label: "First" },
  ];
  const [flightClassState, setFlightClassState] = useState(
    flightClassOptions[0]
  );

  const handleChangeData = (value, type) => {
    if (type === "guestAdults") setGuestAdultsInputValue(value);
    if (type === "guestChildren") setGuestChildrenInputValue(value);
    if (type === "guestInfants") setGuestInfantsInputValue(value);
  };

  const handleSubmit = (e, selectedFlight) => {
    e.preventDefault();

    sessionStorage.setItem("SessionExpireTime", new Date());
    sessionStorage.setItem("adults", guestAdultsInputValue);
    sessionStorage.setItem("childs", guestChildrenInputValue);
    sessionStorage.setItem("infants", guestInfantsInputValue);

    const departDate = new Date();
    departDate.setDate(departDate.getDate() + 1);
    const formattedDate = departDate.toISOString().split("T")[0];

    const params = {
      from: selectedFlight?.tripData?.[0]?.from?.fromCode,
      to: selectedFlight?.tripData?.[0]?.to?.toCode,
      date: dayjs(formattedDate).format("DD MMM YY"),
      retrunDate: "",
      Adult: guestAdultsInputValue,
      Child: guestChildrenInputValue,
      Infant: guestInfantsInputValue,
      // class: flightClassState.value,
      class: JSON.stringify(flightClassState),
      FlightCabinClass: flightClassState.value,
    };
    const updatedRecentSearches = [
      selectedFlight?.tripData?.[0]?.from,
      ...recentSearches.filter(
        (item) => item.fromCode !== selectedFlight?.tripData?.[0]?.from.fromCode
      ),
    ].slice(0, 5);
    const updatedRecentSearchesTO = [
      selectedFlight?.tripData?.[0]?.to,
      ...recentSearchesTO.filter(
        (item) => item.toCode !== selectedFlight?.tripData?.[0]?.to.toCode
      ),
    ].slice(0, 5);

    setRecentSearches(updatedRecentSearches);
    setRecentSearchesTO(updatedRecentSearchesTO);

    localStorage.setItem(
      "FlightRecentSearchesFrom",
      JSON.stringify(updatedRecentSearches)
    );
    localStorage.setItem(
      "FlightRecentSearchesTo",
      JSON.stringify(updatedRecentSearchesTO)
    );

    const queryString = new URLSearchParams(params).toString();
    dispatch(searchpy(params));
    navigate(`/onewaySearchResult?${queryString}`);
  };

  const filteredData = data?.filter((item) => {
    // Since tripData is an array, check the first item's type (or loop if needed)
    if (filterType === "DOMESTIC") {
      return item?.tripData?.[0]?.type === "domestic"; // Check first element
    } else {
      return item?.tripData?.[0]?.type === "international";
    }
  });

  // 3. Get the metadata from the Redux store
  const homeData = useSelector(
    (state) => state?.metaData?.allMetaData?.topflightdomestic
  );
  return (
    <section className="special-area">
      {homeData && (
        <Helmet>
          {/* Main SEO Tags */}
          <title>{homeData?.title}</title>
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

      <div className="container mb-40">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title mx-650 mx-auto text-center">
              <span className="highlights fancy-font font-400">
                <br />
              </span>
              <h4 className="title">Top Domestic Flight Routes</h4>
            </div>
          </div>
        </div>
        <div className="row">
          {filteredData?.map((item, index) => (
            <div
              key={index}
              // onClick={() => handleCardClick(item)}
              onClick={(e) => handleSubmit(e, item)}
              className="col-xl-4 col-md-6 mb-3 cursor-pointer"
            >
              <div className="flex items-center justify-between p-3 bg-yellow-200 border rounded-lg transition hover:bg-white">
                <div className="flex-1">
                  <h4 className="text-lg font-bold">
                    {item?.tripData?.[0]?.from?.fromCity}
                  </h4>
                  <p className="text-sm text-gray-600 truncate">
                    {item?.tripData?.[0]?.from?.fromAirport}
                  </p>
                </div>
                <div className="relative px-2 flex justify-center">
                  <div className="absolute h-[80px] -top-5  border-dashed border-r-2 border-gray-800 ">
                    {/* <div className="w-px h-full bg-gray-400"></div> */}
                  </div>
                  <div className="relative z-0 flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full transition hover:bg-secondary-6000">
                    <PlaneTakeoff size={16} />
                  </div>
                </div>

                {/* To Section */}
                <div className="flex-1">
                  <h4 className="text-lg font-bold">
                    {item?.tripData?.[0]?.to?.toCity}
                  </h4>
                  <p className="text-sm text-gray-600 truncate">
                    {item?.tripData?.[0]?.to?.toAirport}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-30 shadow-xl flex items-center justify-center"
      >
        {" "}
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
              <h3 className="text-xl font-semibold mb-4">Flight Details</h3>
              <form onSubmit={handleSubmit}>
                <div className=" z-20 w-full sm:min-w-[340px] max-w-sm bg-white  top-full mt-3  py-3 sm:py-6 px-4 sm:px-8 ">
                  <NcInputNumber
                    className="w-full"
                    defaultValue={guestAdultsInputValue}
                    onChange={(value) => handleChangeData(value, "guestAdults")}
                    max={10}
                    min={1}
                    label="Adults"
                    desc="Ages 12 or above"
                  />
                  <NcInputNumber
                    className="w-full mt-6"
                    defaultValue={guestChildrenInputValue}
                    onChange={(value) =>
                      handleChangeData(value, "guestChildren")
                    }
                    max={4}
                    label="Children"
                    desc="Ages 2–11"
                  />
                  <NcInputNumber
                    className="w-full mt-6"
                    defaultValue={guestInfantsInputValue}
                    onChange={(value) =>
                      handleChangeData(value, "guestInfants")
                    }
                    max={4}
                    label="Infants"
                    desc="Ages 0–23 months"
                  />

                  <div
                    className={`nc-NcInputNumber flex items-center justify-between space-x-5 pt-3 mt-3 border-t border-gray-200 w-full`}
                    data-nc-id="NcInputNumber"
                  >
                    <span className="font-medium text-left text-neutral-800 ">
                      Flight Class
                    </span>

                    <div className="nc-NcInputNumber flex items-center justify-between  ">
                      <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        onChange={(e) => {
                          const selectedItem = flightClassOptions?.find(
                            (item) => item.value === e.target.value
                          );
                          setFlightClassState(selectedItem); // Update state with the selected item
                          close(); // Close the dropdown or execute any other desired logic
                        }}
                      >
                        {flightClassOptions?.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Dialog>
    </section>
  );
};

export default TopFlightRouteDomestic;
