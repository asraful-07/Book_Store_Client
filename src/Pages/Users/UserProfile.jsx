import React, { useState } from "react";
import {
  FaUserEdit,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLock,
  FaCheckCircle,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useAuth } from "../../provider/AuthProvider";

const UserProfile = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update profile logic here
      await axiosSecure.put("/users/update", formData);
      setIsEditing(false);
      // Show success message
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-green-500 to-orange-600 p-6 sm:p-8 text-white">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="relative mb-4 sm:mb-0 sm:mr-6">
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/5GzXkwq/default-avatar.png"
                  }
                  alt="Profile"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white border-opacity-50 object-cover"
                />
                <button
                  className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md text-green-600 hover:bg-green-100 transition"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <FaUserEdit size={16} />
                </button>
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold">
                  {user?.displayName || "User"}
                </h1>
                <p className="text-green-100 mt-1 flex items-center justify-center sm:justify-start">
                  <MdEmail className="mr-2" />
                  {user?.email}
                </p>
                <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                    Member
                  </span>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6 sm:p-8">
            {isEditing ? (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Email</label>
                      <div className="flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-gray-100">
                        <MdEmail className="text-gray-500 mr-2" />
                        <span className="text-gray-700">{user?.email}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                        <FaCalendarAlt className="absolute right-3 top-3 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Address
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <FaUserEdit className="mr-2 text-green-500" />
                      Personal Information
                    </h2>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <FaUserEdit className="text-gray-500 mr-3 w-5" />
                        <span className="text-gray-700">
                          {user?.displayName || "Not set"}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="text-gray-500 mr-3 w-5" />
                        <span className="text-gray-700">
                          {formData.dob || "Not set"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <FaEnvelope className="mr-2 text-green-500" />
                      Contact Information
                    </h2>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <MdEmail className="text-gray-500 mr-3 w-5" />
                        <span className="text-gray-700">{user?.email}</span>
                      </div>
                      <div className="flex items-center">
                        <FaPhone className="text-gray-500 mr-3 w-5" />
                        <span className="text-gray-700">
                          {formData.phone || "Not set"}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="text-gray-500 mr-3 w-5" />
                        <span className="text-gray-700">
                          {formData.address || "Not set"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <RiLockPasswordFill className="mr-2 text-green-500" />
                    Security
                  </h2>
                  <div className="space-y-3">
                    <button className="w-full sm:w-auto px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition flex items-center">
                      <FaLock className="mr-2" />
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              Recent Activity
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaCalendarAlt className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Appointment booked</p>
                  <p className="text-sm text-gray-500">
                    2 days ago • Swedish Massage
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaCheckCircle className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Profile updated</p>
                  <p className="text-sm text-gray-500">
                    1 week ago • Contact information
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
