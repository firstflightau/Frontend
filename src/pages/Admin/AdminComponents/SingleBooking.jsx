import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";
import { findAirportByCode } from "../../../redux/slices/feature2/utils";
import { calculateFlightDuration } from "../../../utils/utils";

const SingleBooking = ({ traveler, flightData, wholeData }) => {
  const reducerState = useSelector((state) => state);
  const status =
    wholeData?.Receipt?.[0]?.Confirmation?.OfferStatus?.StatusAir?.[0]?.value;
  const BookingDate =
    wholeData?.Receipt?.[0]?.Confirmation?.Locator?.creationDate;
  const pnr = wholeData?.Receipt?.[0]?.Confirmation?.Locator?.value;
  //   console.log(wholeData, "flight wholeData");

  const Flights = ({ type, flightData }) => {
    // console.log(flightData, "fight data");
    const departureTime = flightData?.[0]?.Flight?.Departure?.time;
    const [hours, minutes, seconds] = departureTime?.split(":")?.map(Number);
    const departureDate = new Date();
    departureDate?.setHours(hours, minutes, seconds);
    departureDate?.setHours(departureDate.getHours() - 2);

    return (
      <div>
        {/* Main Content */}
        <div className="relative flex flex-wrap w-full items-start border-1 rounded-xl p-3">
          {/* Flight Details */}
          <div className="w-full pt-3">
            <p className="text-sm absolute top-0 left-0  md:text-[13px] bg-gradient-to-r from-primary-6000 to-primary-300  text-white rounded-ss-2xl rounded-ee-2xl py-1 px-3">
              {type}
            </p>

            {flightData?.map((item, index, arr) => {
              const isLast = index === flightData?.length - 1;

              //   console.log(flightData, "item");

              let layover = false;
              if (flightData?.length > index + 1) {
                layover = calculateFlightDuration(
                  item?.Flight?.Arrival,
                  flightData?.[index + 1]?.Flight?.Departure
                );
              }
              return (
                <div className="w-full flex flex-col gap-2  mb-2 rounded-2xl p-2 md:p-4">
                  <div className="flex justify-between w-full ">
                    <div className="flex gap-2">
                      <img
                        src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/EY.png`}
                        // src=""
                        alt="QF"
                        width="32px"
                        height="32px"
                        className="object-contain rounded-md"
                      />
                      <div className="flex flex-col justify-between ">
                        <p className="text-sm md:text-lg font-semibold">
                          {item?.Flight?.carrier} | {item?.Flight?.number}
                          {item?.Flight?.operatingCarrierName && (
                            <span className="text-sm">
                              &nbsp; (
                              {`Operated By ${item?.Flight?.operatingCarrierName}`}{" "}
                              {item?.Flight?.operatingCarrier &&
                                item?.Flight?.operatingCarrierNumber &&
                                ` | ${item?.Flight?.operatingCarrier} ${item?.Flight?.operatingCarrierNumber}`}
                              )
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full justify-between items-center gap-2">
                    <div className="px-2 rounded-sm bg-indigo-100 ">
                      <p className="text-xs md:text-sm ">
                        Start on{" "}
                        <span className=" font-semibold">
                          -{" "}
                          {dayjs(item?.Flight?.Departure?.date).format(
                            "DD MMM, YY"
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between gap-1 md:gap-2">
                    <div>
                      <p className="text-xl font-semibold">
                        {item?.Flight?.Departure?.time.slice(0, 5)}
                      </p>
                      <p className="text-base font-semibold">
                        {item?.Flight?.Departure?.location}
                      </p>
                    </div>
                    <div className=" relative w-full flex my-1 items-center  flex-col">
                      <div className="absolute -z-10 flex flex-row items-center w-1/2 top-1/2">
                        <div className="  w-2 -top-1/2  h-2 rounded-full bg-gray-400"></div>
                        <div className=" w-full  border-gray-400  border-t-2 border-dashed"></div>
                        <div className="  w-2 -top-1/2  h-2 rounded-full bg-gray-400"></div>
                      </div>
                      <div className=" bg-white   flex justify-center  px-2">
                        <div className="flex flex-col bg-white px-1">
                          <span className="text-center text-lg font-semibold ">
                            {item?.Flight?.duration
                              .slice(2)
                              .split("H")
                              .join("H:")}
                          </span>
                          <span className="text-center text-sm">Duration</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xl font-semibold  text-right">
                        {" "}
                        {item?.Flight?.Arrival?.time.slice(0, 5)}
                      </p>
                      <p className="text-base font-semibold text-right">
                        {item?.Flight?.Arrival?.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between gap-2">
                    <div>
                      <p className="text-md font-semibold">
                        {
                          findAirportByCode(item?.Flight?.Departure?.location)
                            .name
                        }
                      </p>
                      <p className="text-sm text-zinc-700 opacity-75">
                        {findAirportByCode(item?.Flight?.Departure?.location)
                          .code.toLowerCase()
                          .includes("airport")
                          ? findAirportByCode(item?.Flight?.Departure?.location)
                              .code
                          : `${
                              findAirportByCode(
                                item?.Flight?.Departure?.location
                              ).code
                            } Airport`}
                      </p>
                      {/* <p className="text-sm font-semibold  text-indigo-500">
                        Terminal {item?.Flight?.Departure?.terminal}
                      </p> */}
                    </div>

                    <div>
                      <p className="text-md font-semibold text-right">
                        {
                          findAirportByCode(item?.Flight?.Arrival?.location)
                            .name
                        }
                      </p>
                      <p className="text-sm text-zinc-700 text-right opacity-75">
                        {findAirportByCode(item?.Flight?.Arrival?.location)
                          ?.code?.toLowerCase()
                          .includes("airport")
                          ? findAirportByCode(item?.Flight?.Arrival?.location)
                              ?.code
                          : `${
                              findAirportByCode(item?.Flight?.Arrival?.location)
                                ?.code
                            } Airport`}
                      </p>

                      {/* <p className="text-sm font-semibold  text-indigo-500 text-right">
                        Terminal {item?.Flight?.Arrival?.terminal}
                      </p> */}
                    </div>
                  </div>
                  <div className="flex justify-between items-start md:items-center w-full flex-col md:flex-row gap-2"></div>
                  {!isLast && (
                    <div class="relative w-full flex justify-center items-center">
                      <p class="text-center bg-green-100  z-10 rounded-full px-3 py-1 text-gray-600 inline-block font-medium text-sm shadow-inner border border-green-200">
                        {`Layover of ${layover} in ${
                          findAirportByCode(item?.Flight?.Arrival?.location)
                            ?.name
                        } `}
                      </p>
                      <div className="w-full absolute border-double border-t-[1px] border-gray-300"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-wrap w-full items-start">
        <div className="w-full sm:w-full pr-6 pb-6">
          <div className="">
            <Flights
              type={"Onwards"}
              flightData={flightData?.[0]?.FlightSegment}
            />

            {flightData?.[1] && (
              <div className="flex items-center relative my-2">
                <div className=" rounded-r-full bg-white border-r border-gray-300 absolute -left-[1px] w-3 h-6"></div>

                <div className="border-t-2 border-gray-400 w-full border-dashed"></div>
                <div className=" rounded-l-full bg-white border-l border-gray-300 absolute -right-[1px] w-3 h-6"></div>
              </div>
            )}

            {flightData?.[1] && (
              <Flights
                type={"Return"}
                flightData={flightData?.[1]?.FlightSegment}
              />
            )}
            <h4 className="font-semibold text-base my-3">Booking Status</h4>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr className="text-center">
                  <th scope="col" className="p-2">
                    Status of Booking
                  </th>
                  <th scope="col" className="p-2">
                    Booking Date
                  </th>
                  <th scope="col" className="px-2 py-2">
                    PNR Number
                  </th>
                </tr>
              </thead>
              <tbody>
                {traveler?.map((item, index) => {
                  const passportDetails = item?.TravelDocument?.filter(
                    (item) => item?.docType === "Passport"
                  );

                  //   console.log(passportDetails);
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b   hover:bg-gray-50 text-center "
                    >
                      <td
                        className={`px-2 py-2 font-medium text-gray-900 whitespace-nowrap ${
                          status === "Confirmed"
                            ? "text-green-500"
                            : "text-primary-6000"
                        } `}
                      >
                        {status}
                      </td>
                      <td className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                        {BookingDate}
                      </td>
                      <td className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                        {pnr}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h4 className="font-semibold text-base my-3">Passenger Details</h4>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="p-2">
                    Sr No.
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Name
                  </th>

                  <th scope="col" className="px-2 py-2">
                    DOB
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Passport No.
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Passport Expiry
                  </th>
                </tr>
              </thead>
              <tbody>
                {traveler?.map((item, index) => {
                  const passportDetails = item?.TravelDocument?.filter(
                    (item) => item?.docType === "Passport"
                  );

                  //   console.log(passportDetails);
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b   hover:bg-gray-50 "
                    >
                      <td className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                        {index + 1}
                      </td>
                      <td className="px-2 py-2">
                        {item?.PersonName?.Given +
                          " " +
                          item?.PersonName?.Surname}
                      </td>
                      <td className="px-2 py-2">
                        {dayjs(item?.birthDate).format("DD MMM, YYYY")}
                      </td>
                      <td className="px-2 py-2">
                        {passportDetails?.[0]?.docNumber}
                      </td>
                      <td className="px-2 py-2">
                        {dayjs(passportDetails?.[0]?.expireDate).format(
                          "DD MMM, YYYY"
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBooking;
