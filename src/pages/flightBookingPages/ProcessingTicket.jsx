import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import axios from "axios";
import { apiURL } from "../../constant/Constant";
import { generatePNR } from "../../redux/slices/pnr/generatePNRSlice";
const ProcessingTicket = () => {
  const reducerState = useSelector((state) => state);
  const dispatch = useDispatch();
  const jwtToken = reducerState?.auth?.user?.token;
  const params = useParams();

  // console.log(reducerState, jwtToken, "reducerState");
  const navigate = useNavigate();
  const generatePnr = async () => {
    const payload = {
      ReservationQueryCommitReservation: {
        "@type": "ReservationQueryCommitReservation",
        scheduleChangeAcceptedInd: false,
      },
    };

    try {
      if (sessionStorage.getItem("pnrGenerated", true)) {
        sessionStorage.removeItem("pnrGenerated");
        navigate("/");
        return;
      }
      await dispatch(generatePNR(payload)).unwrap();
      sessionStorage.setItem("pnrGenerated", true);
      window.history.replaceState(null, "", "/ticket");
      navigate("/ticket", {
        replace: true,
        state: { noBack: true },
      });
    } catch (error) {
      console.error("PNR generation failed:", error);
    }
  };

  const successPayment = async () => {
    try {
      const response = await axios.get(
        `${apiURL.baseURL}/api/transaction/success/${params?.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      generatePnr();
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    successPayment();
  }, []);

  const FlightPaymentLoader = () => {
    return (
      <div className="fixed inset-0 bg-blue-500 bg-opacity-30 backdrop-blur-md flex flex-col items-center justify-center z-50">
        <div className="flex space-x-4 mb-6">
          <div className="w-6 h-6 bg-primary-6000 shadow-lg border-1  rounded-full animate-bounce delay-100"></div>
          <div className="w-6 h-6 bg-primary-6000 shadow-lg border-1  rounded-full animate-bounce delay-200"></div>
          <div className="w-6 h-6 bg-primary-6000 shadow-lg border-1  rounded-full animate-bounce delay-300"></div>
        </div>

        <h1 className="text-3xl font-extrabold text-secondary-6000 mt-6">
          Booking Your Flight.
        </h1>
        <p className="text-primary-6000 mt-2">
          Please wait while we process your booking.
        </p>
      </div>
    );
  };

  return (
    <>
      <FlightPaymentLoader />
      <div className="h-[50vh]"></div>
    </>
  );
};

export default ProcessingTicket;
