const mongoose = require('mongoose')

const Purchase = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  ad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ad',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('Purchase', Purchase)
