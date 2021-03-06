const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  completed: { type: Boolean },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('todo', todoSchema)