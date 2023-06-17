const express = require('express');
const router = express.Router();

// Create renew routes
router.post('/Non_Criminal/create', require('../controllers/NonCriminalctl').createNonCriminal);

// Get renew routes
router.get('/Non_Criminal', require('../controllers/NonCriminalctl').updateNonCriminal);
router.get('/Non_Criminal/:id', require('../controllers/NonCriminalctl').getSingNonCriminal);

// Delete renew routes
router.delete('/Non_Criminal/:id', require('../controllers/NonCriminalctl').deletNonCriminal);

// Update renew routes
router.put('/Non_Criminal/:id' , require('../controllers/NonCriminalctl').updateNonCriminal);

module.exports=router;