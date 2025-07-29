import React from "react";
import errorImg from "../../assets/images/error.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center justify-center p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full"
      >
        <div className="relative mb-8">
          <img
            src={errorImg}
            alt="Error illustration"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl border-4 border-white"
          />
          <div className="absolute -inset-4 bg-green-200 rounded-xl -z-10 opacity-70"></div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-4">
          Oops!
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-6">
          404 - Page Not Found
        </h2>

        <p className="text-lg text-green-600 mb-8 max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Go Back Home
        </motion.button>

        <div className="mt-12 text-green-500 text-sm">
          <p>Need help? Contact our support team</p>
          <p className="mt-1">support@bookhaven.com</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Error;
