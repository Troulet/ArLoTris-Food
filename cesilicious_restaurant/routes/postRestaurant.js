var express = require('express');
var router = express.Router();
const Restaurant = require('../schema/restaurant')

// Create a restaurant
router.post('/', async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    const savedRestaurant = await restaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
