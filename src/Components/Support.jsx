import React from "react";
import support1 from "../assets/images/support1.png";
import support2 from "../assets/images/support2.png";
import support3 from "../assets/images/support3.png";

const SupportCard1 = () => (
  <div className="flex-1 px-4 py-8 text-center transition-transform duration-300 hover:-translate-y-1">
    <div className="max-w-xs mx-auto">
      <div className="flex justify-center mb-4">
        <img
          src={support1}
          alt="Free Shipping"
          className="w-16 h-16 object-contain"
        />
      </div>
      <h3 className="text-sm md:text-base font-semibold tracking-wide mb-2">
        FREE SHIPPING WORLDWIDE
      </h3>
      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
        We offer free shipping via Standard Shipping on orders over $200.00
      </p>
    </div>
  </div>
);

const SupportCard2 = () => (
  <div className="flex-1 px-4 py-8 text-center transition-transform duration-300 hover:-translate-y-1">
    <div className="max-w-xs mx-auto">
      <div className="flex justify-center mb-4">
        <img
          src={support2}
          alt="Customer Support"
          className="w-16 h-16 object-contain"
        />
      </div>
      <h3 className="text-sm md:text-base font-semibold tracking-wide mb-2">
        24/7 CUSTOMER SUPPORT
      </h3>
      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
        We offer free shipping via Standard Shipping on orders over $200.00
      </p>
    </div>
  </div>
);

const SupportCard3 = () => (
  <div className="flex-1 px-4 py-8 text-center transition-transform duration-300 hover:-translate-y-1">
    <div className="max-w-xs mx-auto">
      <div className="flex justify-center mb-4">
        <img
          src={support3}
          alt="Money Back"
          className="w-16 h-16 object-contain"
        />
      </div>
      <h3 className="text-sm md:text-base font-semibold tracking-wide mb-2">
        MONEY BACK GUARANTEE
      </h3>
      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
        We offer free shipping via Standard Shipping on orders over $200.00
      </p>
    </div>
  </div>
);

const Support = () => {
  return (
    <div className="bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <SupportCard1 />
          <SupportCard2 />
          <SupportCard3 />
        </div>
      </div>
    </div>
  );
};

export default Support;
