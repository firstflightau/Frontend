import React, { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Accessibility } from "lucide-react";

const FlightClass = ({
  fieldClassName = "[ nc-hero-field-padding ]",
  className = "[ nc-flex-1 ]",
  onFlightClassChange,
}) => {
  const flightClass = [
    { id: 2, value: "Y", label: "Economy" },
    { id: 3, value: "W", label: "Premium Economy" },
    { id: 4, value: "C", label: "Business" },
    { id: 6, value: "F", label: "First" },
  ];
  const [flightClassState, setFlightClassState] = useState(flightClass?.[0]);

  useEffect(() => {
    onFlightClassChange(flightClassState);
  }, [flightClassState]);

  return (
    <Popover
      className={`flex relative border border-gray-300 rounded-lg me-3 ${className}`}
    >
      {({ open }) => (
        <>
          <div
            className={`flex-1 z-10 flex items-center focus:outline-none ${
              //   open ? "nc-hero-field-focused" : ""
              open ? "" : ""
            }`}
          >
            <Popover.Button
              className={`relative z-10 flex-1 flex text-left items-center ${fieldClassName} space-x-3 focus:outline-none`}
            >
              <div className="text-neutral-300">
                <Accessibility className="w-5 h-5 lg:w-7 lg:h-7 text-gray-800" />
              </div>
              <div className="flex-grow">
                <span className="block text-xl font-bold">
                  {flightClassState.label}
                </span>
                <span className="block mt-1 text-[1rem] text-gray-800 leading-none font-light">
                  {"Select Class"}
                </span>
              </div>
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
            <Popover.Panel className="absolute z-20 w-screen max-w-[350px] sm:max-w-[220px] xl:px-4 lg:px-4 md:px-4 top-full mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
                <div className="relative grid gap-8 bg-white  p-7">
                  {flightClass.map((item) => (
                    <a
                      key={item.value}
                      // href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setFlightClassState(item);
                        close();
                      }}
                      className="flex items-center text-gray-900 no-underline p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <p className="text-sm font-medium">{item.label}</p>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default FlightClass;
