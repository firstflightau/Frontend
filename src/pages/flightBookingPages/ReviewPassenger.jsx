import React from "react";
import { useSelector } from "react-redux";

const ReviewPassenger = () => {
  const passengerData = useSelector((state) => state.passenger?.passengerData);

  // Get grouped passengers
  const adults = passengerData?.adults || [];
  const children = passengerData?.childs || [];
  const infants = passengerData?.infants || [];

  const renderPassengerSection = (title, passengers) => {
    if (!passengers.length) return null;

    return (
      <div className="mb-8">
        {/* <h2 className="text-base font-bold text-gray-800 mb-4 border-b pb-2">
          {title}
          ({passengers.length})
        </h2> */}

        <div className="space-y-4">
          {passengers.map((passenger, index) => (
            <div
              key={`${title}-${index}`}
              className="bg-white rounded-xl  p-3 border border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Personal Info */}
                <div>
                  <h3 className="text-lg mb-0 font-semibold text-secondary-6000">
                    {passenger.title} {passenger.firstName} {passenger.lastName}
                  </h3>
                  <div className="mt-2 space-y-1 text-gray-600">
                    <p>
                      <span className="font-medium text-gray-800">Gender:</span>{" "}
                      {passenger.gender === 1 ? "Male" : "Female"}
                    </p>
                    <p>
                      <span className="font-medium text-gray-800">
                        Date of Birth:
                      </span>{" "}
                      {new Date(passenger.dob).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Passport Info */}
                <div className="border-t md:border-t-0 md:border-l md:pt-0 md:pl-4">
                  <h4 className="text-sm font-semibold text-secondary-6000 uppercase mb-2">
                    Passport Details
                  </h4>
                  <div className="space-y-1 text-gray-600">
                    <p>
                      <span className="font-medium text-gray-800">Number:</span>{" "}
                      {passenger.passportNumber}
                    </p>
                    <p>
                      <span className="font-medium text-gray-800">Expiry:</span>{" "}
                      {new Date(passenger.passportExpiry).toLocaleDateString()}
                    </p>
                    <p>
                      <span className="font-medium text-gray-800">
                        Issuing Country:
                      </span>{" "}
                      {passenger.passportIssuingCountry?.countryName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="mt-3">
      <h1 className="text-xl font-bold text-gray-900 mb-6">
        Passenger Details
      </h1>

      {renderPassengerSection("Adults", adults)}
      {renderPassengerSection("Children", children)}
      {renderPassengerSection("Infants", infants)}

      {!adults.length && !children.length && !infants.length && (
        <div className="text-center py-8 text-gray-500">
          No passenger information available
        </div>
      )}
    </div>
  );
};

export default ReviewPassenger;
