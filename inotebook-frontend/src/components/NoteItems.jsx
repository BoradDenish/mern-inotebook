import React, { useContext, useState } from "react";
import { Pencil, Trash, X } from "lucide-react";
import noteContext from "../context/notes/noteContext";
import ThemeContext from "../context/ThemeContext";

export default function NoteItems({ note, showAlert }) {
  const { deleteNote, editNote } = useContext(noteContext);
  const { darkMode } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedNote, setEditedNote] = useState({
    id: note._id,
    title: note.title,
    description: note.description,
    tag: note.tag,
  });

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setEditedNote({ ...editedNote, [e.target.name]: e.target.value });
  };
  
  const handleSave = () => {
    editNote(editedNote.id, editedNote.title, editedNote.description, editedNote.tag);
    setIsModalOpen(false);
    showAlert("Note update successfully", "success");
  };

  const handleDelete = () => {
    deleteNote(note._id);
    showAlert("Note Deleted successfully.", "success");
  };

  return (
    <div className={`p-4 rounded-lg shadow-md border ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}>
      <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>{note.title}</h3>
      <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>{note.description}</p>
      {note.tag && (
        <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>#{note.tag}</span>
      )}
      <div className="flex justify-between items-center mt-4">
        <button onClick={handleEditClick} className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          <Pencil size={18} />
        </button>
        <button onClick={handleDelete} className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
          <Trash size={18} />
        </button>
      </div>

      {/* Modal for editing note */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50" style={{ backgroundColor: darkMode ? "rgba(0, 0, 0, 0.6)" : "rgba(128, 128, 128, 0.5)" }}>
          <div className={`p-6 rounded-lg shadow-lg w-full max-w-md border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h2 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Edit Note</h2>
              <button onClick={handleCloseModal} className={`${darkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`}>
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                value={editedNote.title}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 ${darkMode ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-400" : "bg-gray-100 text-gray-900 border-gray-300 focus:ring-blue-500"}`}
                placeholder="Title"
              />
              <textarea
                name="description"
                value={editedNote.description}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg h-28 focus:ring-2 ${darkMode ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-400" : "bg-gray-100 text-gray-900 border-gray-300 focus:ring-blue-500"}`}
                placeholder="Description"
              ></textarea>
              <input
                type="text"
                name="tag"
                value={editedNote.tag}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 ${darkMode ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-400" : "bg-gray-100 text-gray-900 border-gray-300 focus:ring-blue-500"}`}
                placeholder="Tag (optional)"
              />
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <button onClick={handleCloseModal} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                Cancel
              </button>
              <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}