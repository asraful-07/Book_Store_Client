import React from "react";
import { motion } from "framer-motion";

const Done = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-orange-700 to-pink-600 p-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20"
      >
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <div className="w-4 h-4 rounded-full bg-pink-400 animate-pulse" />
            <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse delay-100" />
            <div className="w-4 h-4 rounded-full bg-white animate-pulse delay-200" />
          </div>
        </div>
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-extrabold text-white text-center mb-4"
        >
          Payment Unavailable
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center text-lg text-gray-100 mb-6"
        >
          We're working on it.{" "}
          <span className="font-semibold">Coming Soon!</span>
        </motion.p>
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold px-6 py-3 rounded-full shadow-lg uppercase tracking-wider text-sm">
              Payment Disabled
            </div>
          </motion.div>
        </div>
        <div className="text-center">
          <button
            disabled
            className="mt-2 px-5 py-2 bg-white/20 text-white rounded-full uppercase tracking-wide text-xs font-medium cursor-not-allowed ring-1 ring-white/30"
          >
            Try Again Later
          </button>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-xs text-gray-300"
          >
            <span className="inline-flex items-center gap-1">
              💡 Auto-notify me when available
            </span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-xs text-gray-300"
          >
            <span className="inline-flex items-center gap-1">
              📣 Share feedback
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Done;
