import React from "react";
import brand1 from "../assets/images/imgi_8_brand-1.png";
import brand2 from "../assets/images/imgi_11_brand-2.png";
import brand3 from "../assets/images/imgi_7_brand-3.png";
import brand4 from "../assets/images/imgi_9_brand-4.png";
import brand5 from "../assets/images/imgi_10_brand-5.png";
const Brand = () => {
  return (
    <div className="py-12">
      <div className="flex justify-between items-center gap-8">
        <img
          src={brand2}
          alt="Brand-1"
          className="w-32 h-auto filter grayscale transition-transform duration-300 hover:-translate-y-4 cursor-pointer"
        />
        <img
          src={brand1}
          alt="Brand-2"
          className="w-32 h-auto filter grayscale transition-transform duration-300 hover:-translate-y-4 cursor-pointer"
        />
        <img
          src={brand3}
          alt="Brand-3"
          className="w-32 h-auto filter grayscale transition-transform duration-300 hover:-translate-y-4 cursor-pointer"
        />
        <img
          src={brand4}
          alt="Brand-4"
          className="w-32 h-auto filter grayscale transition-transform duration-300 hover:-translate-y-4 cursor-pointer"
        />
        <img
          src={brand5}
          alt="Brand-5"
          className="w-32 h-auto filter grayscale transition-transform duration-300 hover:-translate-y-4 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Brand;
