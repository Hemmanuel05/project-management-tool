const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: String,
  description: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const listSchema = new mongoose.Schema({
  title: String,
  cards: [cardSchema],
});

const boardSchema = new mongoose.Schema({
  title: String,
  lists: [listSchema],
  members: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, role: String }],
});

module.exports = mongoose.model('Board', boardSchema);