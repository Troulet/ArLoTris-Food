const express = require('express');
const router = express.Router();
const Delivery = require('../schema/delivery')

// Get deliveries by delivererId
router.get('/:delivererId', async (req, res) => {
    try {
      const deliveries = await Delivery.find({ delivererId: req.params.delivererId });
      if (deliveries.length === 0) {
        return res.status(404).json({ error: 'No deliveries found for the deliverer' });
      }
      res.json(deliveries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
