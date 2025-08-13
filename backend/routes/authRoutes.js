const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/AuthController.js');
const { subscribeToplan, createCheckoutSession, confirmSubscription } = require('../controllers/paymentController.js');

router.post('/register', register);
router.post('/login', login);

// Payment routes
router.post('/subs', subscribeToplan);
router.post('/create-checkout-session', createCheckoutSession);
router.post('/confirm-subscription', confirmSubscription);

module.exports = router;
