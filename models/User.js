const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // In production, hash this with bcrypt
  role: { type: String, default: 'member' },
});

module.exports = mongoose.model('User', userSchema);