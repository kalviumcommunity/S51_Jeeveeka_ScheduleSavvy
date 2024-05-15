const express = require('express');
const getRouter = express.Router();
const postRouter = express.Router();
const putRouter = express.Router();
const deleteRouter = express.Router();
const ScheduleSavvy = require('../Model/ScheduleSavvy.model'); 

getRouter.use(express.json());
postRouter.use(express.json());
putRouter.use(express.json());
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
    const { id, event, start, end } = req.body;
    const newTask = await ScheduleSavvy.create({ id, event, start, end });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).send({ error: 'Failed to create task' });
  }
});

// Update an existing appointment
putRouter.put("/appointments", async (req, res) => {
  try {
    const { appointment } = req.body;
    const updatedAppointment = await ScheduleSavvy.findByIdAndUpdate(appointment._id, appointment, { new: true });
    if (!updatedAppointment) {
      res.status(404).send({ error: 'Appointment not found' });
    } else {
      res.send({ appointment: updatedAppointment });
    }
  } catch (error) {
    res.status(500).send({ error: 'Failed to update appointment' });
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

module.exports = {getRouter, postRouter, deleteRouter, putRouter};