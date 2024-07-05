const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
});

const tasks = mongoose.model('tasks', taskSchema);

module.exports = tasks;
