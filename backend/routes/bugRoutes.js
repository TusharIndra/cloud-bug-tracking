// backend/routes/bugRoutes.js
const express = require('express');
const router = express.Router();
const { submitBugReport } = require('../controllers/bugController');

// Route to submit a bug report
router.post('/', submitBugReport);

module.exports = router;