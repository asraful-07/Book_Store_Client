import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, image, isbn, director, description } = movie;

  return (
    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-4 transform transition duration-300 hover:-translate-y-4 hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-md"
      />

      <div className="space-y-2">
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-xl font-semibold">
            {director?.firstname} {director?.lastname}
          </p>
        </div>

        <p className="text-gray-700 mt-2 text-sm">
          {description?.split(" ").slice(0, 29).join(" ")}
          {description?.split(" ").length > 29 && "...."}
        </p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <Link to={`/movie/${id}`}>
          <button
            className="relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/50 px-4 py-2 rounded-lg 
              before:absolute before:inset-0 before:bg-black before:translate-x-full before:transition-transform before:duration-300 
              hover:before:translate-x-0"
          >
            <span className="relative z-10">View Details</span>
          </button>
        </Link>

        <p className="text-gray-600 text-sm">ISBN: {isbn}</p>
      </div>
    </div>
  );
};

export default MovieCard;
