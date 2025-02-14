import express from 'express';
import Notes from '../models/Notes.js';
import fetchuser from '../middleware/fetchuser.js'

const router = express.Router();

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user});
    res.send(notes);
})

export default router;