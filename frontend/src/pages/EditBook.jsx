// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("An error occurred while fetching the book!", { variant: "error" });
        console.log(error);
      });
  }, [id, enqueueSnackbar]);

  const validateInputs = () => {
    if (!title) {
      enqueueSnackbar("Title is required!", { variant: "error" });
      return false;
    }
    if (!author) {
      enqueueSnackbar("Author is required!", { variant: "error" });
      return false;
    }
    if (!publishYear || isNaN(publishYear) || publishYear.length !== 4) {
      enqueueSnackbar("Publish Year must be a valid year!", { variant: "error" });
      return false;
    }
    return true;
  };

  const handleEditBook = () => {
    if (!validateInputs()) {
      return; // Stop the function if validation fails
    }

    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error editing the book!", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-sky-100 to-sky-200">
      <BackButton />
      <h1 className="text-4xl font-bold text-center my-6 text-gray-700">
        Edit Book
      </h1>
      {loading && (
        <div className="flex justify-center mb-6">
          <Spinner />
        </div>
      )}
      <div className="flex flex-col border-2 border-sky-400 rounded-lg w-full max-w-lg p-8 mx-auto bg-white shadow-lg">
        <div className="my-4">
          <label className="text-lg font-semibold text-gray-600 mb-2 block">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-300 focus:ring focus:ring-sky-300 rounded-md px-4 py-2 w-full focus:outline-none transition-all"
            placeholder="Enter the title"
          />
        </div>
        <div className="my-4">
          <label className="text-lg font-semibold text-gray-600 mb-2 block">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-300 focus:ring focus:ring-sky-300 rounded-md px-4 py-2 w-full focus:outline-none transition-all"
            placeholder="Enter the author"
          />
        </div>
        <div className="my-4">
          <label className="text-lg font-semibold text-gray-600 mb-2 block">
            Publish Year
          </label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-300 focus:ring focus:ring-sky-300 rounded-md px-4 py-2 w-full focus:outline-none transition-all"
            placeholder="Enter the year of publication"
          />
        </div>
        <button
          className="py-2 px-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-md mt-6 transition-all"
          onClick={handleEditBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
