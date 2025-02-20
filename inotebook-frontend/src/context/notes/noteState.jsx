import react, { useState } from "react";
import NoteContext from "./noteContext";

export default function NoteState (props) {
    const notesInitial = [
        {
            "_id": "67b0e594980017c5cb2b97f8",
            "user": "67ae29d238f499dce06fbd62",
            "title": "This first title2",
            "description": "This first description2",
            "tag": "This First tag2",
            "date": "2025-02-15T19:05:56.889Z",
            "__v": 0
        },
        {
            "_id": "67b0e594980017c5cb2b9722",
            "user": "67ae29d238f499dce06fbd62",
            "title": "This first title2",
            "description": "This first description2",
            "tag": "This First tag2",
            "date": "2025-02-15T19:05:56.889Z",
            "__v": 0
        },
        {
            "_id": "67b0e594980017c5cb2b9723",
            "user": "67ae29d238f499dce06fbd62",
            "title": "This first title2",
            "description": "This first description2",
            "tag": "This First tag2",
            "date": "2025-02-15T19:05:56.889Z",
            "__v": 0
        },
        {
            "_id": "67b0e594980017c5cb2b9724",
            "user": "67ae29d238f499dce06fbd62",
            "title": "This first title2",
            "description": "This first description2",
            "tag": "This First tag2",
            "date": "2025-02-15T19:05:56.889Z",
            "__v": 0
        },
        {
            "_id": "67b0e594980017c5cb2b97243",
            "user": "67ae29d238f499dce06fbd62",
            "title": "This first title2",
            "description": "This first description2",
            "tag": "This First tag2",
            "date": "2025-02-15T19:05:56.889Z",
            "__v": 0
        },
        {
            "_id": "67b0e5s94980017c5cb2b9724",
            "user": "67ae29d238f499dce06fbd62",
            "title": "This first title2",
            "description": "This first description2",
            "tag": "This First tag2",
            "date": "2025-02-15T19:05:56.889Z",
            "__v": 0
        },
        {
            "_id": "67b0se594980017c5cb2b9724",
            "user": "67ae29d238f499dce06fbd62",
            "title": "This first title2",
            "description": "This first description2",
            "tag": "This First tag2",
            "date": "2025-02-15T19:05:56.889Z",
            "__v": 0
        },
        {
            "_id": "67b0e594980017c5cb2b9724",
            "user": "67ae29d238f499dce06fbd62",
            "title": "This first title2",
            "description": "This first description2",
            "tag": "This First tag2",
            "date": "2025-02-15T19:05:56.889Z",
            "__v": 0
        },
        {
            "_id": "67b0e5s94980017sc5cb2b9724",
            "user": "67ae29d238f499dce06fbd62",
            "title": "This first title2",
            "description": "This first description2",
            "tag": "This First tag2",
            "date": "2025-02-15T19:05:56.889Z",
            "__v": 0
        },
        {
            "_id": "67b0se59498s0017c5cb2b9724",
            "user": "67ae29d238f499dce06fbd62",
            "title": "This first title2",
            "description": "This first description2",
            "tag": "This First tag2",
            "date": "2025-02-15T19:05:56.889Z",
            "__v": 0
        },
        {
            "_id": "67b0e594980s017c5cb2b9724",
            "user": "67ae29d238f499dce06fbd62",
            "title": "This first title2",
            "description": "This first description2",
            "tag": "This First tag2",
            "date": "2025-02-15T19:05:56.889Z",
            "__v": 0
        },
        {
            "_id": "67b0e5s949820017c5cb2b9724",
            "user": "67ae29d238f499dce06fbd62",
            "title": "This first title2",
            "description": "This first description2",
            "tag": "This First tag2",
            "date": "2025-02-15T19:05:56.889Z",
            "__v": 0
        },
        {
            "_id": "67b0se5924980017c5cb2b9724",
            "user": "67ae29d238f499dce06fbd62",
            "title": "This first title2",
            "description": "This first description2",
            "tag": "This First tag2",
            "date": "2025-02-15T19:05:56.889Z",
            "__v": 0
        },
        {
            "_id": "67b0e5294980017c5cb2b9724",
            "user": "67ae29d238f499dce06fbd62",
            "title": "This first title2",
            "description": "This first description2",
            "tag": "This First tag2",
            "date": "2025-02-15T19:05:56.889Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}