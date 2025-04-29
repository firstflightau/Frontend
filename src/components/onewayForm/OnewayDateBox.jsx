import React, { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import DatePicker from "react-datepicker";
import DatePickerCustomHeaderTwoMonth from "../flightSearchForm/DatePickerCustomHeaderTwo";
import DatePickerCustomDay from "../flightSearchForm/DatePickerCustomDay";
import ClearDataButton from "../ClearDataButton";
import { parseISO, isValid } from "date-fns";
const formatDate = (date) => {
  return date ? date.toISOString().split("T")[0] : null;
};
const ensureDate = (date) => {
  if (!date) return null;
  if (typeof date === "string") {
    const parsedDate = parseISO(date); // Use parseISO to safely parse strings
    return isValid(parsedDate) ? parsedDate : new Date(date);
  }
  return date instanceof Date ? date : null;
};

const OnewayDateBox = ({
  className = "[ lg:nc-flex-2 ]",
  // fieldClassName = "[ nc-hero-field-padding ]",
  onDateChange,
  StartDate,
}) => {
  const today = ensureDate(StartDate) || new Date();
  console.log(StartDate, new Date(), "startDate,new Date()");
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const [startDate, setStartDate] = useState(tomorrow);

  const onChangeDate = (date, closePopover) => {
    setStartDate(date);

    closePopover();
  };

  useEffect(() => {
    if (onDateChange) {
      onDateChange({ startDate });
    }
  }, [startDate, onDateChange]);

  const renderInput = () => {
    return (
      <>
        <div className="text-neutral-300">
          <CalendarIcon className="w-5 h-5 lg:w-7 lg:h-7 text-gray-800" />
        </div>
        <div className="flex-grow text-left">
          <span className="block text-xl font-bold">
            {startDate?.toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "2-digit",
            }) || "Add date"}
          </span>
          <span className="block mt-1 text-gray-800  leading-none font-light text-[1rem]">
            {"Departure Date"}
          </span>
        </div>
      </>
    );
  };

  return (
    <Popover
      className={`relative w-full flex border bg-white border-gray-300 rounded-lg ${className}`}
    >
      {({ open, close }) => (
        <>
          <div
            className={`flex-1 z-10 flex [ nc-hero-field-padding ] items-center focus:outline-none ${
              // open ? "nc-hero-field-focused" : ""
              open ? "" : ""
            }`}
          >
            <Popover.Button
              className={`relative z-10 flex-1 flex text-left items-center py-[3px]  space-x-3 focus:outline-none`}
            >
              {renderInput()}
              {startDate && open && (
                <ClearDataButton onClick={() => onChangeDate(null)} />
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
            <Popover.Panel className=" absolute left-1/2 sm:left-0 z-50 mt-[-40px] top-full w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden z-50 relative rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white p-8">
                <DatePicker
                  selected={startDate}
                  onChange={(dates) => onChangeDate(dates, close)}
                  startDate={startDate}
                  monthsShown={2}
                  showPopperArrow={false}
                  inline
                  minDate={today}
                  renderCustomHeader={(p) => (
                    <DatePickerCustomHeaderTwoMonth {...p} />
                  )}
                  renderDayContents={(day, date) => (
                    <DatePickerCustomDay dayOfMonth={day} date={date} />
                  )}
                />
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default OnewayDateBox;
