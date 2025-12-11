import React, { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import DatePickerCustomHeaderTwoMonth from "../flightSearchForm/DatePickerCustomHeaderTwo";
import DatePickerCustomDay from "../flightSearchForm/DatePickerCustomDay";
import ClearDataButton from "../ClearDataButton";
import { parseISO, isValid } from "date-fns";
const ensureDate = (date) => {
  if (!date) return null;
  if (typeof date === "string") {
    const parsedDate = parseISO(date); // Use parseISO to safely parse strings
    return isValid(parsedDate) ? parsedDate : new Date(date);
  }
  return date instanceof Date ? date : null;
};

// Helper function to format dates as "YYYY-MM-DD"

const ReturnDateBox = ({
  className = "[ lg:nc-flex-2 ]",
  fieldClassName = "[ nc-hero-field-padding ]",
  onDateChange,
  StartDate,
  EndDate,
}) => {
  const today = ensureDate(StartDate) || new Date();
  const tomorrowDate = new Date();
  tomorrowDate.setDate(today.getDate() + 1);

  let tomorrow = ensureDate(StartDate) || tomorrowDate;
  const twoDaysLater = ensureDate(EndDate) || new Date(tomorrow);
  !ensureDate(StartDate) && twoDaysLater.setDate(tomorrow.getDate() + 2);

  const [startDate, setStartDate] = useState(tomorrow);
  const [endDate, setEndDate] = useState(twoDaysLater);

  const onChangeDate = (dates, closePopover) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      closePopover(); // Close the popover when both start and end dates are selected
    }
  };

  useEffect(() => {
    if (onDateChange) {
      onDateChange({ startDate, endDate });
    }
  }, [startDate, endDate, onDateChange]);

  const renderInput = () => {
    return (
      <>
        <div className="text-neutral-300">
          <CalendarIcon className="w-5 h-5 lg:w-7 lg:h-7" />
        </div>
        <div className="flex-grow text-left">
          <span className="block text-xl font-bold">
            {typeof startDate == "object"
              ? startDate?.toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                }) || "Add dates"
              : new Date(startDate)?.toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                }) || "Add dates"}
            -
            {endDate
              ? " - " + typeof endDate == "object"
                ? endDate?.toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                  })
                : new Date(endDate)?.toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                  })
              : ""}
          </span>
          <span className="block mt-1 text-gray-800  leading-none font-light text-[1rem]">
            {"Check in - Check out"}
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
            className={`flex-1 z-10 flex items-center ${fieldClassName} focus:outline-none ${
              // open ? "nc-hero-field-focused" : ""
              open ? "" : ""
            }`}
          >
            <Popover.Button
              className={`relative z-10 flex-1 flex text-left items-center py-[3px]   space-x-3 focus:outline-none`}
            >
              {renderInput()}
              {startDate && open && (
                <ClearDataButton onClick={() => onChangeDate([null, null])} />
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
                  selected={
                    typeof startDate == "object"
                      ? startDate
                      : new Date(startDate)
                  }
                  onChange={(dates) => onChangeDate(dates, close)}
                  startDate={
                    typeof startDate == "object"
                      ? startDate
                      : new Date(startDate)
                  }
                  endDate={
                    typeof endDate == "object" ? endDate : new Date(endDate)
                  }
                  selectsRange
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

export default ReturnDateBox;
