import React, { useContext } from "react";
import { Pencil, Trash } from "lucide-react"; // Using Sun as Edit & Moon as Delete (Replace with other icons if needed)
import noteContext from "../context/notes/noteContext";

export default function NoteItems({ note }) {
  const { deleteNote } = useContext(noteContext);

  const handleEdit = () => {
    console.log("Editing note:", note._id);
  };

  const handleDelete = () => {
    deleteNote(note._id);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{note.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{note.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus maiores reprehenderit molestiae quia dicta labore, cupiditate accusantium commodi quo temporibus, a nobis, explicabo vel ipsum? Tempore corporis atque est fugit asperiores! Quae.</p>
      {note.tag && (
        <span className="text-sm text-gray-500 dark:text-gray-400">#{note.tag}</span>
      )}
      <div className="flex justify-between items-center mt-4">
        <button onClick={handleEdit} className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          <Pencil size={18} />
        </button>
        <button onClick={handleDelete} className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
          <Trash size={18} />
        </button>
      </div>
    </div>
  );
}
