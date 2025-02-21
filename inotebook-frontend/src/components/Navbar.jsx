import React, { useContext } from "react";
import { Link, useLocation } from "react-router";
import { Sun, Moon } from "lucide-react";
import ThemeContext from "../context/ThemeContext";

export default function Navbar() {
  const location = useLocation();
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className={`p-4 shadow-lg transition duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-600 text-black"}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <Link to="/">
            <span className="text-yellow-300">i</span>Notebook
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className={`hover:text-yellow-300 transition ${location.pathname === "/" ? "text-yellow-400" : ""}`}>
            Home
          </Link>
          <Link to="/about" className={`hover:text-yellow-300 transition ${location.pathname === "/about" ? "text-yellow-400" : ""}`}>
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4">
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
