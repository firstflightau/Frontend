import React, { useState, Fragment, useEffect, Children } from "react";
import dayjs from "dayjs";
import OnewayLocationFrom from "../flightSearchForm/OnewayLocationFrom";
import OnewayDateBox from "./OnewayDateBox";
import GuestsInput from "../flightSearchForm/GuestInput";
import FlightClass from "../flightSearchForm/FlightClass";
import { useNavigate } from "react-router-dom";
import OnewayLocationTo from "../flightSearchForm/OnewayLocationTo";
import { searchpy } from "../../redux/slices/SearchFlightPayload/searchFlightPayloadSlice";
import { useDispatch } from "react-redux";

const OnewaySearchForm = () => {
  const navigate = useNavigate();
  const [fromCity, setFromCity] = useState(null);
  const [toCity, setToCity] = useState(null);
  const [departDate, setDepartDate] = useState(null);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infant: 0,
  });
  const [flightClass, setFlightClass] = useState({
    id: 2,
    value: "Y",
    label: "Economy",
  });
  const dispatch = useDispatch();

  const handleFromSelect = (location) => {
    setFromCity(location);
  };
  const handleToSelect = (location) => {
    setToCity(location);
  };

  // console.log(fromCity, "from city");

  const handleDateChange = (dates) => {
    setDepartDate(dayjs(dates.startDate).format("DD MMM, YY"));
  };

  const handleGuestChange = (guest) => {
    // console.log(guest, "guest");
    setGuests(guest);
  };
  const handleFlightClassChange = (flightcls) => {
    setFlightClass(flightcls);
  };

  const handleSubmit = (e) => {
    sessionStorage.removeItem("saved");
    e.preventDefault();
    sessionStorage.setItem("SessionExpireTime", new Date());

    // const searchpy = {
    //   from: fromCity,
    //   to: toCity,
    //   FlightCabinClass: flightClass,
    //   date: departDate,
    //   returnDate: null,
    // };

    // dispatch(searchFlight(searchpy));

    sessionStorage.setItem("adults", guests?.adults);
    sessionStorage.setItem("childs", guests?.children);
    sessionStorage.setItem("infants", guests?.infant);
    // console.log(fromCity, toCity, guests, "from tocity");
    const params = {
      from: fromCity?.AirportCode,
      to: toCity?.AirportCode,
      fromName: fromCity?.name,
      toName: toCity?.name,
      date: departDate,
      retrunDate: "",
      Adult: guests?.adults,
      Child: guests?.children,
      Infant: guests?.infant,
      class: JSON.stringify(flightClass),
      FlightCabinClass: flightClass.value,
    };
    const queryString = new URLSearchParams(params).toString();
    // console.log(params, "querystring");

    dispatch(searchpy(params));
    navigate(`/onewaySearchResult?${queryString}`);
  };

  const renderForm = () => {
    return (
      <form className="w-full relative rounded-[10px]   bg-white ">
        <div className="flex flex-col md:flex-row gap-2 items-center flex-1 rounded-full">
          <OnewayLocationFrom
            placeHolder="Flying From"
            desc="Where do you want to fly from?"
            className="flex-1"
            onLocationSelect={handleFromSelect}
          />
          <OnewayLocationTo
            placeHolder="Flying To"
            desc="Where do you want to fly from?"
            className="flex-1"
            onLocationSelect={handleToSelect}
          />

          <OnewayDateBox
            className="flex-1"
            // onSubmit={handleSubmit}
            onDateChange={handleDateChange}
          />
          {/* <FlightClass /> */}
          <GuestsInput
            onGuestChange={handleGuestChange}
            onFlightClassChange={handleFlightClassChange}
          />
          <div className="h-full w-full md:w-auto ">
            <button
              onClick={handleSubmit}
              className="bg-primary-6000 text-white  font-semibold px-3 py-[22px] rounded-md w-full  cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    );
  };

  return renderForm();
};

export default OnewaySearchForm;
