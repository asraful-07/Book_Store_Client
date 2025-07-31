import React from "react";
import { useAuth } from "../provider/AuthProvider";
import { FaSmileBeam } from "react-icons/fa";

const WellCome = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-green-100 via-green-100 to-indigo-100 px-4">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-xl w-full text-center">
        <div className="text-5xl text-green-500 mb-4 animate-pulse">
          <FaSmileBeam />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Welcome, {user?.name || "Dear User"}! 👋
        </h1>
        <p className="text-gray-600 text-lg">
          We're excited to have you here. Explore the books, connect with your
          favorites, and enjoy your journey with us!
        </p>
        <div className="mt-6">
          <span className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg text-sm shadow hover:bg-green-700 transition">
            Start Exploring
          </span>
        </div>
      </div>
    </div>
  );
};

export default WellCome;
