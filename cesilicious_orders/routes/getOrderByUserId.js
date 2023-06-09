const express = require('express');
const router = express.Router();
const Order = require('../schema/order');

// Get a specific order by userId
router.get('/:userId', async (req, res) => {
    try {
      const order = await Order.find({ userId: req.params.userId });
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
