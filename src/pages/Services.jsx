import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // 1. Import Helmet
import { useSelector } from "react-redux";
import { FaPlaneDeparture, FaCheckCircle } from "react-icons/fa";
const Services = () => {
  const aboutData = useSelector(
    (state) => state?.metaData?.allMetaData?.services
  );
   const servicesData = [
  {
    id: 1,
    title: "Flight Booking (Domestic & International)",
    desc:
      "We search hundreds of airline options to find the best route and price for your trip. Whether it’s a same day domestic flight or a long haul international route, we handle bookings, seat assignments and ticket issuance with speed and accuracy.",
    subHeading: "What you get:",
    points: [
      "Best fare comparisons (direct, connecting & multi city)",
      "Flexible ticketing options (refundable and changeable fares)",
      "Clear price breakdown with no hidden fees",
    ],
  },
  {
    id: 2,
    title: "Group & Corporate Travel",
    desc:
      "Customized solutions for corporate teams, student groups and family travel. We manage complex itineraries, negotiated group fares and consolidated billing to make large bookings simple and cost effective.",
    subHeading: "What you get:",
    points: [
      "Group fare negotiation and bulk booking",
      "Dedicated account manager for every group",
      "Flexible invoicing and payment options",
    ],
  },
  {
    id: 3,
    title: "Last Minute & Emergency Travel",
    desc:
      "Need to fly urgently? Our team specialises in last minute bookings and emergency travel arrangements — fast fare checks and priority ticketing so you reach your destination when it matters most.",
    subHeading: "What you get:",
    points: [
      "Fast search for last minute inventory",
      "Emergency booking assistance and ticket changes",
      "24×7 priority support",
    ],
  },
  {
    id: 4,
    title: "Fare Monitoring & Alerts",
    desc:
      "Never miss a deal. Our fare analysts monitor seasonal price shifts and airline promotions, and send instant alerts when fares drop for routes you care about.",
    subHeading: "What you get:",
    points: [
      "Personalised fare alerts",
      "Price drop notifications and deal recommendations",
      "Best time to buy advice from our experts",
    ],
  },
  {
    id: 5,
    title: "Reservation Management & Support",
    desc:
      "From name corrections to re bookings and refunds — we manage the full lifecycle of your reservation. Our ticketing specialists ensure quick confirmations and accurate records for every booking.",
    subHeading: "What you get:",
    points: [
      "Complete PNR management and ticket issuance",
      "Clear refund and cancellation support",
      "Assistance with special requests (meals, wheelchair, baggage)",
    ],
  },
  {
    id: 6,
    title: "Travel Advice & Visa Assistance",
    desc:
      "Practical travel advice and basic visa guidance for popular routes. We provide country specific travel tips, baggage rules, transit guidance and checklist support so your trip is hassle free.",
    subHeading: "What you get:",
    points: [
      "Route and transit advice",
      "Baggage allowance guidance and airline rules",
      "Basic visa document checklist (where applicable)",
    ],
  },
];

  return (
    <div>
      {aboutData && (
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
      )}
      <section className="breadcrumbs-area breadcrumb-bg bg-tertiary-6000 !py-5 md:!py-10">
        <div className="container">
          <h1
            className=" text-2xl md:text-4xl font-bold capitalize mb-1 relative text-secondary-6000 wow fadeInUp"
            data-wow-delay="0.0s"
          >
            Our Services
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
                  Our Services
                  {/* </Link> */}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="news-area section-padding2  py-14 bg-gradient-to-br from-[#00005A] to-[#FE0000] text-white">
        <div className="container">
          <div className="row g-4 mb-60">
            <div className="col-xl-12 col-lg-12">
              <h4 className="title mb-30">
               Fast. Simple. Trusted flight bookings from Australia.
              </h4>
              <p className="mb-10 text-white">
                {" "}
               Find and book the best fares for domestic and international travel — instant search, clear pricing, and reliable support from our Australia based travel experts.{" "}
              </p>

              <p className="mb-10 text-white">
              <b>Quick highlights:</b>
             <li>Real time fare search across top airlines</li>
             <li>Secure payment & instant confirmation</li>
             <li>24×7 customer support</li>{" "}
              </p>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-5">
              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
                {servicesData.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white text-[#00005A] rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#FE0000] text-white text-2xl mb-5 mx-auto">
                      <FaPlaneDeparture />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-center mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-center mb-4">{item.desc}</p>

                    {/* Sub Heading */}
                    <h4 className="text-lg font-semibold mb-3 text-[#FE0000]">
                      {item.subHeading}
                    </h4>

                    {/* Bullet List */}
                    <ul className="space-y-2">
                      {item.points.map((pt, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <FaCheckCircle className="text-[#00005A]" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;