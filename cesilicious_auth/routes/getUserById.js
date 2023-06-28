const express = require('express');
const router = express.Router();
const pool = require('../schema/db');

// Get a specific user by userId
router.get('/:userId', (req, res) => {
    const id = req.params.userId;

  // Fetch the user from the PostgreSQL database
  const query = "SELECT * FROM users WHERE \"ID\" = $1";
  const values = [id];

  pool.query(query, values, (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (result.rows.length === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        const user = result.rows[0];
        res.json(user);
      }
    }
  });
});

module.exports = router;
