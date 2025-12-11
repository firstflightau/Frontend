import React from "react";
import ReactDOM from "react-dom";

const FlightPaidLoader = ({ message = "We’re booking your flight..." }) => {
  return ReactDOM.createPortal(
    <div className="flex relative z-50 flex-col items-center justify-center fixed inset-0 bg-blue-500">
      {/* Dots Animation */}
      <div className="flex space-x-4 mb-6">
        <div className="w-6 h-6 bg-white rounded-full animate-bounce delay-100"></div>
        <div className="w-6 h-6 bg-white rounded-full animate-bounce delay-200"></div>
        <div className="w-6 h-6 bg-white rounded-full animate-bounce delay-300"></div>
      </div>

      {/* Text */}
      <h1 className="text-3xl font-extrabold text-white mt-6">
        Booking Your Flight...
      </h1>
      <p className="text-gray-100 mt-2">
        Please wait while we process your booking.
      </p>
    </div>,
    document.body // Append to the body for global visibility
  );
};

export default FlightPaidLoader;
