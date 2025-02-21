import React, {useContext} from 'react'
import ThemeContext from "../context/ThemeContext";

export default function About() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`p-6 min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-600 text-white" : "bg-gray-50 text-gray-900"}`}>
      This Is About Components
    </div>
  )
}
