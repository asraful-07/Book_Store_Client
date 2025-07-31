import React from "react";
import { FaComments } from "react-icons/fa";

const Massage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-green-200 px-4">
      <div className="text-green-600 text-6xl mb-4 animate-bounce">
        <FaComments />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Chatting System Coming Soon!
      </h1>
      <p className="text-gray-600 text-center max-w-md">
        We’re working hard to bring you a real-time chatting experience. Stay
        tuned — exciting features are on the way!
      </p>
      <div className="mt-8">
        <span className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg text-sm animate-pulse">
          Stay Connected 💬
        </span>
      </div>
    </div>
  );
};

export default Massage;
