import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { apiURL } from "../../constant/Constant";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import SearchResultLoader from "../../components/SearchResultLoader";

const AdminMarkup = () => {
  const reducerState = useSelector((state) => state?.auth?.user);
  const token = reducerState?.token;
  const [loading, setLoading] = useState(true);

  const [markupData, setMarkupData] = useState({
    oneway: "",
    return: "",
    markup: "",
    id: "", // Store the document ID
  });

  const [initialMarkup, setInitialMarkup] = useState({
    oneway: "",
    return: "",
    markup: "",
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  // Fetch initial markup and discount values
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
        // console.log(Response);

        // const { onward, return } = response.data.data.disocunt;
        const documentId = response.data.data._id;
        const markupValue = response.data.data.markup;
        setMarkupData({
          oneway: response.data.data.discount?.onward,
          return: response.data.data.discount?.return,
          markup: markupValue,
          id: documentId,
        });
        setInitialMarkup({
          oneway: response.data.data.discount?.onward,
          return: response.data.data.discount?.return,
          markup: markupValue,
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

  // console.log(markupData, "markupData");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setMarkupData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        markup: markupData.markup,
        discount: {
          onward: Number(markupData.oneway),
          return: Number(markupData.return),
        },
      };

      await axios.put(
        `${apiURL.baseURL}/api/admin/update/markup/discount/${markupData.id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDialogMessage("Markup updated successfully!");
      setDialogOpen(true);

      // Fetch updated data from the API to sync the initial values
      const response = await axios.get(
        `${apiURL.baseURL}/api/staticdata/markup/discount`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // const { onward, return: returnMarkup } = response.data.data.disocunt;
      const markupValue = response.data.data.markup;
      setInitialMarkup({
        oneway: response.data.data.discount?.onward,
        return: response.data.data.discount?.return,
        markup: markupValue,
      });
    } catch (error) {
      setDialogMessage("An error occurred while updating.");
      setDialogOpen(true);
      console.error("Failed to update markup and discount:", error);
    }
  };

  if (loading) {
    return <SearchResultLoader text="Loading MarkUp" />;
  }

  return (
    <div className="h-full  flex flex-col justify-center items-center bg-gray-100">
      <div className=" mb-6 text-gray-700 ">
        <p className="text-lg font-semibold">
          Markup Amount :
          <span className="text-blue-600"> {initialMarkup.markup}%</span>
        </p>
        {/* <p className="text-lg font-semibold">
          Current Onward Discount:{" "}
          <span className="text-blue-600">{initialMarkup.oneway}%</span>
        </p>
        <p className="text-lg font-semibold">
          Current Return Discount:{" "}
          <span className="text-blue-600">{initialMarkup.return}%</span>
        </p> */}
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        {/* Display Current Markup Values */}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-4">
            <label
              htmlFor="oneway"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Update Oneway Discount:
            </label>
            <input
              type="number"
              id="oneway"
              value={markupData.oneway}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Oneway Markup (e.g., 0.5 or 1)"
              step="0.1"
              min="0"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="return"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Update Return Discount:
            </label>
            <input
              type="number"
              id="return"
              value={markupData.return}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Return Markup (e.g., 0.5 or 1)"
              step="0.1"
              min="0"
            />
          </div> */}

          <div className="mb-4">
            <label
              htmlFor="return"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Update MarkUp:
            </label>
            <input
              type="number"
              id="markup"
              value={markupData.markup}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Return Markup (e.g., 0.5 or 1)"
              step="0.1"
              min="0"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-secondary-6000 text-white py-2 px-4 rounded-lg hover:bg-secondary-500 transition-all"
          >
            Save Markup
          </button>
        </form>

        {/* Dialog for success or error messages */}
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
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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

export default AdminMarkup;
