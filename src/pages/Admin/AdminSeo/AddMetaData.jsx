// AddMetaData.js
import React, { useState, useEffect, useCallback } from "react";
import Select from "react-select";
import axios from "axios";
import { apiURL } from "../../../constant/Constant";

const pageOptions = [
  { value: "home", label: "Home" },
  { value: "onewaysearchresult", label: "Oneway Result" },
  { value: "returnsearchresult", label: "Return Result" },
  { value: "passengerDetails", label: "Passenger Details" },
  { value: "reviewDetails", label: "Review Details" },
  { value: "topflightdomestic", label: "Top Route Domestic" },
  { value: "topflightinternational", label: "Top Route International" },
  { value: "bestflightdeal", label: "Best Flight Deals" },
  { value: "aboutSs", label: "About Us" },
  { value: "services", label: "Services" },
  { value: "ourTeam", label: "Our Team" },
  { value: "cookie", label: "Cookie Policy" },
  { value: "privacy", label: "Privacy Policy" },
  { value: "disclaimer", label: "Disclaimer" },
  { value: "contact", label: "Contact" },
  { value: "terms", label: "Terms & Conditions" },
  { value: "faq", label: "FAQ" },
  { value: "testimonial", label: "Testimonial" },
];

const initialState = {
  title: "",
  description: "",
  keywords: "",
  canonical: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
};

