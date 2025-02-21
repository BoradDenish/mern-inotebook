import React, { useState, useContext } from "react";
import Notes from "./Notes";
import ThemeContext from "../context/ThemeContext"; // Import ThemeContext

export default function Home() {
  const { darkMode } = useContext(ThemeContext); // Use ThemeContext

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Note Submitted: ", note);
    setNote({ title: "", description: "", tag: "" });
  };

  return (
    <>
      <div className={`p-6 mt-2 min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <div className={`w-full max-w-md p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
          <h2 className="text-2xl font-bold mb-4 text-center">Add a Note</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={handleChange}
              placeholder="Title"
              className={`w-full p-2 rounded-lg border ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-gray-200 border-gray-300"}`}
              required
            />
            <textarea
              name="description"
              value={note.description}
              onChange={handleChange}
              placeholder="Description"
              className={`w-full p-2 rounded-lg border ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-gray-200 border-gray-300"}`}
              required
            ></textarea>
            <input
              type="text"
              name="tag"
              value={note.tag}
              onChange={handleChange}
              placeholder="Tag"
              className={`w-full p-2 rounded-lg border ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-gray-200 border-gray-300"}`}
            />
            <button type="submit" className="w-full bg-yellow-400 text-black p-2 rounded-lg hover:bg-yellow-500 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Notes />
    </>
  );
}
