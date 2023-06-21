const express = require('express');
const router = express.Router();
const Order = require('../schema/order');

// Delete a specific order by restaurantId
router.delete('/:restaurantId', async (req, res) => {
    try {
      const order = await Order.findOneAndDelete({ restaurantId: req.params.restaurantId });
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json({ message: 'Order deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
