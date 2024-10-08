// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-red-100 to-red-200">
      <BackButton />
      <h1 className="text-4xl font-bold text-center my-6 text-gray-700">
        Delete Book
      </h1>
      {loading ? (
        <div className="flex justify-center mb-6">
          <Spinner />
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col items-center border-2 border-red-400 rounded-lg w-full max-w-lg p-8 mx-auto bg-white shadow-lg">
        <h3 className="text-2xl font-semibold text-red-600 mb-6">Are you sure you want to delete this book?</h3>
        <button
          className="px-6 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-all"
          onClick={handleDeleteBook}
        >
          Yes, Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
