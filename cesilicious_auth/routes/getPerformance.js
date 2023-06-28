const express = require('express');
const osUtils = require('os-utils');
const router = express.Router();

// Get CPU usage of Auth API
router.get('/', async (req, res) => {
  try {
    osUtils.cpuUsage((cpuUsage) => {
        const cpuUsagePercentage = (cpuUsage * 100).toFixed(2);
    
        res.send(cpuUsagePercentage);
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
