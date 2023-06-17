const express = require('express');
const router = express.Router();

// Create renew routes
router.post('/income_Certificate/create', require('../controllers/IncomeCerctl').createIncomeCer);

// Get renew routes
router.get('/income_Certificate', require('../controllers/IncomeCerctl').getincomeCer);
router.get('/income_Certificate/:id', require('../controllers/IncomeCerctl').getSingincomeCer);

// Delete renew routes
router.delete('/income_Certificate/:id', require('../controllers/IncomeCerctl').deletincomeCer);

// Update renew routes
router.put('/income_Certificate/:id' , require('../controllers/IncomeCerctl').updateincomeCer);

module.exports=router;