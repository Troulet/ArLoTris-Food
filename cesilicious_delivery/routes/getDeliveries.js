const express = require('express');
const router = express.Router();
const Delivery = require('../schema/delivery')

// Get all deliveries
router.get('/', async (req, res) => {
    try {
      const deliveries = await Delivery.find();
      res.json(deliveries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
