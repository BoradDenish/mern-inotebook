import react, { useState } from "react";
import NoteContext from "./noteContext";

export default function NoteState (props) {

    return (
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}