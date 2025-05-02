import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiURL } from "../../constant/Constant";
import SearchResultLoader from "../../components/SearchResultLoader";
import dayjs from "dayjs";

const AdminTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get(`${apiURL.baseURL}/api/testimonial`);
      setTestimonials(response.data.testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("runs");
    fetchTestimonials();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTestimonials = testimonials.filter((item) =>
    [item.name, item.email, item.message, item.date, item.createdAt]
      .filter(Boolean)
      .some((field) =>
        dayjs(field).isValid()
          ? dayjs(field)
              .format("DD/MM/YYYY")
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          : String(field).toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  if (loading) {
    return <SearchResultLoader text="Fetching All Testimonials" />;
  }

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-300 mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 w-full">
        <h2 className="uppercase flex-1 text-xl font-semibold text-gray-900">
          Total Testimonials
        </h2>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search by name, email, date, or message"
            className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 rounded-lg pl-4 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="uppercase text-xs text-gray-700 bg-gray-50">
            <tr>
              <th className="px-6 py-3">Sr No.</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Message</th>
              <th className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredTestimonials.map((t, index) => (
              <tr key={t._id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4">{t.name}</td>
                <td className="px-6 py-4">{t.email}</td>
                <td className="px-6 py-4">{t.message}</td>
                <td className="px-6 py-4">
                  {dayjs(t.date || t.createdAt).format("DD/MM/YYYY")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTestimonial;
