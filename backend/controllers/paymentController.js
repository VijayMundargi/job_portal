// controllers/paymentController.js
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const { User } = require('../models/User');

const subscribeToplan = async (req, res) => {
  res.json({ message: 'Subscribed to plan (placeholder)' });
};

const createCheckoutSession = async (req, res) => {
  try {
    const { planId, price, userId } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: `${planId} Plan` },
            unit_amount: parseInt(price) * 100,
          },
          quantity: 1
        }
      ],
      success_url: `http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}&userId=${userId}`,
      cancel_url: 'http://localhost:5173/cancel'
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// ✅ Mark user as subscribed after successful payment
const confirmSubscription = async (req, res) => {
  try {
    const { session_id, userId } = req.body;

    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status === 'paid') {
      await User.findByIdAndUpdate(userId, { subscribed: true });
      return res.json({ success: true, message: 'User subscription updated' });
    }

    res.status(400).json({ success: false, message: 'Payment not completed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  subscribeToplan,
  createCheckoutSession,
  confirmSubscription
};
