import React from "react";
import bgImg from "../assets/images/image44.jpg";

const Avatar = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900 min-h-[500px] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Whispers Of <br className="hidden md:block" /> The Written Word
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Beneath the Golden Sky: A Story of Dreams and Destiny
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105">
              Shop Now
            </button>
            <button className="bg-transparent border-2 border-white text-white font-medium px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
};

export default Avatar;
