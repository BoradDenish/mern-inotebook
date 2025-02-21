import React, { useContext } from 'react';
import noteContext from "../context/notes/noteContext";
import NoteItems from './NoteItems';

export default function Notes() {
  const { notes } = useContext(noteContext);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Your Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteItems key={note._id} note={note} />
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">No notes available.</p>
        )}
      </div>
    </div>
  );
}
