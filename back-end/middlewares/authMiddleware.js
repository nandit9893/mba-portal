import jwt from 'jsonwebtoken';
import User from '../models/userModel.js'; // Use default import to match the export
import Admin from '../models/Admin.js'; // Ensure you have an Admin model

import JWT from "jsonwebtoken";





export const userAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    next("Auth Failed");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = JWT.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    next("Auth Failed");
  }
};



export const protectAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ success: false, message: "No token provided" });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = await Admin.findById(decoded.adminId).select("-password");

        if (!req.admin) {
            return res.status(401).json({ success: false, message: "Not authorized" });
        }

        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "Token is invalid" });
    }
};

// *Protect User Middleware (Alternative Authentication)*
export const protectUser = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');

            if (!req.user) {
                return res.status(401).json({ success: false, message: 'User not found' });
            }

            next();
        } catch (error) {
            res.status(401).json({ error: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ error: 'Not authorized, no token' });
    }
};

export const authenticateUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ success: false, message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded); // Debug log

        if (!decoded || !decoded.userId) {
            return res.status(401).json({ success: false, message: "Invalid token" });
        }

        req.user = await userModel.findById(decoded.userId).select("-password");
        if (!req.user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        console.log("Authenticated User:", req.user); // Debug log
        next();
    } catch (error) {
        console.error("Authentication Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
};





export const authMiddleware = async (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.userId;
      next();
    } catch (err) {
      res.status(401).json({ msg: 'Token is not valid' });
    }
};
export default authMiddleware;
