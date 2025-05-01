import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import axios from "axios";
import { apiURL } from "../../constant/Constant";

const Signup = () => {
  const navigate = useNavigate();

  // State management
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState(""); // General error above the button
  const [loading, setLoading] = useState(false);

  // Input refs for focusing on error
  const inputRefs = {
    firstName: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
  };

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" }); // Clear individual field errors
    setFormError(""); // Clear general error
  };

  // Validate form
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      inputRefs[firstErrorField].current.focus(); // Focus the first field with an error
      return;
    }

    setLoading(true); // Show loader
    try {
      const response = await axios.post(
        `${apiURL.baseURL}/api/users/registration`,
        formData
      );
      const { data } = response.data;
      navigate(`/verifyotp?email=${data.email}`); // Navigate to OTP page with email in query params
    } catch (error) {
      if (
        error.response.data.message ===
        "User already exists. Check email for otp."
      ) {
        navigate(`/verifyotp?email=${formData.email}`); // Navigate to OTP page with email in query params
      } else {
        const errorMsg = error.response?.data?.message || "An error occurred.";
        setFormError(errorMsg); // Display general error message above the button
      }
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <main>
      <section className="breadcrumbs-area breadcrumb-bg bg-tertiary-6000 !py-5 md:!py-10">
        <div className="container">
          <h1
            className="text-2xl md:text-4xl font-bold capitalize mb-1 relative text-secondary-6000 wow fadeInUp"
            data-wow-delay="0.0s"
          >
            Register
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
                  Register
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <div className="login-area section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
              <div className="login-card">
                <div className="logo mb-10">
                  <a href="/" className="mb-2 d-block">
                    <img src={logo} alt="logo" className="changeLogo" />
                  </a>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6 relative">
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      ref={inputRefs.firstName}
                      className={`bg-white border ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                      placeholder="Enter First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm absolute -bottom-5">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="mb-6 relative">
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      ref={inputRefs.lastName}
                      className={`bg-white border ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                      placeholder="Enter Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm absolute -bottom-5">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                  <div className="mb-6 relative">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      ref={inputRefs.email}
                      className={`bg-white border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                      placeholder="Enter your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm absolute -bottom-5">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {formError && (
                    <p className="text-red-500 text-sm text-center mb-4">
                      {formError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="bg-secondary-6000 text-gray-50 transition-all ease-in w-full py-2 text-base font-medium rounded-md border-2 border-secondary-6000 hover:bg-transparent hover:text-secondary-6000"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Register"}
                  </button>
                </form>

                <div className="login-footer mb-5">
                  <div className="create-account">
                    <p>
                      Already have an account?{" "}
                      <Link to="/login">
                        <span className="text-primary">Login</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;

// <div className="sign-with">
// <p className="text-paragraph">Or Sign in with</p>
// <ul className="icon-login-section">
//   <li className="icon-login">
//     <a href="mailto:info@first-flight.com.au" target="_blank">
//       <i className="ri-mail-line"></i>
//     </a>
//   </li>
//   <li className="icon-login">
//     <a
//       href="https://www.facebook.com/AUFirstFlight"
//       target="_blank"
//     >
//       <i className="ri-facebook-fill"></i>
//     </a>
//   </li>
//   <li className="icon-login">
//     <a href="https://x.com/FirstFlightAU" target="_blank">
//       <i className="ri-twitter-fill"></i>
//     </a>
//   </li>
//   <li className="icon-login">
//     <a
//       href="https://www.instagram.com/aufirstflight/"
//       target="_blank"
//     >
//       {" "}
//       <i className="ri-instagram-fill"></i>
//     </a>
//   </li>
// </ul>
// </div>
