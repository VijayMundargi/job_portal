const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  phoneNumber: String,
  password: String,
  subscribed: { type: Boolean, default: false },
  subscriptionPlan: { type: String, default: null },
  subscriptionPrice: { type: String, default: null },
  subscriptionDate: { type: Date, default: null }
});

const User = mongoose.model('User', userSchema);

async function getUserByEmail(email) {
  return await User.findOne({ email });
}

async function createUser(name, email, phoneNumber, password) {
  const user = new User({ name, email, phoneNumber, password });
  await user.save();
  return user._id;
}

module.exports = { User, getUserByEmail, createUser };
