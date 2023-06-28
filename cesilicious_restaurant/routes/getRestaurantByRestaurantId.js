const express = require('express');
const router = express.Router();
const Restaurant = require('../schema/restaurant')

// Get a specific restaurant by restaurantId
router.get('/:restaurantId', async (req, res) => {
    try {
      const restaurant = await Restaurant.findOne({ _id: req.params.restaurantId });
      if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }
      res.json(restaurant);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
