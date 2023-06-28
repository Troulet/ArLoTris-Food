const express = require('express');
const router = express.Router();
const pool = require('../schema/db');
const bcrypt = require('bcrypt')

// Update a specific restaurant by restaurantId
router.put('/:userId', async(req, res) => {
    const id = req.params.userId;
    const { name, surname, address, phone_number, email, password } = req.body;
    
    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user in the PostgreSQL database
    const query = "UPDATE users SET \"name\" = $1, \"surname\" = $2, \"address\" = $3, \"phone_number\" = $4, \"email\" = $5, \"password\" = $6 WHERE \"ID\" = $7";
    const values = [name, surname, address, phone_number, email, hashedPassword, id];

    pool.query(query, values, (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'User updated successfully' });
        }
    });
  });

module.exports = router;
