import React, { useEffect, useState, useMemo, useRef } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import SearchResultLoader from "../../components/SearchResultLoader";
import { LogOut } from "lucide-react";
import { clearPnr } from "../../redux/slices/pnr/generatePNRSlice";
import { addMarkup } from "../../utils/utils";
import { Helmet } from "react-helmet-async";

const MainPassengerPage = () => {
  const reducerState = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedFlight = reducerState?.selectedFlight;
  const [loader, setLoader] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [bookingReference, setBookingReference] = useState(null);
  const passengerRef = useRef();
  const jwtToken = reducerState?.auth?.user?.token;
  const onwards = reducerState?.selectedFlight?.Onward;
  const Return = reducerState?.selectedFlight?.Return;

  const type = Return ? "return" : "onward";

  const onwardPrice =
    onwards?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice;
  const onwardDestination =
    onwards?.flights?.[onwards?.flights?.length - 1]?.Arrival?.location; // for example: "DXB"

  const onwardMarkup = addMarkup(onwardPrice, type, onwardDestination);
  const grandTotal = Number(onwardPrice) + Number(onwardMarkup);

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
        // console.log("Response:", response.data);
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
    // if (!jwtToken) {
    //   navigate("/login");
    //   return;
    // }
    if (!passengerRef.current) return;

    try {
      const isValid = await passengerRef.current.validateForm();
      if (!isValid) return;
      setShowConfirmationModal(true);
    } catch (error) {
      console.error("Validation error:", error);
    }
  };

  const savePassengerDetails = async () => {
    try {
      const formData = passengerRef.current.getPassengerData();
      console.log(formData, "formdata");

      const payload = {
        passengers: [
          ...(formData.adults?.map((p) => ({
            type: "ADT",
            title: p.title,
            firstName: p.firstName,
            lastName: p.lastName,
            gender: p.gender === 1 ? "Male" : "Female",
            dob: p.dob,
            passportNumber: p.passportNumber,
            passportExpiry: p.passportExpiry,
            passportIssuingCountry: p.passportIssuingCountry,
          })) || []),
          ...(formData.childs?.map((p) => ({
            type: "CHD",
            title: p.title,
            firstName: p.firstName,
            lastName: p.lastName,
            gender: p.gender === 1 ? "Male" : "Female",
            dob: p.dob,
            passportNumber: p.passportNumber,
            passportExpiry: p.passportExpiry,
            passportIssuingCountry: p.passportIssuingCountry,
          })) || []),
          ...(formData.infants?.map((p) => ({
            type: "INF",
            title: p.title,
            firstName: p.firstName,
            lastName: p.lastName,
            gender: p.gender === 1 ? "Male" : "Female",
            dob: p.dob,
            passportNumber: p.passportNumber,
            passportExpiry: p.passportExpiry,
            passportIssuingCountry: p.passportIssuingCountry,
          })) || []),
        ],
        contactInfo: {
          email: formData.email,
          phoneNumber: formData.mobile,
        },
        selectedFlight: reducerState.selectedFlight,
      };

      const response = await axios.post(
        `${apiURL.baseURL}/api/passenger-details`,
        // `https://ffbackend-sn85.onrender.com/api/passenger-details`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            tptoken: reducerState?.tpToken?.tpTokenData?.access_token,
          },
        }
      );

      if (response.data.success) {
        setBookingReference(response.data.bookingReference);
        return response.data.bookingReference;
      }
    } catch (error) {
      console.error("Error saving passenger details:", error);
      throw error;
    }
  };

  const savePassengerDetailsAndEmail = async () => {
    try {
      const formData = passengerRef.current.getPassengerData();

      const payloadtosavepassenger = {
        totalAmount: grandTotal.toFixed(2),
        markup: onwardMarkup,
        email: formData.email,
        phoneNumber: formData.mobile,
        onward: {
          origin:
            reducerState.selectedFlight?.Onward?.flights[0]?.Departure
              ?.location || "",
          destination:
            reducerState.selectedFlight?.Onward?.flights[
              reducerState.selectedFlight?.Onward?.flights?.length - 1
            ]?.Arrival?.location || "",
          airlineDetails: reducerState.selectedFlight?.Onward?.flights?.map(
            (flight) => ({
              departure: {
                location: flight.Departure.location,
                date: flight.Departure.date,
                time: flight.Departure.time,
                terminal: flight.Departure.terminal,
              },
              arrival: {
                location: flight.Arrival.location,
                date: flight.Arrival.date,
                time: flight.Arrival.time,
                terminal: flight.Arrival.terminal,
              },
              duration: flight.duration,
              carrier: flight.carrier,
              number: flight.number,
            })
          ),
        },

        return:
          reducerState.selectedFlight?.Return == null
            ? null
            : {
                origin:
                  reducerState.selectedFlight?.Return?.flights[0]?.Departure
                    ?.location || "",
                destination:
                  reducerState.selectedFlight?.Return?.flights[
                    reducerState.selectedFlight?.Return?.flights?.length - 1
                  ]?.Arrival?.location || "",
                airlineDetails:
                  reducerState.selectedFlight?.Return?.flights?.map(
                    (flight) => ({
                      departure: {
                        location: flight.Departure.location,
                        date: flight.Departure.date,
                        time: flight.Departure.time,
                        terminal: flight.Departure.terminal,
                      },
                      arrival: {
                        location: flight.Arrival.location,
                        date: flight.Arrival.date,
                        time: flight.Arrival.time,
                        terminal: flight.Arrival.terminal,
                      },
                      duration: flight.duration,
                      carrier: flight.carrier,
                      number: flight.number,
                    })
                  ),
              },
        passengerDetails: [
          ...(formData.adults?.map((p) => ({
            paxType: "ADT",
            title: p.title,
            firstName: p.firstName,
            lastName: p.lastName,
            gender: p.gender === 1 ? "Male" : "Female",
            dob: p.dob,
            // passportNumber: p.passportNumber,
            // passportExpiry: p.passportExpiry,
            // passportIssuingCountry: p.passportIssuingCountry,
            amount: 5000,
            ticketNumber: "",
          })) || []),
          ...(formData.childs?.map((p) => ({
            paxType: "CHD",
            title: p.title,
            firstName: p.firstName,
            lastName: p.lastName,
            gender: p.gender === 1 ? "Male" : "Female",
            dob: p.dob,
            // passportNumber: p.passportNumber,
            // passportExpiry: p.passportExpiry,
            // passportIssuingCountry: p.passportIssuingCountry,
            amount: 5000,
            ticketNumber: "",
          })) || []),
          ...(formData.infants?.map((p) => ({
            paxType: "INF",
            title: p.title,
            firstName: p.firstName,
            lastName: p.lastName,
            gender: p.gender === 1 ? "Male" : "Female",
            dob: p.dob,
            // passportNumber: p.passportNumber,
            // passportExpiry: p.passportExpiry,
            // passportIssuingCountry: p.passportIssuingCountry,
            amount: 5000,
            ticketNumber: "",
          })) || []),
        ],
      };

      const response = await axios.post(
        `${apiURL.baseURL}/api/booking/create`,
        payloadtosavepassenger,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      console.log(response, "response from save passenger and email");
      if (response) {
        sessionStorage.setItem("bookingId", response.data.bookingId);
      }
    } catch (error) {
      console.error("Error saving passenger details:", error);
      throw error;
    }
  };

  // save passenger details in the db

  const handleContinue = async () => {
    setShowConfirmationModal(false);

    try {
      const isValid = await passengerRef.current.validateForm();
      if (!isValid) return;
      setLoader(true);

      const reference = await savePassengerDetails();
      savePassengerDetailsAndEmail();
      sessionStorage.setItem("bookingReference", reference);

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
                docNumber: passenger?.passportNumber,
                docType: "Passport",
                expireDate: passenger?.passportExpiry,
                issueCountry: passenger?.passportIssuingCountry?.countryCode,
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

  // console.log(reducerState, "reducer state");

  const homeData = useSelector(
    (state) => state?.metaData?.allMetaData?.passengerDetails
  );

  return (
    <main>
      {homeData && (
        <Helmet>
          {/* Main SEO Tags */}
          <title>{homeData?.title}</title>
          <meta name="description" content={homeData?.description} />
          <meta name="keywords" content={homeData?.keywords} />
          <link rel="canonical" href={homeData?.canonical} />

          {/* Open Graph (Social Media) Tags */}
          <meta property="og:title" content={homeData?.ogTitle} />
          <meta property="og:description" content={homeData?.ogDescription} />
          <meta property="og:image" content={homeData?.ogImage} />
          <meta property="og:url" content={homeData?.canonical} />
          <meta property="og:type" content="website" />
        </Helmet>
      )}
      <section className="breadcrumbs-area breadcrumb-bg bg-tertiary-6000 !py-5 md:!py-10">
        <div className="container">
          <h1
            className=" text-2xl md:text-4xl font-bold capitalize mb-1 relative text-secondary-6000 wow fadeInUp"
            data-wow-delay="0.0s"
          >
            Passenger Details
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

      {loader && <SearchResultLoader text={"Creating Your Itenerary"} />}

      <div className="container mt-5 relative">
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
    </main>
  );
};

export default MainPassengerPage;
