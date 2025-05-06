import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "../../node_modules/swiper/swiper-bundle.min.css";
import testimonial1 from "../assets/images/testimonial/testimonial-1.jpeg";
import logo from "../assets/images/logo/logo.png";
import featureShape from "../assets/images/icon/graphic.png";
import videoBanner from "../assets/images/hero/testimonial-three-banner.png";
import axios from "axios";
import { apiURL } from "../constant/Constant";
import dayjs from "dayjs";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for GET API

  // Fetch testimonials on component mount
  const fetchTestimonials = async () => {
    try {
      // const res = await axios.get(`${apiURL.baseURL}/api/testimonial`);
      const res = await axios.get(
        `https://ffbackend-sn85.onrender.com/api/testimonial`
      );
      if (res.status === 200) {
        console.log(res);
        setTestimonials(res?.data?.testimonials); // Assuming res.data is an array of testimonials
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);

  const sortedTestimonial = testimonials?.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  console.log(sortedTestimonial, "sortedTestimonial");

  return (
    <section className="testimonial-area-three position-relative section-bg-before-two top-padding pb-[100px]">
      <div className="container">
        <div className="row justify-content-center position-relative">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title mx-430 mx-auto text-center">
              <span className="highlights fancy-font font-400">
                Testimonial
              </span>
              <h4 className="title">What People Have Said About Our Service</h4>
            </div>
          </div>
        </div>
        <div className="row g-4 align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            {/* <div className="swiper testimonialThree-active">
              <div className="swiper-wrapper"> */}
            <Swiper
              modules={[Autoplay, Pagination]}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".swiper-pagination",
                type: "progressbar",
              }}
              className="testimonialThree-active"
            >
              {sortedTestimonial?.map((item, index) => (
                <SwiperSlide className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="user-img">
                      <img src={testimonial1} alt="first flight" />
                    </div>
                    <div className="user-info">
                      <p className="name">{item?.name}</p>
                      <p className="designation">Traveler</p>
                    </div>
                  </div>
                  <div className="rattings">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="testimonial-body">
                    <p className="pera line-clamp-3">{item?.message}</p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="logo">
                      <img
                        src={logo}
                        alt="first flight"
                        className="changeLogo"
                      />
                    </div>
                    <p className="date">
                      {dayjs(item?.updatedAt).format("MMMM D, YYYY")}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
              {/* <SwiperSlide className="testimonial-card">
                <div className="testimonial-header">
                  <div className="user-img">
                    <img src={testimonial1} alt="first flight" />
                  </div>
                  <div className="user-info">
                    <p className="name">Michel Coronel</p>
                    <p className="designation">Traveler</p>
                  </div>
                </div>
                <div className="rattings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="testimonial-body">
                  <p className="pera line-clamp-3">
                    Our Trip to the USA was wonderful. All credits to
                    First-flight.com. auto grab huge discounts on flight
                    bookings. A Big thanks.
                  </p>
                </div>
                <div className="testimonial-footer">
                  <div className="logo">
                    <img src={logo} alt="first flight" className="changeLogo" />
                  </div>
                  <p className="date">August 18, 2024</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="testimonial-card">
                <div className="testimonial-header">
                  <div className="user-img">
                    <img src={testimonial1} alt="first flight" />
                  </div>
                  <div className="user-info">
                    <p className="name">Angelina Hudson</p>
                    <p className="designation">Traveler</p>
                  </div>
                </div>
                <div className="rattings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="testimonial-body">
                  <p className="pera line-clamp-3">
                    Fantastic Team, Awesome Experience. Good luck for future
                    endeavours. Thank you
                  </p>
                </div>
                <div className="testimonial-footer">
                  <div className="logo">
                    <img src={logo} alt="first flight" className="changeLogo" />
                  </div>
                  <p className="date">August 20, 2024</p>
                </div>
              </SwiperSlide> */}
            </Swiper>
            {/* </div>
              <div className="swiper-pagination"></div>
            </div> */}
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="hero-banner imgEffect2 o-hidden radius-20">
              <img src={videoBanner} alt="first flight" />

              <div className="shape">
                <img src={featureShape} alt="first flight" />
              </div>
              <a
                href="https://www.youtube.com/watch?v=GTRQsa3jpXU"
                data-fancybox="video-gallery"
                className="wow bounceIn"
                data-wow-delay=".2s"
                target="_blank"
              >
                <div className="video-player">
                  <i className="fa-solid fa-play"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-testimonial">
        <img src={featureShape} alt="first flight" />
      </div>
    </section>
  );
};

export default Testimonial;
