import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Bookstore Blog
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the latest book releases, author interviews, and literary
          insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-4">
          <div className="h-48 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="New Book Releases"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 space-y-3">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              New Releases
            </span>
            <h3 className="text-xl font-semibold text-gray-800">
              Top 10 Must-Read Books This Season
            </h3>
            <p className="text-gray-600">
              Explore our curated list of the hottest new books hitting shelves
              this month across all genres.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>June 15, 2023</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md  transition-transform duration-300 hover:-translate-y-4">
          <div className="h-48 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Author Interview"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 space-y-3">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
              Interviews
            </span>
            <h3 className="text-xl font-semibold text-gray-800">
              Exclusive: Bestselling Author Question
            </h3>
            <p className="text-gray-600">
              We sit down with award-winning author Sarah J. Maas to discuss her
              creative process and new novel.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>May 28, 2023</span>
              <span className="mx-2">•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md  transition-transform duration-300 hover:-translate-y-4">
          <div className="h-48 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Reading Tips"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 space-y-3">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Reading Tips
            </span>
            <h3 className="text-xl font-semibold text-gray-800">
              How to Build a Consistent Reading Habit
            </h3>
            <p className="text-gray-600">
              Practical strategies to help you read more books this year, even
              with a busy schedule.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>April 12, 2023</span>
              <span className="mx-2">•</span>
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
