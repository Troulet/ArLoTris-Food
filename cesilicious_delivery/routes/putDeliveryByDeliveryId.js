const express = require('express');
const router = express.Router();
const Delivery = require('../schema/delivery')

// Update a specific delivery by deliveryId
router.put('/:deliveryId', async (req, res) => {
    try {
      const delivery = await Delivery.findOneAndUpdate(
        { _id: req.params.deliveryId },
        req.body,
        { new: true }
      );
      if (!delivery) {
        return res.status(404).json({ error: 'Delivery not found' });
      }
      res.json(delivery);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

module.exports = router;
