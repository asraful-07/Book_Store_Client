import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaHeart, FaRegHeart, FaTicketAlt } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";

const MovieDetails = () => {
  const movie = useLoaderData();
  const { title, image, isbn, director, description } = movie;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleBookNow = () => {
    toast.success("Movie added successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{title}</h1>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-96 object-cover rounded-lg"
        />
        <button
          onClick={toggleFavorite}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-all"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? (
            <FaHeart className="text-red-500 text-2xl" />
          ) : (
            <FaRegHeart className="text-gray-700 text-2xl" />
          )}
        </button>
      </div>

      <p className="mt-6 text-gray-700 leading-relaxed">{description}</p>

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={handleBookNow}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
        >
          <FaTicketAlt />
          Book Now
        </button>
        <button
          onClick={toggleFavorite}
          className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 font-medium rounded-lg hover:bg-gray-50 transition-all"
        >
          {isFavorite ? (
            <>
              <FaHeart className="text-red-500" />
              Remove Favorite
            </>
          ) : (
            <>
              <FaRegHeart />
              Add to Favorites
            </>
          )}
        </button>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">ISBN: {isbn}</p>
        <p className="text-sm text-gray-500 mt-1">
          Directed by: {director?.firstname} {director?.lastname}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
