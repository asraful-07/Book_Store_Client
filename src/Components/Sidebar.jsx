import { FiSearch, FiX } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";

const Sidebar = ({ filters, setFilters }) => {
  const categories = [
    "Children",
    "Adventure",
    "Biographic",
    "Cook",
    // "Fantasy",
    // "History",
    // "Science",
    // "Technology",
  ];
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClear = () => {
    setFilters({
      category: "",
      search: "",
      sort: "",
      type: "",
    });
  };

  return (
    <>
      {/* Mobile filter button */}
      <button
        type="button"
        className="md:hidden flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md mb-4"
        onClick={() => setMobileFiltersOpen(true)}
      >
        <FaFilter className="h-4 w-4" />
        Filters
      </button>

      {/* Desktop sidebar */}
      <div
        className={`${
          mobileFiltersOpen ? "fixed inset-0 z-50" : "hidden"
        } md:block bg-white md:bg-transparent md:relative`}
      >
        {mobileFiltersOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-25"
            onClick={() => setMobileFiltersOpen(false)}
          ></div>
        )}

        <div
          className={`${
            mobileFiltersOpen
              ? "fixed inset-y-0 left-0 w-72 bg-white p-4 overflow-y-auto z-50 shadow-xl"
              : "bg-white p-6 rounded-lg shadow-sm"
          }`}
        >
          {mobileFiltersOpen && (
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>
          )}

          <div className="space-y-6">
            {/* Search */}
            <div>
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Search
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  onChange={handleChange}
                  value={filters.search}
                  placeholder="Search books..."
                  className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                onChange={handleChange}
                value={filters.category}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md border"
              >
                <option value="">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c.toLowerCase()}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label
                htmlFor="sort"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sort By
              </label>
              <select
                id="sort"
                name="sort"
                onChange={handleChange}
                value={filters.sort}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md border"
              >
                <option value="">Default</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>

            {/* Book Type */}
            <div>
              <fieldset>
                <legend className="text-sm font-medium text-gray-700 mb-1">
                  Book Type
                </legend>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="type-all"
                      name="type"
                      type="radio"
                      value=""
                      checked={filters.type === ""}
                      onChange={handleChange}
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                    />
                    <label
                      htmlFor="type-all"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      All Types
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="type-new"
                      name="type"
                      type="radio"
                      value="new"
                      checked={filters.type === "new"}
                      onChange={handleChange}
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                    />
                    <label
                      htmlFor="type-new"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      New
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="type-old"
                      name="type"
                      type="radio"
                      value="old"
                      checked={filters.type === "old"}
                      onChange={handleChange}
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                    />
                    <label
                      htmlFor="type-old"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Old
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleClear}
                className="flex-1 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Clear
              </button>
              <button
                onClick={() => mobileFiltersOpen && setMobileFiltersOpen(false)}
                className="flex-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
