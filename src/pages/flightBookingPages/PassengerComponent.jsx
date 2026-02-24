import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Accordion } from "flowbite-react";
import { useSelector } from "react-redux";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
const PassengerComponent = forwardRef((props, ref) => {
  const reducerState = useSelector((state) => state);
  const countryList = reducerState?.airportList?.countryList;
  const noOfPassenger = reducerState?.searchFlighPY;

  const [passengerData, setPassengerData] = useState({
    // UPDATED: Set default title to 'Mr' for all passengers
    adults: Array(noOfPassenger?.Adult).fill({
      title: "Mr",
      firstName: "",
      lastName: "",
      gender: "",
      type: "ADT",
      dob: "",
      // passportNumber: "",
      // passportExpiry: "",
      // passportIssuingCountry: "",
    }),
    childs: Array(noOfPassenger?.Child).fill({
      title: "Mr",
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      type: "CHD",
      // passportNumber: "",
      // passportExpiry: "",
      // passportIssuingCountry: "",
    }),
    infants: Array(noOfPassenger?.Infant).fill({
      title: "Mr",
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      type: "INF",
      // passportNumber: "",
      // passportExpiry: "",
      // passportIssuingCountry: "",
    }),
    // passportRequired: true,
    email: "",
    mobile: "",
    mobileCode: "+61",
  });

  const [errorIndex, setErrorIndex] = useState(null);
  const [isAccordionVisible, setIsAccordionVisible] = useState(true);
  const errorRef = useRef(null);

  const handleChange = (type, index, field, value) => {
    const updatedPassengers = [...passengerData[type]];
    updatedPassengers[index] = {
      ...updatedPassengers[index],
      [field]: value,
    };

    setPassengerData((prev) => ({
      ...prev,
      [type]: updatedPassengers,
    }));
  };

  const handleDateChange = (type, index, field, value, unit) => {
    const updatedPassengers = [...passengerData[type]];
    const currentDate = updatedPassengers[index][field] || "--";
    const dateParts = currentDate.split("-");

    let year = dateParts[0] || "";
    let month = dateParts[1] || "";
    let day = dateParts[2] || "";

    if (unit === "year") year = value;
    if (unit === "month") month = value;
    if (unit === "day") day = value;

    const newDate = `${year}-${month}-${day}`;
    updatedPassengers[index] = {
      ...updatedPassengers[index],
      [field]: newDate,
    };

    setPassengerData((prev) => ({
      ...prev,
      [type]: updatedPassengers,
    }));
  };

  // NEW: Enhanced date validation to ensure all parts (Y, M, D) are present and valid.
  const isValidDate = (dateString) => {
    if (!dateString) return false;
    const parts = dateString.split("-");
    if (parts.length !== 3) return false;

    const [year, month, day] = parts;
    // Ensure year, month, and day are not empty or just placeholders
    if (!year || !month || !day) {
      return false;
    }

    const date = new Date(dateString);
    // Check if the date is a real calendar date and matches the input
    return (
      !isNaN(date.getTime()) &&
      date.getFullYear() === parseInt(year, 10) &&
      date.getMonth() + 1 === parseInt(month, 10) &&
      date.getDate() === parseInt(day, 10)
    );
  };

  const validateForm = async () => {
    let firstError = null;

    // Validate adults
    const adultErrorIndex = passengerData.adults.findIndex(
      (adult) =>
        !adult.title ||
        !adult.firstName?.trim() ||
        !adult.lastName?.trim() ||
        !adult.gender ||
        !isValidDate(adult.dob) ||
        (passengerData.passportRequired &&
          (!adult.passportNumber?.trim() ||
            !isValidDate(adult.passportExpiry) ||
            !adult.passportIssuingCountry?.countryCode))
    );

    if (adultErrorIndex !== -1) {
      firstError = { type: "adults", index: adultErrorIndex };
    }

    // Validate children
    if (!firstError) {
      const childErrorIndex = passengerData.childs.findIndex(
        (child) =>
          !child.title ||
          !child.firstName?.trim() ||
          !child.lastName?.trim() ||
          !child.gender ||
          !isValidDate(child.dob) ||
          (passengerData.passportRequired &&
            (!child.passportNumber?.trim() ||
              !isValidDate(child.passportExpiry) ||
              !child.passportIssuingCountry?.countryCode))
      );
      if (childErrorIndex !== -1) {
        firstError = { type: "childs", index: childErrorIndex };
      }
    }

    // Validate infants
    if (!firstError) {
      const infantErrorIndex = passengerData.infants.findIndex(
        (infant) =>
          !infant.title ||
          !infant.firstName?.trim() ||
          !infant.lastName?.trim() ||
          !infant.gender ||
          !isValidDate(infant.dob) ||
          (passengerData.passportRequired &&
            (!infant.passportNumber?.trim() ||
              !isValidDate(infant.passportExpiry) ||
              !infant.passportIssuingCountry?.countryCode))
      );
      if (infantErrorIndex !== -1) {
        firstError = { type: "infants", index: infantErrorIndex };
      }
    }

    // Validate email
    if (!firstError) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!passengerData.email || !emailRegex.test(passengerData.email)) {
        firstError = { type: "email", index: 0 };
      }
    }

    // NEW: Validate mobile number
    // if (!firstError) {
    //   if (!passengerData.mobile?.trim()) {
    //     firstError = { type: "mobile", index: 0 };
    //   }
    // }
    if (!firstError) {
      // Remove spaces and check length
      const mobileDigits = passengerData.mobile.replace(/\s+/g, '');
      if (!/^\d{9}$/.test(mobileDigits)) {
        firstError = { type: "mobile", index: 0 };
      }
    }

    if (firstError) {
      setErrorIndex(firstError);

      // Scroll to error
      await new Promise((resolve) => setTimeout(resolve, 100));
      if (errorRef.current) {
        errorRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
      return false;
    }
    setErrorIndex(null); // Clear errors if validation passes
    return true;
  };

  useImperativeHandle(ref, () => ({
    validateForm,
    getPassengerData: () => passengerData,
  }));

  const currentYear = new Date().getFullYear();
  const days = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const Month = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const yearAdult = Array.from({ length: 90 }, (_, i) =>
    String(currentYear - 12 - i)
  );
  const yearChild = Array.from({ length: 12 }, (_, i) =>
    String(currentYear - 2 - i)
  );
  const yearInfant = Array.from({ length: 2 }, (_, i) =>
    String(currentYear - i)
  );
  const yearPassport = Array.from({ length: 15 }, (_, i) =>
    String(currentYear + i)
  );

  const renderAccordion = (type, data) => {
    if (!data || !data.length) return null;

    return (
      <div className="p-3">
        <h2 className="text-lg font-semibold mb-2 capitalize">{type}</h2>
        {data.map((passenger, index) => (
          <div
            key={index}
            ref={
              errorIndex?.type === type && errorIndex?.index === index
                ? errorRef
                : null
            }
            className="mb-0"
          >
            {errorIndex?.type === type && errorIndex?.index === index && (
              <div className="bg-red-400 text-white text-center py-1 mb-4 animate-shake">
                Please fill all details for {type.slice(0, -1)} {index + 1}.
              </div>
            )}
            <Accordion alwaysOpen={false} className="divide-none mb-3">
              <Accordion.Panel className="mb-2 ">
                <Accordion.Title className=" dark:bg-gray-200 focus:ring-0 flex items-center justify-between w-full px-2 py-0 font-medium rtl:text-right  border-gray-200 hover:bg-gray-100 gap-3 rounded-lg border-0">
                  <div>
                    <span className="text-sm font-semibold text-gray-800">
                      {passenger.firstName && passenger.lastName
                        ? `${passenger.firstName} ${passenger.lastName}`
                        : `${type.slice(0, -1).charAt(0).toUpperCase() +
                        type.slice(0, -1).slice(1)
                        } ${index + 1}`}
                    </span>
                  </div>
                </Accordion.Title>
                <Accordion.Content className="p-3">
                  <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-4">
                    <div className="">
                      <label
                        htmlFor={`title-${type}-${index}`}
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Title
                      </label>
                      <Listbox
                        value={passenger.title}
                        onChange={(value) =>
                          handleChange(type, index, "title", value)
                        }
                      >
                        <div className="relative">
                          <Listbox.Button className="bg-white rounded-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  w-full min-w-16 p-2.5 flex justify-between">
                            <span className="col-start-1 row-start-1 flex items-center gap-3 ">
                              <span className="block truncate">
                                {passenger.title || "Title"}
                              </span>
                            </span>
                            <ChevronUpDownIcon
                              aria-hidden="true"
                              className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                          </Listbox.Button>
                          <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            <Listbox.Option
                              value="Mr"
                              className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-blue-500 data-[focus]:text-white"
                            >
                              <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                Mr
                              </span>
                            </Listbox.Option>
                            <Listbox.Option
                              value="Miss"
                              className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-blue-500 data-[focus]:text-white"
                            >
                              <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                Miss
                              </span>
                            </Listbox.Option>
                            <Listbox.Option
                              value="Mrs"
                              className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-blue-500 data-[focus]:text-white"
                            >
                              <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                Mrs
                              </span>
                            </Listbox.Option>
                            <Listbox.Option
                              value="Mrs"
                              className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-blue-500 data-[focus]:text-white"
                            >
                              <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                Mstr
                              </span>
                            </Listbox.Option>
                          </Listbox.Options>
                        </div>
                      </Listbox>
                    </div>

                    <div className="col-span-3">
                      <label
                        htmlFor={`fname-${type}-${index}`}
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="First Name"
                        id={`fname-${type}-${index}`}
                        value={passenger.firstName}
                        onChange={(e) =>
                          handleChange(type, index, "firstName", e.target.value)
                        }
                        className="bg-white rounded-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      />
                    </div>

                    <div className="col-span-3">
                      <label
                        htmlFor={`lname-${type}-${index}`}
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        id={`lname-${type}-${index}`}
                        value={passenger.lastName}
                        onChange={(e) =>
                          handleChange(type, index, "lastName", e.target.value)
                        }
                        className="bg-white rounded-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className=" ">
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Date of Birth
                      </label>
                      <div className="grid grid-cols-3">
                        <Listbox
                          value={passenger.dob.split("-")[2] || ""}
                          onChange={(value) =>
                            handleDateChange(type, index, "dob", value, "day")
                          }
                        >
                          <div className="relative">
                            <Listbox.Button className="bg-white rounded-l-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  w-full  p-1.5 py-2.5 flex justify-between">
                              <span className="block truncate">
                                {passenger.dob.split("-")[2] || "Day"}
                              </span>
                              <ChevronUpDownIcon
                                aria-hidden="true"
                                className="size-5 self-center justify-self-end text-gray-500 sm:size-4"
                              />
                            </Listbox.Button>
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                              {days.map((day) => (
                                <Listbox.Option
                                  key={day}
                                  value={day}
                                  className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-blue-500 data-[focus]:text-white"
                                >
                                  <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                    {day}
                                  </span>
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </div>
                        </Listbox>
                        <Listbox
                          value={passenger.dob.split("-")[1] || ""}
                          onChange={(value) =>
                            handleDateChange(type, index, "dob", value, "month")
                          }
                        >
                          <div className="relative">
                            <Listbox.Button className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  w-full  p-1.5 py-2.5 flex justify-between">
                              <span className="block truncate">
                                {passenger.dob.split("-")[1] || "Month"}
                              </span>
                              <ChevronUpDownIcon
                                aria-hidden="true"
                                className="size-5 self-center justify-self-end text-gray-500 sm:size-4"
                              />
                            </Listbox.Button>
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                              {Month.map((month) => (
                                <Listbox.Option
                                  key={month}
                                  value={month}
                                  className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-blue-500 data-[focus]:text-white"
                                >
                                  <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                    {month}
                                  </span>
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </div>
                        </Listbox>
                        <Listbox
                          value={passenger.dob.split("-")[0] || ""}
                          onChange={(value) =>
                            handleDateChange(type, index, "dob", value, "year")
                          }
                        >
                          <div className="relative">
                            <Listbox.Button className="bg-white rounded-r-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  w-full  p-1.5 py-2.5 flex flex-nowrap justify-between">
                              <span className="block truncate">
                                {passenger.dob.split("-")[0] || "Year"}
                              </span>
                              <ChevronUpDownIcon
                                aria-hidden="true"
                                className="size-5 self-center justify-self-end text-gray-500 sm:size-4"
                              />
                            </Listbox.Button>
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                              {type === "adults" &&
                                yearAdult.map((year) => (
                                  <Listbox.Option
                                    key={year}
                                    value={year}
                                    className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-blue-500 data-[focus]:text-white"
                                  >
                                    <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                      {year}
                                    </span>
                                  </Listbox.Option>
                                ))}
                              {type === "childs" &&
                                yearChild.map((year) => (
                                  <Listbox.Option
                                    key={year}
                                    value={year}
                                    className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-blue-500 data-[focus]:text-white"
                                  >
                                    <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                      {year}
                                    </span>
                                  </Listbox.Option>
                                ))}
                              {type === "infants" &&
                                yearInfant.map((year) => (
                                  <Listbox.Option
                                    key={year}
                                    value={year}
                                    className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-blue-500 data-[focus]:text-white"
                                  >
                                    <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                      {year}
                                    </span>
                                  </Listbox.Option>
                                ))}
                            </Listbox.Options>
                          </div>
                        </Listbox>
                      </div>
                    </div>
                    <div className=" ">
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Gender
                      </label>
                      <div className="flex">
                        <button
                          type="button"
                          className={`p-2 flex-1 px-4 rounded-l-md  border-b-4 ${passenger.gender === 1
                            ? "border-blue-500 bg-blue-100"
                            : "border-2 border-gray-200"
                            }`}
                          onClick={() => handleChange(type, index, "gender", 1)}
                        >
                          Male
                        </button>
                        <div className="border-r-2 h-full"></div>
                        <button
                          type="button"
                          className={`p-2 flex-1 px-4 rounded-r-md border-b-4 ${passenger.gender === 2
                            ? "border-blue-500 bg-blue-100"
                            : "border-2 border-gray-200"
                            }`}
                          onClick={() => handleChange(type, index, "gender", 2)}
                        >
                          Female
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* {passengerData.passportRequired && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label
                          htmlFor={`passportNumber-${type}-${index}`}
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Passport Number
                        </label>
                        <input
                          type="text"
                          placeholder="Passport Number"
                          id={`passportNumber-${type}-${index}`}
                          value={passenger.passportNumber}
                          onChange={(e) =>
                            handleChange(
                              type,
                              index,
                              "passportNumber",
                              e.target.value
                            )
                          }
                          className="bg-white rounded-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Passport Expiry
                        </label>
                        <div className="grid grid-cols-3">
                          <Listbox
                            value={passenger.passportExpiry.split("-")[2] || ""}
                            onChange={(value) =>
                              handleDateChange(
                                type,
                                index,
                                "passportExpiry",
                                value,
                                "day"
                              )
                            }
                          >
                            <div className="relative">
                              <Listbox.Button className="bg-white rounded-l-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-1.5 py-2.5 flex justify-between">
                                <span className="block truncate">
                                  {passenger.passportExpiry.split("-")[2] ||
                                    "Day"}
                                </span>
                                <ChevronUpDownIcon
                                  aria-hidden="true"
                                  className="size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                              </Listbox.Button>
                              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                {days.map((day) => (
                                  <Listbox.Option
                                    key={day}
                                    value={day}
                                    className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-blue-500 data-[focus]:text-white"
                                  >
                                    <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                      {day}
                                    </span>
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </div>
                          </Listbox>
                          <Listbox
                            value={passenger.passportExpiry.split("-")[1] || ""}
                            onChange={(value) =>
                              handleDateChange(
                                type,
                                index,
                                "passportExpiry",
                                value,
                                "month"
                              )
                            }
                          >
                            <div className="relative">
                              <Listbox.Button className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-1.5 py-2.5 flex justify-between">
                                <span className="block truncate">
                                  {passenger.passportExpiry.split("-")[1] ||
                                    "Month"}
                                </span>
                                <ChevronUpDownIcon
                                  aria-hidden="true"
                                  className="size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                              </Listbox.Button>
                              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                {Month.map((month) => (
                                  <Listbox.Option
                                    key={month}
                                    value={month}
                                    className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-blue-500 data-[focus]:text-white"
                                  >
                                    <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                      {month}
                                    </span>
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </div>
                          </Listbox>
                          <Listbox
                            value={passenger.passportExpiry.split("-")[0] || ""}
                            onChange={(value) =>
                              handleDateChange(
                                type,
                                index,
                                "passportExpiry",
                                value,
                                "year"
                              )
                            }
                          >
                            <div className="relative">
                              <Listbox.Button className="bg-white rounded-r-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-1.5 py-2.5 flex justify-between">
                                <span className="block truncate">
                                  {passenger.passportExpiry.split("-")[0] ||
                                    "Year"}
                                </span>
                                <ChevronUpDownIcon
                                  aria-hidden="true"
                                  className="size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                              </Listbox.Button>
                              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                {yearPassport.map((year) => (
                                  <Listbox.Option
                                    key={year}
                                    value={year}
                                    className="group w-full relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-blue-500 data-[focus]:text-white"
                                  >
                                    <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                      {year}
                                    </span>
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </div>
                          </Listbox>
                        </div>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Passport Issuing Country
                        </label>
                        <Listbox
                          value={passenger.passportIssuingCountry}
                          onChange={(value) =>
                            handleChange(
                              type,
                              index,
                              "passportIssuingCountry",
                              value
                            )
                          }
                        >
                          <div className="relative">
                            <Listbox.Button className="bg-white rounded-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full min-w-24 p-2.5 flex justify-between">
                              <span className="block truncate">
                                {passenger.passportIssuingCountry.countryName ||
                                  "Select Country"}
                              </span>
                              <ChevronUpDownIcon
                                aria-hidden="true"
                                className="size-5 self-center justify-self-end text-gray-500 sm:size-4"
                              />
                            </Listbox.Button>
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                              {countryList.map((item) => (
                                <Listbox.Option
                                  key={item.countryCode}
                                  value={item}
                                  className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-blue-500 data-[focus]:text-white"
                                >
                                  <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                    {item?.countryName}
                                  </span>
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </div>
                        </Listbox>
                      </div>
                    </div>
                  )} */}
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="">
      <div className="rounded-2xl  border-2 border-gray-200 mt-4">
        <p
          className={` ${isAccordionVisible ? "rounded-ss-2xl rounded-se-2xl" : "rounded-2xl"
            }  text-gray-700 p-2 px-4 bg-gradient-to-r from-blue-100 via-blue-100  to-blue-50  text-lg font-bold cursor-pointer flex justify-between items-center transition-all duration-200 ease-in-out `}
          onClick={() => setIsAccordionVisible((prev) => !prev)}
        >
          Passenger Details
          <span className="text-xl">
            {isAccordionVisible ? <Minus size={16} /> : <Plus size={16} />}
          </span>
        </p>
        <div
          className={`transition-all duration-300 ease-in-out  ${isAccordionVisible ? "max-h-full" : "max-h-0  overflow-hidden"
            }`}
        >
          {renderAccordion("adults", passengerData.adults)}
          {renderAccordion("childs", passengerData.childs)}
          {renderAccordion("infants", passengerData.infants)}
        </div>
      </div>

      {errorIndex?.type === "email" && (
        <div
          ref={errorRef}
          className="bg-red-400 text-white text-center py-1 my-3 animate-shake rounded-md"
        >
          Please enter a valid email address.
        </div>
      )}

      {/* NEW: Error message for mobile number validation */}
      {errorIndex?.type === "mobile" && (
        <div
          ref={errorRef}
          className="bg-red-400 text-white text-center py-1 my-3 animate-shake rounded-md"
        >
          Please enter a valid mobile number.
        </div>
      )}

      <div className="mt-4 border rounded-xl p-3">
        <p className="text-base font-medium mb-3">
          Your booking details will be sent to
        </p>
        <div className="flex flex-1 w-full gap-3 flex-col md:flex-row">
          <div className="w-full">
            <label
              htmlFor="email-contact"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email Id
            </label>
            <input
              type="email"
              id="email-contact"
              placeholder="Enter Email"
              value={passengerData.email}
              onChange={(e) =>
                setPassengerData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full bg-white rounded-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            />
          </div>
          {/* <div className="w-full">
            <label
              htmlFor="mobile-contact"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Mobile No
            </label> */}
          {/* <input
              type="tel"
              id="mobile-contact"
              placeholder="eg : +61 450424186"
              value={passengerData.mobile}
              onChange={(e) =>
                setPassengerData((prev) => ({
                  ...prev,
                  mobile: e.target.value,
                }))
              } */}
          {/* <input
              type="tel"
              id="mobile-contact"
              placeholder="eg : 290 112 019"
              value={passengerData.mobile}
              onChange={(e) => {
                let value = e.target.value;
                // Allow only digits and spaces
                if (/^[\d\s]*$/.test(value)) {
                  setPassengerData((prev) => ({
                    ...prev,
                    mobile: value,
                    mobileCode: "+61", // always Australia
                  }));
                }
              }}
              className="bg-white rounded-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div> */}
          <div className="w-full">
            <label
              htmlFor="mobile-contact"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mobile <span className="text-red-500">*</span>
            </label>

            <div className="flex items-center w-full">
              {/* Country Code */}
              <div className="flex items-center gap-2 px-3 py-2.5 border border-gray-300 bg-gray-50 rounded-l-md text-sm">
                <img
                  src="https://flagcdn.com/w20/au.png"
                  alt="AU"
                  className="w-5 h-4 object-cover"
                />
                <span className="font-medium">+61</span>
              </div>

              {/* Mobile Input */}
              <input
                type="tel"
                id="mobile-contact"
                placeholder="Mobile No"
                value={passengerData.mobile}
                onChange={(e) => {
                  let value = e.target.value;
                  // Allow only digits and spaces
                  if (/^[\d\s]*$/.test(value)) {
                    setPassengerData((prev) => ({
                      ...prev,
                      mobile: value,
                      mobileCode: "+61", // always Australia
                    }));
                  }
                }}
                className="bg-white border border-l-0 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-r-md"
              />
            </div>
          </div>

        </div>

      </div>
      <div className="remember-me terms-condition mt-3">
        <label>
          <input
            className="checkbox-style"
            type="checkbox"
            value="remember"
            name="remember"
          />
          <small>
            I agree to all the
            <Link to="'term-condition">
              <span className="text-primary">Terms</span>
            </Link>{" "}
            and{" "}
            <Link to="/privacy-policy">
              <span className="text-primary">
                Privacy policy
              </span>
            </Link>
          </small>
          <span className="checkmark-style"></span>
        </label>
      </div>
    </div>
  );
});

export default PassengerComponent;
