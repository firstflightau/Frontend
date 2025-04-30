import React, { useState, Fragment, useEffect, Children, useSeae } from "react";
import dayjs from "dayjs";
import OnewayLocationFrom from "../flightSearchForm/OnewayLocationFrom";
import OnewayDateBox from "./OnewayDateBox";
import GuestsInput from "../flightSearchForm/GuestInput";
import FlightClass from "../flightSearchForm/FlightClass";
import { useLocation, useNavigate } from "react-router-dom";
import OnewayLocationTo from "../flightSearchForm/OnewayLocationTo";
import { searchpy } from "../../redux/slices/SearchFlightPayload/searchFlightPayloadSlice";
import { useDispatch, useSelector } from "react-redux";
useLocation;

const OnewaySearchFormInner = () => {
  const navigate = useNavigate();
  const reducerState = useSelector((state) => state);
  const queryParams = new URLSearchParams(useLocation().search);
  const [fromCity, setFromCity] = useState(null);
  const [toCity, setToCity] = useState(null);
  const [departDate, setDepartDate] = useState(null);
  const from = queryParams.get("from");
  const to = queryParams.get("to");
  const tareekh = queryParams.get("date");
  const [dDate, setdDate] = useState(tareekh);
  const [fromOrigin, setFromOrigin] = useState(from);
  const [toDestination, setToDestination] = useState(to);
  // const rDate = queryParams.get("retrunDate");
  const Adult = queryParams.get("Adult");
  const Child = queryParams.get("Child");
  const Infant = queryParams.get("Infant");
  const Class = queryParams.get("FlightCabinClass");
  const [adult, setAdult] = useState(Adult);
  const [child, setChild] = useState(Child);
  const [infant, setInfant] = useState(Infant);
  const Class1 = JSON.parse(queryParams.get("class")) || flightClassState?.[0];
  const [flightClassState, setFlightClassState] = useState(Class1);
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
  useEffect(() => {
    setdDate(queryParams.get("date"));
    // console.log("dfklefkldfklsdfdklsafhdlsahfdshfds");
  }, [queryParams]);

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
  const handleSubmitt = async () => {
    // console.log(dDate, rDate, "ddateesdfdf");
    sessionStorage.setItem("SessionExpireTime", new Date());
    // console.log(flightClassState, "flightstateclass");
    setFromOrigin(from);
    setToDestination(to);
    setdDate(tareekh);

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

    const searchpy = {
      from: fromCity,
      to: toCity,
      FlightCabinClass: flightClassState?.label,
      date: departDate,
      // returnDate: returnDate,
    };

    dispatch(searchFlight(searchpy));

    amadeusSearch(payload);
    flightReturnTboAndKafila(payload);

    sessionStorage.setItem("adults", adult);
    sessionStorage.setItem("childs", child);
    sessionStorage.setItem("infants", infant);
    const params = {
      from: from,
      to: to,
      date: dDate,
      // retrunDate: rDate,
      Adult: adult,
      Child: child,
      Infant: infant,
      class: JSON.stringify(flightClassState),
      FlightCabinClass: flightClassState?.id,
    };
    const queryString = new URLSearchParams(params).toString();

    navigate(`/onewaySearchResult?${queryString}`);
    // navigate("/ReturnResult");
  };
  useEffect(() => {
    // console.log("handlesubmitcall");
    handleSubmitt();
  }, [dDate, fromOrigin, toDestination, adult, child]);

  const renderForm = () => {
    return (
      //   <section className="plan-area-three">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <div className="px-3 py-7 bg-white rounded-md shadow-lg z-40 relative"></div> */}
            <form className="w-full relative rounded-[10px]   bg-transparent ">
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
                  StartDate={dDate}
                />
                {/* <FlightClass /> */}
                <GuestsInput
                  onGuestChange={handleGuestChange}
                  Adult={Adult}
                  Child={Child}
                  Infant={Infant}
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
          </div>
        </div>
      </div>
      //   </section>
    );
  };

  return renderForm();
};

export default OnewaySearchFormInner;
