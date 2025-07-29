import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBook,
  FaShoppingCart,
  FaStar,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="py-16 mt-16 text-white bg-gradient-to-b from-gray-900 to-[#090614]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Grid Section */}
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 mb-10">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <MdMenuBook className="text-3xl mr-2 bg-gradient-to-r from-green-500 to-emerald-600 p-1 rounded" />
              <span className="text-2xl font-bold">
                <img src={logo} alt="BookStore Logo" className="w-28 h-10" />
              </span>
            </div>
            <p className="mt-2 text-gray-300">
              Your premier destination for literary treasures. We offer a vast
              collection of books across all genres, from timeless classics to
              contemporary bestsellers. Discover your next great read with us.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r from-green-500 to-emerald-600 transition-all"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r from-green-500 to-emerald-600 transition-all"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r from-green-500 to-emerald-600 transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r from-green-500 to-emerald-600 transition-all"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Book Categories */}
          <div>
            <h6 className="text-lg font-semibold mb-4 flex items-center">
              <FaBook className="mr-2 bg-gradient-to-r from-green-500 to-emerald-600 p-1 rounded" />
              Book Categories
            </h6>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Fiction & Literature
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Science & Technology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Business & Finance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Children's Books
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Self-Help & Wellness
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-lg font-semibold mb-4 flex items-center">
              <FaShoppingCart className="mr-2 bg-gradient-to-r from-green-500 to-emerald-600 p-1 rounded" />
              Our Services
            </h6>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Online Bookstore
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Book Recommendations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Author Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Book Club Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Corporate Gifting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-lg font-semibold mb-4 flex items-center">
              <FaStar className="mr-2 bg-gradient-to-r from-green-500 to-emerald-600 p-1 rounded" />
              Contact Us
            </h6>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0 text-emerald-400" />
                <span>123 Book Street, Literary District, BK 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 text-green-400" />
                <a
                  href="tel:+11234567890"
                  className="hover:underline hover:text-white"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-emerald-400" />
                <a
                  href="mailto:info@bookhaven.com"
                  className="hover:underline hover:text-white"
                >
                  info@bookhaven.com
                </a>
              </li>
              <li className="pt-2">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-green-400" />
                  <h6 className="font-medium text-white">Opening Hours</h6>
                </div>
                <div className="ml-6">
                  <p>Mon-Fri: 9am - 8pm</p>
                  <p>Sat-Sun: 10am - 6pm</p>
                  <p className="text-xs mt-1 text-emerald-300">
                    *Extended hours during book launches
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col lg:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="text-center lg:text-left w-full">
            &copy; {new Date().getFullYear()} BookHaven. All rights reserved. |
            <a href="#" className="hover:underline hover:text-white ml-1">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:underline hover:text-white ml-1">
              Terms of Service
            </a>
          </p>

          <div className="flex items-center mt-4 lg:mt-0">
            <span className="mr-2">Payments:</span>
            <div className="p-1 bg-white rounded shadow-md w-60 md:w-96 h-auto">
              <img
                src="https://i.ibb.co/QFNjq6Qs/footer.png"
                alt="Payment Options"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
//
