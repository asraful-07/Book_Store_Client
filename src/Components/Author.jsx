import React, { useState } from "react";

const Author = () => {
  const authors = [
    {
      id: 1,
      name: "Andrew Weil",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "Physician and author specializing in integrative medicine.",
    },
    {
      id: 2,
      name: "Deepak Chopra",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      bio: "Alternative medicine advocate and prolific author on spirituality.",
    },
    {
      id: 3,
      name: "Frida Kahlo",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      bio: "Mexican painter known for her many portraits and self-portraits.",
    },
    {
      id: 4,
      name: "John Dewey",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      bio: "American philosopher and educational reformer.",
    },
    {
      id: 5,
      name: "Maya Angelou",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      bio: "American poet and civil rights activist.",
    },
    {
      id: 6,
      name: "Toni Morrison",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      bio: "Nobel Prize-winning American novelist.",
    },
    {
      id: 7,
      name: "Yuval Noah Harari",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      bio: "Israeli historian and bestselling author.",
    },
    {
      id: 8,
      name: "Chimamanda Adichie",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      bio: "Nigerian writer of novels, poetry, and short stories.",
    },
  ];

  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleAuthorClick = (author) => {
    setSelectedAuthor(author);
    setIsCardVisible(true);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl font-serif font-bold text-center mb-12 text-gray-800">
        Our Distinguished Authors
      </h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar */}
        <div className="lg:w-1/4 bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-medium mb-4 text-gray-700">Categories</h3>
          <ul className="space-y-3">
            {[
              "Fiction",
              "Non-Fiction",
              "Science",
              "Philosophy",
              "Biography",
            ].map((category) => (
              <li
                key={category}
                className="hover:text-amber-600 cursor-pointer transition-colors"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Gallery */}
        <div className="lg:w-2/4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {authors.map((author) => (
            <div
              key={author.id}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => handleAuthorClick(author)}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white shadow-lg group-hover:border-amber-400 transition-all duration-300">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-center text-gray-700 group-hover:text-amber-600 transition-colors">
                {author.name}
              </p>
            </div>
          ))}
        </div>

        {/* Right Sidebar - Author Card */}
        <div className="lg:w-1/4">
          {isCardVisible && selectedAuthor && (
            <div
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 sticky top-8"
              data-aos="fade-left"
            >
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-amber-100 shadow-md">
                  <img
                    src={selectedAuthor.image}
                    alt={selectedAuthor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800">
                {selectedAuthor.name}
              </h3>
              <p className="text-gray-600 text-center mt-3">
                {selectedAuthor.bio}
              </p>
              <button
                className="mt-6 w-full py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-lg transition-colors"
                onClick={() => setIsCardVisible(false)}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Author;
