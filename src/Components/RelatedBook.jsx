import React, { useEffect, useState } from "react";
import axios from "axios";

const RelatedBook = ({ bookId }) => {
  const [relatedBooks, setRelatedBooks] = useState([]);

  useEffect(() => {
    if (bookId) {
      axios
        .get(`http://localhost:8080/book/related/${bookId}`)
        .then((res) => setRelatedBooks(res.data))
        .catch((err) => console.error("Error loading related books:", err));
    }
  }, [bookId]);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-indigo-600 border-b pb-2">
        Related Books
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {relatedBooks.map((book) => (
          <div
            key={book._id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              {book.image ? (
                <img
                  src={book.image}
                  alt={book.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-gray-500">No Image</span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-1 line-clamp-1">
                {book.name}
              </h3>
              <p className="text-sm text-gray-600 mb-1">by {book.author}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                  {book.productType}
                </span>
                {book.price && (
                  <span className="font-bold text-indigo-600">
                    ${book.price.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedBook;
