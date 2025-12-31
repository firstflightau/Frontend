import React from "react";

import heroBanner from "../assets/images/hero/hero-three-banner.png";
import heroVideo from "../assets/images/videos/newyaer1.mp4";
// import heroVideo from "../assets/images/videos/chritsmas.mp4";
import user1 from "../assets/images/hero/user-1.jpeg";
import user2 from "../assets/images/hero/user-2.png";
import user3 from "../assets/images/hero/user-3.png";
import user4 from "../assets/images/hero/user-4.jpeg";
import hand from "../assets/images/icon/hand.png";

const HeroSection = () => {
  return (
    <section className="hero-padding-for-three video-overlay position-relative">
      <div className="hero-bg-video">
        <video
          className="hero-slider-video video-cover"
          poster={heroBanner}
          loop
          autoPlay
          muted
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-between g-4">
          <div className="col-xl-12">
            <div className="hero-caption-three position-relative z-3">
              <h4 className="title wow fadeInUp" data-wow-delay="0.0s">
                Plan tours to dream locations in just a click!
              </h4>
              <p className="pera wow fadeInUp" data-wow-delay="0.1s">
                Travel is a transformative and enriching experience that allows
                individuals to explore new destinations, cultures, and
                landscapes
              </p>
            </div>
            <div
              className="hero-footer position-relative z-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="all-user">
                <div className="happy-user">
                  <img src={user1} alt="first flight" />
                </div>
                <div className="happy-user">
                  <img src={user2} alt="first flight" />
                </div>
                <div className="happy-user">
                  <img src={user3} alt="first flight" />
                </div>
                <div className="happy-user">
                  <img src={user4} alt="first flight" />
                </div>
                <div className="happy-user-count">
                  <p className="user-count">4k+</p>
                </div>
                <p className="pera">Happy Customer</p>
                <span className="wave-emoji">
                  <img src={hand} alt="first flight" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
