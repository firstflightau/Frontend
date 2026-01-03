import React from "react";
import Amadeus from "../assets/images/brand/Amadeus.jpeg";
import Tids from "../assets/images/brand/Tids.jpeg";
import Qantas from "../assets/images/brand/Qantas.jpeg";
import Quatar from "../assets/images/brand/Quatar.jpeg";
import Singapaoure from "../assets/images/brand/Singapaoure.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const logos = [Amadeus, Qantas, Quatar, Singapaoure, Tids];

const Partners = () => {
  return (
    <div className="mb-16 bg-white">
      <div className="text-center mb-8">
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          <span className="text-red-600">Our</span>{" "}
          <span className="text-blue-700">Partners</span>
        </h1>

        {/* Gold Divider */}
        <div className="mt-4 flex justify-center">
          <span className="h-1 w-24 bg-yellow-500 rounded-full"></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={5}
          spaceBetween={40}
          speed={1000}              // smooth continuous animation
          autoplay={{
            delay: 0,               // marquee effect
            disableOnInteraction: false,
          }}
          className="py-6"
        >
          {logos.concat(logos).map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-28">
                <img
                  src={logo}
                  alt="airline logo"
                  className="
                    h-20 md:h-24
                    object-contain
                    transition-transform duration-500
                    hover:scale-110
                  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
