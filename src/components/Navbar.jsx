import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { ChevronDown, Phone, Star } from "lucide-react";

// import { Dropdown } from "flowbite-react";
// import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/login/loginSlice";

const Navbar = () => {
  const reducerState = useSelector((state) => state?.auth);
  const [authentic, setAuthentic] = useState(reducerState?.isAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    setAuthentic(reducerState?.isAuthenticated);
  }, [reducerState]);

  const handleLogout = () => {
    // console.log("handle logout");
    dispatch(logout());
  };
  // console.log(reducerState);

  return (
    <header className="header-area-three">
      <div className="main-header">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="top-menu-wrapper d-flex align-items-center justify-content-between">
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="logo" className="w-4/6 md:w-5/6" />
                    </Link>
                  </div>

                  <div className="top-header-right">
                    <div className="contact-section">
                      <div className="circle-primary-sm">
                        {/* <i className="ri-mail-line"></i> */}
                        <i className="fa-regular fa-envelope"></i>
                      </div>
                      <div className="info">
                        <p className="pera">Email Anytime</p>
                        <h4 className="title">
                          <a href="mailto:bookings@First-Flight.com.au">
                            Bookings@First-Flight.com.au{" "}
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="contact-section">
                      <div className="circle-primary-sm">
                        {/* <i className="ri-phone-line"></i> */}
                        <Phone size={16} />
                      </div>
                      <div className="info">
                        <p className="pera">Call our Experts</p>
                        <h4 className="title">
                          <a href="javascript:void(0)">(+61) 450 424 186</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="header-right-three pl-15 d-none d-lg-flex">
                    <div className="lang p-2">
                      <a
                        href="https://www.trustpilot.com/review/first-flight.com.au"
                        target="_blank"
                      >
                        {/* <i className="ri-star-line"></i> */}
                        <Star size={20} />
                      </a>
                      <p className="pera">
                        <a
                          href="https://www.trustpilot.com/review/first-flight.com.au"
                          target="_blank"
                        >
                          Trustpilot
                        </a>
                      </p>
                    </div>
                    <div className="divider gradient-divider"></div>

                    {authentic ? (
                      <div className="d-flex gap-8 align-items-center">
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-secondary-6000 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-secondary-500">
                              Hi Traveller
                              <ChevronDownIcon
                                aria-hidden="true"
                                className="-mr-1 size-5 text-gray-400"
                              />
                            </MenuButton>
                          </div>

                          <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            <div className="py-1">
                              <MenuItem>
                                <a
                                  href="#"
                                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 outline-none"
                                >
                                  My Account
                                </a>
                              </MenuItem>
                              <MenuItem>
                                <Link
                                  to="/bookings"
                                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 outline-none"
                                >
                                  My Booking
                                </Link>
                              </MenuItem>
                              <MenuItem>
                                <Link
                                  to="/contactus"
                                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 outline-none"
                                >
                                  Support
                                </Link>
                              </MenuItem>

                              <>
                                <MenuItem>
                                  <button
                                    onClick={() => handleLogout()}
                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 outline-none"
                                  >
                                    Sign out
                                  </button>
                                </MenuItem>
                              </>
                            </div>
                          </MenuItems>
                        </Menu>
                      </div>
                    ) : (
                      <div className="d-flex gap-8 align-items-center">
                        <p className="pera">
                          <Link to="/login" className="signin">
                            Sign In
                          </Link>
                        </p>
                        <div className="sign-btn">
                          <Link
                            to="/register"
                            className="btn-primary-sm radius-30"
                          >
                            Sign Up
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="menu-wrapper">
                  <div className="main-menu d-none d-lg-block">
                    <nav>
                      <div className="d-flex justify-content-between align-items-center">
                        <ul className="listing mb-0" id="navigation">
                          <li className="single-list">
                            <Link to="/" className="single link-active">
                              Home
                            </Link>
                          </li>

                          <li className="single-list">
                            <Link to="/about" className="single">
                              About Us
                            </Link>
                          </li>
                          <li className="single-list">
                            <Link to="/services" className="single">
                              Services
                            </Link>
                          </li>
                          <li className="single-list">
                            <Link to="/team" className="single">
                              Our Team
                            </Link>
                          </li>

                          <li className="single-list">
                            <Link to="faq" className="single">
                              FAQ's
                            </Link>
                          </li>
                          <li className="single-list">
                            <Link to="/testimonials" className="single">
                              Testimonial
                            </Link>
                          </li>
                          <li className="single-list">
                            <Link to="/contact-us" className="single">
                              Contact Us
                            </Link>
                          </li>

                          <li className="single-list">
                            <a
                              href="javascript:void(0)"
                              className="single text-nowrap d-flex gap-2 items-center"
                            >
                              Policies <ChevronDown size={16} />
                            </a>
                            <ul className="submenu">
                              <li className="single-list">
                                <Link to="/cookie-policy" className="single">
                                  Cookie Policy
                                </Link>
                              </li>
                              <li className="single-list">
                                <Link to="/privacy-policy" className="single">
                                  privacy policy
                                </Link>
                              </li>
                              <li className="single-list">
                                <Link to="/disclaimer" className="single">
                                  Disclaimer
                                </Link>
                              </li>
                              <li className="single-list">
                                <Link to="/term-condition" className="single">
                                  Terms & Conditions
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="d-block d-lg-none">
                            <div className="header-right pl-15">
                              <div className="sign-btn">
                                <Link
                                  to="/contact-us"
                                  className="btn-secondary-sm"
                                >
                                  Quick Enquiry
                                </Link>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="header-right">
                          <div className="sign-btn">
                            <Link to="/contact-us" className="btn-secondary-sm">
                              Quick Enquiry
                            </Link>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="div">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
