"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { UserPlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import ClearDataButton from "../ClearDataButton";
import NcInputNumber from "../NcInputNumber";

const GuestsInput = ({
  fieldClassName = "[ nc-hero-field-padding ]",
  className = "[ nc-flex-1 ]",
  hasButtonSubmit = true,
  onGuestChange,
  onFlightClassChange,
  Adult,
  Child,
  Infant,
  initialFlightClass,
}) => {
  // console.log(Adult, "Adult", "Child", Child, Infant, "infant");
  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(
    Number(Adult) || 1
  );
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(
    Number(Child) || 0
  );
  const [guestInfantsInputValue, setGuestInfantsInputValue] = useState(
    Number(Infant) || 0
  );

  const handleChangeData = (value, type) => {
    if (type === "guestAdults") {
      setGuestAdultsInputValue(value);
    }
    if (type === "guestChildren") {
      setGuestChildrenInputValue(value);
    }
    if (type === "guestInfants") {
      setGuestInfantsInputValue(value);
    }
  };

  // for flight class

  const flightClass = [
    { id: 2, value: "Economy", label: "Economy" },
    { id: 3, value: "PremiumEconomy", label: "Premium Economy" },
    { id: 4, value: "Business", label: "Business" },
    { id: 6, value: "First", label: "First" },

    { id: 6, value: "PremiumFirst", label: "Premium First" },
  ];
  const [flightClassState, setFlightClassState] = useState(
    initialFlightClass || flightClass?.[0]
  );

  useEffect(() => {
    onFlightClassChange(flightClassState);
  }, [flightClassState]);

  // for flight class

  const totalGuests =
    guestChildrenInputValue + guestAdultsInputValue + guestInfantsInputValue;

  useEffect(() => {
    const payload = {
      adults: guestAdultsInputValue,
      children: guestChildrenInputValue,
      infant: guestInfantsInputValue,
    };
    onGuestChange(payload);
  }, [guestAdultsInputValue, guestChildrenInputValue, guestInfantsInputValue]);
  return (
    <Popover
      className={`flex w-full relative bg-white border border-gray-300  ${fieldClassName} rounded-lg ${className}`}
    >
      {({ open }) => (
        <>
          <div
            className={`flex-1 z-10 flex items-center focus:outline-none ${
              open ? "" : ""
              //   open ? "nc-hero-field-focused" : ""
            }`}
          >
            <Popover.Button
              className={`relative z-10 flex-1 flex text-left items-center py-[3px] space-x-3 focus:outline-none`}
            >
              <div className="text-neutral-300">
                <UserPlusIcon className="w-5 h-5 lg:w-7 lg:h-7 text-gray-800" />
              </div>
              <div className="flex-grow">
                <span className="block text-xl font-bold">
                  {totalGuests || ""} Passenger
                </span>
                <span className="block mt-1 text-[1rem] text-gray-800 leading-none font-light">
                  {totalGuests ? "Guests" : "Add guests"}
                </span>
              </div>

              {!!totalGuests && open && (
                <ClearDataButton
                  onClick={() => {
                    setGuestAdultsInputValue(1);
                    setGuestChildrenInputValue(0);
                    setGuestInfantsInputValue(0);
                  }}
                />
              )}
            </Popover.Button>
          </div>

          {open && (
            <div className="h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 -left-0.5 right-0.5 bg-white"></div>
          )}

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-20 w-full sm:min-w-[340px] max-w-sm bg-white  top-full mt-3 left-1/2 -translate-x-1/2 py-3 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl ring-1 ring-black/5 ">
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
                onChange={(value) => handleChangeData(value, "guestChildren")}
                max={4}
                label="Children"
                desc="Ages 2–12"
              />
              <NcInputNumber
                className="w-full mt-6"
                defaultValue={guestInfantsInputValue}
                onChange={(value) => handleChangeData(value, "guestInfants")}
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={flightClassState.value} // Controlled input
                    onChange={(e) => {
                      const selectedItem = flightClass?.find(
                        (item) => item.value === e.target.value
                      );
                      setFlightClassState(selectedItem);
                    }}
                  >
                    {flightClass?.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default GuestsInput;
