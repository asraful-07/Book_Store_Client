import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ManageBookCard from "../../Components/ManageBookCard";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ManageBook = () => {
  const axiosSecure = useAxiosSecure();
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  // Get all books
  useEffect(() => {
    axiosSecure
      .get("/book")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [axiosSecure]);

  // Handle delete
  const handleDelete = (id) => {
    axiosSecure
      .delete(`/book/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0 || res.status === 200) {
          toast.success("Book deleted successfully!");
          setBooks(books.filter((book) => book._id !== id));
        } else {
          toast.error("Failed to delete the book!");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong!");
      });
  };

  // Handle update
  const handleUpdate = (id) => {
    navigate(`/dashboard/updateBook/${id}`);
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto rounded shadow">
        <table className="min-w-full text-left bg-white">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Author</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Category</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <ManageBookCard
                key={book._id}
                book={book}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBook;
