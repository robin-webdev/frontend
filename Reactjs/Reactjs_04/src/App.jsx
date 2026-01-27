import React from "react";

const App = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form className="w-full max-w-sm bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
