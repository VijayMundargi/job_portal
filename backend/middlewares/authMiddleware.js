const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
      return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) return res.status(401).json({ message: "User not found" });

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

const checkPaidUser = (req, res, next) => {
  if (req.user.role === "free") {
    return res.status(403).json({ message: "Please buy a plan first" });
  }
  next();
};

module.exports = { authMiddleware, checkPaidUser };
