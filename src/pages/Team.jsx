import React from "react";
import { Link } from "react-router-dom";
import managingDirector from "../assets/images/icon/managing-director.png";
import directorFinance from "../assets/images/icon/director-finance.png";
import marketingManager from "../assets/images/icon/marketing-manager.png";
import tourSpecilist from "../assets/images/icon/tour-specialist.png";
import teamOperation from "../assets/images/icon/team-operations.png";
import teamHeadSales from "../assets/images/icon/team-head-sales.png";
import teamSales from "../assets/images/icon/team-sales.png";
import teamAccounts from "../assets/images/icon/team-accounts.png";
import surendraDirector from "../assets/images/team/director-surender.jpg";
import surajBhalla from "../assets/images/team/suraj-bhalla.jpg";

const Team = () => {
  return (
    <main>
      <section className="breadcrumbs-area breadcrumb-bg bg-tertiary-6000 py-10">
        <div className="container">
          <h1
            className=" text-4xl font-bold capitalize mb-1 relative text-secondary-6000 wow fadeInUp"
            data-wow-delay="0.0s"
          >
            Our Team
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
                  Our Team
                  {/* </Link> */}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="explore-area section-padding2">
        <div className="container">
          <div className="row g-4 mb-14">
            <div className="col-xl-12 col-lg-12">
              <h4 className="title">Meet our Talented Team</h4>
              <p>
                Teamwork is necessary in every field of business. At
                First-flight.com.au we understand the success of our company
                depends on the fundamentals of good teamwork with a shared
                passion for travel. We all desire to make travel accessible and
                are committed to curating a perfect travel experience for our
                customers. We have a team of travel enthusiasts and
                knowledgeable seasoned experts who come together to deliver
                exceptional experiencesfor your memorable trips. We are serious
                about our job and constantly refine ourselves for relentless
                growth.{" "}
              </p>
            </div>
          </div>
          {/* <div className="row g-4">
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div
                className="all-explore"
                id="v-pills-tab-three"
                role="tablist"
                aria-orientation="vertical"
              >
                <div
                  className="explore-btn active"
                  id="pills-explore-one-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-explore-one"
                  role="tab"
                  aria-controls="pills-explore-one"
                  aria-selected="true"
                >
                  <div className="d-flex gap-16 align-items-center">
                    <div className="explore-icon">
                      <img src={managingDirector} alt="First Flight" />
                    </div>
                    <h4 className="name">Managing Director</h4>
                  </div>
                </div>
                <div
                  className="explore-btn"
                  id="pills-explore-two-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-explore-two"
                  role="tab"
                  aria-controls="pills-explore-two"
                  aria-selected="true"
                >
                  <div className="d-flex gap-16 align-items-center">
                    <div className="explore-icon">
                      <img src={directorFinance} alt="First Flight" />
                    </div>
                    <h4 className="name">Director – Finance</h4>
                  </div>
                </div>
                <div
                  className="explore-btn"
                  id="pills-explore-three-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-explore-three"
                  role="tab"
                  aria-controls="pills-explore-three"
                  aria-selected="true"
                >
                  <div className="d-flex gap-16 align-items-center">
                    <div className="explore-icon">
                      <img src={marketingManager} alt="First Flight" />
                    </div>
                    <h4 className="name">Marketing Manager</h4>
                  </div>
                </div>
                <div
                  className="explore-btn"
                  id="pills-explore-four-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-explore-four"
                  role="tab"
                  aria-controls="pills-explore-four"
                  aria-selected="true"
                >
                  <div className="d-flex gap-16 align-items-center">
                    <div className="explore-icon">
                      <img src={tourSpecilist} alt="First Flight" />
                    </div>
                    <h4 className="name">Tour Specialist</h4>
                  </div>
                </div>
                <div
                  className="explore-btn"
                  id="pills-explore-five-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-explore-five"
                  role="tab"
                  aria-controls="pills-explore-five"
                  aria-selected="true"
                >
                  <div className="d-flex gap-16 align-items-center">
                    <div className="explore-icon">
                      <img src={teamOperation} alt="First Flight" />
                    </div>
                    <h4 className="name">Team Operations</h4>
                  </div>
                </div>
                <div
                  className="explore-btn"
                  id="pills-explore-six-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-explore-six"
                  role="tab"
                  aria-controls="pills-explore-six"
                  aria-selected="true"
                >
                  <div className="d-flex gap-16 align-items-center">
                    <div className="explore-icon">
                      <img src={teamHeadSales} alt="First Flight" />
                    </div>
                    <h4 className="name">Team Head – Sales</h4>
                  </div>
                </div>
                <div
                  className="explore-btn"
                  id="pills-explore-seven-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-explore-seven"
                  role="tab"
                  aria-controls="pills-explore-seven"
                  aria-selected="true"
                >
                  <div className="d-flex gap-16 align-items-center">
                    <div className="explore-icon">
                      <img src={teamSales} alt="First Flight" />
                    </div>
                    <h4 className="name">Team Sales</h4>
                  </div>
                </div>
                <div
                  className="explore-btn"
                  id="pills-explore-eight-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-explore-eight"
                  role="tab"
                  aria-controls="pills-explore-eight"
                  aria-selected="true"
                >
                  <div className="d-flex gap-16 align-items-center">
                    <div className="explore-icon">
                      <img src={teamAccounts} alt="First Flight" />
                    </div>
                    <h4 className="name">Team Accounts</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-6">
              <div className="tab-content" id="v-pills-tabContent-three">
                <div
                  className="tab-pane fade show active"
                  id="pills-explore-one"
                  role="tabpanel"
                  aria-labelledby="pills-explore-one"
                >
                  <div className="explore-conntent">
                    <h4 className="title">Managing Director</h4>
                    <div className="row g-4">
                      <div className="col-xl-6 col-lg-6 col-sm-6">
                        <article className="news-card-two">
                          <figure className="news-banner-two imgEffect">
                            <a href="#">
                              <img src={surendraDirector} alt="First Flight" />
                            </a>
                          </figure>
                          <div className="news-content">
                            <div className="heading">
                              <h4 className="title">Surender</h4>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-sm-6">
                        <article className="news-card-two">
                          <figure className="news-banner-two imgEffect">
                            <a href="#">
                              <img src={surendraDirector} alt="First Flight" />
                            </a>
                          </figure>
                          <div className="news-content">
                            <div className="heading">
                              <h4 className="title">Surender</h4>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-explore-two"
                  role="tabpanel"
                  aria-labelledby="pills-explore-two"
                >
                  <div className="explore-conntent">
                    <h4 className="title">Director – Finance</h4>
                    <div className="row g-4">
                      <div className="col-xl-6 col-lg-6 col-sm-6">
                        <article className="news-card-two">
                          <figure className="news-banner-two imgEffect">
                            <a href="#">
                              <img src={surendraDirector} alt="First Flight" />
                            </a>
                          </figure>
                          <div className="news-content">
                            <div className="heading">
                              <h4 className="title">Surender</h4>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-sm-6">
                        <article className="news-card-two">
                          <figure className="news-banner-two imgEffect">
                            <a href="#">
                              <img src={surendraDirector} alt="First Flight" />
                            </a>
                          </figure>
                          <div className="news-content">
                            <div className="heading">
                              <h4 className="title">Surender</h4>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-explore-three"
                  role="tabpanel"
                  aria-labelledby="pills-explore-three"
                >
                  <div className="explore-conntent">
                    <h4 className="title">Marketing Manager</h4>
                    <div className="row g-4">
                      <div className="col-xl-6 col-lg-6 col-sm-6">
                        <article className="news-card-two">
                          <figure className="news-banner-two imgEffect">
                            <a href="#">
                              <img src={surajBhalla} alt="First Flight" />
                            </a>
                          </figure>
                          <div className="news-content">
                            <div className="heading">
                              <h4 className="title">Suraj Bhalla</h4>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-sm-6">
                        <article className="news-card-two">
                          <figure className="news-banner-two imgEffect">
                            <a href="#">
                              <img src={surendraDirector} alt="First Flight" />
                            </a>
                          </figure>
                          <div className="news-content">
                            <div className="heading">
                              <h4 className="title">Surender</h4>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-explore-four"
                  role="tabpanel"
                  aria-labelledby="pills-explore-four"
                >
                  <div className="explore-conntent">
                    <h4 className="title">Tour Specialist</h4>
                    <div className="row g-4">
                      <div className="col-xl-6 col-lg-6 col-sm-6">
                        <article className="news-card-two">
                          <figure className="news-banner-two imgEffect">
                            <a href="#">
                              <img src={surajBhalla} alt="First Flight" />
                            </a>
                          </figure>
                          <div className="news-content">
                            <div className="heading">
                              <h4 className="title">Suraj Bhalla</h4>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-sm-6">
                        <article className="news-card-two">
                          <figure className="news-banner-two imgEffect">
                            <a href="#">
                              <img src={surendraDirector} alt="First Flight" />
                            </a>
                          </figure>
                          <div className="news-content">
                            <div className="heading">
                              <h4 className="title">Surender</h4>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-explore-five"
                  role="tabpanel"
                  aria-labelledby="pills-explore-five"
                >
                  <div className="explore-conntent">
                    <h4 className="title">Team Operations</h4>
                    <div className="row g-4">
                      <div className="col-xl-6 col-lg-6 col-sm-6">
                        <article className="news-card-two">
                          <figure className="news-banner-two imgEffect">
                            <a href="#">
                              <img src={surajBhalla} alt="First Flight" />
                            </a>
                          </figure>
                          <div className="news-content">
                            <div className="heading">
                              <h4 className="title">Suraj Bhalla</h4>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-sm-6">
                        <article className="news-card-two">
                          <figure className="news-banner-two imgEffect">
                            <a href="#">
                              <img src={surendraDirector} alt="First Flight" />
                            </a>
                          </figure>
                          <div className="news-content">
                            <div className="heading">
                              <h4 className="title">Surender</h4>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-explore-six"
                  role="tabpanel"
                  aria-labelledby="pills-explore-six"
                >
                  <div className="explore-conntent">
                    <h4 className="title">Team Head – Sales</h4>
                    <div className="row g-4">
                      <div className="col-xl-6 col-lg-6 col-sm-6">
                        <article className="news-card-two">
                          <figure className="news-banner-two imgEffect">
                            <a href="#">
                              <img src={surajBhalla} alt="First Flight" />
                            </a>
                          </figure>
                          <div className="news-content">
                            <div className="heading">
                              <h4 className="title">Suraj Bhalla</h4>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-sm-6">
                        <article className="news-card-two">
                          <figure className="news-banner-two imgEffect">
                            <a href="#">
                              <img src={surendraDirector} alt="First Flight" />
                            </a>
                          </figure>
                          <div className="news-content">
                            <div className="heading">
                              <h4 className="title">Surender</h4>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-explore-seven"
                  role="tabpanel"
                  aria-labelledby="pills-explore-seven"
                >
                  <div className="explore-conntent">
                    <h4 className="title">Team Sales</h4>
                    <div className="row g-4">
                      <div className="col-xl-6 col-lg-6 col-sm-6">
                        <article className="news-card-two">
                          <figure className="news-banner-two imgEffect">
                            <a href="#">
                              <img src={surajBhalla} alt="First Flight" />
                            </a>
                          </figure>
                          <div className="news-content">
                            <div className="heading">
                              <h4 className="title">Suraj Bhalla</h4>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-explore-eight"
                  role="tabpanel"
                  aria-labelledby="pills-explore-eight"
                >
                  <div className="explore-conntent">
                    <h4 className="title">Team Accounts</h4>
                    <div className="row g-4">
                      <div className="col-xl-6 col-lg-6 col-sm-6">
                        <article className="news-card-two">
                          <figure className="news-banner-two imgEffect">
                            <a href="#">
                              <img src={surendraDirector} alt="First Flight" />
                            </a>
                          </figure>
                          <div className="news-content">
                            <div className="heading">
                              <h4 className="title">Surender</h4>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-sm-6">
                        <article className="news-card-two">
                          <figure className="news-banner-two imgEffect">
                            <a href="#">
                              <img src={surendraDirector} alt="First Flight" />
                            </a>
                          </figure>
                          <div className="news-content">
                            <div className="heading">
                              <h4 className="title">Surender</h4>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default Team;
