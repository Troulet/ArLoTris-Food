var express = require('express');
var router = express.Router();
const Order = require('../schema/order');

// Get a specific order by delivererId
router.get('/:delivererId', async (req, res) => {
    try {
      const order = await Order.findOne({ delivererId: req.params.delivererId });
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
