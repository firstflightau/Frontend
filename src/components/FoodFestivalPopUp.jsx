import React, { useState, useEffect } from "react";
import foodFestival from "../assets/images/foodFestival.jpeg";

const FestivalPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

      <div className="bg-white rounded-lg max-w-md w-full shadow-xl relative overflow-hidden">

        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 bg-[#FE0000] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={foodFestival}
          alt="Food Festival Cheap Flights"
          className="w-full h-40 object-cover img-fluid"
        />

        {/* Content */}
        <div className="p-4 text-center">

          <h2 className="text-lg font-bold text-[#00005A] mb-1">
            Cheap Flights for Melbourne Festival ✈️
          </h2>

          <p className="text-gray-600 text-sm mb-4">
            Limited time cheap fares available. Book now!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 justify-center">

            <a
              href="tel:+61290112019"
              className="bg-[#00005A] text-white px-4 py-2 rounded-md text-sm font-semibold"
            >
              📞 Call
            </a>

            <a
              href="https://wa.me/61290112019"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FE0000] text-white px-4 py-2 rounded-md text-sm font-semibold"
            >
              💬 WhatsApp
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FestivalPopup;