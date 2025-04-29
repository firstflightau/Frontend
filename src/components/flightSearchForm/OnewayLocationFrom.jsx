import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const OnewayLocationFrom = ({
  autoFocus = false,
  placeHolder = "Location",
  desc,
  className = "nc-flex-1.5",
  onLocationSelect,
}) => {
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const reducerState = useSelector((state) => state?.airportList?.airports);
  const onlyAustralia = reducerState?.filter(
    (item) => item?.CountryName === "Australia"
  );
  // console.log(onlyAustralia);

  const [value, setValue] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showPopover, setShowPopover] = useState(autoFocus);
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState(
    JSON.parse(localStorage.getItem("FlightRecentSearchesFrom")) || []
  );
  const [prevValue, setPrevValue] = useState("");

  const suggestedPlaces = [
    {
      _id: "668278aa909eb1823ba94b92",
      id: "SYD",
      name: "Sydney",
      AirportCode: "SYD",
      CityCode: "SYD",
      CountryCode: "AU",
      CountryName: "Australia",
      code: "Kingsford Smith",
    },
    {
      _id: "668278a9909eb1823ba93e66",
      name: "Brisbane",
      AirportCode: "BNE",
      CityCode: "BNE",
      CountryCode: "AU",
      id: "BNE",
      CountryName: "Australia",
      code: "Brisbane Airport",
    },
  ];

  useEffect(() => {
    if (recentSearches.length > 0) {
      const mostRecent = recentSearches?.[0];
      setSelectedLocation(mostRecent);
      setValue(mostRecent.name);
      if (onLocationSelect) {
        onLocationSelect(mostRecent);
      }
    } else {
      const defaultCity = suggestedPlaces[0];
      setSelectedLocation(defaultCity);
      setValue(defaultCity.name);
      if (onLocationSelect) {
        onLocationSelect(defaultCity);
      }
    }
  }, []);

  useEffect(() => {
    if (showPopover) {
      document.addEventListener("click", eventClickOutsideDiv);
    } else {
      document.removeEventListener("click", eventClickOutsideDiv);
    }
    return () => {
      document.removeEventListener("click", eventClickOutsideDiv);
    };
  }, [showPopover]);

  useEffect(() => {
    if (showPopover && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showPopover]);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleSearch = (keyword) => {
    if (keyword.length > 2) {
      const filteredLocations = onlyAustralia.filter((item) => {
        const lowerKeyword = keyword.toLowerCase();
        return (
          item.name.toLowerCase().includes(lowerKeyword) ||
          item.AirportCode.toLowerCase().includes(lowerKeyword)
        );
      });
      setSearchResults(filteredLocations);
    }
  };

  // console.log(searchResults, "search result");

  const debouncedSearch = debounce(handleSearch, 500);

  const handleFocus = () => {
    setPrevValue(value);
    setValue("");
  };

  const handleBlur = () => {
    if (!selectedLocation) {
      setValue(prevValue);
    }
  };

  const handleChange = (e) => {
    const keyword = e.currentTarget.value;
    setValue(keyword);
    if (keyword.length > 0) {
      debouncedSearch(keyword);
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectLocation = (location) => {
    setValue(location.name);
    setSelectedLocation(location);
    setShowPopover(false);

    const updatedRecentSearches = [
      location,
      ...recentSearches.filter((item) => item._id !== location._id),
    ].slice(0, 5);

    setRecentSearches(updatedRecentSearches);
    localStorage.setItem(
      "FlightRecentSearchesFrom",
      JSON.stringify(updatedRecentSearches)
    );

    if (onLocationSelect) {
      onLocationSelect(location);
    }
  };

  const eventClickOutsideDiv = (event) => {
    if (!containerRef.current.contains(event.target)) {
      setShowPopover(false);
      if (selectedLocation) {
        setValue(selectedLocation.name);
      }
    }
  };

  const renderRecentSearches = () => {
    const uniqueRecentSearches = [...new Set(recentSearches)].slice(0, 2);
    return (
      <>
        {uniqueRecentSearches.length > 0 && (
          <h3 className="block mt-2 sm:mt-0 px-4 sm:px-8 font-semibold text-base sm:text-lg text-neutral-800">
            Recent searches
          </h3>
        )}
        <div className="mt-2">
          {uniqueRecentSearches.map((item, index) => (
            <span
              onClick={() => handleSelectLocation(item)}
              key={index}
              className="flex mb-2 px-4 sm:px-8 items-center space-x-3 sm:space-x-4 lg:py-4 md:py-4 sm:py-3 hover:bg-neutral-100 cursor-pointer"
            >
              <span className="block text-neutral-400">
                <ClockIcon className="h-4 sm:h-6 w-4 sm:w-6 text-gray-800" />
              </span>
              <span className="block font-medium text-neutral-700">
                {item.name} ({item.AirportCode}), {item.CountryName}
              </span>
            </span>
          ))}
        </div>
      </>
    );
  };

  const renderSuggestedPlaces = () => {
    return (
      <>
        <h3 className="block mt-2 sm:mt-0 px-4 sm:px-8 font-semibold text-base sm:text-lg text-neutral-800">
          Suggested places
        </h3>
        <div className="mt-2">
          {suggestedPlaces.map((item, index) => (
            <span
              onClick={() => handleSelectLocation(item)}
              key={index}
              className="flex mb-2 px-4 sm:px-8 items-center space-x-3 sm:space-x-4 lg:py-4 md:py-4 sm:py-3 hover:bg-neutral-100 cursor-pointer"
            >
              <span className="block text-neutral-400">
                <MapPinIcon className="h-4 w-4 sm:h-6 sm:w-6 text-gray-800" />
              </span>
              <span className="block font-medium text-neutral-700">
                {item.name} ({item.AirportCode}), {item.CountryName}
              </span>
            </span>
          ))}
        </div>
      </>
    );
  };

  const renderSearchResults = () => {
    return (
      <>
        {searchResults.map((item, index) => (
          <span
            onClick={() => handleSelectLocation(item)}
            key={index}
            className="flex mb-2 px-4 sm:px-8 items-center space-x-3 sm:space-x-4 lg:py-4 md:py-4 sm:py-3 hover:bg-neutral-100 cursor-pointer"
          >
            <span className="block text-neutral-400">
              <MapPinIcon className="h-4 w-4 sm:h-6 sm:w-6 text-gray-800" />
            </span>
            <span className="block font-medium text-neutral-700">
              {item.name} ({item.AirportCode}), {item.CountryName}
            </span>
          </span>
        ))}
      </>
    );
  };

  return (
    <div
      className={`relative w-full flex border bg-white border-gray-300  rounded-lg ${className}`}
      ref={containerRef}
    >
      <div
        onClick={() => setShowPopover(true)}
        className={`flex z-10 flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left ${
          showPopover ? "" : ""
        }`}
      >
        <div className="text-neutral-300">
          <MapPinIcon className="w-5 h-5 lg:w-7 lg:h-7 text-gray-800" />
        </div>
        <div className="flex-grow">
          <input
            className="text-xl block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-500  font-bold placeholder-gray-800 truncate"
            placeholder={placeHolder}
            value={value}
            autoFocus={showPopover}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={inputRef}
          />
          <span className="block mt-0.5 text-[1rem] text-neutral-400 font-light">
            <span className="line-clamp-1 text-gray-800">
              {!!value ? placeHolder : desc}
            </span>
          </span>
        </div>
      </div>

      {showPopover && (
        <div className="absolute no-scrollbar left-0 z-50 w-full min-w-[300px] sm:min-w-[500px] bg-white top-full mt-3 py-3 sm:py-6 rounded-3xl shadow-xl max-h-96 overflow-y-auto">
          {searchResults.length > 0 ? (
            renderSearchResults()
          ) : (
            <>
              {renderRecentSearches()}
              {renderSuggestedPlaces()}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default OnewayLocationFrom;
