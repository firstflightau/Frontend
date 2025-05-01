// BookButton.jsx
import React from "react";

const BookButton = ({ onClick, name }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary-6000 text-white my-4 px-4 py-2 rounded w-full md:w-auto"
    >
      {name}
    </button>
  );
};

export default BookButton;
