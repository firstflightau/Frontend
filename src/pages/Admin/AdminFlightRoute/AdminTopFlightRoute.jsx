import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { apiURL } from "../../../constant/Constant";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const AdminTopFlightRoute = () => {
  const reducerState = useSelector((state) => state?.auth?.user);
  const token = reducerState?.token;

  const [formData, setFormData] = useState({
    type: "domestic",
    fromCity: "",
    fromCode: "",
    fromAirport: "",
    toCity: "",
    toCode: "",
    toAirport: "",
    icon: "PlaneTakeoff",
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      type: formData.type,
      from: {
        fromCity: formData.fromCity,
        fromCode: formData.fromCode,
        fromAirport: formData.fromAirport,
      },
      to: {
        toCity: formData.toCity,
        toCode: formData.toCode,
        toAirport: formData.toAirport,
      },
      icon: formData.icon,
    };

    try {
      // await axios.post(`${apiURL.baseURL}/api/toproutes`, payload, {
      //   // headers: {
      //   //   Authorization: `Bearer ${token}`,
      //   // },
      // });

      await axios.post(`${apiURL.baseURL}/api/toproute`, {
        tripData: [payload],
      });
      setDialogMessage("Top route flight added successfully!");
      setDialogOpen(true);
      setFormData({
        type: "domestic",
        fromCity: "",
        fromCode: "",
        fromAirport: "",
        toCity: "",
        toCode: "",
        toAirport: "",
        icon: "PlaneTakeoff",
      });
    } catch (error) {
      console.error("Error uploading top route:", error);
      setDialogMessage("Failed to upload top route. Please try again.");
      setDialogOpen(true);
    }
  };

  return (
    <div className="h-full flex flex-col justify-center items-center bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-6 text-center text-gray-700">
          Add Top Route Flight
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            id="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="domestic">Domestic</option>
            <option value="international">International</option>
          </select>

          <input
            type="text"
            id="fromCity"
            value={formData.fromCity}
            onChange={handleChange}
            placeholder="From City"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />

          <input
            type="text"
            id="fromCode"
            value={formData.fromCode}
            onChange={handleChange}
            placeholder="From Code (e.g. SYD)"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />

          <input
            type="text"
            id="fromAirport"
            value={formData.fromAirport}
            onChange={handleChange}
            placeholder="From Airport"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />

          <input
            type="text"
            id="toCity"
            value={formData.toCity}
            onChange={handleChange}
            placeholder="To City"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />

          <input
            type="text"
            id="toCode"
            value={formData.toCode}
            onChange={handleChange}
            placeholder="To Code (e.g. MEL)"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />

          <input
            type="text"
            id="toAirport"
            value={formData.toAirport}
            onChange={handleChange}
            placeholder="To Airport"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />

          <input
            type="text"
            id="icon"
            value={formData.icon}
            onChange={handleChange}
            placeholder="Icon (e.g. PlaneTakeoff)"
            className="w-full p-2 border border-gray-300 rounded-lg hidden"
          />

          <button
            type="submit"
            className="w-full bg-secondary-6000 text-white py-2 px-4 rounded-lg hover:bg-secondary-500 transition-all"
          >
            Add Route
          </button>
        </form>

        <Transition appear show={dialogOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setDialogOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Notification
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{dialogMessage}</p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200"
                        onClick={() => setDialogOpen(false)}
                      >
                        Okay
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default AdminTopFlightRoute;
