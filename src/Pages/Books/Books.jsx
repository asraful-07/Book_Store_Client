import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import BooksCard from "../../Components/BooksCard";

const Books = () => {
  const axiosSecure = useAxiosSecure();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("http://localhost:8080/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      });
  }, [axiosSecure]);

  return (
    <div className="container mx-auto px-4 md:px-8 py-6">
      <h1 className="text-2xl font-bold mb-6 text-indigo-700">All Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books?.map((book, _id) => (
          <BooksCard key={_id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
