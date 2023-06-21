var express = require('express');
var router = express.Router();
const Restaurant = require('../schema/restaurant')

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
