import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { ArrowRight, MapPin, PlaneLanding, PlaneTakeoff } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NcInputNumber from "./NcInputNumber";
import { searchpy } from "../redux/slices/SearchFlightPayload/searchFlightPayloadSlice";
import dayjs from "dayjs";
import axios from "axios";
import { apiURL } from "../constant/Constant";
import { Helmet } from "react-helmet-async";
import SearchResultLoader from "./SearchResultLoader";

const ViewAllFlightDeals = () => {
  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(1);
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(0);
  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState(0);
  const [loader, setLoader] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState(
    JSON.parse(localStorage.getItem("FlightRecentSearchesFrom")) || []
  );
  const [recentSearchesTO, setRecentSearchesTO] = useState(
    JSON.parse(localStorage.getItem("FlightRecentSearchesTo")) || []
  );
  const [destinations, setDestinations] = useState([]);

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

  // Fetch data from API
  const fetchDestinations = async () => {
    try {
      const res = await axios.get(`${apiURL.baseURL}/api/topdestination`);

      setDestinations(res.data.routes || []);
      setLoader(false);
    } catch (err) {
      console.error("Error fetching top destinations", err);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

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
      from: selectedFlight?.from?.fromCode,
      to: selectedFlight?.to?.toCode,
      date: dayjs(formattedDate).format("DD MMM YY"),
      retrunDate: "",
      Adult: guestAdultsInputValue,
      Child: guestChildrenInputValue,
      Infant: guestInfantsInputValue,
      class: JSON.stringify(flightClassState),
      FlightCabinClass: flightClassState.value,
    };

    const queryString = new URLSearchParams(params).toString();

    const updatedRecentSearches = [
      selectedFlight?.from,
      ...recentSearches.filter(
        (item) => item._id !== selectedFlight?.from?._id
      ),
    ].slice(0, 5);

    const updatedRecentSearchesTO = [
      selectedFlight?.to,
      ...recentSearchesTO.filter(
        (item) => item._id !== selectedFlight?.to?._id
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

    dispatch(searchpy(params));
    navigate(`/onewaySearchResult?${queryString}`);
  };

  const homeData = useSelector(
    (state) => state?.metaData?.allMetaData?.bestflightdeal
  );

  if (loader) {
    return <SearchResultLoader />;
  }

  return (
    <section className="feature-area feature-area-bg section-padding2">
      {/* 4. Apply all metadata using Helmet */}
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
        <div className="row justify-content-center position-relative z-10">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title mx-650 mx-auto text-center">
              <span className="highlights fancy-font font-400">
                Best Flight Deals
              </span>
              <h4 className="title">Most Favorite Tour Place in The World</h4>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 g-4 position-relative z-10">
          {destinations?.map((item, index) => (
            <div
              key={index}
              onClick={(e) => handleSubmit(e, item)}
              className="max-w-sm mx-auto mb-2 cursor-pointer bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative">
                {item?.image && (
                  <img
                    src={item.image}
                    alt={`${item?.from?.fromCity} to ${item?.to?.toCity}`}
                    className="w-full h-48 object-cover"
                  />
                )}
              </div>

              {/* Content Section */}
              <div className="p-2">
                {/* Destination Info */}
                <div className="text-center flex gap-2 mb-3 text-base">
                  <MapPin size={16} />
                  <p className="text-gray-700 flex gap-1 text-base">
                    {item?.from?.fromCity} <ArrowRight size={16} />{" "}
                    {item?.to?.toCity}
                  </p>
                </div>

                {/* Airports */}
                <div className="space-y-2 mb-3 p-2 rounded-md">
                  <div className="flex items-center gap-1 bg-gray-200 py-2 ps-2">
                    <PlaneTakeoff size={16} />
                    <p className="text-sm text-gray-700 truncate">
                      {item?.from?.fromAirport}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-gray-200 py-2 ps-2">
                    <PlaneLanding size={16} />
                    <p className="text-sm text-gray-700 truncate">
                      {item?.to?.toAirport}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={(e) => handleSubmit(e, item)}
                    className="w-full bg-secondary-6000 px-3 py-1 text-white font-semibold rounded-md"
                  >
                    search
                  </button>
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
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
              <h3 className="text-xl font-semibold mb-4">Flight Details</h3>
              <form onSubmit={handleSubmit}>
                <div className="z-20 w-full sm:min-w-[340px] max-w-sm bg-white top-full mt-3 py-3 sm:py-6 px-4 sm:px-8">
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
                    <span className="font-medium text-left text-neutral-800">
                      Flight Class
                    </span>

                    <div className="nc-NcInputNumber flex items-center justify-between">
                      <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onChange={(e) => {
                          const selectedItem = flightClassOptions?.find(
                            (item) => item.value === e.target.value
                          );
                          setFlightClassState(selectedItem);
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

                <div className="flex justify-end mt-6 space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 transition-all ease-in-out rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="px-4 py-2 bg-secondary-6000 hover:bg-secondary-500 transition-all ease-in-out text-white rounded"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Dialog>
    </section>
  );
};

export default ViewAllFlightDeals;
