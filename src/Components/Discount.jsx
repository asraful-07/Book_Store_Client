import React from "react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";

const HoverImage = ({ src, alt }) => {
  return (
    <div className="overflow-hidden rounded-2xl">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>
  );
};

const Discount = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 mt-24">
      <div className="flex flex-col md:flex-row justify-center gap-12">
        <div className="w-full md:w-1/2">
          <HoverImage src={image1} alt="Discount image 1" />
        </div>
        <div className="w-full md:w-1/2">
          <HoverImage src={image2} alt="Discount image 2" />
        </div>
      </div>
    </div>
  );
};

export default Discount;
