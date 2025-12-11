import React from "react";
import logo from "../assets/images/logo/logo.png";
import trustpilotLogo from "../assets/images/logo/trustpilot.png";
import instagramIcon from "../assets/images/social/insta.png";
import facebookIcon from "../assets/images/social/facebook.png";
import twitterIcon from "../assets/images/social/twitter.png";
import { Map, Phone } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <footer>
      <div className="footer-wrapper footer-bg  bg-secondary-6000">
        <div
          className={`container ${
            location?.pathname === "/" ? "block" : "hidden"
          }`}
        >
          <div className=" py-5">
            <div className="row g-4">
              {/* Quick Maps Section */}
              <div className="col-6 col-md-6 col-lg-3 ">
                <div className="">
                  <div className="">
                    <h4 className="text-white text-base md:text-2xl mb-3 font-bold">
                      Quick Maps
                    </h4>
                    <ul className="">
                      <li className="">
                        <Link
                          to="/about"
                          className="font-semibold text-gray-300 text-sm md:text-base transition-all hover:tracking-wider duration-200"
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          to="/services"
                          className="font-semibold text-gray-300 text-sm md:text-base transition-all hover:tracking-wider duration-200"
                        >
                          Services
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          to="/team"
                          className="font-semibold text-gray-300 text-sm md:text-base transition-all hover:tracking-wider duration-200"
                        >
                          Our Team
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Explore Section */}
              <div className="col-6 col-md-6 col-lg-3">
                <div className="">
                  <div className="">
                    <h4 className="text-white text-base md:text-2xl mb-3 font-bold">
                      Explore
                    </h4>
                    <ul className="">
                      <li className="">
                        <Link
                          to="/faq"
                          className="font-semibold text-gray-300 text-sm md:text-base transition-all hover:tracking-wider duration-200"
                        >
                          FAQ's
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          to="/contact-us"
                          className="font-semibold text-gray-300 text-sm md:text-base transition-all hover:tracking-wider duration-200"
                        >
                          Quick Enquiry
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          to="/testimonials"
                          className="font-semibold text-gray-300 text-sm md:text-base transition-all hover:tracking-wider duration-200"
                        >
                          {" "}
                          Testimonial
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="col-5 col-md-6 col-lg-3">
                <div className="">
                  <div className="">
                    <h4 className="text-white text-base md:text-2xl mb-3 font-bold">
                      Social Media
                    </h4>
                    <ul className="">
                      <li className="">
                        <a
                          href="https://www.instagram.com/AU.FirstFlight/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-gray-300 text-sm md:text-base transition-all hover:tracking-wider duration-200 flex items-center gap-3 mb-0.5"
                        >
                          <img src={instagramIcon} alt="Instagram" /> Instagram
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="https://www.facebook.com/AUFirstFlight"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-gray-300 text-sm md:text-base transition-all hover:tracking-wider duration-200 flex items-center gap-3 mb-0.5"
                        >
                          <img src={facebookIcon} alt="Facebook" /> Facebook
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="https://x.com/FirstFlightAU"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-gray-300 text-sm md:text-base transition-all hover:tracking-wider duration-200 flex items-center gap-3 mb-0.5"
                        >
                          <img src={twitterIcon} alt="Twitter" /> Twitter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Get In Touch Section */}
              <div className="col-7 col-md-6 col-lg-3">
                <div className="">
                  <div className="f">
                    <h4 className="text-white text-base md:text-2xl mb-3 font-bold">
                      Get In Touch
                    </h4>
                    <ul className="listing">
                      <li className="single-list">
                        <p
                          href="#"
                          className="font-semibold text-gray-300 text-sm md:text-base flex flex-row items-center justify-start gap-2"
                        >
                          <Map size={18} /> 57 Second street Brompton, SA, 5007,
                          Australia
                        </p>
                      </li>
                      <li className="single-list">
                        <p className="font-semibold text-gray-300 text-sm md:text-base flex flex-row items-center justify-start gap-2 ">
                          <Phone size={16} /> (+61) 290 112 019
                        </p>
                      </li>
                      <li className="single-list">
                        <p className="font-semibold text-gray-300 text-sm md:text-base flex flex-row items-center justify-start gap-2 ">
                          <i className="fa-regular fa-envelope"></i>{" "}
                          info@first-flight.com.au
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Middle Area */}
          <div className="footer-middle-area">
            <div className="footer-body">
              <div className="footer-content">
                <div className="d-flex flex-column gap-20">
                  {/* <div className="logo">
                    <img
                      src={logo}
                      alt="First Flight Logo"
                      className="changeLogo"
                    />
                  </div> */}
                  <p className="pera">
                    In the ever-evolving realm of online travel, the key to a
                    fulfilling travelling experience lies in choosing the right
                    travel experts to make the journey seamless. Reserving a
                    flight to a dream destination depends on many factors like
                    date, time, prices, best deals, discounts, fare class,
                    airline, and more. To understand the needs and demands of
                    modern travellers the First Flight Pty Ltd came into
                    existence on 16th July 2024. We are an Australian-based
                    online flight booking travel agency registered under the
                    Corporation Act 2001. We pride ourselves on providing
                    plethora of options to ensure that every traveller not only
                    secures the best flight deal but also experiences a seamless
                    and unparalleled booking process that is fast and easy to
                    use.
                  </p>
                </div>
                <div className="footer-right !w-full md:!w-[350px]">
                  {/* <h4 className="title">Subscribe Our Newsletter</h4>
                  <div className="subscribe-wraper ">
                    <input
                      className="footer-search"
                      type="search"
                      name="footer"
                      placeholder="Enter Your Email"
                    />
                    <button className="subscribe-btn">Subscribe</button>
                  </div> */}

                  <div align="right">
                    <a
                      href="https://www.trustpilot.com/review/first-flight.com.au"
                      target="_blank"
                    >
                      <img src={trustpilotLogo} className="responsive" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <ul className="listing">
                <li className="single-list">
                  <a href="cookie-policy" className="single">
                    Cookie Policy
                  </a>
                </li>
                <li className="single-list">
                  <a href="privacy-policy" className="single">
                    Privacy Policy
                  </a>
                </li>
                <li className="single-list">
                  <a href="disclaimer" className="single">
                    Disclaimer
                  </a>
                </li>
                <li className="single-list">
                  <a href="term-condition" className="single">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Area */}
        <div className="footer-bottom-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-between gap-14 flex-wrap">
                  <p className="pera">
                    © <span className="current-year">2025</span> FIRST FLIGHT
                    PTY LTD. All Rights Reserved.
                  </p>
                  <a
                    href="https://first-flight.com.au/"
                    target="_blank"
                    className="pera"
                  >
                    Powered by @ FIRST FLIGHT PTY LTD
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Up */}
        <div className="progressParent" id="back-top">
          <svg
            className="backCircle svg-inner"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>

        {/* Search Overlay */}
        <div className="search-overlay"></div>
      </div>
    </footer>
  );
};

export default Footer;
