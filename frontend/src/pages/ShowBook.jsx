// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBooks] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true); // Show loading when the request starts
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <BackButton />
      <h1 className="text-4xl font-bold text-gray-800 my-6">Book Details</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col border-2 border-sky-400 bg-white rounded-xl w-full md:w-3/4 lg:w-1/2 p-6 shadow-lg mx-auto">
          <div className="my-4 flex justify-between">
            <span className="text-lg font-semibold text-gray-600">Id</span>
            <span className="text-gray-800">{book._id}</span>
          </div>
          <div className="my-4 flex justify-between">
            <span className="text-lg font-semibold text-gray-600">Title</span>
            <span className="text-gray-800">{book.title}</span>
          </div>
          <div className="my-4 flex justify-between">
            <span className="text-lg font-semibold text-gray-600">Author</span>
            <span className="text-gray-800">{book.author}</span>
          </div>
          <div className="my-4 flex justify-between">
            <span className="text-lg font-semibold text-gray-600">Publish Year</span>
            <span className="text-gray-800">{book.publishYear}</span>
          </div>
          <div className="my-4 flex justify-between">
            <span className="text-lg font-semibold text-gray-600">Created At</span>
            <span className="text-gray-800">{new Date(book.createdAt).toLocaleString()}</span>
          </div>
          <div className="my-4 flex justify-between">
            <span className="text-lg font-semibold text-gray-600">Last Updated At</span>
            <span className="text-gray-800">{new Date(book.updateAt).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
