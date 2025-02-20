import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <nav className={`bg-gray-600 ${darkMode ? "dark:bg-gray-900" : ""} text-white p-4 shadow-lg`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <Link to="/">
            <span className="text-yellow-300">i</span>Notebook
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={`hover:text-yellow-300 transition ${location.pathname === "/" ? "text-yellow-400" : ""}`}>
            Home
          </Link>
          <Link to="/about" className={`hover:text-yellow-300 transition ${location.pathname === "/about" ? "text-yellow-400" : ""}`}>
            About
          </Link>
        </div>

        {/* Search Bar & Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className={`p-2 rounded-lg text-black outline-none focus:ring-2 focus:ring-yellow-300 bg-gray-400 ${darkMode ? "dark:bg-gray-700 dark:text-white" : ""}`}
          />
          <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition">
            Search
          </button>
          <button
            onClick={() => setDarkMode((prevMode) => !prevMode)}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-yellow-300 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
