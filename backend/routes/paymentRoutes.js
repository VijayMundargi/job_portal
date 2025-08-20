const express = require("express");
const { createOrder, paymentVerification } = require("../controllers/paymentController");

const router = express.Router();

// Checkout route
router.post("/checkout", createOrder);

// Verify payment route
router.post("/verify", paymentVerification);

module.exports = router;
