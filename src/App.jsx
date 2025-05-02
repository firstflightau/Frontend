import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../plugin.css";
import Navbar from "./components/Navbar";
import "./styles/index.scss";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Faq from "./pages/Faq";
import OnewaySearchResult from "./pages/OnewaySearchResult";
import Testimonial from "./pages/TestimonialPage";
import Contact from "./pages/Contact";
import Disclamer from "./pages/Disclamer";
import TermCondition from "./pages/TermCondition";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import VerifyOTP from "./pages/Auth/VerifyOTP";
import { useDispatch, useSelector } from "react-redux";
import MainPassengerPage from "./pages/flightBookingPages/MainPassengerPage";
import { fetchIpAddress } from "./redux/slices/token/tokenSlice";
import { useEffect } from "react";
import dayjs from "dayjs";
import { fetchAirportList } from "./redux/slices/AirportList/airportSlice";
import { fetchAirlineList } from "./redux/slices/AirlineList/AirlineListSlice";
import MainBookingPage from "./pages/flightBookingPages/MainBookingPage";
import TicketPage from "./pages/flightBookingPages/TicketPage";
import ReturnSearchResult from "./pages/ReturnSearchResult";
import Booking from "./pages/Booking";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminLogin from "./pages/Admin/AdminLogin";
import ProtectedRoute from "./pages/Admin/AdminComponents/ProtectedRoute";
import AdminMarkup from "./pages/Admin/AdminMarkup";
import AdminBookings from "./pages/Admin/AdminBookings";
import FailedTicketPage from "./pages/flightBookingPages/FailedTicketPage";
import ProcessingTicket from "./pages/flightBookingPages/ProcessingTicket";
import { fetchMarkupAmount } from "./redux/slices/markup/markupSlice";
import AdminUsers from "./pages/Admin/AdminUsers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import AdminEnquiry from "./pages/Admin/AdminEnquiry";
import AdminTestimonial from "./pages/Admin/AdminTestimonial";

// Admin Components
// import AdminLayout from "./pages/Admin/AdminLayout";
// import AdminDashboard from "./pages/Admin/Dashboard";
// import AdminUsers from "./pages/Admin/Users";
// import AdminBookings from "./pages/Admin/Bookings";
// import AdminTestimonials from "./pages/Admin/Testimonials";
// import AdminEnquiries from "./pages/Admin/Enquiries";

function App() {
  const reducerState = useSelector((state) => state);
  const dispatch = useDispatch();

  const compareDates = () => {
    let comparisonDate = reducerState?.tpToken?.date;
    if (!comparisonDate) {
      return true;
    }
    const currentDate = dayjs().format("YYYY-MM-DD");
    return dayjs(currentDate).isBefore(comparisonDate);
  };

  useEffect(() => {
    // const tpToken = compareDates();
    // if (tpToken) {
    dispatch(fetchIpAddress());
    // }
    if (reducerState?.airlineList?.airlines?.length === 0) {
      dispatch(fetchAirportList());
    }
    if (reducerState?.airportList?.airports?.length === 0)
      dispatch(fetchAirlineList());
    // if (!reducerState?.markupData?.markupAmount?.markup) {
    dispatch(fetchMarkupAmount());
    // }
  }, []);

  return (
    <>
      <Routes>
        {/* Website Routes */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/team" element={<Team />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/testimonials" element={<Testimonial />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/disclaimer" element={<Disclamer />} />
                <Route path="/term-condition" element={<TermCondition />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/verifyotp" element={<VerifyOTP />} />
                <Route
                  path="/onewaySearchResult"
                  element={<OnewaySearchResult />}
                />
                <Route
                  path="/returnSearchResult"
                  element={<ReturnSearchResult />}
                />
                <Route path="/flight/review" element={<MainPassengerPage />} />
                <Route
                  path="/flight/reviewbooking"
                  element={<MainBookingPage />}
                />
                <Route
                  path="/flight/reviewbooking/ValidatingPayment/:id"
                  element={<ProcessingTicket />}
                />
                <Route path="/ticket" element={<TicketPage />} />
                <Route
                  path="/ticket/failed/:id"
                  element={<FailedTicketPage />}
                />

                <Route path="/bookings" element={<Booking />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="bookings" element={<AdminBookings />} />
            <Route path="markup" element={<AdminMarkup />} />
            <Route path="enquiry" element={<AdminEnquiry />} />
            <Route path="testimonial" element={<AdminTestimonial />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
