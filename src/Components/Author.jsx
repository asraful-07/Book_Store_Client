import React, { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import img1 from "../assets/images/author-1.jpg";
import img2 from "../assets/images/author-2.jpg";
import img3 from "../assets/images/author-3.jpg";
import img4 from "../assets/images/author-4.jpg";
import img5 from "../assets/images/author-5.jpg";

const authors = [
  {
    img: img1,
    name: "John Dewey",
    quote:
      "Paul Rand Was One Of The Most Famous Graphic Designers The 20th Century.",
  },
  {
    img: img2,
    name: "Saul Bass",
    quote:
      "If We Learn From Our Mistakes, Then There Is No Such Thing As Learning.",
  },
  {
    img: img3,
    name: "Andrew Weil",
    quote:
      "Good Health Is A Choice, And You Can Achieve It By Taking  Yourself Day.",
  },
  {
    img: img4,
    name: "Deepak Chopra",
    quote:
      "You Are Not Your Body. You Are Not Your Mind. You Are a Invisible Resides",
  },
  {
    img: img5,
    name: "Extra Author",
    quote:
      "Some inspirational Body quote for demonstration Life Energy That purposes.",
  },
];

const Author = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = authors.length;
  const visible = 4;

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx - 1 + total) % total);
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx + 1) % total);
  };

  // auto-slide optional
  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, []);

  // helper to get author at offset i (0..3)
  const getAuthorAt = (offset) => {
    const idx = (currentIndex + offset) % total;
    return authors[idx];
  };

  return (
    <div className="relative container mx-auto px-4 lg:px-12 py-16">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-10 text-center">
          Our Featured Authors
        </h2>

        <div className="relative w-full flex items-center">
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous authors"
            className="absolute left-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <BsArrowLeft size={20} />
          </button>

          <div className="w-full overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Author 1 */}
              <div className="w-60 h-48 flex-shrink-0 flex flex-col items-center text-center px-2">
                <div className="relative mb-4">
                  <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-green-500 shadow-xl">
                    <img
                      src={getAuthorAt(0).img}
                      alt={getAuthorAt(0).name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-900">
                  {getAuthorAt(0).name}
                </h3>
                <p className="mt-2 text-sm md:text-base text-gray-600 max-w-[220px]">
                  {getAuthorAt(0).quote}
                </p>
              </div>

              {/* Author 2 */}
              <div className="w-60 h-48flex-shrink-0 flex flex-col items-center text-center px-2">
                <div className="relative mb-4">
                  <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-green-500 shadow-xl">
                    <img
                      src={getAuthorAt(1).img}
                      alt={getAuthorAt(1).name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-900">
                  {getAuthorAt(1).name}
                </h3>
                <p className="mt-2 text-sm md:text-base text-gray-600 max-w-[220px]">
                  {getAuthorAt(1).quote}
                </p>
              </div>

              {/* Author 3 */}
              <div className="w-60 h-48 flex-shrink-0 flex flex-col items-center text-center px-2">
                <div className="relative mb-4">
                  <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-green-500 shadow-xl">
                    <img
                      src={getAuthorAt(2).img}
                      alt={getAuthorAt(2).name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-900">
                  {getAuthorAt(2).name}
                </h3>
                <p className="mt-2 text-sm md:text-base text-gray-600 max-w-[220px]">
                  {getAuthorAt(2).quote}
                </p>
              </div>

              {/* Author 4 */}
              <div className="w-60 h-48 flex-shrink-0 flex flex-col items-center text-center px-2">
                <div className="relative mb-4">
                  <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-green-500 shadow-xl">
                    <img
                      src={getAuthorAt(3).img}
                      alt={getAuthorAt(3).name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold font-serif text-gray-900">
                  {getAuthorAt(3).name}
                </h3>
                <p className="mt-2 text-sm md:text-base text-gray-600 max-w-[220px]">
                  {getAuthorAt(3).quote}
                </p>
              </div>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next authors"
            className="absolute right-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <BsArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Author;
