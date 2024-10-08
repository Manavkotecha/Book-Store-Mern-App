// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import { useSnackbar } from "notistack";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Error", { variant: "error" });
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-center items-center gap-x-6 mb-6">
        <button
          className={`${
            showType === "table" ? "bg-sky-600 text-white" : "bg-sky-300"
          } hover:bg-sky-700 transition-all duration-200 px-6 py-2 rounded-lg shadow-md`}
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className={`${
            showType === "card" ? "bg-sky-600 text-white" : "bg-sky-300"
          } hover:bg-sky-700 transition-all duration-200 px-6 py-2 rounded-lg shadow-md`}
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Books List</h1>
        <Link
          to="/books/create"
          className="text-sky-800 hover:text-sky-600 transition duration-300"
        >
          <MdOutlineAddBox className="text-5xl" />
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
