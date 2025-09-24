import React, { useEffect, useState } from "react";
import { Search, Eye, Calendar } from "lucide-react";
import axios from "axios";
import { apiURL } from "../../constant/Constant";
import SearchResultLoader from "../../components/SearchResultLoader";
import { useSelector } from "react-redux";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import dayjs from "dayjs";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const AdminFlightLead = () => {
  const reducerState = useSelector((state) => state);
  const token = reducerState?.auth?.user?.token;
  const [passengerData, setPassengerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [selectedPassenger, setSelectedPassenger] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const itemsPerPage = 20;

  const fetchPassengerData = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${apiURL.baseURL}/api/passenger-details`,
        { headers }
      );
      console.log(response.data.data, "passenger data");
      setPassengerData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching passenger data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPassengerData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

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

  const filteredPassengers = passengerData?.filter((passenger) => {
    // Search term filter
    const matchesSearch =
      passenger?.bookingReference
        ?.toLowerCase()
        .includes(searchTerm?.toLowerCase()) ||
      passenger?.contactInfo?.email
        ?.toLowerCase()
        .includes(searchTerm?.toLowerCase()) ||
      passenger?.passengers?.some(
        (p) =>
          p.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      dayjs(passenger.createdAt)
        .format("DD/MM/YYYY")
        ?.toLowerCase()
        .includes(searchTerm?.toLowerCase());

    // Date range filter
    const passengerDate = dayjs(passenger.createdAt);
    const matchesDateRange =
      (!dateRange.startDate ||
        passengerDate.isAfter(dayjs(dateRange.startDate).subtract(1, "day"))) &&
      (!dateRange.endDate ||
        passengerDate.isBefore(dayjs(dateRange.endDate).add(1, "day")));

    return matchesSearch && matchesDateRange;
  });

  const totalPages = Math.ceil(filteredPassengers?.length / itemsPerPage);

  const paginatedPassengers = filteredPassengers?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  console.log(paginatedPassengers, "paginatedPassengers");
  console.log(
    paginatedPassengers?.[0]?.flights.Onward?.[0]?.departure.location,
    "paginatedPassengers?.[0]?.flights?.Onward"
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const viewPassengerDetails = (passenger) => {
    setSelectedPassenger(passenger);
    setIsOpen(true);
  };

  if (loading) {
    return <SearchResultLoader text={"Fetching Passenger Data"} />;
  }

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-300 mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 w-full">
        <h2 className="flex-1 text-xl font-semibold text-gray-900 whitespace-nowrap">
          Passenger Details
        </h2>
      </div>

      {/* Search and Date Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 flex flex-col sm:flex-row gap-2 items-end w-full">
          <div className="flex-1 relative items-end w-full">
            <input
              type="text"
              placeholder="Search by Booking Ref, Email, or Name"
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
                className="w-full text-gray-700 text-sm bg-gray-50 border-1 placeholder-gray-700 border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
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
                className="w-full text-gray-700 text-sm bg-gray-50 border-1 placeholder-gray-700 border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
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

      {/* Passenger Data Table */}
      <div className="relative overflow-x-auto sm:rounded-lg">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sr No.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Passengers
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Flight
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created At
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedPassengers?.[0]?.flights?.Onward &&
                paginatedPassengers.length > 0 ? (
                  paginatedPassengers.map((passenger, index) => (
                    <tr key={passenger._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {index + 1 + (currentPage - 1) * itemsPerPage}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {passenger.passengers.length} passenger(s)
                        </div>
                        <div className="text-sm text-gray-500">
                          {passenger.passengers[0].firstName}{" "}
                          {passenger.passengers[0].lastName}
                          {passenger.passengers.length > 1
                            ? ` +${passenger.passengers.length - 1}`
                            : ""}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {passenger.flights.Onward?.length > 0 && (
                          <>
                            <div className="text-sm text-gray-900">
                              {passenger.flights.Onward?.[0]?.carrier}{" "}
                              {passenger.flights.Onward?.[0]?.flightNumber}
                            </div>
                            <div className="text-sm text-gray-500">
                              {
                                passenger.flights.Onward?.[0]?.departure
                                  .location
                              }{" "}
                              →{" "}
                              {
                                passenger.flights.Onward?.[
                                  passenger.flights.Onward.length - 1
                                ]?.arrival.location
                              }
                            </div>
                          </>
                        )}
                        {passenger.flights.Return?.length > 0 && (
                          <>
                            <div className="text-sm text-gray-900">
                              {passenger.flights.Return?.[0]?.carrier}{" "}
                              {passenger.flights.Return?.[0]?.flightNumber}
                            </div>
                            <div className="text-sm text-gray-500">
                              {
                                passenger.flights.Return?.[0]?.departure
                                  .location
                              }{" "}
                              →{" "}
                              {
                                passenger.flights.Return?.[
                                  passenger.flights.Return.length - 1
                                ]?.arrival.location
                              }
                            </div>
                          </>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {passenger.contactInfo.email}
                        <div className="text-sm text-gray-500">
                          {passenger.contactInfo.phoneNumber}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {dayjs(passenger.createdAt).format("DD/MM/YYYY HH:mm")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => viewPassengerDetails(passenger)}
                          className="text-blue-600 hover:text-blue-900 flex items-center gap-1"
                        >
                          <Eye size={16} /> View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-6 py-4 text-center text-sm text-gray-500"
                    >
                      No passenger data found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {filteredPassengers.length > 0 && (
          <nav className="flex items-center justify-between pt-4">
            <span className="text-sm font-normal text-gray-500">
              Showing {currentPage * itemsPerPage - itemsPerPage + 1}-
              {Math.min(currentPage * itemsPerPage, filteredPassengers.length)}{" "}
              of {filteredPassengers.length}
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

      {/* Passenger Details Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg p-6">
            {selectedPassenger ? (
              <div>
                <DialogTitle className="text-xl font-bold text-gray-900 mb-4">
                  Passenger Details - {selectedPassenger.bookingReference}
                </DialogTitle>

                {/* Flight Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Flight Information
                    </h3>
                    {selectedPassenger.flights.Onward.map((f, idx) => (
                      <div key={idx} className="mb-4 p-3 border rounded-lg">
                        <p>
                          <span className="font-medium">Flight:</span>{" "}
                          {f.carrier} {f.flightNumber}
                        </p>
                        <p>
                          <span className="font-medium">Route:</span>{" "}
                          {f.departure.location} → {f.arrival.location}
                        </p>
                        <p>
                          <span className="font-medium">Departure:</span>{" "}
                          {dayjs(f.departure.date).format("DD/MM/YYYY")} at{" "}
                          {f.departure.time}
                        </p>
                        <p>
                          <span className="font-medium">Arrival:</span>{" "}
                          {dayjs(f.arrival.date).format("DD/MM/YYYY")} at{" "}
                          {f.arrival.time}
                        </p>
                      </div>
                    ))}
                    {selectedPassenger.flights.Return.map((f, idx) => (
                      <div
                        key={idx}
                        className="mb-4 p-3 border rounded-lg bg-gray-50"
                      >
                        <p>
                          <span className="font-medium">Flight:</span>{" "}
                          {f.carrier} {f.flightNumber}
                        </p>
                        <p>
                          <span className="font-medium">Route:</span>{" "}
                          {f.departure.location} → {f.arrival.location}
                        </p>
                        <p>
                          <span className="font-medium">Departure:</span>{" "}
                          {dayjs(f.departure.date).format("DD/MM/YYYY")} at{" "}
                          {f.departure.time}
                        </p>
                        <p>
                          <span className="font-medium">Arrival:</span>{" "}
                          {dayjs(f.arrival.date).format("DD/MM/YYYY")} at{" "}
                          {f.arrival.time}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Contact Information
                    </h3>
                    <div className="space-y-2">
                      <p>
                        <span className="font-medium">Email:</span>{" "}
                        {selectedPassenger.contactInfo.email}
                      </p>
                      <p>
                        <span className="font-medium">Phone:</span>{" "}
                        {selectedPassenger.contactInfo.phoneNumber}
                      </p>
                      <p>
                        <span className="font-medium">Created:</span>{" "}
                        {dayjs(selectedPassenger.createdAt).format(
                          "DD/MM/YYYY HH:mm"
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Passenger List */}
                <h3 className="font-semibold text-lg mb-2">Passenger List</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          DOB
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Gender
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Passport
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {selectedPassenger.passengers.map((passenger, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {passenger.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {passenger.title} {passenger.firstName}{" "}
                            {passenger.lastName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {dayjs(passenger.dob).format("DD/MM/YYYY")}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {passenger.gender}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {passenger.passportNumber} (
                            {passenger.passportIssuingCountry.countryCode})
                            <br />
                            Exp:{" "}
                            {dayjs(passenger.passportExpiry).format(
                              "DD/MM/YYYY"
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 bg-secondary-6000 text-white rounded hover:bg-secondary-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center p-4">
                <HiOutlineExclamationCircle className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  No passenger data available
                </h3>
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 bg-secondary-6000 text-white rounded hover:bg-secondary-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default AdminFlightLead;
