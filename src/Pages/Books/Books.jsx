import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import BooksCard from "../../Components/BooksCard";
import Sidebar from "../../Components/Sidebar";

const Books = () => {
  const axiosSecure = useAxiosSecure();
  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    search: "",
    sort: "",
    type: "",
  });
  const [page, setPage] = useState(1);
  const limit = 9;

  useEffect(() => {
    const fetchBooks = async () => {
      const params = { ...filters, page, limit };
      const res = await axiosSecure.get("/books", { params });
      setBooks(res.data);
    };

    fetchBooks();
  }, [filters, page]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 px-4 container mx-auto">
      <Sidebar filters={filters} setFilters={setFilters} />

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books?.map((book) => (
            <BooksCard key={book._id} book={book} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {[1, 2, 3, 4, 5].map((p) => (
            <button
              key={p}
              className={`px-4 py-2 rounded ${
                page === p ? "bg-green-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
