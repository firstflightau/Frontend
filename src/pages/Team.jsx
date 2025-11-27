import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // 1. Import Helmet
import { useSelector } from "react-redux";
import Empolyee from '../assets/images/team/director-surender.jpg'
// import { FaCheck } from "react-icons/fa";
const Team = () => {
  const title = "Why Our Team Stands Out";
  const cards = [
    { id: 1, heading: "Experienced Travel Advisors", desc: "Each member brings years of industry knowledge and expertise in domestic and international travel." },
    { id: 2, heading: "Customer-First Approach", desc: "We take time to understand your needs and provide personalised assistance for every booking." },
    { id: 3, heading: "Fast & Reliable Support", desc: "Whether it's last-minute changes, urgent queries or fare checks — our team is always ready to help." },
    { id: 4, heading: "Passionate About Travel", desc: "We don’t just book flights; we love travel. And we use that passion to make your trip better." },
    { id: 5, heading: "Multi-Country Expertise", desc: "From Australia, India, Canada, Thailand and beyond — our experts understand routes, airline rules and best seasonal fares." },
  ];

  const cardData = [
    {
      id: 1,
      img: Empolyee,
      title: "Alex Smith",
      subtitle: "Branch Head CEO",
      exp: "I more than 15 years of experience in travel industry  and multiple experience in online travel industry working in first-flight for 2 years",

    },
    {
      id: 2,
      img: Empolyee,
      title: "Danny Brown",
      subtitle: "Digital Marketing Head",
      exp: "Experience is my tool, strategy is my weapon — 6 years in digital marketing taught me how to turn attention into action and action into results.",

    },
    {
      id: 3,
      img: Empolyee,
      title: "Sam Taylor",
      subtitle: "Marketing Head",
      exp: "10 years of mastering airline fares, competitor pricing, RBD control, and revenue optimization — turning data into profitable pricing decisions.",

    },
    {
      id: 1,
      img: Empolyee,
      title: "Henry Hart",
      subtitle: "IT Head",
      exp: "Specialized in developing responsive web apps, optimizing performance, and working with cross-functional teams to deliver high-quality software products.",
    },
  ];
  const homeData = useSelector(
    (state) => state?.metaData?.allMetaData?.ourTeam
  );
  return (
    <main>
      {/* 4. Apply all metadata using Helmet */}
      {homeData && (
        <Helmet>
          {/* Main SEO Tags */}
          <title>{homeData?.title}</title>
          <meta name="description" content={homeData?.description} />
          <meta name="keywords" content={homeData?.keywords} />
          <link rel="canonical" href={homeData?.canonical} />

          {/* Open Graph (Social Media) Tags */}
          <meta property="og:title" content={homeData?.ogTitle} />
          <meta property="og:description" content={homeData?.ogDescription} />
          <meta property="og:image" content={homeData?.ogImage} />
          <meta property="og:url" content={homeData?.canonical} />
          <meta property="og:type" content="website" />
        </Helmet>
      )}
      <section className="breadcrumbs-area breadcrumb-bg bg-tertiary-6000 !py-5 md:!py-10">
        <div className="container">
          <h1
            className=" text-2xl md:text-4xl font-bold capitalize mb-1 relative text-secondary-6000 wow fadeInUp"
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

      <section className="explore-area section-padding2 bg-gradient-to-br from-[#00005A] to-[#FE0000] text-white">
        <div className="container">
          <div className="row g-4 mb-14">
            <div className="col-xl-12 col-lg-12">
              <h4 className="title">Meet our Talented Team</h4>
              <p className="mb-10 text-white">
                At First Flight, we believe that great journeys begin with a great team. Our strength comes from a group of passionate travel professionals who work together with one mission — <b>to make every trip smooth, affordable and stress-free for our customers.</b>We are a dedicated team of travel lovers, planners, problem-solvers and customer-care specialists who understand the needs of modern travellers. From finding the best fare to offering round-the-clock support, our team ensures you enjoy a seamless experience from the moment you book until you reach your destination.{" "}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-4 text-center">
                  <h2 className="text-xl font-bold" style={{ color: "#00005A" }}>
                    {card.title}
                  </h2>
                  <p className="text-lg font-semibold mt-1" style={{ color: "#FE0000" }}>
                    {card.subtitle}
                  </p>
                  <p>{card.exp}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="container mx-auto px-4">
            {/* Top heading */}
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-10" >
              {title}
            </h2>


            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {cards.map(card => (
                <div key={card.id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full">
                  <div className="flex items-center gap-3 mb-4">
                    {/* <FaCheck className="text-red-600" /> */}
                    <h3 className="text-lg font-bold" style={{ color: '#00005A' }}>{card.heading}</h3>
                  </div>
                  <p className="text-sm mt-auto" style={{ color: '#000000' }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="row g-4 mb-14">
            <div className="col-xl-12 col-lg-12 mt-5">
              <h4 className="title">Our Commitment</h4>
              <p className="mb-10 text-white">
                We constantly work on improving ourselves — learning new tools, understanding fare trends, monitoring airlines, and enhancing customer service.
                Our goal is simple:
                <b>To give you the best booking experience with honesty, efficiency and genuine care.</b>
                {" "}
              </p>
            </div>
          </div>
          <div className="row g-4 mb-14">
            <div className="col-xl-12 col-lg-12 mt-5">
              <h4 className="title">Together, We Make Your Journey Better</h4>
              <p className="mb-10 text-white">
                Behind every smooth booking, every great deal and every satisfied traveller — there is a hardworking team committed to your comfort and happiness.<br />Thank you for trusting First Flight.<br /><b>We are always here for you — before, during and after your journey.</b>
                {" "}
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
