const express = require('express');
const router = express.Router();
const Order = require('../schema/order');
const { ObjectId } = require('mongodb');

// Create an order
router.post('/', async (req, res) => {
  try {
    let orderJSON = req.body;
    orderJSON._id = new ObjectId().toString();
    const order = new Order(orderJSON);
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
