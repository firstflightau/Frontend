import React, { useState, useRef } from "react";
import { Accordion } from "flowbite-react";
import { useSelector } from "react-redux";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";

const PassengerComponent = () => {
  const reducerState = useSelector((state) => state);

  const noOfPassenger = reducerState?.searchFlighPY;

  // console.log(noOfPassenger?.Adult, "noOfPassenger?.Adult");
  // console.log(noOfPassenger?.Child, "noOfPassenger?.Child");
  // console.log(noOfPassenger?.Infant, "noOfPassenger?.Infant");

  const getDefaultPassportExpiry = () => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + 2);

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const getDefaultDOBAdult = () => {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 12); // Subtract 18 years

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(currentDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  const getDefaultDOBChild = () => {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 2); // Subtract 18 years

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(currentDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  const [passengerData, setPassengerData] = useState({
    adults: Array(noOfPassenger?.Adult).fill({
      title: "Mr",
      firstName: "",
      lastName: "",
      gender: "",
      // dob: getDefaultDOBAdult(),
      dob: "",
      passportNumber: "",
      passportExpiry: getDefaultPassportExpiry(),
      passportIssuingCountry: "",
    }),
    children: Array(noOfPassenger?.Child).fill({
      title: "Mr",
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      passportNumber: "",
      passportExpiry: getDefaultPassportExpiry(),
      passportIssuingCountry: "",
    }),
    infants: Array(noOfPassenger?.Infant).fill({
      title: "Mr",
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      passportNumber: "",
      passportExpiry: getDefaultPassportExpiry(),
      passportIssuingCountry: "",
    }),
    passportRequired: true,
    email: "",
  });

  console.log(passengerData, "passengerData");

  const [errorIndex, setErrorIndex] = useState(null);
  const [isAccordionVisible, setIsAccordionVisible] = useState(true);
  const errorRef = useRef(null);

  // Handles updates for individual passengers in each type
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
    const currentDate = updatedPassengers[index][field] || "";
    const dateParts = currentDate.split("-").map((part) => part || "");

    if (unit === "year") dateParts[0] = value;
    if (unit === "month") dateParts[1] = value.padStart(2, "0");
    if (unit === "day") dateParts[2] = value.padStart(2, "0");

    const newDate = dateParts.join("-");
    updatedPassengers[index] = {
      ...updatedPassengers[index],
      [field]: newDate,
    };

    setPassengerData((prev) => ({
      ...prev,
      [type]: updatedPassengers,
    }));
  };

  const validateForm = async () => {
    let firstError = null;

    // Validate adults
    const adultErrorIndex = passengerData.adults.findIndex(
      (adult) =>
        !adult.firstName ||
        !adult.lastName ||
        !adult.gender ||
        !adult.gender ||
        !adult.dob ||
        (passengerData.passportRequired &&
          (!adult.passportNumber ||
            !adult.passportExpiry ||
            !adult.passportIssuingCountry))
    );
    if (adultErrorIndex !== -1) {
      firstError = { type: "adults", index: adultErrorIndex };
    }

    // Validate children
    if (!firstError) {
      const childErrorIndex = passengerData.children.findIndex(
        (child) =>
          !child.firstName ||
          !child.lastName ||
          !child.gender ||
          !child.dob ||
          (passengerData.passportRequired &&
            (!child.passportNumber ||
              !child.passportExpiry ||
              !child.passportIssuingCountry))
      );
      if (childErrorIndex !== -1) {
        firstError = { type: "children", index: childErrorIndex };
      }
    }

    // Validate infants
    if (!firstError) {
      const infantErrorIndex = passengerData.infants.findIndex(
        (infant) =>
          !infant.firstName ||
          !infant.lastName ||
          !infant.gender ||
          !infant.dob ||
          (passengerData.passportRequired &&
            (!infant.passportNumber ||
              !infant.passportExpiry ||
              !infant.passportIssuingCountry))
      );
      if (infantErrorIndex !== -1) {
        firstError = { type: "infants", index: infantErrorIndex };
      }
    }

    if (firstError) {
      setErrorIndex(firstError);

      // Scroll to the error accordion
      if (errorRef.current) {
        await errorRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      console.log("Passenger Data:", passengerData);
      setErrorIndex(null);
    }
  };

  const currentYear = new Date().getFullYear();
  const minYearForAdult = currentYear - 18;
  const minYearForChild = currentYear - 2;
  //   const minYearForInfant = currentYear - 18;

  const days = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const Month = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const year = Array.from({ length: 90 }, (_, i) =>
    String(minYearForAdult - i).padStart(2, "0")
  );

  const renderAccordion = (type, data) => {
    if (!data || !data.length) return null;

    return (
      <div className="p-3">
        <h2 className="text-lg font-bold mb-2 capitalize">{type}</h2>
        {data.map((passenger, index) => (
          <div
            key={index}
            ref={
              errorIndex?.type === type && errorIndex?.index === index
                ? errorRef
                : null
            }
            className="mb-4"
          >
            {/* Error message for the first invalid passenger */}
            {errorIndex?.type === type && errorIndex?.index === index && (
              <div className="bg-red-500 text-white text-center py-2 mb-4 rounded">
                Please fill in the details for {type.slice(0, -1)} {index + 1}.
              </div>
            )}
            <Accordion alwaysOpen={false} className="divide-none ">
              <Accordion.Panel className="mb-2">
                <Accordion.Title className=" focus:ring-0 flex items-center justify-between w-full px-2 py-0 font-medium rtl:text-right active:text-gray-800 text-gray-800 focus:text-gray-800 border border-gray-200 hover:bg-gray-100 gap-3 rounded-lg border-1">
                  <div>
                    <span className="text-sm font-semibold text-gray-800">
                      {passenger.firstName && passenger.lastName
                        ? `${passenger.firstName} ${passenger.lastName}`
                        : `
                            ${
                              type.slice(0, -1).charAt(0).toUpperCase() +
                              type.slice(0, -1).slice(1)
                            } ${index + 1}`}
                    </span>
                  </div>
                </Accordion.Title>
                <Accordion.Content className="p-3">
                  <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-4">
                    <div className="">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Title
                      </label>

                      <select
                        value={passenger.title}
                        onChange={(e) =>
                          handleChange(type, index, "title", e.target.value)
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                      </select>
                    </div>

                    <div className="col-span-3">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="First Name"
                        value={passenger.firstName}
                        onChange={(e) =>
                          handleChange(type, index, "firstName", e.target.value)
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      />
                    </div>

                    <div className="col-span-3">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={passenger.lastName}
                        onChange={(e) =>
                          handleChange(type, index, "lastName", e.target.value)
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      />
                    </div>
                  </div>

                  <div className="flex flex-row  gap-4 mb-4">
                    <div className="  ">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Gender
                      </label>

                      <div className="flex">
                        <button
                          type="button"
                          className={`p-2 px-4 bg-gray-100 border-b-2 ${
                            passenger.gender === 1
                              ? "border-secondary-500 bg-secondary-50"
                              : ""
                          }`}
                          onClick={() => handleChange(type, index, "gender", 1)}
                        >
                          Male
                        </button>
                        <div className="border-r-2 h-full"></div>
                        <button
                          type="button"
                          className={`p-2 px-4 bg-gray-100 border-b-2 ${
                            passenger.gender === 2
                              ? "border-secondary-500 bg-secondary-50"
                              : ""
                          }`}
                          onClick={() => handleChange(type, index, "gender", 2)}
                        >
                          Female
                        </button>
                      </div>
                    </div>

                    <div className=" ">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 "
                      >
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
                            <Listbox.Button className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 flex justify-between">
                              <span className="col-start-1 row-start-1 flex items-center gap-3 ">
                                <span className="block truncate">
                                  {passenger.dob.split("-")[2] || "Day"}
                                </span>
                              </span>
                              <ChevronUpDownIcon
                                aria-hidden="true"
                                className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                              />
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                              {/* <Listbox.Option className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-secondary-6000 data-[focus]:text-white">
                                <div className="flex items-center">
                                  <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                    Date
                                  </span>
                                </div>
                              </Listbox.Option> */}
                              {days.map((day) => (
                                <Listbox.Option
                                  key={day}
                                  value={day}
                                  className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-secondary-6000 data-[focus]:text-white"
                                >
                                  <div className="flex items-center">
                                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                      {day}
                                    </span>
                                  </div>
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
                            <Listbox.Button className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 flex justify-between">
                              <span className="col-start-1 row-start-1 flex items-center gap-3 ">
                                <span className="block truncate">
                                  {passenger.dob.split("-")[1] || "Month"}
                                </span>
                              </span>
                              <ChevronUpDownIcon
                                aria-hidden="true"
                                className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                              />
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                              {Month.map((day) => (
                                <Listbox.Option
                                  key={day}
                                  value={day}
                                  className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-secondary-6000 data-[focus]:text-white"
                                >
                                  <div className="flex items-center">
                                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                      {day}
                                    </span>
                                  </div>
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
                            <Listbox.Button className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 flex justify-between">
                              <span className="col-start-1 row-start-1 flex items-center gap-3 ">
                                <span className="block truncate">
                                  {passenger.dob.split("-")[0] || "Year"}
                                </span>
                              </span>
                              <ChevronUpDownIcon
                                aria-hidden="true"
                                className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                              />
                            </Listbox.Button>

                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                              {year.map((day) => (
                                <Listbox.Option
                                  key={day}
                                  value={day}
                                  className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-secondary-6000 data-[focus]:text-white"
                                >
                                  <div className="flex items-center">
                                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                      {day}
                                    </span>
                                  </div>
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </div>
                        </Listbox>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {passengerData.passportRequired && (
                      <>
                        <div>
                          <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Passport Number
                          </label>
                          <input
                            type="text"
                            placeholder="Passport Number"
                            value={passenger.passportNumber}
                            onChange={(e) =>
                              handleChange(
                                type,
                                index,
                                "passportNumber",
                                e.target.value
                              )
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          />
                        </div>

                        <div>
                          <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Passport Expiry
                          </label>
                          <div className="grid grid-cols-3">
                            <Listbox
                              value={
                                passenger.passportExpiry.split("-")[2] || ""
                              }
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
                                <Listbox.Button className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 flex justify-between">
                                  <span className="col-start-1 row-start-1 flex items-center gap-3 ">
                                    <span className="block truncate">
                                      {passenger.passportExpiry.split("-")[2] ||
                                        "Day"}
                                    </span>
                                  </span>
                                  <ChevronUpDownIcon
                                    aria-hidden="true"
                                    className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                  />
                                </Listbox.Button>

                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                  {/* <Listbox.Option className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-secondary-6000 data-[focus]:text-white">
                                    <div className="flex items-center">
                                      <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                        Date
                                      </span>
                                    </div>
                                  </Listbox.Option> */}
                                  {days.map((day) => (
                                    <Listbox.Option
                                      key={day}
                                      value={day}
                                      className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-secondary-6000 data-[focus]:text-white"
                                    >
                                      <div className="flex items-center">
                                        <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                          {day}
                                        </span>
                                      </div>
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </div>
                            </Listbox>
                            <select
                              value={
                                passenger.passportExpiry.split("-")[1] || ""
                              }
                              onChange={(e) =>
                                handleDateChange(
                                  type,
                                  index,
                                  "passportExpiry",
                                  e.target.value,
                                  "month"
                                )
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            >
                              {/* <option value="">Month</option> */}
                              {Array.from({ length: 12 }, (_, i) => (
                                <option
                                  key={i}
                                  value={String(i + 1).padStart(2, "0")}
                                >
                                  {i + 1}
                                </option>
                              ))}
                            </select>
                            <select
                              value={
                                passenger.passportExpiry.split("-")[0] || ""
                              }
                              onChange={(e) =>
                                handleDateChange(
                                  type,
                                  index,
                                  "passportExpiry",
                                  e.target.value,
                                  "year"
                                )
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            >
                              {/* <option value="">Year</option> */}
                              {Array.from({ length: 10 }, (_, i) => (
                                <option key={i} value={String(2025 + i)}>
                                  {2025 + i}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Passport Issuing Country
                          </label>
                          <input
                            type="text"
                            placeholder="Passport Issuing Country"
                            value={passenger.passportIssuingCountry}
                            onChange={(e) =>
                              handleChange(
                                type,
                                index,
                                "passportIssuingCountry",
                                e.target.value
                              )
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          />
                        </div>
                      </>
                    )}
                  </div>
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
      <div className="rounded-2xl  border-1 border-gray-200 mt-4">
        <p
          className={` ${
            isAccordionVisible ? "rounded-ss-2xl rounded-se-2xl" : "rounded-2xl"
          }  text-gray-700 p-2 bg-gradient-to-r from-red-200 via-red-100  to-red-50  text-lg font-bold cursor-pointer flex justify-between items-center transition-all duration-200 ease-in-out`}
          onClick={() => setIsAccordionVisible((prev) => !prev)}
        >
          Passenger Details
          <span className="text-xl">{isAccordionVisible ? "-" : "+"}</span>
        </p>
        <div
          className={`transition-all duration-300 ease-in-out  ${
            isAccordionVisible ? "max-h-full" : "max-h-0"
          }`}
        >
          {renderAccordion("adults", passengerData.adults)}
          {renderAccordion("children", passengerData.children)}
          {renderAccordion("infants", passengerData.infants)}
        </div>
      </div>
      <div className="mt-4 border rounded-xl p-3">
        <p className="text-base font-medium mb-3">
          Your Booking details will be sent to
        </p>
        <input
          type="email"
          placeholder="Enter Email"
          value={passengerData.email}
          onChange={(e) =>
            setPassengerData((prev) => ({ ...prev, email: e.target.value }))
          }
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 p-2.5"
        />
      </div>

      <button
        onClick={validateForm}
        className="bg-primary-6000 text-white my-4 px-4 py-2 rounded"
      >
        Continue Booking
      </button>
    </div>
  );
};

export default PassengerComponent;
