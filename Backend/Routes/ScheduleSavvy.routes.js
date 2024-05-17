const express = require('express');
const getRouter = express.Router();
const postRouter = express.Router();
const patchRouter = express.Router();
const deleteRouter = express.Router();
const ScheduleSavvy = require('../Model/ScheduleSavvy.model'); 

getRouter.use(express.json());
postRouter.use(express.json());
patchRouter.use(express.json());
deleteRouter.use(express.json());

// Get all appointments
getRouter.get("/gettasks", async (req, res) => {
    try {
      const tasks = await ScheduleSavvy.find();
      res.send(tasks);
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch tasks' });
    }
});

// Create a new appointment
postRouter.post("/posttask", async (req, res) => {
  try {
    const { ID, event, start, end } = req.body;
    const newTask = await ScheduleSavvy.create({ ID, event, start, end });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).send({ error: 'Failed to create task' });
  }
});

// Update an existing appointment
patchRouter.patch("/updatetask/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const filter = { _id: mongoose.Types.ObjectId(id) }; // Convert id to ObjectId

    const { ID, event, start, end } = req.body;
    const update = { ID, event, start, end };

    const updatedTask = await ScheduleSavvy.findOneAndUpdate(filter, update, { new: true });

    if (!updatedTask) {
      return res.status(404).send({ error: 'Task not found' });
    }

    res.status(200).json(updatedTask);
    } catch (error) {
    res.status(500).send({ error: 'Failed to update task' });
  }
});

// Delete an appointment by ID
deleteRouter.delete("/appointments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAppointment = await ScheduleSavvy.findByIdAndDelete(id);
    if (!deletedAppointment) {
      res.status(404).send({ error: 'Appointment not found' });
    } else {
      res.send({ id });
    }
  } catch (error) {
    res.status(500).send({ error: 'Failed to delete appointment' });
  }
});

module.exports = {getRouter, postRouter, deleteRouter, patchRouter};