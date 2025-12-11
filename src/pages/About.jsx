import React from "react";
import { Helmet } from "react-helmet-async"; // 1. Import Helmet
import { useSelector } from "react-redux";
import aboutBanner from "../assets/images/gallery/about-banner-three.png";
import aboutBanner2 from "../assets/images/gallery/abour2ndbanner.jpg";
import aboutBanner3 from "../assets/images/gallery/aboutbanner3.jpg";

import { Link } from "react-router-dom";
const cards = [
  {
    title: "Flight Booking",
    desc: "We provide seamless domestic and international flight booking services.",
    sub: "Why Choose Us:",
    points: ["Best Price Guarantee", "Fast Booking", "24/7 Support"]
  },
  {
    title: "Travel Assistance",
    desc: "Complete guidance for students, families and business travellers.",
    sub: "We Help With:",
    points: ["Visa Guidance", "Route Planning", "Emergency Help"]
  },
  {
    title: "Group Travel",
    desc: "Affordable and organized group travel planning with expert support.",
    sub: "Includes:",
    points: ["Bulk Discounts", "Flexible Dates", "Dedicated Agent"]
  },
  {
    title: "Last-Minute Deals",
    desc: "Get urgent flight bookings at the best available fares.",
    sub: "Benefits:",
    points: ["Instant Tickets", "Low Prices", "Priority Support"]
  },
  {
    title: "Ticket Management",
    desc: "We assist with ticket change, rescheduling and cancellations.",
    sub: "Services:",
    points: ["Date Change", "Refund Help", "Seat Upgrades"]
  },
  {
    title: "Travel Advisory",
    desc: "Expert travel suggestions for better, safe and easy journeys.",
    sub: "Covers:",
    points: ["Best Routes", "Airline Advice", "Safety Tips"]
  }
];
const About = () => {
  // 3. Get the metadata from the Redux store
  const aboutData = useSelector(
    (state) => state?.metaData?.allMetaData?.aboutUs
  );
  return (
    <div>
      {/* 4. Apply all metadata using Helmet */}
      {/* {aboutData && ( */}
      <Helmet>
        {/* Main SEO Tags */}
        <title>{aboutData?.title}</title>
        <meta name="description" content={aboutData?.description} />
        <meta name="keywords" content={aboutData?.keywords} />
        <link rel="canonical" href={aboutData?.canonical} />

        {/* Open Graph (Social Media) Tags */}
        <meta property="og:title" content={aboutData?.ogTitle} />
        <meta property="og:description" content={aboutData?.ogDescription} />
        <meta property="og:image" content={aboutData?.ogImage} />
        <meta property="og:url" content={aboutData?.canonical} />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* )} */}
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
                  <span style={{ color: "#FE0000" }}>Your Trusted </span>
                  <span style={{ color: "#00005A" }}>Flight Booking Partner in Australia </span>
                </h4>
                <p className="pera">
                  First Flight Pty Ltd is an Australia-based online travel company committed to making flight bookings simple, affordable and stress-free. We help travellers compare fares, explore routes and book domestic and international flights with complete transparency and real-time pricing.
                  Founded in July 2024 under the Australian Corporation Act, our mission is clear —
                  <b>to deliver fast booking, honest pricing and outstanding support for every traveller.</b>
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
            <div className="col-xl-4 col-lg-6">
              <div className="about-count-section about-count-before-bg mb-60">
                <div className="banner">
                  <img src={aboutBanner2} alt="travello" />
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div className="section-title mx-650 mb-7 w-md-100 " style={{ marginTop: "-40px", marginLeft: "90px" }}>
                <h4 className="title">
                  <span style={{ color: "#FE0000" }}>What </span>
                  <span style={{ color: "#00005A" }}>We Do</span>
                </h4>

                <p className="pera">
                  We specialise in providing a seamless flight booking experience for individuals, families, students and business travellers across Australia. From last-minute flights to long-haul international trips, our experts ensure you always get the best options available.
                </p>
                <h5>Our services include:</h5>
                <li >•	Domestic & international flight bookings</li>
                <li >•	Fare comparison & best-price guidance</li>
                <li >•	Group and student travel assistance</li>
                <li >•	Last-minute & emergency bookings</li>
                <li >•	Ticketing, changes & support</li>
                <li >•	Travel advice and route planning</li>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div className="section-title mx-650 mb-7 w-md-100">
                <h4 className="title">
                  <span style={{ color: "#FE0000" }}>Why Travellers  </span>
                  <span style={{ color: "#00005A" }}>Trust First Flight </span>
                </h4>
                <ul style={{ listStyleType: "disc", color: "#00005A", marginLeft: "20px" }}>
                  <li>
                    ✔ Fast & transparent booking process
                  </li>
                  <li>
                    ✔ Clear pricing with no hidden fees
                  </li>
                  <li>
                    ✔ Responsive & helpful customer support
                  </li>
                  <li>
                    ✔ Trusted airline partners globally
                  </li>
                  <li>
                    ✔ Experienced team with multi-route expertise
                  </li>
                  <li>
                    ✔ Secure payments & verified reviews
                  </li>
                </ul>

                <p className="pera">
                  We combine smart technology with friendly human support to help you travel without stress.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="about-count-section about-count-before-bg mb-60">
                <div className="banner">
                  <img src={aboutBanner3} alt="travello" />
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12">
              <div className="section-title mb-30 w-md-100">
                <span style={{ color: "#FE0000" }}><b>Our Commitment </b> </span>
                <p className="pera">
                  We continuously work to improve your travel experience by analysing fare trends, enhancing our booking system and providing reliable assistance throughout your journey.
                </p>

                <p className="pera">
                  <span style={{ color: "#00005A" }}><b>With First Flight, you’re not just booking a ticket —<br/>
                    you’re choosing peace of mind, value and trusted support.
                  </b>  </span>
                </p>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12">
              <div className="section-title mb-30 w-md-100">
                <span style={{ color: "#00005A" }}><b>We’re here for you </b> </span>
                <p className="pera">
                  Whether you’re flying for work, holiday or family visits, our team ensures your booking is quick, smooth and budget-friendly.
                </p>

                <p className="pera">
                  <span style={{ color: "#FE0000" }}><b>Travel smart. Travel safe. Travel with First Flight.</b>  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
