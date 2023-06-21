const express = require('express');
const router = express.Router();
const Delivery = require('../schema/delivery')

// Delete a specific delivery by deliveryId
router.delete('/:deliveryId', async (req, res) => {
    try {
      const delivery = await Delivery.findOneAndDelete({ _id: req.params.deliveryId });
      if (!delivery) {
        return res.status(404).json({ error: 'Delivery not found' });
      }
      res.json({ message: 'Delivery deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
