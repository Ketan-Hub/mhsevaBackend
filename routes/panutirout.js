const express = require('express');
const router = express.Router();

// Create renew routes
router.post('/panUti/create', require('../controllers/panCardUtictl').createpanUti);

// Get renew routes
router.get('/panUti', require('../controllers/panCardUtictl').getpanUti);
router.get('/panUti/:id', require('../controllers/panCardUtictl').getSingpanUti);

// Delete renew routes
router.delete('/panUti/:id', require('../controllers/panCardUtictl').deletepanUti);

// Update renew routes
router.put('/panUti/:id' , require('../controllers/panCardUtictl').updatepanUti);

module.exports=router;