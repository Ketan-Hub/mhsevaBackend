const express = require('express');
const router = express.Router();

// Create renew routes
router.post('/contact/create', require('../controllers/ContactUsctl').createcontact);

// Get renew routes
router.get('/recharge', require('../controllers/ContactUsctl').getcontactus);
router.get('/recharge/:id', require('../controllers/ContactUsctl').getSingcontactus);
router.get('/recharge/getByUser/:userId', require('../controllers/ContactUsctl').getSingcontactus);


// Delete renew routes
router.delete('/recharge/:id', require('../controllers/ContactUsctl').deletcontactus);

// Update renew routes
router.put('/recharge/:id' , require('../controllers/ContactUsctl').updatecontact);

module.exports=router;