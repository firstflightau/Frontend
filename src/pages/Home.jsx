import React from "react";
import HeroSection from "../components/HeroSection";
import FlightSearchForm from "../components/flightSearchForm/FlightSearchForm";
import TopFlightRoute from "../components/TopFlightRoute";
import BestFlightDeal from "../components/BestFlightDeal";
import Testimonial from "../components/Testimonial";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FlightSearchForm />
      <TopFlightRoute />
      <BestFlightDeal />
      <Testimonial />
      <Partners />
    </div>
  );
};

export default Home;
