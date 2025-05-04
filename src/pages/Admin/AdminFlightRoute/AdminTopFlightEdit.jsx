import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tab } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import { PlaneTakeoff } from "lucide-react";
import classNames from "classnames";
import { apiURL } from "../../../constant/Constant";

// const apiURL = "http://localhost:8000/api/toproute";

const AdminTopFlightEdit = () => {
  const [routes, setRoutes] = useState([]);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const fetchRoutes = async () => {
    try {
      const res = await axios.get(`${apiURL.baseURL}/api/toproute`);
      setRoutes(res.data.routes || []);
    } catch (err) {
      console.error("Error fetching routes", err);
    }
  };

  useEffect(() => {
    fetchRoutes();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`${apiURL.baseURL}/api/toproute/${selectedId}`);
      setConfirmOpen(false);
      setSelectedId(null);
      fetchRoutes();
    } catch (err) {
      console.error("Error deleting route", err);
    }
  };

  const groupedRoutes = {
    domestic: routes.filter((r) => r.tripData?.[0]?.type === "domestic"),
    international: routes.filter(
      (r) => r.tripData?.[0]?.type === "international"
    ),
  };

  return (
    <div className="p-4">
      <Tab.Group>
        <Tab.List className="flex space-x-4 mb-4">
          {["domestic", "international"].map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  "px-4 py-2 rounded-md",
                  selected
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
                )
              }
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {["domestic", "international"].map((key) => (
            <Tab.Panel key={key}>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {groupedRoutes[key].map((item, index) => (
                  <div key={item._id} className="relative cursor-pointer">
                    {/* Delete badge */}
                    <div
                      onClick={() => {
                        setSelectedId(item._id);
                        setConfirmOpen(true);
                      }}
                      className="absolute top-2 right-2 z-10 bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs hover:bg-red-700"
                    >
                      ×
                    </div>

                    <div className="flex items-center justify-between p-3 bg-yellow-200 border rounded-lg transition hover:bg-white">
                      {/* From */}
                      <div className="flex-1">
                        <h4 className="text-lg font-bold">
                          {item?.tripData?.[0]?.from?.fromCity}
                        </h4>
                        <p className="text-sm text-gray-600 truncate">
                          {item?.tripData?.[0]?.from?.fromAirport}
                        </p>
                      </div>

                      {/* Icon */}
                      <div className="relative px-2 flex justify-center">
                        <div className="absolute h-[80px] -top-5 border-dashed border-r-2 border-gray-800" />
                        <div className="relative z-0 flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full transition hover:bg-secondary-6000">
                          <PlaneTakeoff size={16} />
                        </div>
                      </div>

                      {/* To */}
                      <div className="flex-1">
                        <h4 className="text-lg font-bold">
                          {item?.tripData?.[0]?.to?.toCity}
                        </h4>
                        <p className="text-sm text-gray-600 truncate">
                          {item?.tripData?.[0]?.to?.toAirport}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>

      {/* Confirmation Dialog */}
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
            <p className="mb-4">Are you sure you want to delete this route?</p>
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

export default AdminTopFlightEdit;
