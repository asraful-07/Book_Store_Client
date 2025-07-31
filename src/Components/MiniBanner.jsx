import React from "react";
import img from "../assets/images/image3.jpg";

const MiniBanner = () => {
  return (
    <div className="py-12">
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt="Banner"
          className="w-full h-[100px] md:h-[200px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default MiniBanner;
