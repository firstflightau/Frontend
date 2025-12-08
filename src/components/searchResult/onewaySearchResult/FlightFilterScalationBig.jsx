import React from "react";

const FlightFilterScalationBig = () => {
  const skItemLeftFilterBig = () => {
    return (
      <div className="skeletonItemResultFilter">
        <div className="posterBlock skeleton"></div>
        {/* <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div> */}
      </div>
    );
  };
  return (
    // <div className="carouselResultFilter">
    //   <div className="loadingSkeletonResultFilter">{skItemLeftFilterBig()}</div>
    // </div>
    <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg max-w-sm mx-auto">
      {/* Skeleton for Filter Heading */}
      <div className="h-5 w-2/3 bg-gray-300 rounded animate-pulse"></div>

      {/* Skeleton for Slider */}
      <div className="h-2 w-full bg-gray-300 rounded animate-pulse"></div>

      {/* Skeleton for Stops Heading */}
      <div className="h-5 w-2/3 bg-gray-300 rounded animate-pulse"></div>

      {/* Skeleton for Checkboxes */}
      <div className="h-5 w-full bg-gray-300 rounded animate-pulse"></div>
      <div className="h-5 w-full bg-gray-300 rounded animate-pulse"></div>
      <div className="h-5 w-full bg-gray-300 rounded animate-pulse"></div>

      {/* Skeleton for Airlines Heading */}
      <div className="h-5 w-2/3 bg-gray-300 rounded animate-pulse"></div>

      {/* Skeleton for Airline Checkboxes */}
      <div className="h-5 w-full bg-gray-300 rounded animate-pulse"></div>
      <div className="h-5 w-full bg-gray-300 rounded animate-pulse"></div>
      <div className="h-5 w-full bg-gray-300 rounded animate-pulse"></div>
    </div>
  );
};

export default FlightFilterScalationBig;
