const express = require('express');
const router = express.Router();
const Restaurant = require('../schema/restaurant')

// Update a specific restaurant by restaurantId
router.put('/:restaurantId', async (req, res) => {
    try {
      const restaurant = await Restaurant.findOneAndUpdate(
        { _id: req.params.restaurantId },
        req.body,
        { new: true }
      );
      if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }
      res.json(restaurant);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

module.exports = router;
