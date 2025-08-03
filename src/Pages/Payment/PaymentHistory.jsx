import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";
import { FiShoppingBag, FiTrash2, FiDollarSign } from "react-icons/fi";
import { toast } from "react-toastify";
import PaymentCard from "./PaymentCard";

const MyBooks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState("0.00");

  // Calculate total price safely
  const calculateTotal = (bookList = []) => {
    const total = bookList.reduce((sum, book) => {
      const quantity = book.quantity || 1;
      return sum + (book.price || 0) * quantity;
    }, 0);
    setTotalPrice(total.toFixed(2));
  };

  // Fetch books
  const fetchBooks = async () => {
    setIsLoading(true);
    try {
      const res = await axiosSecure.get(`/book-cart?email=${user?.email}`);
      const bookList = Array.isArray(res.data) ? res.data : [];
      setBooks(bookList);
      calculateTotal(bookList);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchBooks();
    }
  }, [user?.email]);

  // Delete individual book
  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/cart/${id}`);
      setBooks((prev) => prev.filter((book) => book._id !== id));
      calculateTotal(books.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  // Clear all books
  const handleClearAll = async () => {
    try {
      await Promise.all(
        books.map((book) => axiosSecure.delete(`/cart/${book._id}`))
      );
      setBooks([]);
      calculateTotal([]);
      toast.success("All books cleared successfully!");
    } catch (error) {
      console.error("Error clearing books:", error);
      toast.error("Failed to clear books. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <FiShoppingBag className="mr-2" />
            My Reading List
          </h1>
          <p className="text-gray-600 mt-1">
            {books?.length || 0} {books?.length === 1 ? "item" : "items"} in
            your collection
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="bg-white p-3 rounded-lg shadow-sm border flex items-center justify-between mb-3 sm:mb-0">
            <span className="text-gray-600 mr-2">Total:</span>
            <span className="font-bold text-lg text-green-600">
              ${totalPrice}
            </span>
          </div>
          <button
            onClick={handleClearAll}
            className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg transition flex items-center justify-center"
          >
            <FiTrash2 className="mr-2" />
            Clear All
          </button>
          <Link to="/paymentHistory">
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-4 rounded-lg transition flex items-center justify-center"
              disabled={books.length === 0}
            >
              <FiDollarSign className="mr-2" />
              Proceed to Payment
            </button>
          </Link>
        </div>
      </div>

      {/* Loading State */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      ) : books.length === 0 ? (
        // Empty State
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
          <div className="max-w-md mx-auto">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png"
              alt="Empty cart"
              className="w-32 h-32 mx-auto opacity-70 mb-4"
            />
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              Your reading list is empty
            </h3>
            <p className="text-gray-500 mb-6">
              Add some books to get started on your reading journey
            </p>
            <button
              onClick={() => navigate("/books")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
            >
              Browse Books
            </button>
          </div>
        </div>
      ) : (
        // Book Cards
        <div className="grid grid-cols-1 gap-6">
          {books.map((book) => (
            <PaymentCard key={book._id} book={book} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooks;
