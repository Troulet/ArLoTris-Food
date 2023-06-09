const express = require('express');
const router = express.Router();
const Restaurant = require('../schema/restaurant')

// Delete a specific restaurant by restaurantId
router.delete('/:restaurantId', async (req, res) => {
    try {
      const restaurant = await Restaurant.findOneAndDelete({ _id: req.params.restaurantId });
      if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }
      res.json({ message: 'Restaurant deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
