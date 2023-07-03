const express = require('express');
const router = express.Router();
const pool = require('../schema/db')

// Delete a specific delivery by deliveryId
router.delete('/:userId', async (req, res) => {
    const id = req.params.userId;

    // Update the user in the PostgreSQL database
    const query = "DELETE FROM users WHERE \"ID\" = $1";
    const values = [id];

    pool.query(query, values, (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({message: 'Account successfully deleted'});
        }
    });
});

module.exports = router;