const express = require('express');
const router = express.Router();
const Delivery = require('../schema/delivery')

// Create a delivery
router.post('/', async (req, res) => {
  try {
    const delivery = new Delivery(req.body);
    const savedDelivery = await delivery.save();
    res.status(201).json(savedDelivery);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
