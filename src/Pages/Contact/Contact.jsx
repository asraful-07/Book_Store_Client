import React from "react";
import ContactUs from "../../Components/ContactUs";
import Map from "../../Components/Map";
import FAQ from "../../Components/FAQ";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <Map />
      <ContactUs />
      <FAQ />
    </div>
  );
};

export default Contact;
