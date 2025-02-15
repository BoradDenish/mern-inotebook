import express from 'express';
import Notes from '../models/Notes.js';
import fetchuser from '../middleware/fetchuser.js';
import { body, validationResult } from 'express-validator';


const router = express.Router();

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.send(notes);
})


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


export default router;