import React from "react";
import { Link } from "react-router-dom";
import faq from "../assets/images/gallery/faq.jpg";

const Faq = () => {
  return (
    <main>
      <section className="breadcrumbs-area breadcrumb-bg bg-tertiary-6000 py-10">
        <div className="container">
          <h1
            className=" text-4xl font-bold capitalize mb-1 relative text-secondary-6000 wow fadeInUp"
            data-wow-delay="0.0s"
          >
            FAQ's
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
                  FAQ's
                  {/* </Link> */}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="question-area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="section-tittle mb-50">
                <h2 className="title font-700">Frequently asked questions</h2>
                <p className="pera">
                  Everything You Need To Know About Travel: Your FAQs Answered
                </p>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What doI need to know before booking a flight?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      There are various factors that a customer needs to know
                      before booking a flight such as cost, discounts, baggage
                      policy, fare classes, airport regulations, and
                      complications that may arise during long-haul flights,
                      etc. Kindly visit the airline’s website and our terms and
                      conditions that provide necessary guidance and help.{" "}
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed additional-styles"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How do I book with First Flight Travel?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Booking flights and other travel-related services is much
                      easier with First Flight. We provide all the details about
                      the best deals on flights, discounts, multi-city flights,
                      long-haul flights, etc. on our website. If you have any
                      queries or need assistance you can call our customer care
                      desk or our travel experts to get answers to all queries.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed additional-styles"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      When do I have to check in for my flight?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      - For international flights, travelers need to check in at
                      least 3 hours before departure
                      <br />
                      <br />- For Domestic flights, travelers need to check in
                      at least 2 hours before departure to complete formalities.{" "}
                      <br />
                      <br />
                      The First Flight is responsible if the travelers arrive at
                      the airport later than the specified time or miss the
                      flight.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed additional-styles"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Where can I get relevant information about my departure
                      terminal, baggage allowance, flight timings, etc.?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      After making bookings, we provide E-tickets to travelers
                      with all the relevant information about their day and time
                      of departure, departure terminal, baggage allowance, and
                      special requests if they have any to make a journey
                      hassle-free. For any latest updates, we request travelers
                      to visit the airline’s website.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed additional-styles"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Is it necessary to reconfirm my flight?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We recommend reconfirmation to avoid any last-moment
                      inconveniences. We request our travelers to reconfirm
                      their flights at least 72 hours before the estimated
                      departure time to know about any changes in their inbound
                      or outbound flights by visiting the websites of respective
                      airlines or calling us. For more updates and the latest
                      information,visit the airline’s website at least 24 hours
                      before departure.{" "}
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed additional-styles"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      What is the change or cancellation policy of my booking?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      In some cases, travellers may need to cancel or reschedule
                      their flights due to unavoidable circumstances. If you
                      find yourself in this situation, please contact our help
                      desk, visit our office, or email us to request changes or
                      cancellations. Any changes or cancellations will be
                      subject to applicable fees according to the fare contract
                      you purchased. Please remember that certain service
                      arrangements may not be changeable once confirmed, and
                      making amendments to them may result in a cancellation
                      charge of up to 100%. Depending on the insurance policy
                      you have purchased, it may be possible to reclaim some or
                      all of the losses incurred.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button collapsed additional-styles"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      How do I make payments, and how my financial transaction
                      is secured?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      You can pay us in different ways at your convenience
                      <br />
                      - In Person at our branch by Cash/Card
                      <br />
                      - Through online banking
                      <br />
                      - Bank deposit or transfer to the company’s account
                      <br />
                      <br />
                      Any payments made via bank transfers must be cleared
                      before the departure date and notified. Rest assured
                      online payments made by you are totally safe. All the
                      financial transactions are ATOL protected. First Flight is
                      IATA accredited enabling our customers to book with us
                      confidently.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEight">
                    <button
                      className="accordion-button collapsed additional-styles"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      How do I raise issues and complaints?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We do our best to ensure your travel arrangements are
                      smooth and seamless. However, if you have any complaints
                      or encounter any problems, please let us know right away.
                      You can reach our customer care by phone and email us with
                      all the relevant details and booking references.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingNine">
                    <button
                      className="accordion-button collapsed additional-styles"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseNine"
                      aria-expanded="false"
                      aria-controls="collapseNine"
                    >
                      Are taxes and booking fees included in the prices that you
                      show?
                    </button>
                  </h2>
                  <div
                    id="collapseNine"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingNine"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      There are no hidden charges. All the prices shown included
                      fees and applicable taxes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <img
                className="w-100 d-none d-lg-block tilt-effect radius-10"
                src={faq}
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faq;
