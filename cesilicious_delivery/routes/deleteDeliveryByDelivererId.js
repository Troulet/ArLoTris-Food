const express = require('express');
const router = express.Router();
const Delivery = require('../schema/delivery')

// Delete deliveries by delivererId
router.delete('/:delivererId', async (req, res) => {
    try {
      const deletedDeliveries = await Delivery.deleteMany({ delivererId: req.params.delivererId });
      if (deletedDeliveries.deletedCount === 0) {
        return res.status(404).json({ error: 'No deliveries found for the deliverer' });
      }
      res.json({ message: 'Deliveries deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
