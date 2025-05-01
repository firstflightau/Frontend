import React from "react";

import aboutBanner from "../assets/images/gallery/about-banner-three.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main>
      <section className="breadcrumbs-area breadcrumb-bg bg-tertiary-6000 !py-5 md:!py-10">
        <div className="container">
          <h1
            className=" text-2xl md:text-4xl font-bold capitalize mb-1 relative text-secondary-6000 wow fadeInUp"
            data-wow-delay="0.0s"
          >
            About Us
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
                  About Us
                  {/* </Link> */}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <section className="about-area">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-8 col-lg-6">
              <div className="section-title mx-650 mb-7 w-md-100">
                <h4 className="title">
                  Get The Best Travel Experience With First Flight
                </h4>
                <p className="pera">
                  In the ever-evolving realm of online travel, the key to a
                  fulfilling travelling experience lies in choosing the right
                  travel experts to make the journey seamless. Reserving a
                  flight to a dream destination depends on many factors like
                  date, time, prices, best deals, discounts, fare class,
                  airline, and more. To understand the needs and demands of
                  modern travellers the First Flight Pty Ltd came into existence
                  on 16<sup>th</sup> July 2024. We are an Australian-based
                  online flight booking travel agency registered under the
                  Corporation Act 2001. We pride ourselves on providing plethora
                  of options to ensure that every traveller not only secures the
                  best flight deal but also experiences a seamless and
                  unparalleled booking process that is fast and easy to use.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="about-count-section about-count-before-bg mb-60">
                <div className="banner">
                  <img src={aboutBanner} alt="travello" />
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12">
              <div className="section-title mb-30 w-md-100">
                <p className="pera">
                  The First Flight Pty Ltd distinguishes itself through its
                  clear navigation, user-friendly approach, intuitive interface,
                  flexibility, responsiveness, comprehensiveness, and
                  reliability. Our strength lies in swift and supportive
                  customer service, cost-effective solutions, transparent
                  pricing, and an extensive flight inventory has made us the
                  preferred choice for cost-conscious travellers. Supported by a
                  team of skilled and experienced travel professionals,
                  ATOL-protected financial security, state-of-the-art
                  technology, impeccable service, and exceptional dedication, we
                  simplify online bookings and strive to eliminate complexities.
                </p>

                <p className="pera">
                  The type of fares that we offer will serve as a cherry on top
                  in planning a dream vacation. All you have to do is pack your
                  bags, select the destination, and entrust the rest to us. We
                  are just a call away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
