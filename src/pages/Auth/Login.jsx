import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import googleIcon from "../../assets/images/icon/google-icon.png";
import firstFlightLogo from "../../assets/images/logo/logo.png";
import { apiURL } from "../../constant/Constant";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [generalError, setGeneralError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset error messages
    setEmailError("");
    setGeneralError("");

    // Validate email
    if (!email) {
      setEmailError("Email is required.");
      emailRef.current.focus();
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      emailRef.current.focus();
      return;
    }

    try {
      setIsLoading(true);

      // Call the login API
      const response = await axios.post(`${apiURL.baseURL}/api/users/login`, {
        email,
      });

      // Navigate to Verify OTP page with email as a query parameter
      navigate(`/verifyotp?email=${email}`);
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Something went wrong.";
      if (error.response?.status === 404) {
        setGeneralError("User not registered. Please sign up.");
      } else {
        setGeneralError(errorMsg);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <section className="breadcrumbs-area breadcrumb-bg bg-tertiary-6000 !py-5 md:!py-10">
        <div className="container">
          <h1
            className=" text-2xl md:text-4xl font-bold capitalize mb-1 relative text-secondary-6000 wow fadeInUp"
            data-wow-delay="0.0s"
          >
            Login
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
                  Login
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
                  <a href="/" className="mb-7 d-block">
                    <img
                      src={firstFlightLogo}
                      alt="logo"
                      className="changeLogo"
                    />
                  </a>
                </div>

                <form onSubmit={handleLogin}>
                  <div className="mb-6 relative">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Email Id
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      ref={emailRef}
                      className={`bg-white border ${
                        emailError ? "border-red-500" : "border-gray-300"
                      } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                      placeholder="Enter your Email"
                    />
                    {emailError && (
                      <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                  </div>

                  {generalError && (
                    <p className="text-red-500 text-center mb-3">
                      {generalError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`${
                      isLoading
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-secondary-6000 hover:bg-transparent hover:text-secondary-6000"
                    } text-gray-50 transition-all ease-in w-full py-2 text-base font-medium rounded-md border-2 border-secondary-6000`}
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </button>
                </form>

                <div className="login-footer mt-4">
                  <div className="create-account mb-2">
                    <p>
                      Don’t have an account?{" "}
                      <Link to="/register" className="text-primary">
                        Register
                      </Link>
                    </p>
                  </div>
                  {/* <a
                    href="javascript:void(0)"
                    className="login-btn d-flex align-items-center justify-content-center gap-10"
                  >
                    <img src={googleIcon} alt="img" className="m-0" />
                    <span> Login with Google</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
