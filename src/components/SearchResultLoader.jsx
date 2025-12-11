import React from "react";
import logo from "../assets/images/logo/logo.png";

const SearchResultLoader = ({ text }) => {
  return (
    <div className="fixed inset-0 bg-blue-500 bg-opacity-30 backdrop-blur-md flex flex-col items-center justify-center z-50">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-20 mb-4 animate-pulse" />
      {/* Text */}
      <p className="text-primary-6000 text-lg font-semibold text-center">
        {text}
      </p>
    </div>
  );
};

export default SearchResultLoader;
