import React, { useEffect, useState } from "react";
import { Search, Eye, Calendar, X } from "lucide-react";
import axios from "axios";
import { apiURL } from "../../constant/Constant";
import SearchResultLoader from "../../components/SearchResultLoader";
import dayjs from "dayjs";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import SingleBooking from "./AdminComponents/SingleBooking";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const itemsPerPage = 20;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);

  // ✅ Fetch all bookings
  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiURL.baseURL}/api/booking/all`);
      setBookings(response.data.data || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // ✅ Fetch single booking by ID
  const getSingleBooking = async (id) => {
    try {
      setLoadingDetails(true);
      const res = await axios.get(
        `${apiURL.baseURL}/api/booking/singles/${id}`
      );
      setSelectedBooking(res.data.data);
      setIsOpen(true);
    } catch (err) {
      console.error("Error fetching booking details:", err);
    } finally {
      setLoadingDetails(false);
    }
  };

  // ✅ Search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // ✅ Date filter
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange((prev) => ({
      ...prev,
      [name]: value,
    }));
    setCurrentPage(1);
  };

  const clearDateFilter = () => {
    setDateRange({
      startDate: "",
      endDate: "",
    });
    setCurrentPage(1);
  };

  // ✅ Apply filters
  const filteredBookings = bookings?.filter((booking) => {
    const matchesSearch =
      booking?.pnr?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      booking?.userId?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      dayjs(booking.createdAt)
        .format("DD/MM/YYYY")
        ?.toLowerCase()
        .includes(searchTerm?.toLowerCase());

    const bookingDate = dayjs(booking.createdAt);
    const matchesDateRange =
      (!dateRange.startDate ||
        bookingDate.isAfter(dayjs(dateRange.startDate).subtract(1, "day"))) &&
      (!dateRange.endDate ||
        bookingDate.isBefore(dayjs(dateRange.endDate).add(1, "day")));

    return matchesSearch && matchesDateRange;
  });

  // ✅ Pagination
  const totalPages = Math.ceil(filteredBookings?.length / itemsPerPage);
  const paginatedBookings = filteredBookings?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // ✅ Loader
  if (loading) {
    return <SearchResultLoader text={"Fetching All Bookings"} />;
  }

  return (
    <div className="uppercase bg-white rounded-xl p-6 border border-gray-300 mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 w-full">
        <h2 className="flex-1 text-xl font-semibold text-gray-900 whitespace-nowrap">
          Flight Bookings
        </h2>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 flex flex-col sm:flex-row gap-2 items-end w-full">
          <div className="flex-1 relative items-end w-full">
            <input
              type="text"
              placeholder="Search by PNR, User ID, or Date"
              className="w-full text-gray-700 truncate text-sm bg-gray-50 border-1 placeholder-gray-700 border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-600"
              size={18}
            />
          </div>
          <div className="relative flex-1 w-full">
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              From Date
            </label>
            <div className="relative">
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={dateRange.startDate}
                onChange={handleDateChange}
                className="w-full text-gray-700 text-sm bg-gray-50 border-1 border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
              <Calendar
                className="absolute left-3 top-2.5 text-gray-600"
                size={18}
              />
            </div>
          </div>
          <div className="relative flex-1 w-full">
            <label
              htmlFor="endDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              To Date
            </label>
            <div className="relative">
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={dateRange.endDate}
                onChange={handleDateChange}
                className="w-full text-gray-700 text-sm bg-gray-50 border-1 border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
              <Calendar
                className="absolute left-3 top-2.5 text-gray-600"
                size={18}
              />
            </div>
          </div>
          {(dateRange.startDate || dateRange.endDate) && (
            <div className="flex items-end">
              <button
                onClick={clearDateFilter}
                className="h-[38px] px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm"
              >
                Clear Dates
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="p-4">Sr No.</th>
              <th className="px-6 py-3">PNR</th>
              <th className="px-6 py-3">User ID</th>
              <th className="px-6 py-3">Route</th>
              <th className="px-6 py-3">Amount ($)</th>
              <th className="px-6 py-3">Booked At</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Details</th>
            </tr>
          </thead>
          <tbody>
            {paginatedBookings.length > 0 ? (
              paginatedBookings.map((booking, index) => (
                <tr
                  key={booking._id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {index + 1 + (currentPage - 1) * itemsPerPage}
                  </td>
                  <td className="px-6 py-4">{booking.pnr || "N/A"}</td>
                  <td className="px-6 py-4">{booking.userId}</td>
                  <td className="px-6 py-4">
                    {booking?.onward?.origin} → {booking?.onward?.destination}
                  </td>
                  <td className="px-6 py-4">
                    {booking?.totalAmount
                      ? `$${booking.totalAmount.toFixed(2)}`
                      : "N/A"}
                  </td>
                  <td className="px-6 py-4">
                    {dayjs(booking.createdAt).format("DD/MM/YYYY")}
                  </td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      booking.status === "success"
                        ? "text-green-600"
                        : booking.status === "pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {booking.status || "unknown"}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => getSingleBooking(booking._id)}
                      disabled={loadingDetails}
                      className="text-blue-600 flex gap-2 items-center hover:underline"
                    >
                      <Eye size={18} />
                      {loadingDetails ? "Loading..." : "View Details"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="px-6 py-4 text-center text-gray-500">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        {filteredBookings.length > 0 && (
          <nav
            className="flex items-center justify-between pt-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500">
              Showing {currentPage * itemsPerPage - itemsPerPage + 1}-
              {Math.min(currentPage * itemsPerPage, filteredBookings.length)} of{" "}
              {filteredBookings.length}
            </span>
            <ul className="inline-flex -space-x-px text-sm h-8">
              <li>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Previous
                </button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                      currentPage === index + 1
                        ? "text-blue-600 bg-blue-50"
                        : ""
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
                  className="px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* ✅ HeadlessUI Dialog */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-30 py-10 shadow-xl flex items-center justify-center"
      >
        <div className="fixed top-0 inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
          <DialogPanel className="bg-white rounded-2xl max-w-5xl w-full p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <DialogTitle className="text-lg font-semibold text-gray-800">
                Booking Details
              </DialogTitle>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <X size={20} />
              </button>
            </div>

            {selectedBooking ? (
              <SingleBooking
                traveler={selectedBooking?.passengerDetails || []}
                flightData={{
                  onward: selectedBooking?.onward,
                  return: selectedBooking?.return,
                }}
                wholeData={selectedBooking}
              />
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
                      Error Occured
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
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default AdminBookings;
