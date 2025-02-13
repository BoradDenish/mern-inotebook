import express from 'express';
import User from '../models/Users.js';
import { body, validationResult } from 'express-validator';


const router = express.Router();

// Create a user using: POST "/api/auth/". Doesn't require Auth
router.post('/', [
    body('name', 'Enter a vaild name').isLength({min: 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'password must be atleast 5 charavters').isLength({min: 5})
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    // res.send(req.body);
    try {
        console.log(req.body);
        const user = new User(req.body);
        await user.save();
        res.json(user);
    } catch (error) {
        console.error(error);
        // res.status(500).send("Internal Server Error");
        res.json({errors: 'Please Provide unique email', message: error.message})
    }
});

// ✅ Export router correctly
export default router;
