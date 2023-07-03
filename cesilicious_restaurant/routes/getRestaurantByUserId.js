const express = require('express');
const router = express.Router();
const Restaurant = require('../schema/restaurant')

// Get a specific restaurant by userId
router.get('/:userId', async (req, res) => {
    try {
      const restaurant = await Restaurant.find({ userId: req.params.userId });
      if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }
      res.json(restaurant);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
