import React from "react";
import transAustraliaAirlines from "../assets/images/brand/trans-australia-airlines_opk.png";
import australianAirlinesLogo from "../assets/images/brand/Australian-Airlines-Logo-1986.png";
import virginAustralia from "../assets/images/brand/Virgin-Australias.png";
import qantasAirways from "../assets/images/brand/Qantas-Airways.png";
import australianAirlines from "../assets/images/brand/Austrian-Airlines.png";
import aslAirlines from "../assets/images/brand/ASL-Airlines.png";
import aaa from "../assets/images/brand/Australia-Alliance-Airlines.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "../../node_modules/swiper/swiper-bundle.min.css";

const Partners = () => {
  return (
    <div className="brand-area mb-14">
      <div className="container">
        <div className="swiper brandSwiper-active">
          <div className="swiper-wrapper">
            <Swiper
              modules={[Autoplay, Pagination]}
              loop={true}
              spaceBetween={15}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },

                1024: {
                  slidesPerView: 6,
                },
                0: {
                  slidesPerView: 2, // Show 1 slide on smaller devices
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              // navigation={true}
            >
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={transAustraliaAirlines} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={australianAirlinesLogo} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={virginAustralia} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={qantasAirways} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={australianAirlines} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={aslAirlines} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={aaa} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
