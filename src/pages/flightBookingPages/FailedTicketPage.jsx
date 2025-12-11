import React, { useRef, useState, useEffect } from "react";
// import QRCode from "qrcode.react";
import { useDispatch, useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import { ChevronLeft, OctagonAlert, Printer } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import dayjs from "dayjs";
import { findAirportByCode } from "../../redux/slices/feature2/utils";
import axios from "axios";
import { apiURL } from "../../constant/Constant";
const FailedTicketPage = () => {
  const reducerState = useSelector((state) => state);
  const dispatch = useDispatch();
  const warning =
    reducerState?.pnr?.data?.data?.ReservationResponse?.Result?.Warning;
  const jwtToken = reducerState?.auth?.user?.token;
  const params = useParams();

  // console.log(reducerState, jwtToken, "reducerState");
  const navigate = useNavigate();
  const componentRef = useRef();
  const traveller =
    reducerState?.pnr?.data?.data?.ReservationResponse?.Reservation?.Traveler;
  const OnwardFlight = reducerState?.selectedFlight?.Onward;
  const ReturnFlight = reducerState?.selectedFlight?.Return;
  const pnr =
    reducerState?.pnr?.data?.data?.ReservationResponse?.Reservation
      ?.Receipt?.[0]?.Confirmation?.Locator?.value;
  const status =
    reducerState?.pnr?.data?.data?.ReservationResponse?.Reservation
      ?.Receipt?.[0]?.Confirmation?.OfferStatus?.StatusAir?.[0]?.value;
  // console.log(params);

  // save pnr to database

  const savePNR = async () => {
    if (!sessionStorage?.getItem("saved")) {
      return;
    }
    sessionStorage.setItem("saved", true);
    const payload = {
      pnr: pnr,
    };
    try {
      const response = await axios.post(
        `${apiURL.baseURL}/api/booking/create`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (!sessionStorage?.getItem("saved")) {
      savePNR();
    }
  }, [pnr]);

  const successPayment = async () => {
    try {
      const response = await axios.get(
        `${apiURL.baseURL}/api/transaction/failed/${params?.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      savePNR();

      // console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    successPayment();
  }, []);

  useEffect(() => {
    // Push a dummy state to prevent user from going back normally
    // console.log(window.history, "window history");
    window.history.pushState(null, "", window.location.href);
    // console.log("clicked");
    const handleBackButton = () => {
      navigate("/");
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  const TicketCard = ({ type, data }) => {
    console.log(data, type, "data");
    const departureTime = data?.[0]?.Departure?.time;
    function subtractTimes(time1, time2) {
      // Convert times to date objects for accurate calculation
      const [hours1, minutes1, seconds1] = time1.split(":").map(Number);
      const [hours2, minutes2, seconds2] = time2.split(":").map(Number);

      // Convert times to total seconds
      const totalSeconds1 = hours1 * 3600 + minutes1 * 60 + (seconds1 || 0);
      const totalSeconds2 = hours2 * 3600 + minutes2 * 60 + (seconds2 || 0);

      // Find the difference in seconds
      let diffInSeconds = totalSeconds1 - totalSeconds2;

      // Convert back to hours, minutes, and seconds
      const hours = Math.floor(diffInSeconds / 3600);
      diffInSeconds %= 3600;
      const minutes = Math.floor(diffInSeconds / 60);
      const seconds = diffInSeconds % 60;

      // Format the output as HH:MM:SS
      return `${String(hours).padStart(2, "0")}hr:${String(minutes).padStart(
        2,
        "0"
      )}min:${String(seconds).padStart(2, "0")}sec`;
    }

    const [hours, minutes, seconds] = departureTime?.split(":").map(Number);
    const departureDate = new Date();
    departureDate?.setHours(hours, minutes, seconds);
    departureDate?.setHours(departureDate.getHours() - 2);
    const boardingTime = departureDate?.toTimeString()?.slice(0, 5);
    // console.log(`Boarding Time: ${boardingTime}`);
    return (
      <>
        {/* Main Content */}
        <div className="flex flex-wrap w-full items-start">
          {/* Flight Details */}
          <div className="w-full sm:w-3/4 p-6">
            {warning && warning.length > 0 && (
              <div className="flex gap-2 items-center">
                <OctagonAlert color="red" />
                <p className="text-red-600 font-bold text-xs">
                  {warning[0]?.Message}
                </p>
              </div>
            )}

            <h2 className="text-xl capitalize font-semibold text-indigo-800 mb-2 md:mb-4">
              {ReturnFlight && `${type} Flight`}
            </h2>

            {data?.map((item, index, arr) => {
              let layover;
              const isLast = index === data?.length - 1;
              if (index < arr.length - 1) {
                console.log(
                  data?.[index + 1]?.Departure?.time,
                  data?.[index]?.Arrival?.time,
                  "timedifference"
                );
                layover = subtractTimes(
                  data?.[index + 1]?.Departure?.time,
                  data?.[index]?.Arrival?.time
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
                          {item?.carrier} | {item?.number}
                          {item?.operatingCarrierName && (
                            <span className="text-sm">
                              &nbsp; (
                              {`Operated By ${item?.operatingCarrierName}`}{" "}
                              {item?.operatingCarrier &&
                                ` | ${item?.operatingCarrier} ${item?.operatingCarrierNumber}`}
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
                          - {dayjs(item?.Departure?.date).format("DD MMM, YY")}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between gap-1 md:gap-2">
                    <div>
                      <p className="text-xl font-semibold">
                        {item?.Departure?.time.slice(0, 5)}
                      </p>
                      <p className="text-base font-semibold">
                        {item?.Departure?.location}
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
                            {item?.duration.slice(2).split("H").join("H:")}
                          </span>
                          <span className="text-center text-sm">Duration</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xl font-semibold  text-right">
                        {" "}
                        {item?.Arrival?.time.slice(0, 5)}
                      </p>
                      <p className="text-base font-semibold text-right">
                        {item?.Arrival?.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between gap-2">
                    <div>
                      <p className="text-md font-semibold">
                        {findAirportByCode(item?.Departure?.location).name}
                      </p>
                      <p className="text-sm text-zinc-700 opacity-75">
                        {findAirportByCode(item?.Departure?.location)
                          .code.toLowerCase()
                          .includes("airport")
                          ? findAirportByCode(item?.Departure?.location).code
                          : `${
                              findAirportByCode(item?.Departure?.location).code
                            } Airport`}
                      </p>
                      <p className="text-sm font-semibold  text-indigo-500">
                        Terminal {item?.Departure?.terminal}
                      </p>
                    </div>

                    <div>
                      <p className="text-md font-semibold text-right">
                        {findAirportByCode(item?.Arrival?.location).name}
                      </p>
                      <p className="text-sm text-zinc-700 text-right opacity-75">
                        {findAirportByCode(item?.Arrival?.location)
                          ?.code?.toLowerCase()
                          .includes("airport")
                          ? findAirportByCode(item?.Arrival?.location)?.code
                          : `${
                              findAirportByCode(item?.Arrival?.location)?.code
                            } Airport`}
                      </p>

                      <p className="text-sm font-semibold  text-indigo-500 text-right">
                        Terminal {item?.Arrival?.terminal}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start md:items-center w-full flex-col md:flex-row gap-2"></div>
                  {!isLast && (
                    <div class="relative w-full flex justify-center items-center">
                      <p class="text-center bg-green-100  z-10 rounded-full px-3 py-1 text-gray-600 inline-block font-medium text-sm shadow-inner border border-green-200">
                        {`Layover of ${layover} in ahemdabad`}
                      </p>
                      <div className="w-full absolute border-double border-t-[1px] border-gray-300"></div>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mt-2 md:mt-6">
              {traveller?.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 py-2.5 md:py-4"
                >
                  <p className="text-gray-700  text-base/7">
                    <strong>Passenger Name:</strong>{" "}
                    {item?.PersonName?.Given + " " + item?.PersonName?.Surname}
                  </p>
                  <p className="text-gray-700  text-base/7">
                    <strong>DOB:</strong>
                    &nbsp;{dayjs(item?.birthDate).format("DD MMM, YYYY")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full sm:w-1/4 bg-indigo-50 p-2.5 md:p-6 ">
            <div className="text-center">
              <p className="text-secondary-6000 text-lg font-semibold">
                Boarding Pass
              </p>
              <div className="mt-2 md:mt-6">
                <p className="text-sm text-secondary-6000">Status</p>
                <p className={`text-lg font-bold ${"text-red-500"} `}>Failed</p>
                {/* <p
                  className={`text-lg font-bold ${
                    status === "Confirmed"
                      ? "text-green-500"
                      : "text-primary-6000"
                  } `}
                >
                  {status}
                </p> */}
              </div>
              <div className="mt-2 md:mt-6">
                <p className="text-sm text-secondary-6000">PNR:</p>
                {/* <p className="text-lg font-bold text-secondary-6000">{pnr}</p> */}
                <p className="text-lg font-bold text-secondary-6000">Failed</p>
              </div>
              <div className="mt-2 md:mt-6">
                <p className="text-sm text-secondary-6000">Boarding Time</p>
                <p className="text-lg font-bold text-secondary-6000">
                  {boardingTime}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-indigo-100  w-full p-2.5 px-6 md:p-4 border-t border-indigo-200 flex flex-col sm:flex-row items-center sm:justify-between">
          {/* <div className="text-gray-700 w-full flex flex-row items-center justify-between">
            <p className=" text-base/7 ">
              <strong>Boarding Time</strong>
              {boardingTime}
            </p>
            <p className=" text-base/7 ">
              <strong>Gate:</strong>{" "}
              Terminal 4
            </p>
          </div> */}
        </div>
      </>
    );
  };

  return (
    <>
      {/* {loader && <FlightPaymentLoader />} */}
      <div className="bg-gray-100 p-2  md:p-6 min-h-screen ">
        <div className="max-w-4xl  pt-3 mx-auto w-full flex justify-between items-center text-center rounded-b-lg">
          <p
            onClick={() => navigate("/")}
            className="flex flec-row items-center  cursor-pointer text-base font-semibold text-gray-700"
          >
            <ChevronLeft size={18} className="text-gray-700 text-base" /> Back
            to Home
          </p>
          {/* <p
            onClick={handlePrint}
            className="flex flec-row items-center gap-2  cursor-pointer text-base font-semibold text-gray-700"
          >
            <Printer size={18} className="text-gray-700 text-base" /> Download
            PDF
          </p> */}
        </div>
        <div
          ref={componentRef}
          className="max-w-4xl w-full mx-auto mt-4 bg-gray-100 p-2  md:p-6 min-h-screen "
        >
          <div className=" bg-white shadow-lg rounded-lg border border-gray-200">
            {/* Header Section */}
            <div className="flex items-center justify-center p-6 border-b border-gray-200 rounded-t-md bg-yellow-200 text-white">
              <div className="flex items-center space-x-4">
                <img src={logo} alt="Company Logo" className="h-12 w-full " />
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-white w-full">
              <TicketCard type="onward" data={OnwardFlight?.flights} />
              {ReturnFlight && (
                <TicketCard type="Return" data={ReturnFlight?.flights} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FailedTicketPage;
