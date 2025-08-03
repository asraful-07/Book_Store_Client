import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useAuth } from "../../provider/AuthProvider";
import { FiShoppingBag, FiTrash2, FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const MyBooks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [subtotal, setSubtotal] = useState(0);
  const [deliveryCharge] = useState(75);
  const [saveAmount] = useState(0);

  // Calculate totals
  const calculateTotals = (bookList = []) => {
    const subTotal = bookList.reduce((sum, book) => {
      return sum + (book.price || 0) * (book.quantity || 1);
    }, 0);
    setSubtotal(subTotal);
  };

  // Fetch books
  const fetchBooks = async () => {
    setIsLoading(true);
    try {
      const res = await axiosSecure.get(`/book-cart?email=${user?.email}`);
      const bookList = Array.isArray(res.data) ? res.data : [];
      setBooks(bookList);
      calculateTotals(bookList);
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

  // Delete book
  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/cart/${id}`);
      setBooks((prev) => prev.filter((book) => book._id !== id));
      calculateTotals(books.filter((book) => book._id !== id));
      toast.success("Book removed from cart");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  // Update quantity
  const handleQuantity = async (id, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      await axiosSecure.patch(`/cart/${id}`, { quantity: newQuantity });
      setBooks((prev) =>
        prev.map((book) =>
          book._id === id ? { ...book, quantity: newQuantity } : book
        )
      );
      calculateTotals(
        books.map((book) =>
          book._id === id ? { ...book, quantity: newQuantity } : book
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <FiShoppingBag className="mr-2" />
        {books.length} {books.length === 1 ? "Item" : "Items"} in Your Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Book Items */}
        <div className="lg:w-2/3">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
            </div>
          ) : books.length === 0 ? (
            <div className="bg-white rounded-lg p-8 text-center border">
              <h3 className="text-xl font-medium mb-4">Your cart is empty</h3>
              <p className="text-gray-600 mb-6">
                Add some books to get started
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-lg border divide-y">
              {books.map((book) => (
                <div
                  key={book._id}
                  className="p-4 flex items-start sm:items-center gap-4"
                >
                  <div className="relative">
                    <img
                      src={
                        book.imageUrls?.[0] || "https://via.placeholder.com/100"
                      }
                      alt={book.name}
                      className="w-20 h-20 object-cover rounded border"
                    />
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="absolute -top-2 -right-2 bg-white border rounded-full p-1 hover:bg-red-50"
                    >
                      <FiX className="text-red-500" size={14} />
                    </button>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium">{book.name}</h3>
                    <p className="text-sm text-gray-600">By {book.author}</p>
                    <p className="text-sm text-gray-800 mt-1">$ {book.price}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        handleQuantity(book._id, (book.quantity || 1) - 1)
                      }
                      className="w-8 h-8 flex items-center justify-center border rounded"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">
                      {book.quantity || 1}
                    </span>
                    <button
                      onClick={() =>
                        handleQuantity(book._id, (book.quantity || 1) + 1)
                      }
                      className="w-8 h-8 flex items-center justify-center border rounded"
                    >
                      +
                    </button>
                  </div>

                  <div className="font-medium">
                    $ {(book.price * (book.quantity || 1)).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg border p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-4">Cart Total</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">SubTotal:</span>
                <span className="font-medium">$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Save Amount:</span>
                <span className="font-medium">$ {saveAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Charge:</span>
                <span className="font-medium">
                  $ {deliveryCharge.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>
                  $ {(subtotal + deliveryCharge - saveAmount).toFixed(2)}
                </span>
              </div>
            </div>
            <Link to="/checkout">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition">
                PROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
