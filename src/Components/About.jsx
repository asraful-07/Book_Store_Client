import React, { useEffect } from "react";
import bgImg from "../assets/images/imgi_5_banner-27.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div className="relative  min-h-screen overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-amber-100/20 blur-3xl"></div>
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-blue-100/20 blur-3xl"></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side - Image with elegant frame */}
        <div
          className="w-full lg:w-1/2 relative"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="relative z-10 overflow-hidden rounded-xl shadow-2xl">
            <img
              src={bgImg}
              alt="Elegant Book Collection"
              className="w-full h-auto object-cover transition-all duration-700 hover:scale-105"
              style={{ filter: "brightness(0.95) contrast(1.05)" }}
            />
            <div className="absolute inset-0 border-8 border-white/30 pointer-events-none"></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 -left-8 -top-8 w-full h-full border-2 border-amber-400/40 rounded-xl"></div>
          <div className="absolute -z-20 -left-12 -top-12 w-full h-full border border-amber-200/20 rounded-xl"></div>
        </div>

        {/* Right Side - Content */}
        <div
          className="w-full lg:w-1/2 space-y-8"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="relative">
            <span className="text-sm font-medium text-amber-600 tracking-widest">
              PREMIUM COLLECTION
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mt-4 leading-tight">
              Discover the <span className="text-amber-600">Art</span> of
              Reading
            </h1>
            <div className="absolute -left-24 top-0 h-full w-px bg-gradient-to-b from-transparent via-amber-400 to-transparent hidden lg:block"></div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            Immerse yourself in our curated collection of literary masterpieces.
            Each volume is a gateway to new worlds, bound in premium materials
            that honor the written word.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-200 flex items-center gap-2 group">
              <span>Browse Collection</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <button className="px-8 py-3.5 border border-gray-300 hover:border-amber-400 text-gray-700 hover:text-amber-700 font-medium rounded-lg transition-all duration-300 hover:bg-amber-50/50 flex items-center gap-2 group">
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:rotate-45 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
            {[
              { value: "600+", label: "Titles Available" },
              { value: "1847", label: "Established" },
              { value: "100%", label: "Quality Guarantee" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm"
                data-aos="fade-up"
                data-aos-delay={200 * index}
              >
                <p className="text-2xl font-bold text-amber-600">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating book decorative elements */}
      <div className="hidden lg:block">
        <div
          className="absolute left-1/4 top-1/3 w-16 h-24 bg-gradient-to-br from-amber-50 to-amber-100 shadow-lg rotate-12"
          data-aos="fade-down"
          data-aos-delay="800"
        ></div>
        <div
          className="absolute left-1/4 bottom-1/4 w-20 h-28 bg-gradient-to-tr from-blue-50 to-blue-100 shadow-xl -rotate-6"
          data-aos="fade-up"
          data-aos-delay="1000"
        ></div>
      </div>
    </div>
  );
};

export default About;
