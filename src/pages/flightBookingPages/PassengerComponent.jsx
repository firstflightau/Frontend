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
// import { CheckIcon } from "@heroicons/react/20/solid";
import { Minus, Plus } from "lucide-react";

const PassengerComponent = forwardRef((props, ref) => {
  const reducerState = useSelector((state) => state);
  const countryList = reducerState?.airportList?.countryList;

  const noOfPassenger = reducerState?.searchFlighPY;

  const [passengerData, setPassengerData] = useState({
    adults: Array(noOfPassenger?.Adult).fill({
      title: "",
      firstName: "",
      lastName: "",
      gender: "",
      // dob: getDefaultDOBAdult(),
      type: "ADT",
      dob: "",
      passportNumber: "",
      // passportExpiry: getDefaultPassportExpiry(),
      passportExpiry: "",
      passportIssuingCountry: "",
    }),
    childs: Array(noOfPassenger?.Child).fill({
      title: "",
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      type: "CHD",
      passportNumber: "",
      passportExpiry: "",
      passportIssuingCountry: "",
    }),
    infants: Array(noOfPassenger?.Infant).fill({
      title: "",
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      type: "INF",
      passportNumber: "",
      passportExpiry: "",
      passportIssuingCountry: "",
    }),
    passportRequired: true,
    email: "",
  });

  // console.log(passengerData, "passengerData");

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

  // useImperativeHandle(ref, () => ({
  //   validateForm: async () => {
  //     let firstError = null;

  //     if (!passengerData.email || !/\S+@\S+\.\S+/.test(passengerData.email)) {
  //       firstError = { type: "email", index: 0 };
  //     }

  //     // Validate adults
  //     const adultErrorIndex = passengerData.adults.findIndex(
  //       (adult) =>
  //         !adult.firstName ||
  //         !adult.lastName ||
  //         !adult.gender ||
  //         !adult.dob ||
  //         adult.dob.split("-").length < 3 ||
  //         adult.dob.split("-")[0] === "" ||
  //         adult.dob.split("-")[1] === "" ||
  //         adult.dob.split("-")[2] === "" ||
  //         (passengerData.passportRequired &&
  //           (!adult.passportNumber ||
  //             !adult.passportExpiry ||
  //             !adult.passportIssuingCountry ||
  //             adult.passportExpiry.split("-").length < 3 ||
  //             adult.passportExpiry.split("-")[0] === "" ||
  //             adult.passportExpiry.split("-")[1] === "" ||
  //             adult.passportExpiry.split("-")[2] === ""))
  //     );
  //     if (adultErrorIndex !== -1) {
  //       firstError = { type: "adults", index: adultErrorIndex };
  //     }

  //     // Validate children
  //     if (!firstError) {
  //       const childErrorIndex = passengerData.childs.findIndex(
  //         (child) =>
  //           !child.firstName ||
  //           !child.lastName ||
  //           !child.gender ||
  //           !child.dob ||
  //           child.dob.split("-").length < 3 ||
  //           child.dob.split("-")[0] === "" ||
  //           child.dob.split("-")[1] === "" ||
  //           child.dob.split("-")[2] === "" ||
  //           (passengerData.passportRequired &&
  //             (!child.passportNumber ||
  //               !child.passportExpiry ||
  //               !child.passportIssuingCountry ||
  //               child.passportExpiry.split("-").length < 3 ||
  //               child.passportExpiry.split("-")[0] === "" ||
  //               child.passportExpiry.split("-")[1] === "" ||
  //               child.passportExpiry.split("-")[2] === ""))
  //       );
  //       if (childErrorIndex !== -1) {
  //         firstError = { type: "childs", index: childErrorIndex };
  //       }
  //     }

  //     // Validate infants
  //     if (!firstError) {
  //       const infantErrorIndex = passengerData.infants.findIndex(
  //         (infant) =>
  //           !infant.firstName ||
  //           !infant.lastName ||
  //           !infant.gender ||
  //           !infant.dob ||
  //           infant.dob.split("-").length < 3 ||
  //           infant.dob.split("-")[0] === "" ||
  //           infant.dob.split("-")[1] === "" ||
  //           infant.dob.split("-")[2] === "" ||
  //           (passengerData.passportRequired &&
  //             (!infant.passportNumber ||
  //               !infant.passportExpiry ||
  //               !infant.passportIssuingCountry ||
  //               infant.passportExpiry.split("-").length < 3 ||
  //               infant.passportExpiry.split("-")[0] === "" ||
  //               infant.passportExpiry.split("-")[1] === "" ||
  //               infant.passportExpiry.split("-")[2] === ""))
  //       );
  //       if (infantErrorIndex !== -1) {
  //         firstError = { type: "infants", index: infantErrorIndex };
  //       }
  //     }

  //     if (firstError) {
  //       setErrorIndex(firstError);

  //       // Scroll to the error accordion
  //       if (errorRef.current) {
  //         await errorRef.current.scrollIntoView({ behavior: "smooth" });
  //       }
  //     } else {
  //       console.log("Passenger Data:", passengerData);
  //       setErrorIndex(null);
  //     }
  //   },
  // }));

  const validateForm = async () => {
    let firstError = null;

    if (!passengerData.email || !/\S+@\S+\.\S+/.test(passengerData.email)) {
      firstError = { type: "email", index: 0 };
    }

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

    return true;
  };

  // Helper function to validate dates
  const isValidDate = (dateString) => {
    if (!dateString) return false;
    const parts = dateString.split("-");
    if (parts.length !== 3) return false;
    const [year, month, day] = parts;
    const date = new Date(`${year}-${month}-${day}`);
    return !isNaN(date.getTime());
  };

  // Expose validation function to parent
  useImperativeHandle(ref, () => ({
    validateForm,
    getPassengerData: () => passengerData,
  }));

  // Add email error section

  // console.log(errorIndex, "error index");

  const currentYear = new Date().getFullYear();
  const minYearForAdult = currentYear - 18;
  const minYearForChild = currentYear - 2;
  const minYearForPassport = currentYear + 10;
  //   const minYearForInfant = currentYear - 18;

  const days = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const Month = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const yearAdult = Array.from({ length: 90 }, (_, i) =>
    String(minYearForAdult - i).padStart(2, "0")
  );
  const yearChild = Array.from({ length: 12 }, (_, i) =>
    String(minYearForChild - i).padStart(2, "0")
  );
  const yearInfant = Array.from({ length: 3 }, (_, i) =>
    String(currentYear - i).padStart(2, "0")
  );
  const yearPassport = Array.from({ length: 10 }, (_, i) =>
    String(currentYear + i).padStart(2, "0")
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
            {/* Error message for the first invalid passenger */}
            {errorIndex?.type === type && errorIndex?.index === index && (
              <div
                className="bg-red-400 text-white text-center py-1 mb-4 animate-shake" // Tailwind class
                // OR for custom CSS:
                // className="bg-red-400 text-white text-center py-1 mb-4 shake-animation"
              >
                Please fill in the details for {type.slice(0, -1)} {index + 1}.
              </div>
            )}
            <Accordion alwaysOpen={false} className="divide-none mb-3">
              <Accordion.Panel className="mb-2 ">
                <Accordion.Title className=" dark:bg-gray-200 focus:ring-0 flex items-center justify-between w-full px-2 py-0 font-medium rtl:text-right  border-gray-200 hover:bg-gray-100 gap-3 rounded-lg border-0">
                  <div>
                    <span className="text-sm font-semibold text-gray-800">
                      {passenger.firstName &&
                      passenger.lastName &&
                      passenger.gender
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
                              className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-secondary-6000 data-[focus]:text-white"
                            >
                              <div className="flex items-center">
                                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                  Mr
                                </span>
                              </div>
                            </Listbox.Option>
                            <Listbox.Option
                              value="Miss"
                              className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-secondary-6000 data-[focus]:text-white"
                            >
                              <div className="flex items-center">
                                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                  Miss
                                </span>
                              </div>
                            </Listbox.Option>
                            <Listbox.Option
                              value="Mrs"
                              className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-secondary-6000 data-[focus]:text-white"
                            >
                              <div className="flex items-center">
                                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                  Mrs
                                </span>
                              </div>
                            </Listbox.Option>
                          </Listbox.Options>
                        </div>
                      </Listbox>
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
                        id="fname"
                        value={passenger.firstName}
                        onChange={(e) =>
                          handleChange(type, index, "firstName", e.target.value)
                        }
                        className="bg-white rounded-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                        id="lname"
                        value={passenger.lastName}
                        onChange={(e) =>
                          handleChange(type, index, "lastName", e.target.value)
                        }
                        className="bg-white rounded-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
                            <Listbox.Button className="bg-white rounded-l-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  w-full  p-1.5 py-2.5 flex justify-between">
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
                                    <span className="block truncate font-normal group-data-[selected]:font-semibold">
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
                            <Listbox.Button className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  w-full  p-1.5 py-2.5 flex justify-between">
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
                                    <span className="block truncate font-normal group-data-[selected]:font-semibold">
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
                            <Listbox.Button className="bg-white rounded-r-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  w-full  p-1.5 py-2.5 flex flex-nowrap justify-between">
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
                              {type === "adults" &&
                                yearAdult.map((day) => (
                                  <Listbox.Option
                                    key={day}
                                    value={day}
                                    className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-secondary-6000 data-[focus]:text-white"
                                  >
                                    <div className="flex items-center">
                                      <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                        {day}
                                      </span>
                                    </div>
                                  </Listbox.Option>
                                ))}
                              {type === "childs" &&
                                yearChild.map((day) => (
                                  <Listbox.Option
                                    key={day}
                                    value={day}
                                    className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-secondary-6000 data-[focus]:text-white"
                                  >
                                    <div className="flex items-center">
                                      <span className=" block font-normal group-data-[selected]:font-semibold">
                                        {day}
                                      </span>
                                    </div>
                                  </Listbox.Option>
                                ))}
                              {type === "infants" &&
                                yearInfant.map((day) => (
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
                          className={`p-2 flex-1 px-4 rounded-l-md  border-b-4 ${
                            passenger.gender === 1
                              ? "border-secondary-500 bg-blue-100"
                              : "border-1 border-gray-200"
                          }`}
                          onClick={() => handleChange(type, index, "gender", 1)}
                        >
                          Male
                        </button>
                        <div className="border-r-2 h-full"></div>
                        <button
                          type="button"
                          className={`p-2 flex-1 px-4 rounded-r-md border-b-4 ${
                            passenger.gender === 2
                              ? "border-secondary-500 bg-blue-100"
                              : "border-1 border-gray-200"
                          }`}
                          onClick={() => handleChange(type, index, "gender", 2)}
                        >
                          Female
                        </button>
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
                            id="passportNumber"
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
                                <Listbox.Button className="bg-white rounded-l-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  w-full  p-1.5 py-2.5 flex justify-between">
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
                                  {days.map((day) => (
                                    <Listbox.Option
                                      key={day}
                                      value={day}
                                      className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-secondary-6000 data-[focus]:text-white"
                                    >
                                      <div className="flex items-center">
                                        <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                          {day}
                                        </span>
                                      </div>
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </div>
                            </Listbox>

                            <Listbox
                              value={
                                passenger.passportExpiry.split("-")[1] || ""
                              }
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
                                <Listbox.Button className="bg-white  border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  w-full p-1.5 py-2.5  flex justify-between">
                                  <span className="col-start-1 row-start-1 flex items-center gap-3 ">
                                    <span className="block truncate">
                                      {passenger.passportExpiry.split("-")[1] ||
                                        "Month"}
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
                                        <span className=" block truncate font-normal group-data-[selected]:font-semibold">
                                          {day}
                                        </span>
                                      </div>
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </div>
                            </Listbox>
                            <Listbox
                              value={
                                passenger.passportExpiry.split("-")[0] || ""
                              }
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
                                <Listbox.Button className="bg-white rounded-r-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  w-full  p-1.5 py-2.5  flex justify-between">
                                  <span className="col-start-1 row-start-1 flex items-center gap-3 ">
                                    <span className="block truncate">
                                      {passenger.passportExpiry.split("-")[0] ||
                                        "Year"}
                                    </span>
                                  </span>
                                  <ChevronUpDownIcon
                                    aria-hidden="true"
                                    className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                  />
                                </Listbox.Button>

                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                  {yearPassport.map((day) => (
                                    <Listbox.Option
                                      key={day}
                                      value={day}
                                      className="group w-full relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-secondary-6000 data-[focus]:text-white"
                                    >
                                      <div className="flex items-center">
                                        <span className=" block truncate font-normal group-data-[selected]:font-semibold">
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
                        <div>
                          <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 "
                          >
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
                              <Listbox.Button className="bg-white rounded-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  w-full min-w-24 p-2.5 flex justify-between">
                                <span className="col-start-1 row-start-1 flex items-center gap-3 ">
                                  <span className="block truncate">
                                    {passenger.passportIssuingCountry
                                      .countryName || "Select Country"}
                                  </span>
                                </span>
                                <ChevronUpDownIcon
                                  aria-hidden="true"
                                  className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                              </Listbox.Button>

                              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                {countryList.map((item) => (
                                  <Listbox.Option
                                    key={item.countryCode}
                                    value={item}
                                    className="group relative cursor-default select-none py-2 pl-3 pr-2 text-gray-900 data-[focus]:bg-secondary-6000 data-[focus]:text-white"
                                  >
                                    <div className="flex items-center">
                                      <span className=" block truncate font-normal group-data-[selected]:font-semibold">
                                        {item?.countryName}
                                      </span>
                                    </div>
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </div>
                          </Listbox>
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
          }  text-gray-700 p-2 px-4 bg-gradient-to-r from-blue-100 via-blue-100  to-blue-50  text-lg font-bold cursor-pointer flex justify-between items-center transition-all duration-200 ease-in-out `}
          onClick={() => setIsAccordionVisible((prev) => !prev)}
        >
          Passenger Details
          <span className="text-xl">
            {isAccordionVisible ? <Minus size={16} /> : <Plus size={16} />}
          </span>
        </p>
        <div
          className={`transition-all duration-300 ease-in-out  ${
            isAccordionVisible ? "max-h-full" : "max-h-0  overflow-hidden"
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
          className="bg-red-400 text-white text-center py-1 mb-4 animate-shake mt-3"
        >
          Please enter a valid email address
        </div>
      )}
      <div className="mt-4 border rounded-xl p-3">
        <p className="text-base font-medium mb-3">
          Your Booking details will be sent to
        </p>
        <input
          type="email"
          id="eemmaaiill"
          placeholder="Enter Email"
          value={passengerData.email}
          onChange={(e) =>
            setPassengerData((prev) => ({ ...prev, email: e.target.value }))
          }
          className="bg-white rounded-md border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 p-2.5"
        />
      </div>
    </div>
  );
});

export default PassengerComponent;
