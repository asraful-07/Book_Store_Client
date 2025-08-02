import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md border border-green-200">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.943123119054!2d-73.99034968459334!3d40.755823179326254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af5b7d0f65%3A0x8f8d28c69c3e1a3b!2sTimes%20Square%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1612384973184!5m2!1sen!2sus"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-none"
      ></iframe>
    </div>
  );
};

export default Map;
