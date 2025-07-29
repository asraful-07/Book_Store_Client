import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const ManageBookCard = ({ book, handleDelete, handleUpdate }) => {
  const { _id, name, author, imageUrls, price, oldPrice, stock, productType } =
    book || {};

  return (
    <tr className="hover:bg-gray-50 transition-all duration-200 border-b">
      <td className="p-3">
        <img
          src={imageUrls?.[0]}
          alt="Book"
          className="w-14 h-20 object-cover rounded shadow"
        />
      </td>
      <td className="p-3 font-semibold text-gray-700">{name}</td>
      <td className="p-3 text-sm text-gray-600">{author}</td>
      <td className="p-3 text-sm text-gray-600">${price}</td>
      <td className="p-3 text-sm text-gray-600">{stock}</td>
      <td className="p-3 text-sm text-gray-600 capitalize">{productType}</td>
      <td className="p-3 flex items-center gap-2">
        <button
          onClick={() => handleUpdate(_id)}
          className="p-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="p-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ManageBookCard;
