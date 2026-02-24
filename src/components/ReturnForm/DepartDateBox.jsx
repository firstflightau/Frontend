import React, { Fragment, useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import DatePicker from "react-datepicker";
import ClearDataButton from "../ClearDataButton";
import { parseISO, isValid } from "date-fns";

// ---- same helper (safe date) ----
const ensureDate = (date) => {
  if (!date) return null;
  if (typeof date === "string") {
    const parsedDate = parseISO(date);
    return isValid(parsedDate) ? parsedDate : new Date(date);
  }
  return date instanceof Date ? date : null;
};

const DepartDateBox = ({
  className = "[ lg:nc-flex-2 ]",
  fieldClassName = "[ nc-hero-field-padding ]",
  date,
  onChange,
}) => {
  const today = new Date();
  const [startDate, setStartDate] = useState(ensureDate(date) || today);

  useEffect(() => {
    if (onChange) {
      onChange(startDate);
    }
  }, [startDate, onChange]);

  const renderInput = () => {
    return (
      <>
        <div className="text-neutral-300">
          <CalendarIcon className="w-5 h-5 lg:w-7 lg:h-7" />
        </div>

        <div className="flex-grow text-left">
          <span className="block text-xl font-bold">
            {startDate
              ? startDate.toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                })
              : "Depart"}
          </span>

          <span className="block mt-1 text-gray-800 leading-none font-light text-[1rem]">
            Departure Date
          </span>
        </div>
      </>
    );
  };

  return (
    <Popover
      className={`relative flex border w-full bg-white border-gray-300 rounded-lg ${className}`}
    >
      {({ open, close }) => (
        <>
          <div
            className={`flex-1 z-10 flex items-center ${fieldClassName} focus:outline-none`}
          >
            <Popover.Button className="relative z-10 flex-1 flex text-left items-center py-[3px] space-x-3 focus:outline-none">
              {renderInput()}
              {startDate && open && (
                <ClearDataButton onClick={() => setStartDate(null)} />
              )}
            </Popover.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 sm:left-0 z-50 mt-[-40px] top-full w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden z-50 relative rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white p-8">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    close();
                  }}
                  minDate={today}
                  inline
                />
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default DepartDateBox;
