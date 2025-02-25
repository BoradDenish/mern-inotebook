import react, { useState } from "react";
import NoteContext from "./noteContext";

export default function NoteState (props) {
    const host = "http://localhost:5000/api";

    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    // Get All Notes
    const getNote = async () => {

        const response = await fetch(`${host}/notes/fetchallnotes`, {
            method: 'GEt',
            headers: {
                'Content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        setNotes(json)
    }

    // Add note
    // const addNote = (title, description, tag) => {
    const addNote = async (newNote) => {

        const response = await fetch(`${host}/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title: newNote.title, description: newNote.description, tag: newNote.tag})
        })
        const json = await response.json();

        setNotes(notes.concat(json))
    }

    // Delete note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        const newNotes = notes.filter((note) => {return note._id!==id});
        setNotes(newNotes);
    } 

    // Edit note
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title: title, description: description, tag: tag})
        })
        const json = await response.json();

        let newNotes = JSON.parse(JSON.stringify(notes));

        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if(element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);

    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}