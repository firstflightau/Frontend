import { PlaneTakeoff } from "lucide-react";
import React, { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import NcInputNumber from "./NcInputNumber";
import { searchpy } from "../redux/slices/SearchFlightPayload/searchFlightPayloadSlice";
import dayjs from "dayjs";

const TopFlightRoute = () => {
  const [filterType, setFilterType] = useState("DOMESTIC");
  const filterOptions = ["DOMESTIC", "INTERNATIONAL"];

  const tripData = [
    // Domestic trips
    {
      type: "domestic",
      from: {
        fromCity: "Sydney",
        fromCode: "SYD",
        fromAirport: "Kingsford Smith Airport",
      },
      to: {
        toCity: "Melbourne",
        toCode: "MEL",
        toAirport: "Tullamarine Airport",
      },
      icon: "PlaneTakeoff",
    },
    {
      type: "domestic",
      from: {
        fromCity: "Brisbane",
        fromCode: "BNE",
        fromAirport: "Brisbane Airport",
      },
      to: {
        toCity: "Melbourne",
        toCode: "MEL",
        toAirport: "Tullamarine Airport",
      },
      icon: "PlaneTakeoff",
    },
    {
      type: "domestic",
      from: {
        fromCity: "Sydney",
        fromCode: "SYD",
        fromAirport: "Kingsford Smith Airport",
      },
      to: {
        toCity: "Brisbane",
        toCode: "BNE",
        toAirport: "Brisbane Airport",
      },
      icon: "PlaneTakeoff",
    },
    {
      type: "domestic",
      from: {
        fromCity: "Sydney",
        fromCode: "SYD",
        fromAirport: "Kingsford Smith Airport",
      },
      to: {
        toCity: "Adelaide",
        toCode: "ADL",
        toAirport: "Adelaide Airport",
      },
      icon: "PlaneTakeoff",
    },
    {
      type: "domestic",
      from: {
        fromCity: "Adelaide",
        fromCode: "ADL",
        fromAirport: "Adelaide Airport",
      },
      to: {
        toCity: "Brisbane",
        toCode: "BNE",
        toAirport: "Brisbane Airport",
      },
      icon: "PlaneTakeoff",
    },
    {
      type: "domestic",
      from: {
        fromCity: "Perth",
        fromCode: "PER",
        fromAirport: "Perth Airport",
      },
      to: {
        toCity: "Sydney",
        toCode: "SYD",
        toAirport: "Kingsford Smith Airport",
      },
      icon: "PlaneTakeoff",
    },

    // International trips
    {
      type: "international",
      from: {
        fromCity: "Sydney",
        fromCode: "SYD",
        fromAirport: "Kingsford Smith Airport",
      },
      to: {
        toCity: "Dubai",
        toCode: "DXB",
        toAirport: "Dubai Airport",
      },
      icon: "PlaneTakeoff",
    },
    {
      type: "international",
      from: {
        fromCity: "Sydney",
        fromCode: "SYD",
        fromAirport: "Kingsford Smith Airport",
      },
      to: {
        toCity: "Singapore",
        toCode: "QPG",
        toAirport: "Paya Lebar Airport",
      },
      icon: "PlaneTakeoff",
    },
    {
      type: "international",
      from: {
        fromCity: "Sydney",
        fromCode: "SYD",
        fromAirport: "Kingsford Smith Airport",
      },
      to: {
        toCity: "Tokyo",
        toCode: "HND",
        toAirport: "Haneda Airport",
      },
      icon: "PlaneTakeoff",
    },
    {
      type: "international",
      from: {
        fromCity: "Sydney",
        fromCode: "SYD",
        fromAirport: "Kingsford Smith Airport",
      },
      to: {
        toCity: "New Delhi",
        toCode: "DEL",
        toAirport: "Indira Gandhi Airport",
      },
      icon: "PlaneTakeoff",
    },
    {
      type: "international",
      from: {
        fromCity: "Sydney",
        fromCode: "SYD",
        fromAirport: "Kingsford Smith Airport",
      },
      to: {
        toCity: "Mumbai",
        toCode: "BOM",
        toAirport: "Chhatrapati Shivaji Airport",
      },
      icon: "PlaneTakeoff",
    },
    {
      type: "international",
      from: {
        fromCity: "Sydney",
        fromCode: "SYD",
        fromAirport: "Kingsford Smith Airport",
      },
      to: {
        toCity: "Los Angeles",
        toCode: "LAX",
        toAirport: "Los Angeles Airport",
      },
      icon: "PlaneTakeoff",
    },
  ];

  const [selectedFlight, setSelectedFlight] = useState(null);
  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(1);
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(0);
  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState(0);
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

  const handleCardClick = (flight) => {
    setSelectedFlight(flight);
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
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
    departDate.setDate(departDate.getDate() + 5);
    const formattedDate = departDate.toISOString().split("T")[0];

    const params = {
      from: selectedFlight?.from?.fromCode,
      to: selectedFlight?.to?.toCode,
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
    dispatch(searchpy(params));
    navigate(`/onewaySearchResult?${queryString}`);
  };

  const filteredData = tripData?.filter((item) => {
    if (filterType === "DOMESTIC") {
      return item?.type === "domestic";
    } else {
      return item?.type === "international";
    }
  });

  return (
    <section className="special-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title mx-650 mx-auto text-center">
              <span className="highlights fancy-font font-400">
                <br />
              </span>
              <h4 className="title">Top Domestic & International Tour</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="flex justify-center space-x-4 mb-4">
            {filterOptions.map((type, index) => (
              <button
                key={index}
                className={`px-4 py-2 font-semibold ${
                  filterType === type
                    ? "bg-secondary-6000 hover:bg-secondary-700 text-white  border rounded-3xl "
                    : " text-black bg-gray-200 border rounded-3xl "
                }`}
                onClick={() => setFilterType(type)}
              >
                {type.charAt(0) + type.slice(1).toLowerCase()}
              </button>
            ))}
          </div>

          {filteredData?.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(item)}
              className="col-xl-4 col-md-6 mb-3 cursor-pointer"
            >
              <div className="flex items-center justify-between p-3 bg-yellow-200 border rounded-lg transition hover:bg-white">
                <div className="flex-1">
                  <h4 className="text-lg font-bold">{item?.from?.fromCity}</h4>
                  <p className="text-sm text-gray-600 truncate">
                    {item?.from?.fromAirport}
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
                  <h4 className="text-lg font-bold">{item?.to?.toCity}</h4>
                  <p className="text-sm text-gray-600 truncate">
                    {item?.to?.toAirport}
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

                <div className="flex justify-end mt-6 space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="px-4 py-2 bg-blue-600 text-white rounded"
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

export default TopFlightRoute;
