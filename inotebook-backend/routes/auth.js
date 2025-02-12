import express from 'express';
import User from '../models/Users.js';
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Create a user using: POST "/api/auth/". Doesn't require Auth
router.post('/', [
    body('name').isLength({min: 3}),
    body('email').isEmail(),
    body('password').isLength({min: 5})
], async (req, res) => {
    try {
        console.log(req.body);
        const user = new User(req.body);
        await user.save();
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// ✅ Export router correctly
export default router;
