const express = require('express');
const  {List}  = require('../models/list').default; // Assuming your List model is exported properly
const router = express.Router();
//import List from '../models/list';
// Create a new list
router.post('/', async (req, res) => {
  const { name } = req.body;

  try {
    const newList = await List.create({ name });

    res.status(201).json({ message: 'List created successfully', list: newList });
  } catch (error) {
    res.status(500).json({ message: 'Error creating list', error: error.message });
  }
});

// Get all lists
router.get('/', async (req, res) => {
  try {
    const lists = await List.findAll();

    res.status(200).json({ lists });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching lists', error: error.message });
  }
});

// Update a list
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const list = await List.findByPk(id);

    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }

    await list.update({ name });

    res.status(200).json({ message: 'List updated successfully', list });
  } catch (error) {
    res.status(500).json({ message: 'Error updating list', error: error.message });
  }
});

// Delete a list
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const list = await List.findByPk(id);

    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }

    await list.destroy();

    res.status(200).json({ message: 'List deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting list', error: error.message });
  }
});

module.exports = router;
