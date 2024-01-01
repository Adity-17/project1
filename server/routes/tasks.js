const express = require('express');
//import Task from '../models/task';
const {Task}  = require('../models/task'); // Assuming your Task model is exported properly
const router = express.Router();

// Create a new task
router.post('/', async (req, res) => {
  const { name, completed, listId } = req.body;

  try {
    const newTask = await Task.create({ name, completed, ListId: listId });

    res.status(201).json({ message: 'Task created successfully', task: newTask });
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error: error.message });
  }
});

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll();

    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error: error.message });
  }
});

// Update a task
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, completed } = req.body;

  try {
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await task.update({ name, completed });

    res.status(200).json({ message: 'Task updated successfully', task });
  } catch (error) {
    res.status(500).json({ message: 'Error updating task', error: error.message });
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await task.destroy();

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task', error: error.message });
  }
});

module.exports = router;
