import React, { useEffect, useState } from "react";
import { Search, Eye, Edit } from "lucide-react";
import axios from "axios";
import { apiURL } from "../../constant/Constant";
import SearchResultLoader from "../../components/SearchResultLoader";
import { useSelector } from "react-redux";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import dayjs from "dayjs";
import SingleBooking from "./AdminComponents/SingleBooking";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const AdminBookings = () => {
  const reducerState = useSelector((state) => state);
  const token = reducerState?.auth?.user?.token;
  const [bookings, setBookings] = useState([]);
  const tpToken = reducerState?.tpToken?.tpTokenData?.access_token;
  // console.log(tpToken, "tpToken");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 20;
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const fetchBookings = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${apiURL.baseURL}/api/admin/alluser/booking`,
        { headers }
      );
      setBookings(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // console.log(bookings, "bookings");

  const filteredBookings = bookings?.filter(
    (booking) =>
      booking?.pnr?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      booking?.userId?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      dayjs(booking.createdAt)
        .format("DD/MM/YYYY")
        ?.toLowerCase()
        .includes(searchTerm?.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBookings?.length / itemsPerPage);

  const paginatedBookings = filteredBookings?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // for single booking details

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

  if (loading) {
    return <SearchResultLoader text={"Fetching All Bookings"} />;
  }

  // console.log(selectedBooking, "selectedBooking");

  return (
    <div className="uppercase bg-white  rounded-xl p-6 border border-gray-300 mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 w-full">
        <h2 className="flex-1 text-xl font-semibold text-gray-900 whitespace-nowrap">
          Flight Bookings
        </h2>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search by Pnr, User Id or Date"
            className="w-full text-gray-700 truncate text-sm  bg-gray-50 border-1  placeholder-gray-700 border-gray-300  rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search
            className="absolute left-3 top-2.5 text-gray-600 "
            size={18}
          />
        </div>
      </div>

      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="p-4">
                Sr No.
              </th>
              <th scope="col" className="px-6 py-3">
                PNR
              </th>
              <th scope="col" className="px-6 py-3">
                User ID
              </th>
              <th scope="col" className="px-6 py-3">
                Booked At
              </th>

              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedBookings.map((booking, index) => (
              <tr
                key={booking._id}
                className="bg-white border-b   hover:bg-gray-50 "
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {index + 1 + (currentPage - 1) * itemsPerPage}
                </td>
                <td className="px-6 py-4">{booking.pnr || "N/A"}</td>
                <td className="px-6 py-4">{booking.userId}</td>

                <td className="px-6 py-4">
                  {dayjs(booking.createdAt).format("DD/MM/YYYY")}
                </td>

                <td
                  className={`px-6 py-4 font-semibold ${
                    booking.pnr ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {booking.pnr ? "Booked" : "Failed"}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => getSingleBooking(booking?.pnr)}
                    disabled={loadingDetails}
                    className="text-blue-600 flex gap-2 items-center  hover:underline"
                  >
                    <Eye size={18} />
                    {loadingDetails[booking?.pnr]
                      ? "Loading..."
                      : "View Details"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <nav
          className="flex items-center justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 ">
            Showing {currentPage * itemsPerPage - itemsPerPage + 1}-
            {Math.min(currentPage * itemsPerPage, filteredBookings.length)} of{" "}
            {filteredBookings.length}
          </span>
          <ul className="inline-flex -space-x-px text-sm h-8">
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 h-8 leading-tight uppercase  placeholder-gray-700   text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 h-8 leading-tight uppercase  placeholder-gray-700   text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                    currentPage === index + 1 ? "text-blue-600 bg-blue-50" : ""
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 h-8 leading-tight uppercase  placeholder-gray-700 text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-30 shadow-xl flex items-center justify-center"
      >
        {selectedBooking ? (
          <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
            <div className="flex min-h-full w-screen items-center justify-center p-4 bg-black/50">
              <div className="bg-white p-6 rounded-lg shadow-xl w-full sm:w-2/3">
                <SingleBooking
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
        ) : (
          <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 bg-black/50">
              <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <DialogTitle
                  as="h3"
                  className="text-base/7 flex flex-row items-center justify-start gap-2 font-medium text-black"
                >
                  Error Occured <HiOutlineExclamationCircle />
                </DialogTitle>
                <p className="mt-2 text-base/6 text-black/50">
                  No Data Found !
                </p>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-2 text-white bg-secondary-6000 hover:bg-secondary-500 border-1 border-secondary-6000 rounded-lg focus:ring-2 focus:ring-blue-300 transition-colors duration-200"
                  >
                    Okay
                  </button>
                </div>
              </DialogPanel>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default AdminBookings;
