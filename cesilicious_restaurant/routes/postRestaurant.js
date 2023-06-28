const express = require('express');
const router = express.Router();
const Restaurant = require('../schema/restaurant');
const { ObjectId } = require('mongodb');

// Create a restaurant
router.post('/', async (req, res) => {
  try {
    let restaurantJSON = req.body;
    restaurantJSON._id = new ObjectId().toString();
    let restaurant = new Restaurant(restaurantJSON);
    let savedRestaurant = await restaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
