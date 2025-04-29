import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo/logo.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { apiURL } from "../../constant/Constant";
import { setUser } from "../../redux/slices/login/loginSlice";

const VerifyOTP = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(180); // 3 minutes in seconds
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false); // For resend button state
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTimer = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const handleInput = (e, index) => {
    const { value } = e.target;
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (e.key === "Backspace" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleFocus = (e) => e.target.select();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.some((digit) => digit === "")) {
      setErrorMessage("Please fill out all OTP fields.");
      inputRefs.current[0]?.focus(); // Focus the first input box
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.post(
        `${apiURL.baseURL}/api/users/verifyotp`,
        {
          email,
          otp: otp.join(""),
        }
      );
      dispatch(setUser(response.data));
      navigate(-2);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Failed to verify OTP.");
      inputRefs.current[0]?.focus(); // Focus the first input box when there's an error
    } finally {
      setIsLoading(false);
    }
  };

  const resendOTP = async () => {
    setIsResending(true);
    setErrorMessage("");
    try {
      await axios.post(`${apiURL.baseURL}/api/users/login`, { email });
      setTimer(180); // Reset the timer to 3 minutes
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Failed to resend OTP.");
    } finally {
      setIsResending(false);
    }
  };

  const MaskedEmail = ({ email }) => {
    const maskEmail = (email) => {
      const [localPart, domain] = email.split("@");
      const visibleChars = 5; // Number of characters to show
      const maskedLocal = `${localPart.slice(0, visibleChars)}${"*".repeat(
        Math.max(0, localPart.length - visibleChars)
      )}`;
      return `${maskedLocal}@${domain}`;
    };

    return <p>Code to your email {maskEmail(email)}</p>;
  };

  return (
    <main>
      <section className="breadcrumbs-area breadcrumb-bg bg-tertiary-6000 py-10">
        <div className="container">
          <h1
            className=" text-4xl font-bold capitalize mb-1 relative text-secondary-6000 wow fadeInUp"
            data-wow-delay="0.0s"
          >
            Verify OTP
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
                  Verify
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
                <div className="flex flex-row text-sm font-medium text-gray-400 mb-3">
                  <p>
                    <MaskedEmail email={email} />
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="relative">
                    <div className="flex flex-row flex-nowrap w-full gap-2 pb-4">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleInput(e, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          onFocus={handleFocus}
                          ref={(el) => (inputRefs.current[index] = el)}
                          className="shadow-xs flex-1 w-1/6 rounded-lg border border-stroke bg-white p-2 text-center text-2xl font-medium text-gray-5 outline-none sm:text-4xl"
                        />
                      ))}
                    </div>
                    <div className="absolute -bottom-2">
                      {errorMessage && (
                        <p className="text-red-500 text-center">
                          {errorMessage}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="text-left mt-2">
                    {timer === 0 ? (
                      <button
                        type="button"
                        onClick={resendOTP}
                        className={`text-primary underline ${
                          isResending ? "cursor-not-allowed" : ""
                        }`}
                        disabled={isResending}
                      >
                        {isResending ? "Resending..." : "Resend OTP"}
                      </button>
                    ) : (
                      <p className="text-gray-600">
                        Resend OTP in {formatTimer(timer)}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className={`${
                      otp.some((digit) => digit === "") || isLoading
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-secondary-6000 hover:bg-secondary-700"
                    } text-gray-50 transition-all ease-in w-full py-2 mt-3 text-base font-medium rounded-md border-2`}
                    disabled={otp.some((digit) => digit === "") || isLoading}
                  >
                    {isLoading ? "Verifying..." : "Verify OTP"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VerifyOTP;
