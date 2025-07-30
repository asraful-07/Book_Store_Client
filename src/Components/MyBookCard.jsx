import React from "react";
import { FiX } from "react-icons/fi";

const MyBookCard = ({ book, onDelete }) => {
  const { _id, name, author, price, quantity, imageUrls, productType } = book;

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 border-b py-6">
      {/* Left: Image & Delete Button */}
      <div className="relative flex-shrink-0">
        <img
          src={imageUrls?.[0] || "https://via.placeholder.com/100"}
          alt={name}
          className="w-24 h-24 rounded object-cover border"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/100";
          }}
        />
        <button
          onClick={() => onDelete(_id)}
          className="absolute -top-2 -left-2 bg-white border border-red-300 text-red-500 w-6 h-6 flex items-center justify-center rounded-full shadow hover:bg-red-100 transition-colors"
          aria-label="Delete book"
        >
          <FiX size={14} />
        </button>
      </div>

      {/* Center: Book Info */}
      <div className="flex-1 min-w-0">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>
        <p className="text-sm text-gray-500">By {author}</p>
        <p className="text-sm text-gray-800 font-medium mt-1">TK {price}</p>
      </div>

      {/* Right: Quantity & Total */}
      <div className="w-full md:w-auto grid grid-cols-2 md:flex md:flex-wrap gap-2 md:gap-4">
        <div className="flex items-center border rounded-full px-3 py-1 text-sm">
          <span className="text-gray-700">Type: </span>
          <span className="ml-1 text-gray-900">{productType}</span>
        </div>
        <div className="flex items-center border rounded-full px-3 py-1 text-sm">
          <span className="text-gray-700">Qty: </span>
          <span className="ml-1 text-gray-900">{quantity || 1}</span>
        </div>
      </div>
    </div>
  );
};

export default MyBookCard;
