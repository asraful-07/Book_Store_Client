import React from "react";
import { useAuth } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Fill up Information from your Profile
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: User Information */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg border p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name:
                </label>
                <input
                  type="text"
                  value={user?.displayName || "Asraful Islam"}
                  readOnly
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Write your Email:
                </label>
                <input
                  type="email"
                  value={user?.email || "asraful0508@gmail.com"}
                  readOnly
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select your Division
                </label>
                <select className="w-full px-4 py-2 border rounded-lg">
                  <option>Select Your Division Name</option>
                  <option>Dhaka</option>
                  <option>Chittagong</option>
                  <option>Rajshahi</option>
                  <option>Khulna</option>
                  <option>Borishal</option>
                  <option>Moimonsing</option>
                  <option>Rongpur</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select your District
                </label>
                <select className="w-full px-4 py-2 border rounded-lg">
                  <option>Select Your District Name</option>
                  <option>Dhaka</option>
                  <option>Chittagong</option>
                  <option>Rajshahi</option>
                  <option>Khulna</option>
                  <option>Borishal</option>
                  <option>Moimonsing</option>
                  <option>Rongpur</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Write your Full Location:
                </label>
                <input
                  type="text"
                  placeholder="Write your full location"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Give your Phone Number:
                </label>
                <input
                  type="tel"
                  placeholder="Give your phone number"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg border p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-6 text-center">BUY NOW</h2>

            <div className="flex items-center gap-2 mb-6">
              <input
                type="text"
                placeholder="Use Promo Code"
                className="flex-1 px-4 py-2 border rounded-lg"
              />
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition">
                Apply
              </button>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Your Totals Order Items:</span>
                <span className="font-medium">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Expected Delivery:</span>
                <span className="font-medium">04 Aug - 07 Aug</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Sub Total:</span>
                <span className="font-medium">$ 530.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Save Amount:</span>
                <span className="font-medium">$ 0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Charge:</span>
                <span className="font-medium">$ 75.00</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between font-bold text-lg">
                <span>Total Price:</span>
                <span>$ 605.00</span>
              </div>
            </div>

            <Link to="/done">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition">
                PLACE ORDER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
