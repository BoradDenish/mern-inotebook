import React, { useContext } from 'react';
import noteContext from "../context/notes/noteContext";
import NoteItems from './NoteItems';
import { useEffect } from 'react';
import { useNavigate } from "react-router";

export default function Notes({ showAlert }) {
  const { notes, getNote } = useContext(noteContext);
  let navigate = useNavigate();

  // check user login or not
  useEffect(() => {
    if (localStorage.getItem('token')) {
      // Get note list
      getNote();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">Your Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <NoteItems key={note._id || index} note={note} showAlert={showAlert} />
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">No notes available.</p>
        )}
      </div>
    </div>
  );
}
