var express = require('express');
var router = express.Router();
const Order = require('../schema/order');

// Create an order
router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
