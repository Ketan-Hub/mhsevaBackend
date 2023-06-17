const express = require('express');
const router = express.Router();

// Create renew routes
router.post('/passport/create', require('../controllers/passportctl').createpassport);

// Get renew routes
router.get('/passport', require('../controllers/passportctl').getpassport);
router.get('/passport/:id', require('../controllers/passportctl').getSingpassport);

// Delete renew routes
router.delete('/passport/:id', require('../controllers/passportctl').deletepassport);

// Update renew routes
router.put('/passport/:id' , require('../controllers/passportctl').updatepassport);

module.exports=router;