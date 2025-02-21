import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function NoteItems({ note }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`p-4 rounded-lg shadow-md w-full max-w-md my-2 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}>
      <h3 className="text-xl font-bold text-yellow-500">{note.title}</h3>
      <p className="mt-2">{note.description}</p>
      <span className="text-sm text-gray-500 dark:text-gray-400">#{note.tag}</span>
    </div>
  );
}
