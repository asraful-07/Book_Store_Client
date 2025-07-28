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
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
        Related Books
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {relatedBooks.map((book) => (
          <div
            key={book._id}
            className="p-4 border rounded-lg shadow hover:shadow-md transition duration-300"
          >
            <h3 className="text-lg font-bold">{book.name}</h3>
            <p className="text-sm text-gray-600">Author: {book.author}</p>
            <p className="text-sm">Type: {book.productType}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedBook;
