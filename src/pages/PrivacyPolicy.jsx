import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <main>
      <section className="breadcrumbs-area breadcrumb-bg bg-tertiary-6000 py-10">
        <div className="container">
          <h1
            className=" text-4xl font-bold capitalize mb-1 relative text-secondary-6000 wow fadeInUp"
            data-wow-delay="0.0s"
          >
            Privacy Policy
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
                  Privacy Policy
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
                <p className="pera">
                  The FIRST FLIGHT PTY LTD, we understand the importance of
                  private information and values customer’s concerns for
                  privacy. We appreciate the trust and faith our customers place
                  in us, and leave no stone unturned to safeguard and protect
                  the confidentiality of customers. We respect your privacy and
                  are committed to protecting it through every means possible.
                  Through this privacy policy, we made you understand how
                  information is collected, maintained, safeguarded, used, and
                  disclosed. We want our customers to read the Privacy Policy
                  clearly and understand all its clauses to get familiar with
                  the gathering and dissemination practices, safety, and
                  disclosure practices we use.
                </p>
              </div>

              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">Our Promise</h5>

                <ul className="experience listing listing2">
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      We assure the safety of information of our esteemed
                      customers and maintain all necessary measures to safeguard
                      and protect it from unauthorized access.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      We share personal information with third parties and
                      service providers only when a customer expresses interest
                      in using their products or services. Please note that this
                      privacy policy does not apply to third-party service
                      providers. To avail of their services customers, need to
                      go through their privacy policy and terms and conditions.{" "}
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      We never sell, rent, or disclose any personal information
                      to anyone.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Only authorized employees have the privilege to access
                      personal information.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      We promise that we will not reveal any personal
                      information to any organization. If we need to do so we
                      first take the consent of our customers or previously
                      inform them in the disclosure agreement or if required by
                      law.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      In case of any changes in our privacy policy, we will
                      update it on the website with the latest version and
                      request our customers to check regularly to remain
                      updated.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">
                  What kind of information do we collect?
                </h5>
                <p className="pera">
                  Personal information identifies a person without which we
                  can’t help our customers with the products, services, and
                  assistance they require. Depending on the product and services
                  we collect personal information that helps us to cater to
                  their specialized needs and requirements if any during their
                  travel and save them from facing any inconvenience.
                </p>
              </div>

              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">
                  We generally collect and process the following categories of
                  personal information.
                </h5>
                <ul className="experience listing listing2">
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      <b>Identification:-</b> Name, Date of Birth, Gender,
                      Nationality, Passport Number, Biometric Information.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      <b>Contact Details:-</b> Address, Mobile, Email address,
                      Landline Number, Professional or Employment related
                      Details
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      <b>Booking Details:-</b> Flight Details, Hotel Bookings,
                      Payment Details, any ancillary services like upgrades,
                      frequent flyer programs, extra baggage allowances
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      <b>Travel Details:-</b> Travel itinerary, check-in
                      information, Medical needs, Special dietary requirements
                      or any special assistance or preference, Insurance Travel
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      <b>Previous Bookings:-</b> Previous bookings and services
                      availed from us, feedback and interactions, Loyalty
                      Programs/ Frequent Flyer Details.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">
                  How we collect personal information.
                </h5>
                <p className="pera mb-30">
                  First-flight collects personal information about you when you
                  avail of our services, select products, browse websites, click
                  links, and frequently use search items. The ways we collect
                  personal information are: -{" "}
                </p>

                <ul className="experience listing listing2">
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Directly from the customers when they fill out the form to
                      avail of our services and products and need assistance.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      When they visit our website, Facebook, or social media
                      platforms that we own or maintain.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      We collect information about your device, tablet, or
                      mobile through which you access our services. We also
                      collect connection information IP address, operating
                      system, browser type, URLs of referring/exit pages, device
                      identifiers, etc.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">Through subscription or entry form.</p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">From our partners and third parties.</p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Through booking forms, requests, or queries for any other
                      information.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">When you contact us.</p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Through cookies and other tracking technologies.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">
                  How do we use the personal information that we collect?
                </h5>
                <p className="pera mb-30">
                  We collect your personal information when you need our
                  services. We process it only when required to provide smooth
                  bookings and to provide services that best suit your needs.
                </p>

                <ul className="experience listing listing2 mb-30">
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      To provide you with all the services like making bookings,
                      completing transactions, authenticating you when you log
                      in, and giving you customer support.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      We research and develop to make our services more
                      efficient, secure, and useful to our customers.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      To resolve the issues, you encounter while using our
                      services, to respond to your requests for assistance.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      To provide promotional and marketing material that may be
                      of interest to you aimed at driving engagement.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      We use personal information for safety and security to
                      verify accounts, monitor suspicious or fraudulent
                      activity, or identify any violation of policies and
                      services.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      We use personal information to protect our legitimate
                      business interests, compliance, audit functions, and
                      disclosure in case of the sale, or merger of a business.
                    </p>
                  </li>
                </ul>
                <p className="pera mb-30">
                  We use personal information only after obtaining the consent
                  to do so for a specific purpose. Customers can withdraw this
                  consent at any time.
                </p>
              </div>

              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">
                  How we store and secure your personal information
                </h5>
                <p className="pera">
                  We value your faith and understand our responsibility. All
                  reasonable technical and organizational measures are taken to
                  secure and safeguard your personal information. Our security
                  procedures and policies are regularly updated with the latest
                  technology and use industry-standard SSL (Secure Socket Layer)
                  encryption for personal data transmission. When data is
                  transferred to a third party, we take appropriate security
                  measures to ensure reasonable safeguards at all levels and use
                  the best-practice techniques.
                </p>
              </div>

              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">
                  Retention of personal information
                </h5>
                <p className="pera">
                  First-flight will retain personal information as long as it is
                  reasonably necessary for the purpose it is being collected or
                  processed for the purpose listed in the privacy policy. Under
                  some circumstances, we retain personal information for longer
                  periods in legal, tax, regulatory, and accounting
                  requirements. When this personal information is no longer
                  required we ensure either it is securely destroyed or stored
                  in a way it will no longer be used in the future.{" "}
                </p>
              </div>

              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">
                  How to access or manage personal information
                </h5>
                <p className="pera">
                  If you have created an account with us, you can manage your
                  personal information and subscription preferences within your
                  profile settings. In limited cases, requests may be denied or
                  restricted. For this, we provide reasons in writing for their
                  denial and restricted access. You have the right to ask us not
                  to use your personal information for marketing and can even
                  opt out of receiving non-essential emails by clicking the
                  unsubscribed button.{" "}
                </p>
              </div>

              <div className="single-subterms mb-30">
                <h5 className="sub-title font-600">
                  Your rights concerning resolving privacy policy
                </h5>
                <p className="pera">
                  Please feel free to call us regarding any concerns or
                  complaints about your personal information or any breach of
                  the privacy policy. You have the right to access, rectify, or
                  withdraw your personal information. We make every possible
                  effort to keep your personal information safe, accurate, and
                  complete. You are in the best position to inform us of any
                  changes in personal information that we hold about you and
                  respond to your complaint within a reasonable time. We will
                  forward this information only after you consent to our
                  partners and third parties to access your personal
                  information.
                </p>
              </div>

              <div className="single-terms mb-30">
                <h5 className="title font-600">Contact Us</h5>
                <p className="pera">
                  If you have any questions, comments, or requests regarding
                  this Policy, the exercise of your rights, or your personal
                  information, contact us at{" "}
                  <b>
                    <u>info@first-flight.com.au</u>
                  </b>{" "}
                  or{" "}
                  <a href="contact-us.php" target="_blank">
                    <b>
                      <u>click the link here</u>
                    </b>
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
