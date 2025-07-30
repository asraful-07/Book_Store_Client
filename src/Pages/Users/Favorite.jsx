import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useAuth } from "../../provider/AuthProvider";
import FavoriteCard from "../../Components/FavoriteCard";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Favorite Books</h1>

      {/* Loading Spinner */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-500"></div>
        </div>
      ) : favoriteBooks.length === 0 ? (
        // Empty State
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
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition"
          >
            Browse Books
          </button>
        </div>
      ) : (
        // Book List
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
