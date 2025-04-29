import React, { useState, useEffect, Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import GuestsInput from "../flightSearchForm/GuestInput";

import OnewayLocationTo from "../flightSearchForm/OnewayLocationTo";
import OnewayLocationFrom from "../flightSearchForm/OnewayLocationFrom";
import ReturnDateBox from "./ReturnDateBox";

import { searchpy } from "../../redux/slices/SearchFlightPayload/searchFlightPayloadSlice";

const flightClass = [
  { id: 2, value: "Y", label: "Economy" },
  { id: 3, value: "W", label: "Premium Economy" },
  { id: 4, value: "C", label: "Business" },
  { id: 6, value: "F", label: "First" },
];

const ReturnSearchFormInner = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const from = queryParams.get("from");
  const to = queryParams.get("to");
  const dDate = queryParams.get("date");
  const rDate = queryParams.get("retrunDate");
  const [depDate, setDepDate] = useState(dDate);
  const [retDate, setRetDate] = useState(dDate);
  const Adult = queryParams.get("Adult");
  const Child = queryParams.get("Child");
  const Infant = queryParams.get("Infant");
  const Class = queryParams.get("FlightCabinClass");
  const Class1 = JSON.parse(queryParams.get("class")) || flightClassState?.[0];

  const [fromCity, setFromCity] = useState(from);
  const [toCity, setToCity] = useState(to);
  const [departDate, setDepartDate] = useState(dDate);
  const [returnDate, setReturnDate] = useState(rDate);

  const reducerState = useSelector((state) => state);
  const [adult, setAdult] = useState(Adult);
  const [child, setChild] = useState(Child);
  const [infant, setInfant] = useState(Infant);
  const [flightClassState, setFlightClassState] = useState(Class1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setDepDate(queryParams.get("date"));
    setRetDate(queryParams.get("retrunDate"));
  }, [queryParams]);

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
  const handleSubmitt = async () => {
    if (to === from) {
      return;
    }
    sessionStorage.setItem("SessionExpireTime", new Date());
    const payload = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      AdultCount: adult,
      ChildCount: child,
      InfantCount: infant,
      DirectFlight: "false",
      OneStopFlight: "false",
      JourneyType: 1,
      PreferredAirlines: null,
      Segments: [
        {
          Origin: from,
          Destination: to,
          FlightCabinClass: flightClassState?.id || Class,
          PreferredDepartureTime: dDate,
          PreferredArrivalTime: dDate,
        },
      ],
      Sources: null,
      to: to,
      from: from,
      date: dDate,
      cabinClass: flightClassState?.value || Class,
      px: adult,
    };
    const payloadReturn = {
      EndUserIp: reducerState?.ip?.ipData,
      TokenId: reducerState?.ip?.tokenData,
      AdultCount: adult,
      ChildCount: child,
      InfantCount: infant,
      DirectFlight: "false",
      OneStopFlight: "false",
      JourneyType: 1,
      PreferredAirlines: null,
      Segments: [
        {
          Destination: fromCity.AirportCode || from,
          Origin: toCity.AirportCode || to,
          FlightCabinClass: flightClassState?.id || Class,
          PreferredDepartureTime: rDate,
          PreferredArrivalTime: rDate,
        },
      ],
      Sources: null,

      from: to,
      to: from,
      date: rDate,
      cabinClass: flightClassState?.value || Class,
      px: adult,
    };
    const searchpy = {
      from: fromCity,
      to: toCity,
      FlightCabinClass: flightClass?.id,
      date: departDate,
      returnDate: returnDate,
    };

    dispatch(searchFlight(searchpy));

    amadeusSearch(payload, payloadReturn);
    flightReturnTboAndKafila(payload, payloadReturn);

    sessionStorage.setItem("adults", adult);
    sessionStorage.setItem("childs", child);
    sessionStorage.setItem("infants", infant);
    const params = {
      from: from,
      to: to,
      date: dDate,
      retrunDate: rDate,
      Adult: adult,
      Child: child,
      Infant: infant,
      class: JSON.stringify(flightClassState),
      FlightCabinClass: flightClassState?.id,
    };
    const queryString = new URLSearchParams(params).toString();

    navigate(`/ReturnResult?${queryString}`);
  };
  useEffect(() => {
    handleSubmitt();
  }, [rDate, dDate, from, to, adult, child]);
  const renderForm = () => {
    return (
      // <form className="w-full relative rounded-[10px]   bg-white ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <form className="w-full relative rounded-[10px]  ">
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

                <ReturnDateBox
                  className="flex-1"
                  onDateChange={handleDateChange}
                  StartDate={dDate}
                  EndDate={rDate}
                />
                {/* <FlightClass /> */}
                <GuestsInput
                  onGuestChange={handleGuestChange}
                  onFlightClassChange={handleFlightClassChange}
                  Adult={Adult}
                  Child={Child}
                  Infant={Infant}
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
          </div>
        </div>
      </div>
    );
  };

  return renderForm();
};

export default ReturnSearchFormInner;
