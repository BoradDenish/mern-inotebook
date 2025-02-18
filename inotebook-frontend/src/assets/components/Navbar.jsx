import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-gray-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <Link to="/">
            <span className="text-yellow-300">i</span>Notebook
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-lg text-black outline-none focus:ring-2 focus:ring-yellow-300 bg-gray-400"
          />
          <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
