import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFilm,
  FaTicketAlt,
  FaStar,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdTheaters } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="py-16 mt-16 text-white bg-gradient-to-b from-gray-900 to-[#090614]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Grid Section */}
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 mb-10">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <MdTheaters className="text-3xl mr-2 bg-gradient-to-r from-indigo-500 to-purple-600 p-1 rounded" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                CineSpot
              </span>
            </div>
            <p className="mt-2 text-gray-300">
              Your ultimate destination for movie magic. We bring you the latest
              blockbusters, timeless classics, and everything in between.
              Experience cinema like never before with our premium services.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r from-indigo-500 to-purple-600 transition-all"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r from-indigo-500 to-purple-600 transition-all"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r from-indigo-500 to-purple-600 transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r from-indigo-500 to-purple-600 transition-all"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Movie Categories */}
          <div>
            <h6 className="text-lg font-semibold mb-4 flex items-center">
              <FaFilm className="mr-2 bg-gradient-to-r from-indigo-500 to-purple-600 p-1 rounded" />
              Movie Genres
            </h6>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Action & Adventure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Sci-Fi & Fantasy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Comedy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Drama
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Horror & Thriller
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-lg font-semibold mb-4 flex items-center">
              <FaTicketAlt className="mr-2 bg-gradient-to-r from-indigo-500 to-purple-600 p-1 rounded" />
              Our Services
            </h6>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Online Ticket Booking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Private Screenings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Movie Merchandise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Loyalty Programs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-white flex items-center"
                >
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Special Events
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-lg font-semibold mb-4 flex items-center">
              <FaStar className="mr-2 bg-gradient-to-r from-indigo-500 to-purple-600 p-1 rounded" />
              Contact Us
            </h6>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0 text-purple-400" />
                <span>123 Cinema Avenue, Movie City, MC 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 text-indigo-400" />
                <a
                  href="tel:+11234567890"
                  className="hover:underline hover:text-white"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-purple-400" />
                <a
                  href="mailto:info@cinespot.com"
                  className="hover:underline hover:text-white"
                >
                  info@cinespot.com
                </a>
              </li>
              <li className="pt-2">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-indigo-400" />
                  <h6 className="font-medium text-white">Opening Hours</h6>
                </div>
                <div className="ml-6">
                  <p>Mon-Fri: 10am - 11pm</p>
                  <p>Sat-Sun: 9am - 1am</p>
                  <p className="text-xs mt-1 text-purple-300">
                    *Extended hours for premieres
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col lg:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="text-center lg:text-left w-full">
            &copy; {new Date().getFullYear()} CineSpot. All rights reserved. |
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
                alt="Footer Payment Options"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
