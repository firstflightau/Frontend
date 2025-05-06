import React, { useState, useEffect } from "react";
import package1 from "../assets/images/package/package-1.jpg";
import package2 from "../assets/images/package/package-2.jpg";
import package3 from "../assets/images/package/package-3.jpg";
import package4 from "../assets/images/package/package-4.jpg";
import package5 from "../assets/images/package/package-5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { ArrowRight, MapPin, PlaneLanding, PlaneTakeoff } from "lucide-react";
import { Dialog, Popover } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import NcInputNumber from "./NcInputNumber";
import { searchpy } from "../redux/slices/SearchFlightPayload/searchFlightPayloadSlice";
import dayjs from "dayjs";

const BestFlightDeal = () => {
  const data = [
    {
      img: package1,
      fromCity: "Sydney",
      fromCode: "SYD",
      fromAirport: "Kingsford Smith Airport",
      toCity: "Dubai",
      toCode: "DXB",
      toAirport: "Dubai Airport",
      from: {
        fromCity: "Sydney",
        fromCode: "SYD",
        fromAirport: "Kingsford Smith Airport",

        AirportCode: "SYD",
        CityCode: "SYD",
        CountryCode: "AU",
        CountryName: "Australia",
        code: "Kingsford Smith",
        id: "SYD",
        name: "Sydney",
        _id: "668278aa909eb1823ba94b92",
      },
      to: {
        toCity: "Dubai",
        toCode: "DXB",
        toAirport: "Dubai Airport",

        _id: "668278aa909eb1823ba940a3",
        name: "Dubai",
        CityCode: "DXB",
        CountryCode: "AE",
        CountryName: "United Arab Emirates",
        AirportCode: "DXB",
        code: "Dubai",
        id: "DXB",
        from: {
          fromCity: "Sydney",
          fromCode: "SYD",
          fromAirport: "Kingsford Smith Airport",

          AirportCode: "SYD",
          CityCode: "SYD",
          CountryCode: "AU",
          CountryName: "Australia",
          code: "Kingsford Smith",
          id: "SYD",
          name: "Sydney",
          _id: "668278aa909eb1823ba94b92",
        },
        to: {
          toCity: "New Delhi",
          toCode: "DEL",
          toAirport: "Indira Gandhi Airport",

          _id: "668278a9909eb1823ba94034",
          name: "New Delhi",
          CityCode: "DEL",
          CountryCode: "IN",
          CountryName: "India",
          AirportCode: "DEL",
          code: "Indira Gandhi Airport",
          id: "DEL",
          state: "Delhi",
        },
      },
    },
    {
      img: package2,
      fromCity: "Sydney",
      fromCode: "SYD",
      fromAirport: "Kingsford Smith Airport",
      toCity: "Mumbai",
      toCode: "BOM",
      toAirport: "Chhatrapati Shivaji Airport",
      from: {
        fromCity: "Sydney",
        fromCode: "SYD",
        fromAirport: "Kingsford Smith Airport",

        AirportCode: "SYD",
        CityCode: "SYD",
        CountryCode: "AU",
        CountryName: "Australia",
        code: "Kingsford Smith",
        id: "SYD",
        name: "Sydney",
        _id: "668278aa909eb1823ba94b92",
      },
      to: {
        toCity: "Mumbai",
        toCode: "BOM",
        toAirport: "Chhatrapati Shivaji Airport",

        _id: "668278a9909eb1823ba93e78",
        name: "Mumbai",
        CityCode: "BOM",
        CountryCode: "IN",
        CountryName: "India",
        AirportCode: "BOM",
        code: "Chhatrapati Shivaji International Airport",
        id: "BOM",
        state: "Maharashtra",
      },
    },
    {
      img: package3,
      fromCity: "Sydney",
      fromCode: "SYD",
      fromAirport: "Kingsford Smith Airport",
      toCity: "Hyderabad",
      toCode: "HYD",
      toAirport: "Rajiv Gandhi Airport",
      from: {
        fromCity: "Sydney",
        fromCode: "SYD",
        fromAirport: "Kingsford Smith Airport",

        AirportCode: "SYD",
        CityCode: "SYD",
        CountryCode: "AU",
        CountryName: "Australia",
        code: "Kingsford Smith",
        id: "SYD",
        name: "Sydney",
        _id: "668278aa909eb1823ba94b92",
      },
      to: {
        _id: "668278aa909eb1823ba942db",
        name: "Hyderabad",
        CityCode: "HYD",
        CountryCode: "IN",
        CountryName: "India",
        AirportCode: "HYD",
        code: "Rajiv Gandhi International Airport",
        id: "HYD",
        state: "Telangana",
      },
    },
    {
      img: package4,
      fromCity: "Sydney",
      fromCode: "SYD",
      fromAirport: "Kingsford Smith Airport",
      toCity: "Thailand",
      toCode: "THS",
      toAirport: "Sukhothai Airport",
      from: {
        fromCity: "Sydney",
        fromCode: "SYD",
        fromAirport: "Kingsford Smith Airport",

        AirportCode: "SYD",
        CityCode: "SYD",
        CountryCode: "AU",
        CountryName: "Australia",
        code: "Kingsford Smith",
        id: "SYD",
        name: "Sydney",
        _id: "668278aa909eb1823ba94b92",
      },
      to: {
        _id: "668278aa909eb1823ba94c03",
        name: "Sukhothai",
        CityCode: "THS",
        CountryCode: "TH",
        CountryName: "Thailand",
        AirportCode: "THS",
        code: "SUKHOTHAI",
        id: "THS",
      },
    },
    {
      img: package5,
      fromCity: "Sydney",
      fromCode: "SYD",
      fromAirport: "Kingsford Smith Airport",
      toCity: "Toronto",
      toCode: "YYZ",
      toAirport: "Pearson Int'l Airport",
      from: {
        fromCity: "Sydney",
        fromCode: "SYD",
        fromAirport: "Kingsford Smith Airport",

        AirportCode: "SYD",
        CityCode: "SYD",
        CountryCode: "AU",
        CountryName: "Australia",
        code: "Kingsford Smith",
        id: "SYD",
        name: "Sydney",
        _id: "668278aa909eb1823ba94b92",
      },
      to: {
        _id: "668278ab909eb1823ba94f05",
        name: "Toronto",
        CityCode: "YTO",
        CountryCode: "CA",
        CountryName: "Canada",
        AirportCode: "YYZ",
        code: "Pearson Int'l",
        id: "YYZ",
      },
    },
  ];

  // const [selectedFlight, setSelectedFlight] = useState(null);
  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(1);
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(0);
  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState(
    JSON.parse(localStorage.getItem("FlightRecentSearchesFrom")) || []
  );
  const [recentSearchesTO, setRecentSearchesTO] = useState(
    JSON.parse(localStorage.getItem("FlightRecentSearchesTo")) || []
  );
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

  const handleCardClick = (flight) => {
    // setSelectedFlight(flight);
    setIsOpen(true);
  };

  const handleSubmit = (e, selectedFlight) => {
    e.preventDefault();

    // const guests = {
    //   adults: guestAdultsInputValue,
    //   children: guestChildrenInputValue,
    //   infant: guestInfantsInputValue,
    // };

    sessionStorage.setItem("SessionExpireTime", new Date());
    sessionStorage.setItem("adults", guestAdultsInputValue);
    sessionStorage.setItem("childs", guestChildrenInputValue);
    sessionStorage.setItem("infants", guestInfantsInputValue);

    const departDate = new Date();
    departDate.setDate(departDate.getDate() + 1);
    const formattedDate = departDate.toISOString().split("T")[0];

    const params = {
      from: selectedFlight?.fromCode,
      to: selectedFlight?.toCode,
      date: dayjs(formattedDate).format("DD MMM YY"),
      retrunDate: "",
      Adult: guestAdultsInputValue,
      Child: guestChildrenInputValue,
      Infant: guestInfantsInputValue,
      // class: flightClassState.value,
      class: JSON.stringify(flightClassState),
      FlightCabinClass: flightClassState.value,
    };

    const queryString = new URLSearchParams(params).toString();
    const updatedRecentSearches = [
      selectedFlight?.from,
      ...recentSearches.filter((item) => item._id !== selectedFlight?.from._id),
    ].slice(0, 5);
    const updatedRecentSearchesTO = [
      selectedFlight?.to,
      ...recentSearchesTO.filter((item) => item._id !== selectedFlight?.to._id),
    ].slice(0, 5);

    setRecentSearches(updatedRecentSearches);
    setRecentSearchesTO(updatedRecentSearchesTO);
    console.log(
      selectedFlight,
      "seledddd",
      recentSearches,
      updatedRecentSearches
    );
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

  return (
    <section className="feature-area feature-area-bg section-padding2">
      <div className="container">
        <div className="row justify-content-center position-relative z-10">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title mx-650 mx-auto text-center">
              <span className="highlights fancy-font font-400">
                Best Flight Deals
              </span>
              <h4 className=" title ">Most Favorite Tour Place in The World</h4>
            </div>
          </div>
        </div>
        <div className="row g-4 position-relative z-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            spaceBetween={15}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} onClick={(e) => handleSubmit(e, item)}>
                <div className="max-w-sm mx-auto mb-2 cursor-pointer bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Image Section */}
                  <div className="relative">
                    <img
                      src={item?.img}
                      alt="Thailand"
                      className="w-full h-48 object-cover"
                    />
                    {/* <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      Direct Flight
                    </div> */}
                  </div>

                  {/* Content Section */}
                  <div className="p-2">
                    {/* Destination Info */}
                    <div className="text-center flex gap-2 mb-3 text-base">
                      <MapPin size={16} />
                      <p className="text-gray-700 flex gap-1 text-base">
                        {item?.fromCity} <ArrowRight size={16} /> {item?.toCity}
                      </p>
                    </div>

                    {/* Airports */}
                    <div className="space-y-2 mb-3  p-2 rounded-md">
                      <div className="flex items-center gap-1 bg-gray-200 py-2 ps-2">
                        <PlaneTakeoff size={16} />
                        <p className="text-sm text-gray-700 truncate">
                          {item?.fromAirport}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-200 py-2 ps-2">
                        <PlaneLanding size={16} />
                        <p className="text-sm text-gray-700 truncate">
                          {item?.toAirport}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end ">
                      <button
                        onClick={(e) => handleSubmit(e, item)}
                        className="w-full bg-secondary-6000 px-3 py-1 text-white font-semibold rounded-md"
                      >
                        search
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
                    desc="Ages 13 or above"
                  />
                  <NcInputNumber
                    className="w-full mt-6"
                    defaultValue={guestChildrenInputValue}
                    onChange={(value) =>
                      handleChangeData(value, "guestChildren")
                    }
                    max={4}
                    label="Children"
                    desc="Ages 2–12"
                  />
                  <NcInputNumber
                    className="w-full mt-6"
                    defaultValue={guestInfantsInputValue}
                    onChange={(value) =>
                      handleChangeData(value, "guestInfants")
                    }
                    max={4}
                    label="Infants"
                    desc="Ages 0–2"
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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

export default BestFlightDeal;
