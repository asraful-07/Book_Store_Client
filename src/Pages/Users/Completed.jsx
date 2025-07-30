import React from "react";
import { useNavigate } from "react-router-dom";

const Completed = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      {/* Empty State */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center max-w-xl mx-auto">
        <div className="max-w-md mx-auto">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486744.png"
            alt="No completed books"
            className="w-32 h-32 mx-auto opacity-70 mb-4"
          />
          <h3 className="text-xl font-medium text-gray-700 mb-2">
            No books completed yet
          </h3>
          <p className="text-gray-500 mb-6">
            Finish reading some books from your reading list to see them here
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
          >
            View Reading List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Completed;
