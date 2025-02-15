import express from 'express';
import Notes from '../models/Notes.js';
import fetchuser from '../middleware/fetchuser.js';
import { body, validationResult } from 'express-validator';


const router = express.Router();

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user});
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

    const { email, password } = req.body;

    try {
        console.log("try block");
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: 0, message: 'Internal Server Error' });
    }
});


export default router;