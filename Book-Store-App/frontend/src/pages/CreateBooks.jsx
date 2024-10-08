// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-sky-100 to-sky-200">
      <BackButton />
      <h1 className="text-4xl font-bold text-center my-6 text-gray-700">
        Create Book
      </h1>
      {loading ? (
        <div className="flex justify-center mb-6">
          <Spinner />
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col border-2 border-sky-500 rounded-lg w-full max-w-lg p-8 mx-auto bg-white shadow-md">
        <div className="my-4">
          <label className="text-lg font-semibold text-gray-600 mb-2 block">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-300 focus:ring focus:ring-sky-300 rounded-md px-4 py-2 w-full focus:outline-none transition-all"
            placeholder="Enter the title"
          />
        </div>
        <div className="my-4">
          <label className="text-lg font-semibold text-gray-600 mb-2 block">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-300 focus:ring focus:ring-sky-300 rounded-md px-4 py-2 w-full focus:outline-none transition-all"
            placeholder="Enter the author"
          />
        </div>
        <div className="my-4">
          <label className="text-lg font-semibold text-gray-600 mb-2 block">Publish Year</label>
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
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
