const express = require('express');
const router = express.Router();

// Create renew routes
router.post('/recharge/create', require('../controllers/rechargectl').createrecharge);

// Get renew routes
router.get('/recharge', require('../controllers/rechargectl').getrecharge);
router.get('/recharge/:id', require('../controllers/rechargectl').getSingRecharge);

// Delete renew routes
router.delete('/recharge/:id', require('../controllers/rechargectl').deletrecharge);

// Update renew routes
router.put('/recharge/:id' , require('../controllers/rechargectl').updaterecharge);

module.exports=router;