const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  ID: {
    type: Number,
    required: true
  },
  event: {
    type: String,
    required: false
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  }
});

const Task = mongoose.model('tasks', taskSchema);
module.exports = Task;
