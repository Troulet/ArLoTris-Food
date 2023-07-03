const express = require('express');
const router = express.Router();
const pool = require('../schema/db');
const bcrypt = require('bcrypt');

// Update a specific restaurant by restaurantId
router.put('/:email', async(req, res) => {
    const email = req.params.email;
    const { password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user in the PostgreSQL database
    const query = "UPDATE users SET password = $1 WHERE email = $2";
    const values = [hashedPassword, email];

    pool.query(query, values, (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({email, hashedPassword});
        }
    });
  });

module.exports = router;
