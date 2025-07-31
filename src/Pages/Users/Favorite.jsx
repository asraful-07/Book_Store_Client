// Favorite.jsx
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useAuth } from "../../provider/AuthProvider";
import FavoriteCard from "../../Components/FavoriteCard";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Favorite = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch favorites
  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/book-favorites?email=${user.email}`)
        .then((res) => {
          setFavoriteBooks(res.data || []);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    }
  }, [user?.email, axiosSecure]);

  // Clear all books
  const handleClearAll = async () => {
    try {
      await Promise.all(
        favoriteBooks.map((book) =>
          axiosSecure.delete(`/favorites/${book._id}`)
        )
      );
      setFavoriteBooks([]);
      toast.success("All favorites cleared!");
    } catch (error) {
      console.error("Error clearing books:", error);
      toast.error("Failed to clear books.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Favorite Books</h1>
        {favoriteBooks.length > 0 && (
          <button
            onClick={handleClearAll}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition text-sm"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Loading Spinner */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-500"></div>
        </div>
      ) : favoriteBooks.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 text-center max-w-xl mx-auto">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png"
            alt="Empty favorite"
            className="w-28 h-28 mx-auto opacity-70 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Your favorite list is empty
          </h3>
          <p className="text-gray-500 mb-6">
            Save some books you love to your favorites!
          </p>
          <button
            onClick={() => navigate("/books")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
          >
            Browse Books
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1">
          {favoriteBooks.map((book) => (
            <FavoriteCard
              key={book._id}
              book={book}
              setFavoriteBooks={setFavoriteBooks}
              favoriteBooks={favoriteBooks}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
