import express from 'express';
import Notes from '../models/Notes.js';
import fetchuser from '../middleware/fetchuser.js';
import { body, validationResult } from 'express-validator';


const router = express.Router();

// Get All Notes Using: POST "/api/auth/fetchallnotes". Login Required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.send(notes);
})

// Add New Note Using: POST "/api/auth/addnote". Login Required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: 0, message: errors.array()[0].msg });
    }

    const { title, description, tag  } = req.body;

    try {
        const note = new Notes({
            title,
            description,
            tag,
            user: req.user.id
        })
        const saveNote = await note.save()
        res.status(200).json({ success: 1, message: "Note save successfully", data: saveNote });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: 0, message: 'Internal Server Error' });
    }
});

// Update Exists Note Using: PUT "/api/auth/updatenote". Login Required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag  } = req.body;

    try {
        const newNote = {};
        if(title) {newNote.title = title};
        if(description) {newNote.description = description};
        if(tag) {newNote.tag = tag};

        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ success: 0, message: "Not Found!" });
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).json({ success: 0, message: "Not Allowed!" });
        }

        const updateNote = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.status(200).json({ success: 1, message: "Note update successfully", data: updateNote });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: 0, message: 'Internal Server Error' });
    }
});

// Delete Exists Note Using: DELETE "/api/auth/deletenote". Login Required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag  } = req.body;

    try {
        const newNote = {};
        if(title) {newNote.title = title};
        if(description) {newNote.description = description};
        if(tag) {newNote.tag = tag};

        let note = await Notes.findById(req.params.id);
        if (!note){
            res.status(404).json({ success: 0, message: "Not Found!"});
        }

        if (note.user.toString() !== req.user.id){
            res.status(401).json({ success: 0, message: "Not Allowed!" });
        }

        const updateNote = await Notes.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: 1, message: "Note delete successfully", data: updateNote });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: 0, message: 'Internal Server Error' });
    }
});
export default router;