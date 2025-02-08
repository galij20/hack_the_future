const express = require('express');
const tripController = require('../controllers/tripController');

const router = express.Router();

router.get('/recommendations', tripController.getRecommendations);
// ... existing code ...

module.exports = router; 