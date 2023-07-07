const express = require('express');
const router = express.Router();
const Restaurant = require('../schema/restaurant')

// Get a specific restaurant by restaurantId
router.get('/:restaurantId', async (req, res) => {
    try {
      const articles = await Restaurant.find({ _id: req.params.restaurantId }, 'articles');
      if (!articles) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }
      res.json(articles[0].articles.length);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
