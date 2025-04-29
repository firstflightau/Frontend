import React, { useState } from "react";
import FlightDetails from "./FlightDetails";
import BookButton from "./BookButton";
import PriceSummary from "./PriceSummary";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReviewPassenger from "./ReviewPassenger";
import { handlePayment } from "../../utils/payment";
import SearchResultLoader from "../../components/SearchResultLoader";
import { addMarkup } from "../../utils/utils";

const MainBookingPage = () => {
  const reducerState = useSelector((state) => state);
  const jwtToken = reducerState?.auth?.user?.token;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedFlight = reducerState?.selectedFlight;
  const onwards = reducerState?.selectedFlight?.Onward;
  const Return = reducerState?.selectedFlight?.Return;

  const grandTotal =
    onwards?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice +
    (Return && Return?.productsoption?.[0]?.Price?.TotalPrice) +
    addMarkup(
      onwards?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice +
        (Return && Return?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice)
    );
  const reservationIdDevKit =
    reducerState?.workbench?.data?.data?.ReservationResponse?.Reservation
      ?.Identifier?.value;
  const [loader, setLoader] = useState(false);
  const handleSuccessFunction = (param) => {
    window.open(param, "_blank");
    window.close();
  };
  const handleBookClick = async () => {
    if (!jwtToken) {
      navigate("/login");
      return;
    }
    setLoader(true);
    handlePayment(jwtToken, grandTotal, reservationIdDevKit, (param) =>
      handleSuccessFunction(param)
    );
  };

  return (
    <div className="container mt-5 ">
      {loader && <SearchResultLoader text="Redirecting to Payment Gateway" />}
      <div className="row">
        <div className="col-12 col-md-8 col-lg-8 col-xl-8">
          <FlightDetails selectedFlight={selectedFlight} />
          <ReviewPassenger />
          <BookButton onClick={handleBookClick} name={"Pay Now"} />
        </div>
        <div className="col-12 col-md-4 col-lg-4 col-xl-4">
          <PriceSummary />
        </div>
      </div>
    </div>
  );
};

export default MainBookingPage;
