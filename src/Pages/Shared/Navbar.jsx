import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../../provider/AuthProvider";
import { FaSignOutAlt, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-transparent">
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-4 py-3 md:px-8 container mx-auto">
        <img src={logo} alt="Logo" className="w-28 h-10" />
        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-700 hover:text-green-600 transition-all"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <NavLink
              to="/"
              className={`px-4 py-2 transition-colors ${
                isActive("/")
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-600 font-medium"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={`px-4 py-2 transition-colors ${
                isActive("/about")
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-600 font-medium"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={`px-4 py-2 transition-colors ${
                isActive("/contact")
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-600 font-medium"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={`px-4 py-2 transition-colors ${
                isActive("/blog")
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-600 font-medium"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={`px-4 py-2 transition-colors ${
                isActive("/books")
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-600 font-medium"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              All Books
            </NavLink>
          </li>
          <li className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 p-2 text-gray-700 hover:text-green-600"
            >
              <FaRegUserCircle size={36} />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowDropdown(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setShowDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <FaSignOutAlt />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                      onClick={() => setShowDropdown(false)}
                    >
                      <FaSignInAlt />
                      Sign In
                    </Link>
                    <Link
                      to="/register"
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                      onClick={() => setShowDropdown(false)}
                    >
                      <FaUserPlus />
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold bg-gradient-to-r from-green-500 to-orange-600 bg-clip-text text-transparent">
            <img src={logo} alt="" />
          </h2>
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-700 hover:text-green-600"
          >
            <FaTimes size={20} />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-2">
          <li>
            <NavLink
              to="/"
              onClick={toggleSidebar}
              className={`block px-4 py-3 ${
                isActive("/")
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-600 font-medium"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={toggleSidebar}
              className={`block px-4 py-3 ${
                isActive("/about")
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-600 font-medium"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={toggleSidebar}
              className={`block px-4 py-3 ${
                isActive("/contact")
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-600 font-medium"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              onClick={toggleSidebar}
              className={`block px-4 py-3 ${
                isActive("/books")
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-600 font-medium"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              All Books
            </NavLink>
          </li>
          <li className="mt-4">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={toggleSidebar}
                  className="block w-full px-4 py-3 rounded-full bg-gradient-to-r from-green-500 to-orange-600 text-white font-semibold hover:from-green-600 hover:to-orange-700 transition-all shadow-md text-center"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    toggleSidebar();
                  }}
                  className="w-full mt-2 px-4 py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <FaSignOutAlt /> Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={toggleSidebar}
                  className="w-full px-4 py-3 rounded-full bg-gradient-to-r from-green-500 to-orange-600 text-white font-semibold hover:from-green-600 hover:to-orange-700 transition-all shadow-md text-center flex items-center justify-center gap-2"
                >
                  <FaSignInAlt /> Sign In
                </Link>
                <Link
                  to="/register"
                  onClick={toggleSidebar}
                  className="w-full mt-2 px-4 py-3 rounded-full border border-green-500 text-green-600 font-semibold hover:bg-green-50 transition-all shadow-md text-center flex items-center justify-center gap-2"
                >
                  <FaUserPlus /> Sign Up
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
