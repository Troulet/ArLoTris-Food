var express = require('express');
var router = express.Router();
const Delivery = require('../schema/delivery')

// Update deliveries by delivererId
router.put('/:delivererId', async (req, res) => {
    try {
      const updatedDeliveries = await Delivery.updateMany(
        { delivererId: req.params.delivererId },
        req.body
      );
      res.json({ message: 'Deliveries updated successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

module.exports = router;
