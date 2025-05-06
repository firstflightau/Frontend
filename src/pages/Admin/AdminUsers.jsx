import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import { apiURL } from "../../constant/Constant";
import SearchResultLoader from "../../components/SearchResultLoader";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

// ...imports remain unchanged
const AdminUsers = () => {
  const reducerState = useSelector((state) => state);
  const token = reducerState?.auth?.user?.token;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 50;

  const fetchUsers = async (page = 1) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${apiURL.baseURL}/api/admin/alluser/list?page=${page}&limit=${itemsPerPage}`,
        { headers }
      );
      setUsers(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentPage(1); // reset pagination when searching
  };

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    const pnr = user?.pnr?.toLowerCase() || "";
    const userId = user?.userId?.toLowerCase() || "";
    const email = user?.email?.toLowerCase() || "";
    const date = dayjs(user.createdAt).format("DD/MM/YYYY");

    return (
      fullName.includes(searchTerm) ||
      email.includes(searchTerm) ||
      pnr.includes(searchTerm) ||
      userId.includes(searchTerm) ||
      date.includes(searchTerm)
    );
  });

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (loading) {
    return <SearchResultLoader text={"Fetching All Users"} />;
  }

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-300 mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 w-full">
        <h2 className="uppercase flex-1 text-xl font-semibold text-gray-900 whitespace-nowrap">
          Total Users
        </h2>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search by name, email, PNR, user ID or date"
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
              <th className="p-4">Sr No.</th>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Bookings</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user._id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {index + 1 + (currentPage - 1) * itemsPerPage}
                </td>
                <td className="px-6 py-4">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-6 py-4">{user.email}</td>
                <td
                  className={`px-6 py-4 font-semibold ${
                    user.isAdmin ? "text-secondary-6000" : "text-gray-800"
                  }`}
                >
                  {user.isAdmin ? "Admin" : "User"}
                </td>
                <td className="px-6 py-4">
                  {user?.bookinghistory?.length || 0}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <nav className="flex items-center justify-between pt-4">
          <span className="text-sm font-normal text-gray-500">
            Showing {filteredUsers.length === 0 ? 0 : 1}-{filteredUsers.length}{" "}
            of {filteredUsers.length}
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
                className="px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminUsers;
