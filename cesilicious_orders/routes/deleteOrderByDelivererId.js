var express = require('express');
var router = express.Router();
const Order = require('../schema/order');

// Delete a specific order by delivererId
router.delete('/:delivererId', async (req, res) => {
    try {
      const order = await Order.findOneAndDelete({ delivererId: req.params.delivererId });
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json({ message: 'Order deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
