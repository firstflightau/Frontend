import React, { useEffect } from "react";
import OnewaySearchForm from "../onewayForm/OnewaySearchForm";
import { ArrowLeftRight, PlaneTakeoff } from "lucide-react";
import ReturnSearchForm from "../ReturnForm/ReturnSearchForm";
import { clearSearchResult } from "../../redux/slices/flightSearchResult/flightSearchResultSlice";
import { useDispatch } from "react-redux";
import { clearPnr } from "../../redux/slices/pnr/generatePNRSlice";
import { clearWorkBench } from "../../redux/slices/workbench/workBenchSlice";
import { clearPassengerData } from "../../redux/slices/passenger/passengerSlice";
import { clearAddOffer } from "../../redux/slices/workbench/addOfferSlice";

const FlightSearchForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearSearchResult());
    dispatch(clearPnr());
    dispatch(clearWorkBench());
    dispatch(clearPassengerData());
    dispatch(clearAddOffer());
  }, []);
  return (
    <section className="plan-area-three">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="px-3 py-7 bg-white rounded-md shadow-lg z-40 relative">
              {/* <div className="plan-section-three plan-shadow z-40 relative"> */}
              <div className="choose-plan-nav">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="plan-link active"
                      id="book-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#book"
                      type="button"
                      role="tab"
                      aria-controls="book"
                      aria-selected="false"
                    >
                      <ArrowLeftRight size={21} /> Round Trip
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="plan-link "
                      id="tour-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tour"
                      type="button"
                      role="tab"
                      aria-controls="tour"
                      aria-selected="true"
                    >
                      <PlaneTakeoff size={21} /> Oneway Trip
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="tourTab">
                  <div
                    className="tab-pane fade show active"
                    id="book"
                    role="tabpanel"
                    aria-labelledby="book-tab"
                  >
                    <ReturnSearchForm />
                  </div>
                  <div
                    className="tab-pane fade  "
                    id="tour"
                    role="tabpanel"
                    aria-labelledby="tour-tab"
                  >
                    <OnewaySearchForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FlightSearchForm;
