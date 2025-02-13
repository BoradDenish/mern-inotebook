import express from 'express';
import User from '../models/Users.js';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();
const JWT_SECRET = "HelloThisSECRETTOKEN";

// Create a user using: POST "/api/auth/". Doesn't require Auth
router.post('/', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: 0, message: errors.array()[0].msg });
    }

    try {
        const { name, email, password } = req.body;

        // ✅ Check if the user with the same email already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: 0, message: 'Email already in use' });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);

        // ✅ Create a new user if email is unique
        const user = new User({ name, email, password: secPass });
        await user.save();

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        
        res.json({ success: 1, message: 'User registered successfully', 'data': {
            "authToken": authToken
        } });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: 0, message: 'Internal Server Error' });
    }
});

// ✅ Export router correctly
export default router;