const AddMetaData = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", content: "" });

  const fetchMetaData = useCallback(async (pageValue) => {
    if (!pageValue) return;

    setIsLoading(true);
    setMessage({ type: "", content: "" });
    try {
      const response = await axios.get(
        `${apiURL.baseURL}/api/metadata/${pageValue}`
      );

      if (response.data && response.data.data) {
        setFormData({
          title: response.data.data.title || "",
          description: response.data.data.description || "",
          keywords: response.data.data.keywords || "",
          canonical: response.data.data.canonical || "",
          ogTitle: response.data.data.ogTitle || "",
          ogDescription: response.data.data.ogDescription || "",
          ogImage: response.data.data.ogImage || "",
        });
      } else {
        setFormData(initialState);
      }
    } catch (error) {
      console.error("Error fetching metadata:", error);
      setMessage({
        type: "error",
        content: "Failed to fetch metadata. Please try again.",
      });
      setFormData(initialState);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (selectedPage) {
      fetchMetaData(selectedPage.value);
    } else {
      setFormData(initialState);
    }
  }, [selectedPage, fetchMetaData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPage) {
      setMessage({ type: "error", content: "Please select a page first." });
      return;
    }

    setIsLoading(true);
    setMessage({ type: "", content: "" });

    const dataToSubmit = {
      ...formData,
      page: selectedPage.value,
    };

    try {
      const response = await axios.post(
        `${apiURL.baseURL}/api/metadata`,
        dataToSubmit
      );

      if (response.data && response.data.status === 200) {
        setMessage({ type: "success", content: response.data.message });
      }
    } catch (error) {
      console.error("Error saving metadata:", error);
      setMessage({
        type: "error",
        content:
          error.response?.data?.message ||
          "Failed to save data. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // --- STYLING ---

  const getMessageStyles = () => {
    if (message.type === "success") {
      return "bg-green-100 border border-green-300 text-green-700";
    }
    if (message.type === "error") {
      return "bg-red-100 border border-red-300 text-red-700";
    }
    return "";
  };

  // Input styles: `w-full` is critical here
  const inputStyles =
    "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm";

  // Custom styles for react-select to blend with Tailwind
  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? "#3b82f6" : "#d1d5db",
      boxShadow: state.isFocused ? "0 0 0 1px #3b82f6" : "none",
      "&:hover": {
        borderColor: "#9ca3af",
      },
      borderRadius: "0.375rem",
      minHeight: "38px",
      fontSize: "0.875rem",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#eff6ff" : "white",
      color: "#1f2937",
      fontSize: "0.875rem",
    }),
    //... (other styles remain the same)
  };

  // --- COMPONENT RENDER ---

  return (
    // **FIX 1: Removed `max-w-4xl` and `mx-auto` to allow full width**
    <div className="p-6 bg-white rounded-lg shadow-xl font-sans">
      <header className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Manage Page SEO Metadata
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Select a page to view, edit, or add new SEO meta details.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* --- Page Selector --- */}
        {/* **FIX 2: Added `w-full` and `items-start` to the wrapper div** */}
        <div className="w-full flex flex-col gap-2 items-start text-left">
          <label
            htmlFor="page-select"
            className="block text-sm font-medium text-gray-700"
          >
            Select Page <span className="text-red-500">*</span>
          </label>
          <Select
            id="page-select"
            options={pageOptions}
            onChange={setSelectedPage}
            value={selectedPage}
            isClearable
            isSearchable
            placeholder="Type or select a page..."
            styles={customSelectStyles}
            className="w-full" // Ensure react-select component itself is full width
            classNamePrefix="react-select"
          />
        </div>

        {/* --- Form Fields --- */}
        <fieldset
          disabled={!selectedPage || isLoading}
          className="w-full border border-gray-300 rounded-lg p-6 flex flex-col gap-5 disabled:opacity-50 disabled:bg-gray-50"
        >
          <legend className="text-lg font-semibold text-gray-800 px-2">
            SEO Details for: {selectedPage ? selectedPage.label : "..."}
          </legend>

          {/* Meta Title */}
          {/* **FIX 2: Added `w-full`, `items-start`, `text-left`** */}
          <div className="w-full flex flex-col gap-2 items-start text-left">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Meta Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className={inputStyles}
            />
            <small className="text-xs text-gray-500">
              Recommended: 50-60 characters. Appears in browser tabs and search
              results.
            </small>
          </div>

          {/* Meta Description */}
          {/* **FIX 2: Added `w-full`, `items-start`, `text-left`** */}
          <div className="w-full flex flex-col gap-2 items-start text-left">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Meta Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleInputChange}
              className={`${inputStyles} min-h-[80px] resize-y`}
            />
            <small className="text-xs text-gray-500">
              Recommended: 150-160 characters. Appears in search results.
            </small>
          </div>

          {/* Meta Keywords */}
          {/* **FIX 2: Added `w-full`, `items-start`, `text-left`** */}
          <div className="w-full flex flex-col gap-2 items-start text-left">
            <label
              htmlFor="keywords"
              className="block text-sm font-medium text-gray-700"
            >
              Meta Keywords
            </label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              value={formData.keywords}
              onChange={handleInputChange}
              className={inputStyles}
            />
            <small className="text-xs text-gray-500">
              Comma-separated keywords (e.g., flight, travel, booking).
            </small>
          </div>

          {/* Canonical URL */}
          {/* **FIX 2: Added `w-full`, `items-start`, `text-left`** */}
          <div className="w-full flex flex-col gap-2 items-start text-left">
            <label
              htmlFor="canonical"
              className="block text-sm font-medium text-gray-700"
            >
              Canonical URL
            </label>
            <input
              type="text"
              id="canonical"
              name="canonical"
              placeholder="https://www.yourwebsite.com/page-url"
              value={formData.canonical}
              onChange={handleInputChange}
              className={inputStyles}
            />
            <small className="text-xs text-gray-500">
              The preferred URL for this page. Helps prevent duplicate content
              issues.
            </small>
          </div>

          <h4 className="text-base font-semibold text-gray-700 border-b border-gray-200 pb-2 mt-4 mb-1 text-left">
            Open Graph (Social Media Sharing)
          </h4>

          {/* OG Title */}
          {/* **FIX 2: Added `w-full`, `items-start`, `text-left`** */}
          <div className="w-full flex flex-col gap-2 items-start text-left">
            <label
              htmlFor="ogTitle"
              className="block text-sm font-medium text-gray-700"
            >
              OG Title
            </label>
            <input
              type="text"
              id="ogTitle"
              name="ogTitle"
              value={formData.ogTitle}
              onChange={handleInputChange}
              className={inputStyles}
            />
            <small className="text-xs text-gray-500">
              Title when shared on social media (e.g., Facebook, Twitter).
            </small>
          </div>

          {/* OG Description */}
          {/* **FIX 2: Added `w-full`, `items-start`, `text-left`** */}
          <div className="w-full flex flex-col gap-2 items-start text-left">
            <label
              htmlFor="ogDescription"
              className="block text-sm font-medium text-gray-700"
            >
              OG Description
            </label>
            <textarea
              id="ogDescription"
              name="ogDescription"
              rows="2"
              value={formData.ogDescription}
              onChange={handleInputChange}
              className={`${inputStyles} min-h-[60px] resize-y`}
            />
            <small className="text-xs text-gray-500">
              Description when shared on social media.
            </small>
          </div>

          {/* OG Image */}
          {/* **FIX 2: Added `w-full`, `items-start`, `text-left`** */}
          <div className="w-full flex flex-col gap-2 items-start text-left">
            <label
              htmlFor="ogImage"
              className="block text-sm font-medium text-gray-700"
            >
              OG Image URL
            </label>
            <input
              type="text"
              id="ogImage"
              name="ogImage"
              placeholder="https://www.yourwebsite.com/images/social-image.jpg"
              value={formData.ogImage}
              onChange={handleInputChange}
              className={inputStyles}
            />
            <small className="text-xs text-gray-500">
              Full URL to the image to show when shared. Recommended:
              1200x630px.
            </small>
          </div>
        </fieldset>

        {message.content && (
          <div
            className={`p-4 py-2 rounded-md mb-6 font-medium ${getMessageStyles()}`}
          >
            {message.content}
          </div>
        )}

        {/* --- Submit Button --- */}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={!selectedPage || isLoading}
          >
            {isLoading ? "Saving..." : "Save Metadata"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMetaData;
