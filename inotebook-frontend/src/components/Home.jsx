import React, { useState, useContext } from "react";
import Notes from "./Notes";
import ThemeContext from "../context/ThemeContext";
import noteContext from "../context/notes/noteContext";

export default function Home() {
  const { darkMode } = useContext(ThemeContext);
  const context = useContext(noteContext);
  const {addNote} = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ title: note.title, description: note.description, tag: note.tag });
    // addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" })

  };

  return (
    <div className={`p-48 flex items-center justify-center ${darkMode ? "bg-gray-600 text-white" : "bg-gray-50 text-gray-900"}`}>
      <div className={`w-full max-w-lg p-8 rounded-xl shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <h2 className="text-3xl font-semibold text-center mb-6">Add a Note</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
            className={`w-full p-3 rounded-md border focus:ring-2 focus:ring-yellow-400 outline-none transition ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-gray-100 border-gray-300"}`}
            required
          />
          <textarea
            name="description"
            value={note.description}
            onChange={handleChange}
            placeholder="Description"
            className={`w-full p-3 rounded-md border focus:ring-2 focus:ring-yellow-400 outline-none transition resize-none h-32 ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-gray-100 border-gray-300"}`}
            required
          ></textarea>
          <input
            type="text"
            name="tag"
            value={note.tag}
            onChange={handleChange}
            placeholder="Tag (optional)"
            className={`w-full p-3 rounded-md border focus:ring-2 focus:ring-yellow-400 outline-none transition ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-gray-100 border-gray-300"}`}
          />
          <button type="submit" className="w-full bg-yellow-500 text-gray-900 p-3 rounded-md font-medium hover:bg-yellow-600 transition">
            Submit
          </button>
        </form>
      </div>
      {/* <Notes />  */}
    </div>
  );
}
