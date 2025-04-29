import React from "react";
import SingleFlightCard from "./SingleFlightCard";

const FlightDetails = ({ selectedFlight }) => {
  const onwardFlight = selectedFlight?.Onward;
  const returnFlight = selectedFlight?.Return;

  return (
    // <div className="rounded-2xl shadow-md border-1 border-gray-200 ">
    //   <p className="rounded-ss-xl rounded-se-xl text-gray-50 p-2 bg-gradient-to-r from-secondary-100 via-secondary-50  to-secondary-50  text-lg font-bold">
    //     Flight Details
    //   </p>
    <div className="">
      <SingleFlightCard type={"Depart"} flight={onwardFlight} />

      {returnFlight && (
        <div className="flex items-center relative my-2">
          <div className=" rounded-r-full bg-white border-r border-gray-300 absolute -left-[1px] w-3 h-6"></div>

          <div className="border-t-2 border-gray-400 w-full border-dashed"></div>
          <div className=" rounded-l-full bg-white border-l border-gray-300 absolute -right-[1px] w-3 h-6"></div>
        </div>
      )}
      {returnFlight && (
        <SingleFlightCard type={"Return"} flight={returnFlight} />
      )}
    </div>
    // </div>
  );
};

export default FlightDetails;
