var express = require('express');
var router = express.Router();
const Order = require('../schema/order');

// Delete a specific order by orderId
router.delete('/:orderId', async (req, res) => {
    try {
      const order = await Order.findOneAndDelete({ orderId: req.params.orderId });
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json({ message: 'Order deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
