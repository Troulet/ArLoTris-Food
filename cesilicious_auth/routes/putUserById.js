const express = require('express');
const router = express.Router();
const pool = require('../schema/db');
const bcrypt = require('bcrypt')

// Update a specific restaurant by restaurantId
router.put('/:userId', async(req, res) => {
    const id = req.params.userId;
    const { name, surname, address, email } = req.body;

    // Update the user in the PostgreSQL database
    const query = "UPDATE users SET \"name\" = $1, \"surname\" = $2, \"address\" = $3, \"email\" = $4 WHERE \"ID\" = $5";
    const values = [name, surname, address, email, id];

    pool.query(query, values, (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({id, name, surname, email, address});
        }
    });
  });

module.exports = router;
