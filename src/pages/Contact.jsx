import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { Toast } from "flowbite-react";
import { Mail, MapPin, Phone } from "lucide-react";
import { HiFire } from "react-icons/hi";
import callcentergirl from "../assets/images/gallery/callcentergirl.png";
import { apiURL } from "../constant/Constant";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [errors, setErrors] = useState({});

  const inputRefs = {
    firstName: useRef(null),
    lastName: useRef(null),
    phone: useRef(null),
    email: useRef(null),
    message: useRef(null),
  };

  const token = useSelector((state) => state?.auth?.user?.token);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [id]: false }));
  };

  const validateForm = () => {
    const { firstName, lastName, phone, email, message } = formData;
    const newErrors = {};

    if (!firstName) newErrors.firstName = true;
    if (!lastName) newErrors.lastName = true;
    if (!phone) newErrors.phone = true;
    if (!email) newErrors.email = true;
    if (!message) newErrors.message = true;

    setErrors(newErrors);

    const firstErrorField = Object.keys(newErrors).find(
      (field) => newErrors[field]
    );

    if (firstErrorField && inputRefs[firstErrorField]?.current) {
      inputRefs[firstErrorField].current.focus();
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `${apiURL.baseURL}/api/contact`,
        formData,
        config
      );

      setToast({
        show: true,
        message: "Enquiry sent successfully!",
        type: "success",
      });

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setToast({
        show: true,
        message: error.response?.data?.message || "Something went wrong!",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="tour-details-section section-padding2">
        <div className="tour-details-area">
          <div className="tour-details-container">
            <div className="container">
              <div className="row g-4">
                <div className="col-xl-8">
                  <h4 className="contact-heading mb-3">
                    Feel Free to Write us Anytime!
                  </h4>

                  <div className="donation-payment">
                    <div className="card-style box-shadow border-0">
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                htmlFor="firstName"
                                className="block mb-2 text-base font-medium text-gray-900"
                              >
                                First Name
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                ref={inputRefs.firstName}
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className={`bg-white border-1 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                                  errors.firstName
                                    ? "border-red-500"
                                    : "border-gray-300"
                                }`}
                                placeholder="Enter First Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                htmlFor="lastName"
                                className="block mb-2 text-base font-medium text-gray-900"
                              >
                                Last Name
                              </label>
                              <input
                                type="text"
                                id="lastName"
                                ref={inputRefs.lastName}
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className={`bg-white border-1 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                                  errors.lastName
                                    ? "border-red-500"
                                    : "border-gray-300"
                                }`}
                                placeholder="Enter Last Name"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <div className="contact-form mb-3">
                              <label
                                htmlFor="phone"
                                className="block mb-2 text-base font-medium text-gray-900"
                              >
                                Contact No
                              </label>
                              <input
                                type="text"
                                id="phone"
                                ref={inputRefs.phone}
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`bg-white border-1 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                                  errors.phone
                                    ? "border-red-500"
                                    : "border-gray-300"
                                }`}
                                placeholder="Your phone no"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="contact-form mb-3">
                              <label
                                htmlFor="email"
                                className="block mb-2 text-base font-medium text-gray-900"
                              >
                                Email Id
                              </label>
                              <input
                                type="email"
                                id="email"
                                ref={inputRefs.email}
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`bg-white border-1 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                                  errors.email
                                    ? "border-red-500"
                                    : "border-gray-300"
                                }`}
                                placeholder="e.g example@gmail.com"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-12">
                            <textarea
                              className={`block p-2.5 w-full text-base text-gray-900 bg-white rounded-lg border-1 focus:ring-blue-500 focus:border-blue-500 ${
                                errors.message
                                  ? "border-red-500"
                                  : "border-gray-300"
                              }`}
                              id="message"
                              ref={inputRefs.message}
                              rows="12"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="Enter your message..."
                            ></textarea>
                          </div>
                        </div>

                        <div className="form-group col-12 payment-gateway-wrapper mt-3">
                          <div className="remember-me terms-condition">
                            <label>
                              <input
                                className="checkbox-style"
                                type="checkbox"
                                value="remember"
                                name="remember"
                              />
                              <small>
                                I agree to all the
                                <Link to="'term-condition">
                                  <span className="text-primary">Terms</span>
                                </Link>{" "}
                                and{" "}
                                <Link to="/privacy-policy">
                                  <span className="text-primary">
                                    Privacy policy
                                  </span>
                                </Link>
                              </small>
                              <span className="checkmark-style"></span>
                            </label>
                          </div>
                          <div className="mt-9 flex items-center justify-left">
                            <button
                              type="submit"
                              disabled={loading}
                              className="rounded-lg px-14 py-2 text-base text-gray-50 border-2 border-secondary-6000 bg-secondary-6000 hover:bg-transparent hover:text-secondary-6000 transition-all"
                            >
                              {loading ? "Submitting..." : "Submit"}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="date-travel-card position-sticky top-0">
                    <img
                      className="w-100 d-none d-lg-block tilt-effect radius-10"
                      src={callcentergirl}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {toast.show && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
          <Toast>
            <div
              className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                toast.type === "success"
                  ? "bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200"
                  : "bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200"
              }`}
            >
              <HiFire className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">{toast.message}</div>
            <Toast.Toggle
              className="items-center justify-center"
              onClick={() => setToast({ ...toast, show: false })}
            />
          </Toast>
        </div>
      )}
    </main>
  );
};

export default Contact;

// <div className="details-heading mb-30">
//                 <div className="d-flex flex-column">
//                   <h4 className="contact-heading">
//                     <b>FIRST FLIGHT PTY LTD</b>
//                   </h4>
//                   <div className="d-flex flex-wrap align-items-center gap-30 mt-16">
//                     <div className="location">
//                       <MapPin width={22} />
//                       <div className="name">
//                         57 Second street Brompton, SA, 5007, Australia
//                       </div>
//                     </div>
//                     <div className="divider"></div>
//                     <div className="d-flex align-items-center flex-wrap gap-20">
//                       <div className="count">
//                         <Phone width={22} />
//                         <p className="pera">
//                           <a href="tel:+61450424186">
//                             <b className="text-primary-500">
//                               (+61) 450 424 186
//                             </b>
//                           </a>
//                         </p>
//                       </div>
//                       <div className="divider"></div>
//                       <div className="count">
//                         <Mail width={22} />
//                         <p className="pera">
//                           <a href="mailto:info@First-Flight.com.au">
//                             <b className="text-primary-500">
//                               info@First-Flight.com.au
//                             </b>
//                           </a>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

{
  /* <section className="breadcrumbs-area breadcrumb-bg bg-tertiary-6000 py-10">
  <div className="container">
    <h1
      className=" text-4xl font-bold capitalize mb-1 relative text-secondary-6000 wow fadeInUp"
      data-wow-delay="0.0s"
    >
      Contact Us
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
            Contact Us
   
          </li>
        </ul>
      </nav>
    </div>
  </div>
</section>; */
}
