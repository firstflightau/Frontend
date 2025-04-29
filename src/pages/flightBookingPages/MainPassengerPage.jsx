import React, { useEffect, useState, useMemo, useRef } from "react";
import { Modal } from "flowbite-react";
import FlightDetails from "./FlightDetails";
import PassengerComponent from "./PassengerComponent";
import BookButton from "./BookButton";
import PriceSummary from "./PriceSummary";
import { useDispatch, useSelector } from "react-redux";
import { apiURL } from "../../constant/Constant";
import axios from "axios";
import { setPassengerData } from "../../redux/slices/passenger/passengerSlice";
import { initiateWorkbench } from "../../redux/slices/workbench/workBenchSlice";
import {
  addOffer,
  clearAddOffer,
} from "../../redux/slices/workbench/addOfferSlice";
import { addPassenger } from "../../redux/slices/passenger/addTravellerSlice";
import { useNavigate } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import SearchResultLoader from "../../components/SearchResultLoader";
import { LogOut } from "lucide-react";
import { clearPnr } from "../../redux/slices/pnr/generatePNRSlice";

const MainPassengerPage = () => {
  const reducerState = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedFlight = reducerState?.selectedFlight;
  const [loader, setLoader] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const passengerRef = useRef();

  const payloadPrice = useMemo(
    () => ({
      OfferQueryBuildFromCatalogProductOfferings: {
        BuildFromCatalogProductOfferingsRequest: {
          "@type": "BuildFromCatalogProductOfferingsRequestAir",
          CatalogProductOfferingsIdentifier: {
            Identifier: {
              value:
                reducerState?.flightSearchResult?.CatalogProductOfferingsId,
            },
          },
          CatalogProductOfferingSelection: [
            {
              CatalogProductOfferingIdentifier: {
                Identifier: {
                  value: reducerState?.selectedFlight?.Onward?.orderId,
                },
              },
              ProductIdentifier: [
                {
                  Identifier: {
                    value:
                      reducerState?.selectedFlight?.Onward?.productsoption?.[0]
                        ?.Product?.[0]?.productRef,
                  },
                },
              ],
            },
            reducerState?.selectedFlight?.Return && {
              CatalogProductOfferingIdentifier: {
                Identifier: {
                  value: reducerState?.selectedFlight?.Return?.orderId,
                },
              },
              ProductIdentifier: [
                {
                  Identifier: {
                    value:
                      reducerState?.selectedFlight?.Return?.productsoption?.[0]
                        ?.Product?.[0]?.productRef,
                  },
                },
              ],
            },
          ],
          validateInventoryInd: true,
        },
      },
    }),
    [reducerState]
  );

  useEffect(() => {
    const fetchFlightPrice = async () => {
      try {
        const response = await axios.post(
          `${apiURL.baseURL}/api/flight/price`,
          payloadPrice,
          {
            headers: {
              "Content-Type": "application/json",
              tptoken: reducerState?.tpToken?.tpTokenData?.access_token,
            },
          }
        );
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error:", error.response?.data || error.message);
      }
    };

    fetchFlightPrice();
    dispatch(clearAddOffer());
    dispatch(clearPnr());
    window.scrollTo(0, 0);
  }, []);

  const handleBookClick = async () => {
    if (!passengerRef.current) return;

    try {
      const isValid = await passengerRef.current.validateForm();
      if (!isValid) return;
      setShowConfirmationModal(true);
    } catch (error) {
      console.error("Validation error:", error);
    }
  };

  const handleContinue = async () => {
    setShowConfirmationModal(false);

    try {
      const isValid = await passengerRef.current.validateForm();
      if (!isValid) return;
      setLoader(true);

      const formData = passengerRef.current.getPassengerData();
      dispatch(setPassengerData(formData));

      const localPassengers = [
        ...(formData.adults?.map((p) => ({ ...p, type: "ADT" })) || []),
        ...(formData.childs?.map((p) => ({ ...p, type: "CHD" })) || []),
        ...(formData.infants?.map((p) => ({ ...p, type: "INF" })) || []),
      ];

      if (localPassengers.length === 0) {
        throw new Error("No passengers to process");
      }

      // await dispatch(initiateWorkbench()).unwrap();

      try {
        await dispatch(initiateWorkbench()).unwrap();
      } catch (error) {
        setShowErrorModal(true); // Show error modal if workbench fails
        return;
      }
      try {
        await dispatch(addOffer(payloadPrice)).unwrap();
      } catch (error) {
        setShowErrorModal(true); // Show error modal if workbench fails
        return;
      }

      for (const [index, passenger] of localPassengers.entries()) {
        const payload = {
          Traveler: {
            gender: passenger.gender === 1 ? "Male" : "Female",
            birthDate: passenger.dob,
            passengerTypeCode: passenger.type,
            id: `trav_${index + 1}`,
            PersonName: {
              "@type": "PersonNameDetail",
              Prefix: passenger.title,
              Given: passenger.firstName,
              Surname: passenger.lastName,
            },
            Telephone: [
              {
                "@type": "Telephone",
                phoneNumber: "212456121",
                role: "Office",
              },
            ],
            Email: [
              {
                comment: "Primary Email Id",
                value: formData.email,
              },
            ],
            TravelDocument: [
              {
                "@type": "TravelDocument",
                docNumber: passenger.passportNumber,
                docType: "Passport",
                expireDate: passenger.passportExpiry,
                issueCountry: passenger.passportIssuingCountry.countryCode,
                birthDate: passenger.dob,
                Gender: passenger.gender === 1 ? "Male" : "Female",
                PersonName: {
                  "@type": "PersonName",
                  Given: passenger.firstName,
                  Surname: passenger.lastName,
                },
              },
            ],
          },
        };

        await dispatch(addPassenger(payload)).unwrap();
      }
      sessionStorage.removeItem("saved");
      sessionStorage.removeItem("pnrGenerated");
      navigate("/flight/reviewbooking");
    } catch (error) {
      console.error("Booking process failed:", error);
    } finally {
      setLoader(false);
    }
  };

  console.log(reducerState, "reducer state");

  return (
    <div className="container mt-5 relative">
      {loader && <SearchResultLoader text={"Creating Your Itenerary"} />}

      <div className="row">
        <div className="col-12 col-md-8 col-lg-8 col-xl-8">
          <FlightDetails selectedFlight={selectedFlight} />
          <PassengerComponent ref={passengerRef} />
          <BookButton onClick={handleBookClick} name={"Continue Booking"} />
        </div>
        <div className="col-12 col-md-4 col-lg-4 col-xl-4">
          <PriceSummary />
        </div>
      </div>

      <Dialog
        open={showConfirmationModal}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={() => setShowConfirmationModal(false)}
      >
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/50">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 flex flex-row items-center justify-start gap-2 font-medium text-black"
              >
                Confirm Details <HiOutlineExclamationCircle />
              </DialogTitle>
              <p className="mt-2 text-base/6 text-black/50">
                Are you sure all passenger details are correct?
              </p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowConfirmationModal(false)}
                  className="mr-2 px-6 py-2 flex flex-row-reverse gap-2 items-center text-gray-700 bg-gray-200 border-1 border-gray-300 hover:bg-gray-200 rounded-lg focus:ring-2 focus:ring-gray-300 transition-colors duration-200"
                >
                  Recheck <LogOut size={15} className="rotate-180" />
                </button>
                <button
                  onClick={handleContinue}
                  className="px-6 py-2 text-white bg-secondary-6000 hover:bg-secondary-500 border-1 border-secondary-6000 rounded-lg focus:ring-2 focus:ring-blue-300 transition-colors duration-200"
                >
                  Continue
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={showErrorModal}
        as="div"
        className="relative z-50  focus:outline-none"
        onClose={() => setShowErrorModal(false)}
      >
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/50">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 flex flex-row items-center justify-start gap-2 font-medium text-black"
              >
                Error Occured <HiOutlineExclamationCircle />
              </DialogTitle>
              <p className="mt-2 text-base/6 text-black/50">
                There is an error, please try again.
              </p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => window.close()}
                  className="px-6 py-2 text-white bg-secondary-6000 hover:bg-secondary-500 border-1 border-secondary-6000 rounded-lg focus:ring-2 focus:ring-blue-300 transition-colors duration-200"
                >
                  Okay
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default MainPassengerPage;
