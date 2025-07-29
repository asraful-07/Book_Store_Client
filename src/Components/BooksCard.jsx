import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { LuSlidersHorizontal } from "react-icons/lu";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const BooksCard = ({ book }) => {
  const { _id, name, price, oldPrice, imageUrls } = book;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleMouseEnter = () => {
    if (imageUrls?.length > 1) {
      setCurrentImageIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/booksDetails/${_id}`}>
      <div
        className="relative border border-indigo-200 rounded-lg p-4 shadow hover:shadow-md transition duration-300 bg-white group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image with hover effect */}
        <div className="relative w-full h-64 overflow-hidden rounded-md mb-4">
          {imageUrls?.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={name}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                index === currentImageIndex
                  ? "opacity-100"
                  : "opacity-0 absolute top-0 left-0"
              }`}
            />
          ))}

          {/* Action buttons that appear on hover */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex justify-center space-x-4">
              <button
                className="text-white hover:text-pink-500 transition-colors"
                onClick={toggleFavorite}
                aria-label={
                  isFavorite ? "Remove from favorites" : "Add to favorites"
                }
              >
                <FaHeart
                  className={`text-xl ${
                    isFavorite ? "text-pink-500 fill-pink-500" : "text-white"
                  }`}
                />
              </button>
              <button
                className="text-white hover:text-green-600 transition-colors"
                aria-label="Add to cart"
              >
                <FaShoppingCart className="text-xl" />
              </button>
              <button
                className="text-white hover:text-green-600 transition-colors"
                aria-label="View details"
              >
                <BsPencilSquare className="text-xl" />
              </button>
              <button
                className="text-white hover:text-green-600 transition-colors"
                aria-label="View details"
              >
                <LuSlidersHorizontal className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Product info */}
        <h2 className="text-lg font-semibold text-green-800 mb-2">{name}</h2>
        <div className="flex items-center gap-2">
          <p className="text-green-900 font-bold">${price}</p>
          {oldPrice && (
            <p className="line-through text-gray-400 text-sm">${oldPrice}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BooksCard;
