const express = require('express');
const getRouter = express.Router();
const postRouter = express.Router();
const patchRouter = express.Router();
const deleteRouter = express.Router();
const mongoose = require('mongoose');
const ScheduleSavvy = require('../Model/ScheduleSavvy.model');

// Middleware to parse JSON bodies
getRouter.use(express.json());
postRouter.use(express.json());
patchRouter.use(express.json());
deleteRouter.use(express.json());

// Get all tasks
getRouter.get("/gettasks", async (req, res) => {
  try {
    const tasks = await ScheduleSavvy.find();
    res.send(tasks);
  } catch (error) {
    console.error('Failed to fetch tasks:', error);
    res.status(500).send({ error: 'Failed to fetch tasks' });
  }
});

// Create a new task
postRouter.post("/posttask", async (req, res) => {
  try {
    const { ID, title, start, end } = req.body;
    if (!ID || !title || !start || !end) {
      return res.status(400).send({ error: 'ID, Title, start, and end are required fields' });
    }
    const newTask = await ScheduleSavvy.create({ ID, title, start, end });
    res.status(201).json(newTask);
  } catch (error) {
    console.error('Failed to create task:', error);
    res.status(500).send({ error: 'Failed to create task' });
  }
});

// Update an existing task
patchRouter.patch("/updatetask/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const filter = { _id: new mongoose.Types.ObjectId(id) };
    const { title, start, end } = req.body;
    const update = { title, start, end };
    const updatedTask = await ScheduleSavvy.findOneAndUpdate(filter, update, { new: true });

    if (!updatedTask) {
      return res.status(404).send({ error: 'Task not found' });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error('Failed to update task:', error);
    res.status(500).send({ error: 'Failed to update task' });
  }
});

// Delete an task 
deleteRouter.delete("/deletetask/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAppointment = await ScheduleSavvy.findByIdAndDelete(id);
    if (!deletedAppointment) {
      return res.status(404).send({ error: 'Appointment not found' });
    }
    res.send({ id });
  } catch (error) {
    console.error('Failed to delete appointment:', error);
    res.status(500).send({ error: 'Failed to delete appointment' });
  }
});

module.exports = { getRouter, postRouter, deleteRouter, patchRouter };
