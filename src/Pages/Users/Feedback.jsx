import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useAuth } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";

const Feedback = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const ratingValue = watch("rating", 0);

  const onSubmit = async (data) => {
    try {
      const feedbackData = {
        email: user?.email,
        name: data.name,
        rating: data.rating,
        message: data.message,
        createdAt: new Date(),
      };

      const res = await axiosSecure.post("/feedback", feedbackData);
      if (res.data.insertedId) {
        toast.success("Feedback submitted successfully!");
        reset();
      }
    } catch (error) {
      toast.error("Error submitting feedback");
      console.error(error);
    }
  };

  const handleRatingClick = (value) => {
    setValue("rating", value);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Share Your Feedback
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email (read-only) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className={`w-full px-4 py-2 border rounded-md ${
              errors.name ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-green-600`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rating <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`text-2xl cursor-pointer ${
                  star <= ratingValue ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => handleRatingClick(star)}
              />
            ))}
            <input
              type="hidden"
              {...register("rating", {
                required: "Please select a rating",
                min: 1,
              })}
            />
          </div>
          {errors.rating && (
            <p className="mt-1 text-sm text-red-500">{errors.rating.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Feedback <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("message", {
              required: "Feedback message is required",
              minLength: {
                value: 10,
                message: "Feedback must be at least 10 characters",
              },
            })}
            rows="4"
            className={`w-full px-4 py-2 border rounded-md ${
              errors.message ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-green-600`}
            placeholder="Share your thoughts with us..."
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-800 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md transition duration-300"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
