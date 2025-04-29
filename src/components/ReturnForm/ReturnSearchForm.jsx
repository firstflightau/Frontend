import React, { useState } from "react";
import dayjs from "dayjs";
import GuestsInput from "../flightSearchForm/GuestInput";
import { useNavigate } from "react-router-dom";
import OnewayLocationTo from "../flightSearchForm/OnewayLocationTo";
import OnewayLocationFrom from "../flightSearchForm/OnewayLocationFrom";
import ReturnDateBox from "./ReturnDateBox";
import { useDispatch } from "react-redux";
import { searchpy } from "../../redux/slices/SearchFlightPayload/searchFlightPayloadSlice";

const ReturnSearchForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fromCity, setFromCity] = useState(null);
  const [toCity, setToCity] = useState(null);
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
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

  const handleFromSelect = (location) => {
    setFromCity(location);
  };
  const handleToSelect = (location) => {
    setToCity(location);
  };

  const handleDateChange = (dates) => {
    setDepartDate(dayjs(dates.startDate).format("DD MMM, YY"));
    setReturnDate(dayjs(dates.endDate).format("DD MMM, YY"));
  };

  const handleGuestChange = (guest) => {
    setGuests(guest);
  };
  const handleFlightClassChange = (flightcls) => {
    setFlightClass(flightcls);
  };

  const handleSubmit = (e) => {
    sessionStorage.removeItem("saved");
    e.preventDefault();
    sessionStorage.setItem("SessionExpireTime", new Date());

    sessionStorage.setItem("adults", guests?.adults);
    sessionStorage.setItem("childs", guests?.children);
    sessionStorage.setItem("infants", guests?.infant);
    // console.log(fromCity, toCity, guests, "from tocity");
    const params = {
      from: fromCity?.AirportCode,
      to: toCity?.AirportCode,

      date: departDate,
      retrunDate: returnDate,
      Adult: guests?.adults,
      Child: guests?.children,
      Infant: guests?.infant,
      class: JSON.stringify(flightClass),
      FlightCabinClass: flightClass.value,
    };
    const queryString = new URLSearchParams(params).toString();

    // console.log(params, "querystring");

    dispatch(searchpy(params));

    navigate(`/returnSearchResult?${queryString}`);
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

          <ReturnDateBox className="flex-1" onDateChange={handleDateChange} />
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

export default ReturnSearchForm;
