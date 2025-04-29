import React, { useEffect, useState } from "react";
import { Baby, User } from "lucide-react";
import { useSelector } from "react-redux";
import { addMarkup } from "../../utils/utils";

const PriceSummary = () => {
  //   const [isSticky, setIsSticky] = useState(false);

  const reducerState = useSelector((state) => state);
  const onwards = reducerState?.selectedFlight?.Onward;
  const Return = reducerState?.selectedFlight?.Return;

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const scrollPosition = window.scrollY; // Get the vertical scroll position

  //       // Check if the scroll position is 200px or more
  //       if (scrollPosition > 300) {
  //         setIsSticky(true);
  //       } else {
  //         setIsSticky(false);
  //       }
  //     };

  //     // Attach the scroll event listener
  //     window.addEventListener("scroll", handleScroll);

  //     // Cleanup event listener on component unmount
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  const noOfPassenger = reducerState?.searchFlighPY;

  const findAdultPriceOnwards =
    onwards?.productsoption?.[0]?.BestCombinablePrice?.PriceBreakdown?.filter(
      (item) => item?.requestedPassengerType === "ADT"
    );
  const findAdultPriceReturn =
    Return &&
    Return?.productsoption?.[0]?.BestCombinablePrice?.PriceBreakdown?.filter(
      (item) => item?.requestedPassengerType === "ADT"
    );

  const findChildPriceOnwards =
    onwards?.productsoption?.[0]?.BestCombinablePrice?.PriceBreakdown?.filter(
      (item) => item?.requestedPassengerType === "CHD"
    );
  const findChildPriceReturn =
    Return &&
    Return?.productsoption?.[0]?.BestCombinablePrice?.PriceBreakdown?.filter(
      (item) => item?.requestedPassengerType === "CHD"
    );
  const findInfantPriceOnwards =
    onwards?.productsoption?.[0]?.BestCombinablePrice?.PriceBreakdown?.filter(
      (item) => item?.requestedPassengerType === "INF"
    );
  const findInfantPriceReturn =
    Return &&
    Return?.productsoption?.[0]?.BestCombinablePrice?.PriceBreakdown?.filter(
      (item) => item?.requestedPassengerType === "INF"
    );

  const adultPrice =
    findAdultPriceOnwards?.[0]?.Amount?.Base +
    (Return && findAdultPriceReturn?.[0]?.Amount?.Base);
  const childPrice =
    findChildPriceOnwards?.length > 0 &&
    findChildPriceOnwards?.[0]?.Amount?.Base +
      (Return &&
        findChildPriceReturn?.length > 0 &&
        findChildPriceReturn?.[0]?.Amount?.Base);
  const infantPrice =
    findInfantPriceOnwards?.length > 0 &&
    findInfantPriceOnwards?.[0]?.Amount?.Base +
      (Return &&
        findInfantPriceReturn?.length > 0 &&
        findChildPriceReturn?.[0]?.Amount?.Base);

  const totalTax =
    onwards?.productsoption?.[0]?.BestCombinablePrice?.TotalTaxes +
    (Return && Return?.productsoption?.[0]?.BestCombinablePrice?.TotalTaxes) +
    addMarkup(
      onwards?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice +
        (Return && Return?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice)
    );

  const grandTotal =
    onwards?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice +
    (Return && Return?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice) +
    addMarkup(
      onwards?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice +
        (Return && Return?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice)
    );

  return (
    <div
      className={`rounded-2xl shadow-md border border-gray-200 p-4 bg-white overflow-hidden transition-all duration-300 sticky top-28
        `}
      // isSticky ? "sticky top-28" : ""
    >
      <div className="flex items-center justify-between border-b pb-2 mb-2">
        <h2 className="text-lg font-semibold text-gray-800">Price Summary</h2>
        <div className="flex items-center gap-2 text-gray-600">
          <div className="flex items-center gap-1">
            <User size={16} />
            <span className="text-sm">{noOfPassenger?.Adult}</span>
          </div>
          {/* {noOfPassenger?.Child > 0 && ( */}
          <div className="flex items-center gap-1">
            <i className="fa-solid fa-child"></i>
            <span className="text-sm">{noOfPassenger?.Child}</span>
          </div>
          {/* )} */}
          {/* {noOfPassenger?.Infant > 0 && ( */}
          <div className="flex items-center gap-1">
            <Baby size={16} />
            <span className="text-sm">{noOfPassenger?.Infant}</span>
          </div>
          {/* )} */}
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between text-gray-600">
          <span>Adult x {noOfPassenger?.Adult}</span>
          <span>${adultPrice * noOfPassenger?.Adult} AUD</span>
        </div>
        {noOfPassenger?.Child > 0 && (
          <div className="flex justify-between text-gray-600">
            <span>Child x 1</span>
            <span>${childPrice * noOfPassenger?.Child} AUD</span>
          </div>
        )}
        {noOfPassenger?.Infant > 0 && (
          <div className="flex justify-between text-gray-600">
            <span>Infant x 1</span>
            <span>${infantPrice * noOfPassenger?.Infant} AUD</span>
          </div>
        )}
        <div className="flex justify-between text-gray-600">
          <span>Total Taxes +</span>
          <span>${totalTax?.toFixed(2)} AUD</span>
        </div>
      </div>
      <div className="border-t pt-2 mt-3">
        <div className="flex justify-between font-semibold text-gray-800">
          <div className="flex flex-col items-start">
            <span>Grand Total</span>
            <span className="text-[12px] font-normal">(Included tax)</span>
          </div>
          <span className="text-primary-6000 text-lg">
            $ {grandTotal?.toFixed(2)} AUD
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceSummary;
