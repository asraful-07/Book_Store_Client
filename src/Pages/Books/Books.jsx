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

        {/* Enhanced Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center gap-1">
            {/* Previous Button */}
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-md border border-green-300 text-green-700 hover:bg-green-50 disabled:opacity-50 flex items-center transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Prev
            </button>

            {/* Page Numbers */}
            {[1, 2, 3, 4, 5].map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-10 h-10 rounded-md flex items-center justify-center transition-all duration-200 ${
                  page === p
                    ? "bg-green-600 text-white shadow-md transform scale-105"
                    : "border border-green-200 text-green-700 hover:bg-green-50 hover:shadow-sm"
                }`}
              >
                {p}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={page === 5}
              className="px-4 py-2 rounded-md border border-green-300 text-green-700 hover:bg-green-50 disabled:opacity-50 flex items-center transition-colors duration-200"
            >
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Books;
