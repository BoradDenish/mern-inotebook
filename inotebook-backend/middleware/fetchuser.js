import jwt from 'jsonwebtoken';
const JWT_SECRET = "HelloThisSECRETTOKEN";

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ success: 2, message: "Authentication token is required" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error);
        return res.status(401).json({ success: 2, message: "Invalid authentication token" });
    }
};

export default fetchuser;