import React from "react";
import { FiSend, FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Contact Form */}
      <div className="w-full lg:w-2/3 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email..."
              className="w-full p-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full p-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-xl outline-none resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          ></textarea>
        </div>

        {/* Gradient orange button */}
        <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 flex items-center gap-2 w-fit shadow-md hover:shadow-lg">
          <FiSend /> SEND MESSAGE
        </button>
      </div>

      {/* Contact Info */}
      <div className="w-full lg:w-1/3 space-y-8 bg-gray-50 p-8 rounded-xl">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Before Contacting Us
          </h2>
          <p className="text-gray-600">
            Feel free to reach out to us for any inquiries, feedback, or
            support. We're here to help you!
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Contact Information
          </h2>
          <div className="flex items-start gap-3 text-gray-600">
            <FiMapPin className="text-orange-500 mt-1 text-xl" />
            <span>Brooklyn, NY 10036, United States</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <FiPhone className="text-orange-500 text-xl" />
            <span>1-800-123-1234</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <FiMail className="text-orange-500 text-xl" />
            <span>example@language-school.com</span>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Follow Us</h2>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-full hover:bg-orange-50 hover:border-orange-200 text-gray-700 transition-all">
              <FaFacebookF className="text-orange-500" /> Facebook
            </button>
            <button className="flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-full hover:bg-orange-50 hover:border-orange-200 text-gray-700 transition-all">
              <FaTwitter className="text-orange-500" /> Twitter
            </button>
            <button className="flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-full hover:bg-orange-50 hover:border-orange-200 text-gray-700 transition-all">
              <FaLinkedin className="text-orange-500" /> Linkedin
            </button>
            <button className="flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-full hover:bg-orange-50 hover:border-orange-200 text-gray-700 transition-all">
              <FaInstagram className="text-orange-500" /> Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
