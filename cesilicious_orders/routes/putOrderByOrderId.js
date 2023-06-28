const express = require('express');
const router = express.Router();
const Order = require('../schema/order');

// Update a specific order by orderId
router.put('/:orderId', async (req, res) => {
    try {
      const order = await Order.findOneAndUpdate(
        { _id: req.params.orderId },
        req.body,
        { new: true }
      );
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

module.exports = router;
