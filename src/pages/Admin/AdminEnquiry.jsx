import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import { apiURL } from "../../constant/Constant";
import SearchResultLoader from "../../components/SearchResultLoader";
import dayjs from "dayjs";

const AdminEnquiry = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchEnquiries = async () => {
    try {
      const response = await axios.get(`${apiURL.baseURL}/api/contact`);
      setEnquiries(response.data.enquiry);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredEnquiries = enquiries.filter(
    (item) =>
      `${item.firstName} ${item.lastName}`.toLowerCase().includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm) ||
      item.phone.includes(searchTerm) ||
      dayjs(item.createdAt).format("DD/MM/YYYY").includes(searchTerm)
  );

  if (loading) {
    return <SearchResultLoader text="Fetching All Enquiries" />;
  }

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-300 mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 w-full">
        <h2 className="uppercase flex-1 text-xl font-semibold text-gray-900">
          Enquiries
        </h2>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search by name, email, phone or date"
            className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 text-gray-600" size={18} />
        </div>
      </div>

      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="uppercase text-xs text-gray-700 bg-gray-50">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Message</th>
              <th className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredEnquiries.map((enquiry, index) => (
              <tr
                key={enquiry._id}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-4 py-4 font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4">
                  {enquiry.firstName} {enquiry.lastName}
                </td>
                <td className="px-6 py-4">{enquiry.email}</td>
                <td className="px-6 py-4">{enquiry.phone}</td>
                <td className="px-6 py-4 max-w-xs truncate">
                  {enquiry.message}
                </td>
                <td className="px-6 py-4">
                  {dayjs(enquiry.createdAt).format("DD/MM/YYYY")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminEnquiry;
