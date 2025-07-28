import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaCartPlus,
  FaHeart,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import RelatedBook from "./RelatedBook";

const BooksDetails = () => {
  const book = useLoaderData();
  const {
    _id,
    name,
    author,
    price,
    oldPrice,
    imageUrls,
    publication,
    productType,
    publishDate,
    stock,
    description,
    tags,
  } = book;

  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const shortDescription = description.split(" ").slice(0, 40).join(" ");

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="overflow-hidden">
        <div className="md:flex">
          {/* Left Side - Image Gallery */}
          <div className="md:w-1/2 p-6">
            <div className="sticky top-28">
              <div className="rounded-lg overflow-hidden bg-gray-100 mb-4">
                <img
                  src={imageUrls[0]}
                  alt={name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="md:w-1/2 p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
              <p className="text-lg text-gray-600 mb-4">by {author}</p>

              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-indigo-600">
                  ${price}
                </span>
                {oldPrice && (
                  <span className="ml-2 text-lg text-gray-400 line-through">
                    ${oldPrice}
                  </span>
                )}
                {oldPrice && (
                  <span className="ml-2 bg-red-100 text-red-600 text-sm font-semibold px-2 py-1 rounded">
                    {Math.round(((oldPrice - price) / oldPrice) * 100)}% OFF
                  </span>
                )}
              </div>

              <div className="flex items-center text-sm text-gray-500 mb-6">
                <span className="mr-4">Publication: {publication}</span>
                <span>
                  Stock:{" "}
                  {stock > 0 ? (
                    <span className="text-green-500">Available ({stock})</span>
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700">
                  {showFullDescription ? description : `${shortDescription}...`}
                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="ml-2 text-indigo-600 hover:underline"
                  >
                    {showFullDescription ? "Show Less" : "Read More"}
                  </button>
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    className="p-2 border rounded-l-lg hover:bg-gray-100"
                  >
                    <FaMinus />
                  </button>
                  <div className="px-4 py-2 border-t border-b text-center w-16">
                    {quantity}
                  </div>
                  <button
                    onClick={increaseQuantity}
                    className="p-2 border rounded-r-lg hover:bg-gray-100"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition">
                  <FaCartPlus className="mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={() => setIsWishlist(!isWishlist)}
                  className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center transition border ${
                    isWishlist
                      ? "bg-pink-100 border-pink-300 text-pink-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <FaHeart
                    className={`mr-2 ${
                      isWishlist ? "text-pink-500 fill-pink-500" : ""
                    }`}
                  />
                  {isWishlist ? "Wishlisted" : "Wishlist"}
                </button>
                <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                  Buy it Now
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                  Share this product
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <FaFacebook size={24} />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <FaTwitter size={24} />
                  </a>
                  <a href="#" className="text-pink-600 hover:text-pink-800">
                    <FaInstagram size={24} />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">Product Type: {productType}</span>
                  <span>
                    Published: {new Date(publishDate).toLocaleDateString()}
                  </span>
                </div>
                {tags && tags.length > 0 && (
                  <div className="mt-2">
                    <span className="text-sm font-medium">Tags: </span>
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b mb-6">
          {["description", "reviews", "comments"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`capitalize px-6 py-2 font-semibold border-b-2 transition-all duration-300 ${
                activeTab === tab
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-indigo-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-md shadow p-6 border border-indigo-100">
          {activeTab === "description" && (
            <div>
              <h2 className="text-lg font-bold text-purple-700 mb-2">
                Book Description
              </h2>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="text-gray-700">
              <h2 className="text-lg font-bold text-purple-700 mb-2">
                User Reviews
              </h2>
              <p>No reviews yet. Be the first to review this book!</p>
            </div>
          )}

          {activeTab === "comments" && (
            <div>
              <h2 className="text-lg font-bold text-purple-700 mb-2">
                Comments
              </h2>
              {/* Facebook Comments Plugin */}
              <div
                className="fb-comments"
                data-href={`http://localhost:5173/books/${book._id}`}
                data-numposts="5"
                data-width="100%"
              ></div>
            </div>
          )}
        </div>

        {/* Related Books Component */}
        <RelatedBook bookId={_id} />
      </div>
    </div>
  );
};

export default BooksDetails;
