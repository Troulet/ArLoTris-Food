const express = require('express');
const router = express.Router();
const Order = require('../schema/order');

// Get a specific order by orderId
router.get('/:orderId', async (req, res) => {
    try {
      const order = await Order.findOne({ _id: req.params.OrderId });
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
