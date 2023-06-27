const express = require('express');
const router = express.Router();
require('dotenv').config()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('../schema/db');

// API route for authenticating a user and generating JWT
router.post('/', async (req, res) => {
  try {
    const { name, surname, password } = req.body;

    // Retrieve the user from the database
    const user = await pool.query('SELECT * FROM users WHERE name = $1 AND surname = $2', [name, surname]);

    if (user.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the hashed password
    const isValidPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user.rows[0].id }, process.env.JWT_SECRET_KEY);

    res.json({ token });
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
});

module.exports = router;
