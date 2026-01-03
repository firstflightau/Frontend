// pages/Home.js
import React from "react";
import { Helmet } from "react-helmet-async"; // 1. Import Helmet
import { useSelector } from "react-redux"; // 2. Import useSelector

// Your page components
import HeroSection from "../components/HeroSection";
import FlightSearchForm from "../components/flightSearchForm/FlightSearchForm";
import TopFlightRoute from "../components/TopFlightRoute";
import BestFlightDeal from "../components/BestFlightDeal";
import Testimonial from "../components/Testimonial";
import Partners from "../components/Partners";
const Home = () => {
  // 3. Get the metadata from the Redux store
  const homeData = useSelector((state) => state?.metaData?.allMetaData?.home);

  return (
    <div>
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

      {/* Your Page Content */}
      <HeroSection />
      <FlightSearchForm />
      <TopFlightRoute />
      <Partners />
      <BestFlightDeal />
      <Testimonial />
    </div>
  );
};

export default Home;
