const express = require("express");
const { authMiddleware, checkPaidUser } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, checkPaidUser, (req, res) => {
  res.json({
    jobs: ["Software Engineer", "Backend Developer", "React Developer"],
  });
});

module.exports = router;
