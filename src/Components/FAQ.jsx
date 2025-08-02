"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronRight, FaMotorcycle } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-16">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://i.ibb.co.com/Ldd8qdnR/faq-img.webp"
          alt="Student Learning"
          className="w-full max-w-md mx-auto md:mx-0"
        />
      </div>

      {/* Right Side - FAQ Content */}
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-2 mb-2">
          <FaMotorcycle className="text-orange-500" />
          <p className="text-orange-600 font-semibold uppercase">Moto FAQs</p>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Rider <span className="text-orange-500">Questions</span> Answered
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
                What models do you service?
              </span>
              {openIndex === 0 ? (
                <FaChevronDown className="text-orange-600" />
              ) : (
                <FaChevronRight className="text-gray-400" />
              )}
            </button>
            {openIndex === 0 && (
              <p className="mt-3 text-gray-600 text-sm">
                We specialize in Honda and Yamaha motorcycles of all models,
                from sport bikes to cruisers.
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
                Do you use genuine OEM parts?
              </span>
              {openIndex === 1 ? (
                <FaChevronDown className="text-orange-600" />
              ) : (
                <FaChevronRight className="text-gray-400" />
              )}
            </button>
            {openIndex === 1 && (
              <p className="mt-3 text-gray-600 text-sm">
                Yes, we only use authentic Honda and Yamaha parts for all
                repairs and maintenance.
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
                How often should I service my bike?
              </span>
              {openIndex === 2 ? (
                <FaChevronDown className="text-orange-600" />
              ) : (
                <FaChevronRight className="text-gray-400" />
              )}
            </button>
            {openIndex === 2 && (
              <p className="mt-3 text-gray-600 text-sm">
                We recommend service every 3,000-5,000 km depending on your
                riding conditions and model.
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
                Do you offer test rides?
              </span>
              {openIndex === 3 ? (
                <FaChevronDown className="text-orange-600" />
              ) : (
                <FaChevronRight className="text-gray-400" />
              )}
            </button>
            {openIndex === 3 && (
              <p className="mt-3 text-gray-600 text-sm">
                Yes, with valid motorcycle license and proper safety gear, we
                offer test rides on select models.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
