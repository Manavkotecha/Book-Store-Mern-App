import React from "react"
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";

import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border border-gray-300 bg-white rounded-lg p-6 m-4 shadow-md hover:shadow-lg transition-shadow duration-300 relative">
      <h2 className="absolute top-2 right-2 px-4 py-1 bg-red-200 text-sm font-semibold rounded-md">
        {book.publishYear}
      </h2>
      <h4 className="text-xs text-gray-400 mb-4">{book._id}</h4>
      <div className="flex items-center gap-x-2 mb-2">
        <PiBookOpenTextLight className="text-red-400 text-2xl" />
        <h2 className="text-lg font-semibold text-gray-700">{book.title}</h2>
      </div>
      <div className="flex items-center gap-x-2 mb-4">
        <BiUserCircle className="text-red-400 text-2xl" />
        <h2 className="text-md font-medium text-gray-600">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-4 mt-4">
        <BiShow
          className="text-3xl text-blue-600 hover:text-blue-800 cursor-pointer transition-colors duration-200"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-600 hover:text-green-800 transition-colors duration-200" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-yellow-700 transition-colors duration-200" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-500 hover:text-red-700 transition-colors duration-200" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
