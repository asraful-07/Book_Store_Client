import React from "react";
import { FiSend, FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="bg-gray-50 flex flex-col lg:flex-row justify-between  py-16 px-6 mt-16 gap-10">
      {/* Contact Form */}
      <div className="w-full lg:w-2/3 space-y-5">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full">
            <label className="text-sm">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-full border border-gray-200 outline-none"
            />
          </div>
          <div className="w-full">
            <label className="text-sm">Email</label>
            <input
              type="email"
              placeholder="Your Email..."
              className="w-full p-3 rounded-full border border-gray-200 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full">
            <label className="text-sm">Phone</label>
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full p-3 rounded-full border border-gray-200 outline-none"
            />
          </div>
          <div className="w-full">
            <label className="text-sm">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-full border border-gray-200 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-sm">Message</label>
          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full p-3 border border-gray-200 rounded-xl outline-none resize-none"
          ></textarea>
        </div>

        {/* Gradient orange */}
        <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 flex items-center gap-2 w-fit">
          <FiSend /> SEND MESSAGE
        </button>
      </div>

      {/* Contact Info */}
      <div className="w-full lg:w-1/3 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Before Contacting Us</h2>
          <p className="text-lg text-gray-500">
            Feel free to reach out to us for any inquiries, feedback, or
            support. We're here to help you!
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <div className="flex items-center gap-2 text-lg text-gray-600">
            <FiMapPin className="text-orange-600" /> Brooklyn, NY 10036, United
            States
          </div>
          <div className="flex items-center gap-2 text-lg text-gray-600">
            <FiPhone className="text-orange-600" /> 1-800-123-1234
          </div>
          <div className="flex items-center gap-2 text-lg text-gray-600">
            <FiMail className="text-orange-600" /> example@language-school.com
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Social Media</h2>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full hover:bg-emerald-50 text-sm">
              <FaTwitter className="text-orange-600" /> TWITTER
            </button>
            <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full hover:bg-emerald-50 text-sm">
              <FaFacebookF className="text-orange-600" /> FACEBOOK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
