"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronRight, FaBook } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-16">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://i.ibb.co.com/Ldd8qdnR/faq-img.webp"
          alt="Person reading a book"
          className="w-full max-w-md mx-auto md:mx-0"
        />
      </div>

      {/* Right Side - FAQ Content */}
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-2 mb-2">
          <FaBook className="text-orange-500" />
          <p className="text-orange-600 font-semibold uppercase">
            Bookstore FAQs
          </p>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Reader <span className="text-orange-500">Questions</span> Answered
        </h2>

        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <div
            className={`p-5 rounded-xl border transition-all duration-300 ${
              openIndex === 0
                ? "bg-orange-50 border-orange-200"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <button
              className="flex items-center justify-between w-full text-left"
              onClick={() => toggleFAQ(0)}
            >
              <span className="text-gray-800 font-medium flex items-center gap-3">
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                  1
                </span>
                What genres do you specialize in?
              </span>
              {openIndex === 0 ? (
                <FaChevronDown className="text-orange-600" />
              ) : (
                <FaChevronRight className="text-gray-400" />
              )}
            </button>
            {openIndex === 0 && (
              <p className="mt-3 text-gray-600 text-sm">
                We carry a wide range of genres including fiction, non-fiction,
                science fiction, fantasy, mystery, and children's literature.
              </p>
            )}
          </div>

          {/* FAQ Item 2 */}
          <div
            className={`p-5 rounded-xl border transition-all duration-300 ${
              openIndex === 1
                ? "bg-orange-50 border-orange-200"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <button
              className="flex items-center justify-between w-full text-left"
              onClick={() => toggleFAQ(1)}
            >
              <span className="text-gray-800 font-medium flex items-center gap-3">
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                  2
                </span>
                Do you offer book recommendations?
              </span>
              {openIndex === 1 ? (
                <FaChevronDown className="text-orange-600" />
              ) : (
                <FaChevronRight className="text-gray-400" />
              )}
            </button>
            {openIndex === 1 && (
              <p className="mt-3 text-gray-600 text-sm">
                Absolutely! Our knowledgeable staff can provide personalized
                recommendations based on your reading preferences.
              </p>
            )}
          </div>

          {/* FAQ Item 3 */}
          <div
            className={`p-5 rounded-xl border transition-all duration-300 ${
              openIndex === 2
                ? "bg-orange-50 border-orange-200"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <button
              className="flex items-center justify-between w-full text-left"
              onClick={() => toggleFAQ(2)}
            >
              <span className="text-gray-800 font-medium flex items-center gap-3">
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                  3
                </span>
                Can I order books that aren't in stock?
              </span>
              {openIndex === 2 ? (
                <FaChevronDown className="text-orange-600" />
              ) : (
                <FaChevronRight className="text-gray-400" />
              )}
            </button>
            {openIndex === 2 && (
              <p className="mt-3 text-gray-600 text-sm">
                Yes, we can special order most titles and typically receive them
                within 3-5 business days. We'll notify you when they arrive.
              </p>
            )}
          </div>

          {/* FAQ Item 4 */}
          <div
            className={`p-5 rounded-xl border transition-all duration-300 ${
              openIndex === 3
                ? "bg-orange-50 border-orange-200"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <button
              className="flex items-center justify-between w-full text-left"
              onClick={() => toggleFAQ(3)}
            >
              <span className="text-gray-800 font-medium flex items-center gap-3">
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                  4
                </span>
                Do you host author events or book clubs?
              </span>
              {openIndex === 3 ? (
                <FaChevronDown className="text-orange-600" />
              ) : (
                <FaChevronRight className="text-gray-400" />
              )}
            </button>
            {openIndex === 3 && (
              <p className="mt-3 text-gray-600 text-sm">
                We regularly host author readings, signings, and have several
                book clubs that meet monthly. Check our events calendar for
                details.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
