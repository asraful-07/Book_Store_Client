import React from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 md:py-20 px-4 lg:px-0 font-poppins">
      <div className="py-12 md:pb-20">
        <div className="flex items-start justify-between lg:flex-row flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 bg-emerald-500"></div>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900">
              Hello, Book Lover!
            </h2>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-epilogue">
              How can we help your bookshelf?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
              We want to turn your book dreams into reality. Whether you're
              looking for new reads, curating a wishlist, or have suggestions —
              get in touch with us easily. As a trusted bookstore, we're always
              here for you.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold mb-6">Let's Connect.</h1>
          <p className="mb-12 text-gray-600">
            Reach out to us anytime — new releases, custom orders, requests, or
            feedback. Our bookstore team is ready to hear from you.
          </p>

          <div className="flex justify-between lg:flex-row flex-col gap-6">
            <div className="mb-6">
              <h2 className="font-semibold mb-4 text-xl">Contact Details</h2>
              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <HiMail className="text-2xl text-emerald-500" />
                  <span>support@mybookshelf.com</span>
                </p>
                <p className="flex items-center gap-3">
                  <HiPhone className="text-2xl text-emerald-500" />
                  <span>+880 1711 223344</span>
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="font-semibold mb-4 text-xl">Address</h2>
              <p className="flex items-start gap-3 text-gray-700">
                {/* <HiMapPin className="text-2xl mt-1 text-emerald-500" /> */}
                <span>
                  MyBookShelf Store, Level 3, Book Plaza,
                  <br />
                  Zindabazar, Sylhet, Bangladesh
                </span>
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-4 text-xl">Social</h2>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/yourbookstore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-green-600 text-2xl" />
              </Link>
              <Link
                href="https://wa.me/8801711223344"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-green-500 text-2xl" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/yourbookstore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-green-700 text-2xl" />
              </Link>
              <Link
                href="https://twitter.com/yourbookstore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-blue-400 text-2xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* Form section (no submission logic) */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                className="border px-4 py-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Your Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="border px-4 py-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              What can we help you with?
            </label>
            <select
              name="department"
              required
              className="border px-4 py-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select Topic</option>
              <option value="Order">Order</option>
              <option value="Recommendation">Recommendation</option>
              <option value="Issue">Issue</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              required
              className="border px-4 py-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <button
            type="button"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition duration-300 font-medium text-lg flex items-center justify-center gap-2"
          >
            SUBMIT <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
