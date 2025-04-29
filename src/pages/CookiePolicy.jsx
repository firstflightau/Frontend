import { ShieldCheck } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <main>
      <section className="breadcrumbs-area breadcrumb-bg bg-tertiary-6000 py-10">
        <div className="container">
          <h1
            className=" text-4xl font-bold capitalize mb-1 relative text-secondary-6000 wow fadeInUp"
            data-wow-delay="0.0s"
          >
            Cookie Policy
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
                  Cookie Policy
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
                  First-flight.com.au uses cookies to improve visitor’s
                  experience. By continuing to use our websites, you are
                  agreeing to our cookie policy. Our site contains content and
                  links operated by our partners, collaborators, and third
                  parties to provide seamless services to our clients. We do not
                  take any responsibility for these third-party sites or how
                  they manage their cookies. Our Privacy Policy and the Terms
                  and Conditions do not apply to them. We request our website
                  users to read and understand the Terms and Conditions and
                  Privacy Policies of third parties to comprehend how they
                  collect personal information, use it, and its purpose.
                </p>
              </div>

              <div className="single-terms mb-30">
                <h5 className="sub-title font-600">What are cookies?</h5>
                <p className="pera">
                  Cookies are tiny text files with unique identification codes
                  placed on the hard disk of a computer, tablet, or mobile
                  through the browser used to access the web. Whenever the user
                  visits the platform, they help to recognize subsequent user
                  visits and help to improve the website experiences by keeping
                  track of activities on the website and preferences. They help
                  in improving the functioning and user-friendliness of the
                  websites. Cookies are managed with a small program called a
                  tool or a tag.
                </p>
              </div>

              <div className="single-terms mb-30">
                <h5 className="sub-title font-600">Why do we use cookies?</h5>
                <p className="pera mb-30">
                  First-flight.com.au has a cookie policy to make sure that our
                  website offers flawless services, smooth navigation, the
                  latest updated information, and fast loading to our users.
                  Cookies help us to recognize your preferences, likes, and
                  dislikes by tracking your activities on the website which
                  allowsus to cater to your needs accordingly. Without placing
                  cookies, it is not easy to know customer needs, remember their
                  choices,store their registration details, etc.{" "}
                </p>

                <ul className="experience listing listing2">
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      Cookies are used for analytics to improve the display of
                      relevant information and enhance the website user
                      experience. Additionally, cookies are used for
                      administration purposes.
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      We use social media cookies that allow visitors to share
                      our website or a part of it on social media.{" "}
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      We use advertisement cookies to deliver visitors with
                      customized advertisements based on their interests which
                      helps us to analyze the effectiveness of ad campaigns.{" "}
                    </p>
                  </li>
                  <li className="single-list">
                    <i className="ri-shield-check-line"></i>
                    <p className="pera">
                      We use cookies to track when you open the emails sent to
                      you which ensures that we only send you what interests
                      you. It helps us to improve your online experience and
                      sets the tone for future communication for better service.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="single-terms mb-30">
                <h5 className="sub-title font-600">
                  What are the different types of cookies used for?
                </h5>
                <p className="pera">
                  At First-flight.com.au we use a few types of cookies necessary
                  for seamless operation of our website.
                </p>
              </div>

              <div className="single-terms mb-30">
                <h5 className="sub-title font-600">
                  Strictly Necessary Cookies
                </h5>
                <p className="pera">
                  We rely on these cookies to ensure that our website runs
                  seamlessly by facilitating page navigation, site access,
                  security, authentication, and load balancer requests. Without
                  these cookies, our website may not function properly, leading
                  to reduced or limited functionality for users. If users block
                  these cookies through their browser settings, it may cause our
                  website to cease functioning properly.
                </p>
              </div>

              <div className="single-terms mb-30">
                <h5 className="sub-title font-600">Session Cookies</h5>
                <p className="pera">
                  These cookies are temporary and helpthe websites to recognize
                  users and their preferences. It retains information as long as
                  the user navigates through the website and once the browser is
                  closed the cookies are deleted.{" "}
                </p>
              </div>

              <div className="single-terms mb-30">
                <h5 className="sub-title font-600">Persistent Cookies</h5>
                <p className="pera">
                  Persistent Cookies or Permanent Cookies remain in operation
                  even after the browser is closed and remain there until they
                  expire or are deleted. They are used mainly for tracking
                  purposes because they collect information related to browsing
                  preferences and navigation.
                </p>
              </div>

              <div className="single-terms mb-30">
                <h5 className="sub-title font-600">First-Party Cookies</h5>
                <p className="pera">
                  These cookies are installed directly by the website that you
                  visit like the URL shown in the address bar. They store
                  relevant information related to the website and enable us to
                  collect analytic dataand remember language settings,
                  locations, or any other preferred settings that provide a
                  great experience to users while using the website.
                </p>
              </div>

              <div className="single-terms mb-30">
                <h5 className="sub-title font-600">Third-Party Cookies</h5>
                <p className="pera">
                  Third-party cookies come from our partners, collaborators, or
                  third parties through their content such as videos, ads, web
                  banners, and scripts. Advertisers mainly use third-party
                  cookies to track user behaviour, build their profile during
                  web surfing, or target advertisements of particular interest
                  to users.{" "}
                </p>
              </div>

              <div className="single-terms mb-30">
                <h5 className="sub-title font-600">
                  How can you manage Cookies?
                </h5>
                <p className="pera">
                  Visitors can easily managecookies on our website by selecting
                  cookies preferences or by selecting them all. Visitors can not
                  opt out of Strictly Necessary Cookies required for website
                  operation. Session cookies will automatically get deleted once
                  you close the website.{" "}
                </p>
              </div>

              <div className="single-terms mb-30">
                <h5 className="sub-title font-600">Can we block Cookies?</h5>
                <p className="pera">
                  Visitors can even block the cookies and this might prevent
                  some pages from displaying correctly. They even got a message
                  from the currently opened website that they need to allow
                  cookies to view the website.{" "}
                </p>
              </div>

              <div className="single-terms mb-30">
                <h5 className="sub-title font-600">
                  How long will Cookies stay on my device?
                </h5>
                <p className="pera">
                  The duration a cookie will remain on your computer or mobile
                  device depends on whether it’s a persistent or session cookie.
                  Persistent cookies are stored on your device and are not
                  automatically deleted when you close yourweb browser. On the
                  other hand, Session cookies remain active until you close your
                  browser,at which point, they are automatically deleted. We
                  need to decide on the duration for both typesof cookies used
                  on the website.
                </p>
              </div>
              <div className="single-terms mb-30">
                <h5 className="sub-title font-600">
                  Do cookies compromise security?
                </h5>
                <p className="pera">
                  Cookies don’t impose any threat. They are merely text files
                  and can be deleted anytime. Any personal information provided
                  on the website such as login passwords, credit/debit card
                  details, personal information, etc. is stored in them unless
                  users turn off the cookie feature on their browser.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CookiePolicy;
