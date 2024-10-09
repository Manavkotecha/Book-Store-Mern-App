import React from "react"
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="flex items-center gap-x-2 bg-sky-800 text-white px-4 py-2 rounded-lg w-fit hover:bg-sky-700 transition duration-200 shadow-md"
      >
        <BsArrowLeft className="text-xl" />
        <span className="text-sm font-medium">Back</span>
      </Link>
    </div>
  );
};

export default BackButton;
