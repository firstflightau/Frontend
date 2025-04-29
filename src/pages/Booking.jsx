import React, { useEffect, useState } from "react";
import { apiURL } from "../constant/Constant";
import axios from "axios";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { Dialog } from "@headlessui/react";
import SearchResultLoader from "../components/SearchResultLoader";
import HistoryPopup from "./HistoryPopup";
import { useNavigate } from "react-router-dom";
import { LogOut, PenLine } from "lucide-react";

const Booking = () => {
  const reducerState = useSelector((state) => state);
  const navigate = useNavigate();
  const jwtToken = reducerState?.auth?.user?.token;
  const tpToken = reducerState?.tpToken?.tpTokenData?.access_token;
  const [flightData, setFlightData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const getFlightBooking = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${apiURL.baseURL}/api/booking/history/user
    `,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      // console.log(response, "outside");
      if (response?.status === 200) {
        // console.log(response, "inside");
        setFlightData(response?.data?.data);
      } else {
        // console.log("response else")
        console.error("Request failed with status code:", response.status);
      }
      //   setLoading(false);
    } catch (error) {
      // console.log("response catch");
      console.error("An error occurred while fetching flight booking:", error);
      //   setLoading(false);
    } finally {
      setLoader(false);
    }
  };

  // console.log(flightData, "flight data");

  useEffect(() => {
    getFlightBooking();
  }, []);

  const getSingleBooking = async (pnr) => {
    setLoadingDetails((prev) => ({ ...prev, [pnr]: true }));
    try {
      const response = await axios({
        method: "GET",
        url: `${apiURL.baseURL}/api/flight/retrievepnr`,

        headers: {
          "Content-Type": "application/json",
          tptoken: tpToken,
          pnr: pnr,
        },
      });

      if (response?.status === 200) {
        setSelectedBooking(
          response?.data?.data?.ReservationResponse?.Reservation
        );
        setIsOpen(true);
      } else {
        console.error("Failed to fetch booking details");
      }
    } catch (error) {
      console.error("Error fetching booking details:", error);
    } finally {
      setLoadingDetails(false);
    }
  };

  if (loader) {
    return <SearchResultLoader text={"loading..."} />;
  }

  // console.log(selectedBooking, "setSelectedBooking");

  return (
    <div>
      <div className="container mt-10">
        {flightData?.length > 0 ? (
          flightData?.map((item, index) => (
            <div
              key={index}
              className="bg-white border-1 mb-3 border-gray-300 rounded-md p-3 shadow-sm"
            >
              <div className="flex flex-row justify-between items-center">
                <div>
                  <h3
                    className={`${
                      item?.pnr ? "text-gray-800" : "text-red-500"
                    } text-lg`}
                  >
                    {" "}
                    PNR : {item?.pnr || "Failed"}
                  </h3>
                  <p>
                    Booking Date:{" "}
                    {dayjs(item?.createdAt).format("DD MMM, YYYY")}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => getSingleBooking(item?.pnr)}
                    disabled={loadingDetails}
                    className="text-white rounded-md  bg-secondary-6000 flex items-center gap-2 hover:bg-secondary-500 px-6 py-2 text-sm font-semibold"
                  >
                    {loadingDetails[item?.pnr] ? "Loading..." : "View Details"}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center h-[60vh]  flex-col gap-2">
            <h1 className="text-3xl text-center font-semibold">
              No Booking Found
            </h1>
            <p
              onClick={() => {
                navigate("/");
              }}
              className="text-center text-xl underline cursor-pointer text-red-700 flex gap-2 items-center"
            >
              <LogOut size={16} className="rotate-180" />
              Book Flight to see the Bookings Here
            </p>
          </div>
        )}
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-30 shadow-xl flex items-center justify-center"
      >
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full w-screen items-center justify-center p-4 bg-black/50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full sm:w-2/3">
              <HistoryPopup
                traveler={selectedBooking?.Traveler}
                flightData={selectedBooking?.Offer?.[0]?.Product}
                wholeData={selectedBooking}
              />
              <div className="flex justify-end mt-6 space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-secondary-6000 text-white rounded"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Booking;
