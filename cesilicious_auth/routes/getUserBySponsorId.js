const express = require('express');
const router = express.Router();
const pool = require('../schema/db');

// Get a specific user by userId
router.get('/:sponsorId', (req, res) => {
    const id_sponsor = req.params.sponsorId;

  // Fetch the user from the PostgreSQL database
  const query = "SELECT * FROM users WHERE \"id_sponsor\" = $1";
  const values = [id_sponsor];

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (result.rows.length === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        const users = result.rows;
        res.json(users);
      }
    }
  });
});

module.exports = router;
