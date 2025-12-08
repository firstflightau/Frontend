import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { apiURL } from "../../../constant/Constant";
import { Dialog, Transition } from "@headlessui/react";

const AdminTopDestination = () => {
  const reducerState = useSelector((state) => state?.auth?.user);
  const token = reducerState?.token;

  const [formData, setFormData] = useState({
    fromCity: "",
    fromCode: "",
    fromAirport: "",
    toCity: "",
    toCode: "",
    toAirport: "",
  });

  const [image, setImage] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setDialogMessage("Please upload an image before submitting.");
      setDialogOpen(true);
      return;
    }

    const payload = [
      {
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
      },
    ];

    const formDataToSend = new FormData();
    formDataToSend.append("image", image);
    formDataToSend.append("tripData", JSON.stringify(payload));

    try {
      await axios.post(`${apiURL.baseURL}/api/topdestination`, formDataToSend, {
        // await axios.post(
        //   `http://localhost:8000/api/topdestination`,
        //   formDataToSend,
        //   {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`, // in case your API requires token
        },
      });

      setDialogMessage("Top destination added successfully!");
      setDialogOpen(true);

      // reset form
      setFormData({
        fromCity: "",
        fromCode: "",
        fromAirport: "",
        toCity: "",
        toCode: "",
        toAirport: "",
      });
      setImage(null);
    } catch (error) {
      console.error("Error uploading top destination:", error);
      setDialogMessage("Failed to upload. Please try again.");
      setDialogOpen(true);
    }
  };

  return (
    <div className="h-full flex flex-col justify-center items-center bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-6 text-center text-gray-700">
          Add Top Destination
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* From Section */}
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
            placeholder="From Code (e.g. DEL)"
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

          {/* To Section */}
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
            placeholder="To Code (e.g. BOM)"
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

          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />

          {/* Preview Image */}
          {image && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="h-32 w-full object-cover rounded-lg"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-secondary-6000 text-white py-2 px-4 rounded-lg hover:bg-secondary-500 transition-all"
          >
            Add Destination
          </button>
        </form>

        {/* Notification Dialog */}
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

export default AdminTopDestination;
