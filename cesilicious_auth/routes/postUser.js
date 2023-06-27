const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../schema/db');

const router = express.Router();

// API route for creating a user
router.post('/', async (req, res) => {
  try {
    const { name, surname, address, phone_number, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into the database
    const newUser = await pool.query(
      "INSERT INTO users (name, surname, address, phone_number, email, password, id_sponsor, number_sponsored, role, is_suspended) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [name, surname, address, phone_number, email, hashedPassword, 0, 0, "Client", false]
    );

    res.status(201).json(newUser.rows[0]);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
});

module.exports = router;
