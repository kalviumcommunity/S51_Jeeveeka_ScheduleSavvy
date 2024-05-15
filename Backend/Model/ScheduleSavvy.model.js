const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  id: {
    type: Number,
    required: false
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