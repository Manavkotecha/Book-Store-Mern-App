import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-auto bg-white rounded-2xl shadow-2xl p-6 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-4 top-4 text-3xl text-gray-600 hover:text-red-500 cursor-pointer transition-colors duration-200"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-100 text-red-600 rounded-lg font-semibold text-lg">
          {book.publishYear}
        </h2>
        <h4 className="mt-2 mb-4 text-sm text-gray-400">{book._id}</h4>
        
        <div className="flex justify-start items-center gap-x-3 mb-4">
          <PiBookOpenTextLight className="text-red-400 text-2xl" />
          <h2 className="text-xl font-bold text-gray-700">{book.title}</h2>
        </div>

        <div className="flex justify-start items-center gap-x-3 mb-4">
          <BiUserCircle className="text-red-400 text-2xl" />
          <h2 className="text-lg text-gray-600">{book.author}</h2>
        </div>

        <p className="mt-4 text-gray-500 leading-relaxed">
          Anything you want to show
        </p>

        <p className="mt-2 text-gray-600 leading-relaxed text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          corporis molestias aliquid quia vel itaque non quae libero molestiae,
          veniam voluptas, id quasi error nulla debitis rem minima similique
          corrupti.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
