const express = require('express');
const router = express.Router();

// Create renew routes
router.post('/formPrice/create', require('../controllers/FormPriceCTL').createFormPrice);

// Get renew routes
router.get('/formPrice', require('../controllers/FormPriceCTL').getFormPrice);
router.get('/formPrice/:id', require('../controllers/FormPriceCTL').getSingFormPrice);

// Delete renew routes
router.delete('/formPrice/:id', require('../controllers/FormPriceCTL').deleteFormPrice);

// Update renew routes
router.put('/formPrice/:id' , require('../controllers/FormPriceCTL').updateFormPrice);

module.exports=router;