// middlewares/globalMiddleware.js
module.exports = (req, res, next) => {
  
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);

  
  if ((req.method === "POST" || req.method === "PUT") && Object.keys(req.body).length === 0) {
    return res.status(400).json({
      success: false,
      message: "Request body cannot be empty",
    });
  }

  
  if (req.originalUrl.includes("/register") || req.originalUrl.includes("/login")) {
    const { name, email, phoneNumber, password } = req.body;
    if (!email || !password || (req.originalUrl.includes("/register") && (!name || !phoneNumber))) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
  }

  
  next();
};
