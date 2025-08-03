import React from "react";

const FeaturedBooks = () => {
  const featuredBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      excerpt:
        "Between life and death there is a library, and within that library, the shelves go on forever...",
      date: "New Arrival",
      category: "Fiction",
      readTime: "320 pages",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      excerpt:
        "Tiny changes, remarkable results - an easy way to build good habits and break bad ones.",
      date: "Bestseller",
      category: "Self-Help",
      readTime: "320 pages",
      image:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    },
    {
      id: 3,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      excerpt:
        "A psychological thriller about a woman who shoots her husband and then never speaks another word.",
      date: "Staff Pick",
      category: "Thriller",
      readTime: "352 pages",
      image:
        "https://images.unsplash.com/photo-1499257398700-43669759a540?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBzdG9yfGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Featured Books
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif">
            Discover our curated selection of must-read titles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  {book.date}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 text-xs font-semibold text-orange-800 bg-orange-100 rounded-full">
                    {book.category}
                  </span>
                  <span className="text-sm text-gray-500">{book.readTime}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 leading-tight">
                  {book.title}
                </h3>
                <p className="text-sm text-orange-700 mb-3">by {book.author}</p>
                <p className="text-gray-600 mb-4 text-sm">{book.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-orange-50">
                  <span className="text-orange-600 font-medium">$19.99</span>
                  <button className="px-4 py-2 bg-orange-600 text-white text-sm rounded hover:bg-orange-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBooks;
