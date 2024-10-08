import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-3 px-4 border border-gray-300">No</th>
            <th className="py-3 px-4 border border-gray-300">Title</th>
            <th className="py-3 px-4 border border-gray-300 max-md:hidden">
              Author
            </th>
            <th className="py-3 px-4 border border-gray-300 max-md:hidden">
              Publish Year
            </th>
            <th className="py-3 px-4 border border-gray-300">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className="hover:bg-gray-100 transition duration-150"
            >
              <td className="py-2 px-4 border border-gray-300 text-center">
                {index + 1}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {book.title}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center max-md:hidden">
                {book.author}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center max-md:hidden">
                {book.publishYear}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800 hover:text-green-600 transition duration-150 " />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-yellow-400 transition duration-150" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-400 transition duration-150" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
