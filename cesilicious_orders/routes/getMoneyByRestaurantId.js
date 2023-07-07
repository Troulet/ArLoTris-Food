const express = require('express');
const router = express.Router();
const Order = require('../schema/order');

// Get the total amount of money made by the orders by restaurantId
router.get('/:restaurantId', async (req, res) => {
    try {
      const orders = await Order.find({ restaurantId: req.params.restaurantId, orderStatus: 'Delivered' }, 'price');
      if (!orders) {
        return res.json('0');
      }
      var sum = 0;
      orders.forEach(order => {
        sum += order.price;
      });
      res.json(sum);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
