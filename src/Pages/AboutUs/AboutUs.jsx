import React from "react";
import About from "../../Components/About";
import Brand from "../../Components/Brand";
import MiniBanner from "../../Components/MiniBanner";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <About />
      <Brand />
      <MiniBanner />
    </div>
  );
};

export default AboutUs;
