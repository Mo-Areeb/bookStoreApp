import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-10">
      
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">
          About Our Book Store
        </h1>
        <p className="text-gray-600">
          A place where stories live and knowledge grows 📚
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-8">

        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4">
            We are an online bookstore where you can find all types of books—novels, academic books, self-help, and competitive exam books.
          </p>

          <p className="text-gray-600">
            Our goal is to provide readers with high-quality books at affordable prices.
          </p>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            Our Mission
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li>📖 Promote reading habits</li>
            <li>🚀 Provide fast delivery and the best service</li>
            <li>💡 Make knowledge accessible to everyone</li>
            <li>🌍 Provide the right book for every reader</li>
          </ul>
        </div>
      </div>

      {/* Extra Section */}
      <div className="max-w-5xl mx-auto mt-12 text-center">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold mb-2">Wide Collection</h3>
            <p className="text-sm text-gray-600">
              All categories of books in one place.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold mb-2">Affordable Prices</h3>
            <p className="text-sm text-gray-600">
              Best deals aur discounts available
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold mb-2">Fast Delivery</h3>
            <p className="text-sm text-gray-600">
              Quick aur safe delivery service
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;