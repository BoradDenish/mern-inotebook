import react, { useState } from "react";
import NoteContext from "./noteContext";

export default function NoteState (props) {
    const s1 = {
        "name": "denish",
        "class": "A"
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name" : "Borad",
                "class": "B2"
            }, 1500);
        })
    }
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}