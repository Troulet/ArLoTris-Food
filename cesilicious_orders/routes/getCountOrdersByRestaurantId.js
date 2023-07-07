const express = require('express');
const router = express.Router();
const Order = require('../schema/order');

// Get the number of order by restaurantId
router.get('/:restaurantId', (req, res) => {
    try {
      const order = Order.find({ restaurantId: req.params.restaurantId });
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      order.count().then( (count) => {
        res.json(count);
      }).catch((err) => {
        console.log(err);
      })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
