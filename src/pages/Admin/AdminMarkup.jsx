import React, { useEffect, useState, Fragment } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { apiURL } from "../../constant/Constant";
import { Dialog, Transition } from "@headlessui/react";
import SearchResultLoader from "../../components/SearchResultLoader";

const AdminMarkup = () => {
  const reducerState = useSelector((state) => state?.auth?.user);
  const token = reducerState?.token;
  const [loading, setLoading] = useState(true);

  const [markupData, setMarkupData] = useState({
    markup: { onward: "", return: "" },
    discount: { onward: "", return: "" },
    destinationMarkups: [],
    id: "",
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  // ✅ Fetch data from backend
  useEffect(() => {
    const fetchMarkupData = async () => {
      try {
        const response = await axios.get(
          `${apiURL.baseURL}/api/staticdata/markup/discount`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = response.data.data;

        setMarkupData({
          markup: data.markup || { onward: 0, return: 0 },
          discount: data.discount || { onward: 0, return: 0 },
          destinationMarkups: data.destinationMarkups || [],
          id: data._id,
        });

        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch markup data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkupData();
  }, [token]);

  // ✅ Update global markup/discount fields
  const handleChange = (section, field, value) => {
    setMarkupData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  // ✅ Update destination-specific markup
  const handleDestinationChange = (index, field, value) => {
    setMarkupData((prev) => {
      const newDestinations = [...prev.destinationMarkups];
      newDestinations[index][field] = value;
      return { ...prev, destinationMarkups: newDestinations };
    });
  };

  // ✅ Add new destination markup
  const addDestinationMarkup = () => {
    setMarkupData((prev) => ({
      ...prev,
      destinationMarkups: [
        ...prev.destinationMarkups,
        { code: "", onward: 0, return: 0 },
      ],
    }));
  };

  // ✅ Remove destination markup
  const removeDestinationMarkup = (index) => {
    setMarkupData((prev) => {
      const newDestinations = [...prev.destinationMarkups];
      newDestinations.splice(index, 1);
      return { ...prev, destinationMarkups: newDestinations };
    });
  };

  // ✅ Submit updates
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${apiURL.baseURL}/api/admin/update/markup/discount/${markupData.id}`,
        markupData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDialogMessage("Markup and Discount updated successfully!");
      setDialogOpen(true);
    } catch (error) {
      setDialogMessage("An error occurred while updating.");
      setDialogOpen(true);
      console.error("Failed to update markup and discount:", error);
    }
  };

  if (loading) {
    return <SearchResultLoader text="Loading Markup & Discount..." />;
  }

  return (
    <div className="h-full flex flex-col justify-center items-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h5 className="text-xl font-bold mb-4 text-gray-700">
          Manage Markup & Discount
        </h5>

        {/* ✅ Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Global Markup */}
          <div>
            <h3 className="font-semibold text-gray-600 mb-2">Global Markup</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="">Onward</label>
                <input
                  type="number"
                  placeholder="Onward %"
                  value={markupData.markup.onward}
                  onChange={(e) =>
                    handleChange("markup", "onward", e.target.value)
                  }
                  className="border p-2 rounded w-full"
                />
              </div>
              <div>
                <label htmlFor="">Return</label>
                <input
                  type="number"
                  placeholder="Return %"
                  value={markupData.markup.return}
                  onChange={(e) =>
                    handleChange("markup", "return", e.target.value)
                  }
                  className="border p-2 rounded w-full"
                />
              </div>
            </div>
          </div>

          {/* Global Discount */}
          {/* <div>
            <h5 className="font-semibold text-gray-600 mb-2">
              Global Discount
            </h5>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Onward %"
                value={markupData.discount.onward}
                onChange={(e) =>
                  handleChange("discount", "onward", e.target.value)
                }
                className="border p-2 rounded w-full"
              />
              <input
                type="number"
                placeholder="Return %"
                value={markupData.discount.return}
                onChange={(e) =>
                  handleChange("discount", "return", e.target.value)
                }
                className="border p-2 rounded w-full"
              />
            </div>
          </div> */}

          {/* Destination Markups */}
          <div>
            <h5 className="font-semibold text-gray-600 mb-2">
              Destination Specific Markups
            </h5>
            {markupData.destinationMarkups.map((dest, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-2 items-center mb-2"
              >
                <div>
                  <label htmlFor="">Destination Code</label>
                  <input
                    type="text"
                    placeholder="Code (e.g. DXB)"
                    value={dest.code}
                    onChange={(e) =>
                      handleDestinationChange(index, "code", e.target.value)
                    }
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="">Onward</label>
                  <input
                    type="number"
                    placeholder="Onward %"
                    value={dest.onward}
                    onChange={(e) =>
                      handleDestinationChange(index, "onward", e.target.value)
                    }
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="">Return</label>
                  <input
                    type="number"
                    placeholder="Return %"
                    value={dest.return}
                    onChange={(e) =>
                      handleDestinationChange(index, "return", e.target.value)
                    }
                    className="border p-2 rounded w-full"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeDestinationMarkup(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded mt-3"
                >
                  X
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addDestinationMarkup}
              className="bg-blue-500 text-white px-4 py-1 rounded"
            >
              + Add Destination
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-secondary-6000 text-white py-2 rounded hover:bg-green-700"
          >
            Save Changes
          </button>
        </form>
      </div>

      {/* ✅ Notification Dialog */}
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
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
                      className="bg-blue-500 text-white px-4 py-2 rounded"
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
  );
};

export default AdminMarkup;
