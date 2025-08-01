import React from "react";
import img1 from "../assets/images/img_shop2.png";
import img2 from "../assets/images/img_shop1.png";

const Shop = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-0 md:gap-0 items-center justify-center">
        {/* First Book */}
        <div className="relative group w-full md:w-1/2 overflow-hidden">
          <img
            src={img1}
            alt="Book Collection 1"
            className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
          />
        </div>

        {/* Second Book */}
        <div className="relative group w-full md:w-1/2 overflow-hidden">
          <img
            src={img2}
            alt="Book Collection 2"
            className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
