import React from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { findAirportByCode } from "../../../redux/slices/feature2/utils";
import { calculateFlightDuration } from "../../../utils/utils";

const SingleBooking = ({ traveler = [], flightData = {}, wholeData }) => {
  const reducerState = useSelector((state) => state);

  const status = wholeData?.status || "Unknown";
  const bookingDate = wholeData?.createdAt
    ? dayjs(wholeData.createdAt).format("DD MMM, YYYY")
    : "N/A";
  const pnr = wholeData?.pnr || "N/A";

  // ========================
  // Flight Segment Renderer
  // ========================
  const Flights = ({ type, segments = [] }) => {
    return (
      <div className="relative flex flex-wrap w-full items-start border rounded-xl p-3">
        <div className="w-full pt-3">
          <p className="text-sm absolute top-0 left-0 md:text-[13px] bg-gradient-to-r from-primary-6000 to-primary-300 text-white rounded-ss-2xl rounded-ee-2xl py-1 px-3">
            {type}
          </p>

          {segments?.map((item, index, arr) => {
            const isLast = index === arr.length - 1;
            let layover = false;
            if (arr.length > index + 1) {
              layover = calculateFlightDuration(
                item?.arrival,
                arr?.[index + 1]?.departure
              );
            }

            return (
              <div
                key={index}
                className="w-full flex flex-col gap-2 mb-2 rounded-2xl p-2 md:p-4 bg-white shadow-sm"
              >
                <div className="flex justify-between w-full">
                  <div className="flex gap-2">
                    <img
                      src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/${item?.carrier}.png`}
                      alt={item?.carrier}
                      width="32"
                      height="32"
                      className="object-contain rounded-md"
                    />
                    <div className="flex flex-col justify-between">
                      <p className="text-sm md:text-lg font-semibold">
                        {item?.carrier} | {item?.number}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex w-full justify-between gap-2">
                  {/* Departure */}
                  <div>
                    <p className="text-lg font-semibold">
                      {dayjs(
                        `${item?.departure?.date}T${item?.departure?.time}`
                      ).format("DD MMM, HH:mm")}
                    </p>
                    <p className="text-sm text-gray-600">
                      {dayjs(item?.departure?.date).format("dddd")}
                    </p>
                    <p className="text-base font-semibold">
                      {item?.departure?.location}
                    </p>
                    <p className="text-sm text-zinc-700 opacity-75">
                      {findAirportByCode(item?.departure?.location)?.name}
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="relative w-full flex flex-col items-center justify-center">
                    <div className="absolute -z-10 flex items-center w-1/2 top-1/2">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <div className="w-full border-gray-400 border-t-2 border-dashed"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    </div>
                    <div className="bg-white px-2">
                      <span className="text-lg font-semibold">
                        {item?.duration?.slice(2).replace("H", "H ")}
                      </span>
                      <span className="text-sm block text-center">
                        Duration
                      </span>
                    </div>
                  </div>

                  {/* Arrival */}
                  <div className="text-right">
                    <p className="text-lg font-semibold">
                      {dayjs(
                        `${item?.arrival?.date}T${item?.arrival?.time}`
                      ).format("DD MMM, HH:mm")}
                    </p>
                    <p className="text-sm text-gray-600">
                      {dayjs(item?.arrival?.date).format("dddd")}
                    </p>
                    <p className="text-base font-semibold">
                      {item?.arrival?.location}
                    </p>
                    <p className="text-sm text-zinc-700 opacity-75">
                      {findAirportByCode(item?.arrival?.location)?.name}
                    </p>
                  </div>
                </div>

                {/* Layover */}
                {!isLast && (
                  <div className="relative w-full flex justify-center items-center">
                    <p className="text-center bg-green-100 z-10 rounded-full px-3 py-1 text-gray-600 inline-block font-medium text-sm shadow-inner border border-green-200">
                      {`Layover of ${layover} in ${
                        findAirportByCode(item?.arrival?.location)?.name
                      }`}
                    </p>
                    <div className="w-full absolute border-double border-t border-gray-300"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    // 🔹 Modal scrollable container
    <div className="w-full max-h-[90vh] overflow-y-auto mt-4 pb-4 px-1">
      {/* Booking Info */}
      <h4 className="font-semibold text-base my-3">Booking Status</h4>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr className="text-center">
            <th className="p-2">Status</th>
            <th className="p-2">Booking Date</th>
            <th className="p-2">PNR</th>
            <th className="p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b text-center">
            <td
              className={`px-2 py-2 font-medium ${
                status === "confirmed" ? "text-green-600" : "text-primary-6000"
              }`}
            >
              {status}
            </td>
            <td className="px-2 py-2">{bookingDate}</td>
            <td className="px-2 py-2">{pnr}</td>
            <td className="px-2 py-2">$A {wholeData.totalAmount}</td>
          </tr>
        </tbody>
      </table>

      {/* Passenger Info */}
      <h4 className="font-semibold text-base my-3">Contact Details</h4>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b hover:bg-gray-50">
            <td className="px-2 py-2">{wholeData.email}</td>
            <td className="px-2 py-2">{wholeData.phoneNumber}</td>
          </tr>
        </tbody>
      </table>
      <h4 className="font-semibold text-base my-3">Passenger Details</h4>
      <table className="w-full text-sm text-left text-gray-500 mb-6">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="p-2">Sr No.</th>
            <th className="p-2">Name</th>
            <th className="p-2">DOB</th>
            <th className="p-2">Passport No.</th>
            <th className="p-2">Gender</th>
          </tr>
        </thead>
        <tbody>
          {traveler.map((item, index) => (
            <tr key={index} className="bg-white border-b hover:bg-gray-50">
              <td className="px-2 py-2">{index + 1}</td>
              <td className="px-2 py-2 capitalize">
                {item.title} {item.firstName} {item.lastName}
              </td>
              <td className="px-2 py-2">
                {dayjs(item.dob).format("DD MMM, YYYY")}
              </td>
              <td className="px-2 py-2">{item.passportNumber}</td>
              <td className="px-2 py-2">{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Flight Segments */}
      {flightData?.onward && (
        <Flights type="Onward" segments={flightData.onward.airlineDetails} />
      )}

      {flightData?.return && (
        <>
          <div className="flex items-center relative my-2">
            <div className="border-t-2 border-gray-400 w-full border-dashed"></div>
          </div>
          <Flights type="Return" segments={flightData.return.airlineDetails} />
        </>
      )}
    </div>
  );
};

export default SingleBooking;
