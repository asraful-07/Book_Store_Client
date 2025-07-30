import React from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";

const FavoriteCard = ({ book, favoriteBooks, setFavoriteBooks }) => {
  const axiosSecure = useAxiosSecure();
  const { _id, name, author, imageUrls, productType } = book;

  const handleDelete = async () => {
    try {
      await axiosSecure.delete(`/favorites/${_id}`);
      const remaining = favoriteBooks.filter((item) => item._id !== _id);
      setFavoriteBooks(remaining);
      toast.success("Book removed from favorites!");
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to remove book.");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 relative group hover:shadow-lg transition">
      <img
        src={imageUrls?.[0]}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mb-1">By {author}</p>
      <p className="text-sm text-gray-600">{productType}</p>

      <button
        onClick={handleDelete}
        className="absolute top-3 right-3 text-red-500 hover:text-red-700"
        title="Remove"
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default FavoriteCard;
