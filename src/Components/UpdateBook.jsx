import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Book Load করে form pre-fill করা
  useEffect(() => {
    fetch(`http://localhost:8080/book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Image এবং Tags স্ট্রিং-এ রূপান্তর
        const formattedData = {
          ...data,
          imageUrls: data.imageUrls?.join(", ") || "",
          tags: data.tags?.join(", ") || "",
        };
        reset(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Failed to load book");
        console.error(err);
      });
  }, [id, reset]);

  const onSubmit = async (data) => {
    const updatedBook = {
      ...data,
      price: Number(data.price),
      oldPrice: Number(data.oldPrice),
      stock: Number(data.stock),
      tags: data.tags.split(",").map((item) => item.trim()),
      imageUrls: data.imageUrls.split(",").map((item) => item.trim()),
    };

    try {
      const response = await fetch(`http://localhost:8080/book/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBook),
      });

      if (response.ok) {
        toast.success("Book updated successfully!");
        navigate("/dashboard/books");
      } else {
        toast.error("Update failed. Try again.");
      }
    } catch (error) {
      toast.error("Server error!");
      console.error("Update error:", error);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 max-w-4xl mx-auto space-y-6 border border-indigo-100"
      >
        <div>
          {/* Basic Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-indigo-700 border-b pb-2">
              Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block mb-1 font-medium text-indigo-700">
                  Book Name *
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter Book Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Author */}
              <div>
                <label className="block mb-1 font-medium text-indigo-700">
                  Author *
                </label>
                <input
                  type="text"
                  {...register("author", { required: "Author is required" })}
                  className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter Author Name"
                />
                {errors.author && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.author.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Publication */}
              <div>
                <label className="block mb-1 font-medium text-indigo-700">
                  Publication
                </label>
                <input
                  type="text"
                  {...register("publication")}
                  className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter Publication"
                />
              </div>

              {/* Product Type */}
              <div>
                <label className="block mb-1 font-medium text-indigo-700">
                  Product Type
                </label>
                <select
                  {...register("productType")}
                  className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  <option value="">Select Product Type</option>
                  <option value="adventure">Adventure</option>
                  <option value="biographic">Biographic</option>
                  <option value="children">Children</option>
                  <option value="cook">Cook</option>
                </select>
              </div>
            </div>

            {/* Publish Date */}
            <div>
              <label className="block mb-1 font-medium text-indigo-700">
                Publish Date
              </label>
              <input
                type="date"
                {...register("publishDate")}
                className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-indigo-700 border-b pb-2">
            Pricing Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Price */}
            <div>
              <label className="block mb-1 font-medium text-indigo-700">
                Price *
              </label>
              <input
                type="number"
                step="0.01"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 0, message: "Price must be positive" },
                })}
                className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter Price"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>

            {/* Old Price */}
            <div>
              <label className="block mb-1 font-medium text-indigo-700">
                Old Price
              </label>
              <input
                type="number"
                step="0.01"
                {...register("oldPrice", {
                  min: { value: 0, message: "Price must be positive" },
                })}
                className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter Old Price"
              />
              {errors.oldPrice && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.oldPrice.message}
                </p>
              )}
            </div>

            {/* Stock */}
            <div>
              <label className="block mb-1 font-medium text-indigo-700">
                Stock *
              </label>
              <input
                type="number"
                {...register("stock", {
                  required: "Stock is required",
                  min: { value: 0, message: "Stock must be positive" },
                })}
                className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter Stock"
              />
              {errors.stock && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.stock.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-indigo-700 border-b pb-2">
            Additional Information
          </h2>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium text-indigo-700">
              Description
            </label>
            <textarea
              {...register("description")}
              rows="4"
              className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter Book Description"
            ></textarea>
          </div>

          {/* Image URLs */}
          <div>
            <label className="block mb-1 font-medium text-indigo-700">
              Image URLs
            </label>
            <textarea
              {...register("imageUrls")}
              rows="2"
              className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter image URLs separated by commas"
            ></textarea>
          </div>

          {/* Tags */}
          <div>
            <label className="block mb-1 font-medium text-indigo-700">
              Tags
            </label>
            <input
              type="text"
              {...register("tags")}
              className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="e.g. fiction, bestseller, romance"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3 text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg font-semibold transition duration-300 shadow-lg"
          >
            Update Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
