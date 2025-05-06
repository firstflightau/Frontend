import React, { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Search, Trash2 } from "lucide-react";
import axios from "axios";
import { apiURL } from "../../constant/Constant";
import dayjs from "dayjs";
import SearchResultLoader from "../../components/SearchResultLoader";
import { useSelector } from "react-redux";

const AdminTestimonials = () => {
  const reducerState = useSelector((state) => state);
  const token = reducerState?.auth?.user?.token;
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Dialog state
  const [isOpen, setIsOpen] = useState(false);
  const [currentAction, setCurrentAction] = useState(null); // "approve" | "reject" | "delete"
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const fetchTestimonials = async () => {
    try {
      // const res = await axios.get(`${apiURL.baseURL}/api/testimonial/adminAll`);
      const res = await axios.get(
        `https://ffbackend-sn85.onrender.com/api/testimonial/adminAll`
      );
      setTestimonials(res.data.testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const openDialog = (action, testimonial) => {
    setCurrentAction(action);
    setSelectedTestimonial(testimonial);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setCurrentAction(null);
    setSelectedTestimonial(null);
  };

  const handleConfirmAction = async () => {
    try {
      const { _id } = selectedTestimonial;

      if (currentAction === "delete") {
        // await axios.delete(`${apiURL.baseURL}/api/testimonial/${_id}`, {
        await axios.delete(
          `https://ffbackend-sn85.onrender.com/api/testimonial/${_id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } else {
        await axios.put(
          `https://ffbackend-sn85.onrender.com/api/testimonial/${_id}/status`,
          // `${apiURL.baseURL}/api/testimonial/${_id}/status`,
          { status: currentAction },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      fetchTestimonials();
      closeDialog();
    } catch (error) {
      console.error("Action failed:", error);
      closeDialog();
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredTestimonials = testimonials.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm) ||
      item.message.toLowerCase().includes(searchTerm) ||
      dayjs(item.createdAt).format("DD/MM/YYYY").includes(searchTerm)
  );

  if (loading) {
    return <SearchResultLoader text="Fetching All Testimonials" />;
  }

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-300 mb-8">
      {/* Header + Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 w-full">
        <h2 className="uppercase flex-1 text-xl font-semibold text-gray-900">
          Testimonials
        </h2>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search by name, email, or date"
            className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 text-gray-600" size={18} />
        </div>
      </div>

      {/* Table */}
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="uppercase text-xs text-gray-700 bg-gray-50">
            <tr>
              <th className="px-2 py-3">#</th>
              <th className="px-2 py-3">Name</th>
              <th className="px-2 py-3">Email</th>
              <th className="px-2 py-3">Message</th>
              <th className="px-2 py-3">Status</th>
              <th className="px-2 py-3">Date</th>
              <th className="px-2 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTestimonials.map((testimonial, index) => (
              <tr
                key={testimonial._id}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-2 py-4 font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-2 py-4">{testimonial.name}</td>
                <td className="px-2 py-4">{testimonial.email}</td>
                <td className="px-2 py-4 max-w-xs truncate">
                  {testimonial.message}
                </td>
                <td className="px-2 py-4 capitalize">{testimonial.status}</td>
                <td className="px-2 py-4">
                  {dayjs(testimonial.createdAt).format("DD/MM/YYYY")}
                </td>
                <td className="px-2 py-4 flex flex-col gap-2 space-x-2">
                  <button
                    className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded"
                    onClick={() => openDialog("approved", testimonial)}
                    disabled={testimonial.status === "approved"}
                  >
                    Approve
                  </button>
                  <button
                    className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded"
                    onClick={() => openDialog("rejected", testimonial)}
                    disabled={testimonial.status === "rejected"}
                  >
                    Reject
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => openDialog("delete", testimonial)}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Dialog */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeDialog}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-gray-900"
                  >
                    Confirm{" "}
                    {currentAction === "delete"
                      ? "deletion"
                      : `${currentAction}`}
                    ?
                  </Dialog.Title>
                  <div className="mt-2 text-sm text-gray-600">
                    Are you sure you want to{" "}
                    <span className="font-semibold">{currentAction}</span> this
                    testimonial from{" "}
                    <span className="font-semibold">
                      {selectedTestimonial?.name}
                    </span>
                    ?
                  </div>

                  <div className="mt-4 flex justify-end gap-2">
                    <button
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded"
                      onClick={closeDialog}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                      onClick={handleConfirmAction}
                    >
                      Confirm
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AdminTestimonials;
