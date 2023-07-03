const express = require('express');
const router = express.Router();
const pool = require('../schema/db');

// Update a specific restaurant by restaurantId
router.put('/:userId', async(req, res) => {
    const id = req.params.userId;
    const { id_sponsor } = req.body;

    // Update the user in the PostgreSQL database
    const query = "UPDATE users SET id_sponsor = $1 WHERE \"ID\" = $2";
    const values = [id_sponsor, id];

    pool.query(query, values, (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({id, id_sponsor});
        }
    });
  });

module.exports = router;
