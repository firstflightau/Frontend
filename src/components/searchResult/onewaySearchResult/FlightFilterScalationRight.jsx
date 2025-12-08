import React from "react";

const FlightFilterScalationRight = () => {
  return (
    <div className="w-full max-w-4xl space-y-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="flex items-center p-4 bg-white shadow rounded-lg animate-pulse"
        >
          {/* Airline Logo */}
          <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
          <div className="flex flex-1 flex-col pl-4 space-y-2">
            {/* Airline Name */}
            <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
            {/* Flight Details */}
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          </div>
          {/* Price */}
          <div className="h-8 w-16 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default FlightFilterScalationRight;
