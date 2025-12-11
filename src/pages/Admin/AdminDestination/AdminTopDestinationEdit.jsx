import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dialog } from "@headlessui/react";
import { MapPin, PlaneTakeoff, PlaneLanding } from "lucide-react";
import { apiURL } from "../../../constant/Constant";

const AdminTopDestinationEdit = () => {
  const [destinations, setDestinations] = useState([]);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Fetch destinations
  const fetchDestinations = async () => {
    try {
      const res = await axios.get(`${apiURL.baseURL}/api/topdestination`);
      setDestinations(res.data.routes || []);
    } catch (err) {
      console.error("Error fetching destinations", err);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  // Delete handler
  const handleDelete = async () => {
    try {
      await axios.delete(`${apiURL.baseURL}/api/topdestination/${selectedId}`);
      setConfirmOpen(false);
      setSelectedId(null);
      fetchDestinations();
    } catch (err) {
      console.error("Error deleting destination", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        Manage Top Destinations
      </h2>

      {/* Grid with 3 per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {destinations.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-md overflow-hidden border"
          >
            {/* Image */}
            {item.image && (
              <img
                src={item.image}
                alt="destination"
                className="w-full h-48 object-cover"
              />
            )}

            {/* From → To */}
            <div className="p-4">
              <div className="flex items-center mb-2 text-gray-700">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="font-medium">
                  {item?.from?.fromCity} → {item?.to?.toCity}
                </span>
              </div>

              {/* From Airport */}
              <div className="flex items-center mb-1 text-sm text-gray-600">
                <PlaneTakeoff className="w-4 h-4 mr-2" />
                {item?.from?.fromAirport}
              </div>

              {/* To Airport */}
              <div className="flex items-center text-sm text-gray-600">
                <PlaneLanding className="w-4 h-4 mr-2" />
                {item?.to?.toAirport}
              </div>
            </div>

            {/* Delete Button */}
            <div className="p-4 border-t">
              <button
                onClick={() => {
                  setSelectedId(item._id);
                  setConfirmOpen(true);
                }}
                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded bg-white p-6 shadow-lg">
            <Dialog.Title className="text-lg font-bold mb-4">
              Confirm Delete
            </Dialog.Title>
            <p className="mb-4">
              Are you sure you want to delete this top destination?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setConfirmOpen(false)}
                className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              >
                Yes, Delete
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default AdminTopDestinationEdit;
