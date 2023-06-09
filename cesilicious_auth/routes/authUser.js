const express = require('express');
const router = express.Router();
require('dotenv').config()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('../schema/db');
const axios = require('axios');

// API route for authenticating a user and generating JWT
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Retrieve the user from the database
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (user.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the hashed password
    const isValidPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user.rows[0].ID }, process.env.JWT_SECRET_KEY);

    let restaurantIds;
    await axios.get('http://localhost:3000/users/' + user.rows[0].ID + '/').then((response) => {
      restaurantIds = response.data;
    })

    res.json([{ token }, user.rows[0], restaurantIds]);
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
});

module.exports = router;
