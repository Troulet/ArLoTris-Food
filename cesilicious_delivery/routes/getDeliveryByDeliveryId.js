var express = require('express');
var router = express.Router();
const Delivery = require('../schema/delivery')

// Get a specific delivery by deliveryId
router.get('/:deliveryId', async (req, res) => {
  try {
    const delivery = await Delivery.findOne({ deliveryId: req.params.deliveryId });
    if (!delivery) {
      return res.status(404).json({ error: 'Delivery not found' });
    }
    res.json(delivery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
