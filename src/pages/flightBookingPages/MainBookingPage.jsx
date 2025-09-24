import React, { useState } from "react";
import FlightDetails from "./FlightDetails";
import BookButton from "./BookButton";
import PriceSummary from "./PriceSummary";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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

  // console.log(selectedFlight, "selectedFlight");

  // const grandTotal =
  //   onwards?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice +
  //   (Return &&
  //     Number(Return?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice)) +
  //   addMarkup(
  //     onwards?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice +
  //       (Return &&
  //         Number(Return?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice))
  //   );

  // const grandTotal =
  //   onwards?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice +
  //   addMarkup(onwards?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice);

  const type = Return ? "return" : "onward";

  const onwardPrice =
    onwards?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice;
  const onwardTaxes =
    onwards?.productsoption?.[0]?.BestCombinablePrice?.TotalTaxes;
  const onwardDestination =
    onwards?.flights?.[onwards?.flights?.length - 1]?.Arrival?.location; // for example: "DXB"

  const onwardMarkup = addMarkup(onwardPrice, type, onwardDestination);

  const totalTax = Number(onwardTaxes) + Number(onwardMarkup);
  const grandTotal = Number(onwardPrice) + Number(onwardMarkup);

  // console.log(grandTotal, "grand total");
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
    <main>
      <section className="breadcrumbs-area breadcrumb-bg bg-tertiary-6000 !py-5 md:!py-10">
        <div className="container">
          <h1
            className=" text-2xl md:text-4xl font-bold capitalize mb-1 relative text-secondary-6000 wow fadeInUp"
            data-wow-delay="0.0s"
          >
            Review Details
          </h1>
          <div className="">
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-nav wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <ul className="breadcrumb listing mb-0 flex relative">
                <li className="breadcrumb-item single-list">
                  <Link
                    to="/"
                    className=" text-base font-normal text-black capitalize font"
                  >
                    Home
                  </Link>
                </li>
                <span> &nbsp; /&nbsp; </span>
                <li
                  className=" text-base font-normal text-primary-6000 capitalize font"
                  aria-current="page"
                >
                  {/* <Link to="" className=" active"> */}
                  Passenger Details
                  {/* </Link> */}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      {loader && <SearchResultLoader text="Redirecting to Payment Gateway" />}
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-8 col-xl-8">
            <FlightDetails selectedFlight={selectedFlight} />
            <ReviewPassenger />
            <div className="col-12 col-md-4 col-lg-4 col-xl-4 w-full block md:hidden">
              <PriceSummary />
            </div>
            <BookButton onClick={handleBookClick} name={"Pay Now"} />
          </div>
          <div className="col-12 col-md-4 col-lg-4 col-xl-4 hidden md:block">
            <PriceSummary />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainBookingPage;
