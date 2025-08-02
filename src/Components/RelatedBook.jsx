import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { LuSlidersHorizontal } from "react-icons/lu";

const RelatedBook = ({ bookId }) => {
  const [relatedBooks, setRelatedBooks] = useState([]);
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    if (bookId) {
      axios
        .get(`https://books-shop-pzyk.onrender.com/book/related/${bookId}`)
        .then((res) => setRelatedBooks(res.data))
        .catch((err) => console.error("Error loading related books:", err));
    }
  }, [bookId]);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Related Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {relatedBooks.map((book) => (
          <Link to={`/booksDetails/${book._id}`} key={book._id}>
            <div className="relative border border-indigo-200 rounded-lg p-4 shadow hover:shadow-md transition duration-300 bg-white group">
              {/* Hover-able Image */}
              <div className="relative w-full h-64 overflow-hidden rounded-md mb-4">
                {book?.imageUrls?.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={book?.name}
                    className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${
                      index === 0
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                ))}

                {/* Action buttons on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center space-x-4">
                    <button
                      className="text-white hover:text-pink-500"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(book._id);
                      }}
                    >
                      <FaHeart
                        className={`text-xl ${
                          favorites[book._id]
                            ? "text-pink-500 fill-pink-500"
                            : "text-white"
                        }`}
                      />
                    </button>
                    <button className="text-white hover:text-indigo-300">
                      <FaShoppingCart className="text-xl" />
                    </button>
                    <button className="text-white hover:text-indigo-300">
                      <BsPencilSquare className="text-xl" />
                    </button>
                    <button className="text-white hover:text-indigo-300">
                      <LuSlidersHorizontal className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Book Info */}
              <h2 className="text-lg font-semibold text-green-800 mb-2">
                {book.name}
              </h2>
              <div className="flex items-center gap-2">
                <p className="text-green-900 font-bold">${book?.price}</p>
                {book?.oldPrice && (
                  <p className="line-through text-gray-400 text-sm">
                    ${book?.oldPrice}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedBook;
