import React from "react";
import { Link } from "react-router-dom";

const Disclamer = () => {
  return (
    <main>
      <section className="breadcrumbs-area breadcrumb-bg bg-tertiary-6000 py-10">
        <div className="container">
          <h1
            className=" text-4xl font-bold capitalize mb-1 relative text-secondary-6000 wow fadeInUp"
            data-wow-delay="0.0s"
          >
            Disclaimer
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
                  Disclaimer
                  {/* </Link> */}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <div className="terms-condition area section-padding2">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="single-terms mb-30">
                {/* <!-- <h5 className="title font-600">Disclaimer</h5>--> */}
                <p className="pera mb-30">
                  The information provided on First-Flight.com.au is for general
                  purposes only. All information, products, services, images,
                  content, maps, graphics, links, or any particular links
                  provide dare in good faith. Despite all our efforts, the
                  website may contain typographical errors, typing mistakes, or
                  inaccuracies. Neither First-flight.com.au nor its affiliates,
                  partners, employees, agents, third-party service providers,
                  content providers, or licensers warrant that the website is
                  uninterrupted or error-free. The users expressly agree that
                  the use of First-flight.com.au is at their sole risk. In no
                  event, the website will be liable or responsible for any
                  direct, indirect, incidental, or disciplinary decision that
                  you may take based on such information.{" "}
                </p>

                <p className="pera mb-30">
                  This page sets forth the Terms and Conditions under which
                  First-flight.com.au provides the information governing the use
                  of this website. By using it, you shall be presumed to have
                  agreed to them. If at any point in time, you do not accept
                  these terms and conditions, do not continue your access to
                  this website. Advice received via this website should not be
                  relied upon for personal, medical, legal, or financial
                  decisions, and in such cases, the guidance and consultation of
                  professionals is a must. The right to access and transact is
                  reserved for security reasons.{" "}
                </p>

                <p className="pera mb-30">
                  Please ensure all the information while booking or taking any
                  service is correct and accurate. For security reasons, advice,
                  or new developments affecting your travel, we need to contact
                  you. If any of these details are not correct, we reserve the
                  right to cancel the transaction at your risk and cost.{" "}
                </p>

                <p className="pera">
                  First-flight.com.au is an independent travel portal that
                  provides travel-related services without any direct link to
                  any particular service provider. We provide necessary services
                  and assistance to users who make bookings, make amendments,
                  and take our services, we charge a service fee.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Disclamer;
