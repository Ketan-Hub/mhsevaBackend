const express = require('express');
const router = express.Router();

// Create renew routes
router.post('/expence/create', require('../controllers/expencectl').createExpence);

// Get renew routes
router.get('/expence', require('../controllers/expencectl').getexpence);
router.get('/expence/:id', require('../controllers/expencectl').getSingexpence);

// Delete renew routes
router.delete('/expence/:id', require('../controllers/expencectl').deletexpence);

// Update renew routes
router.put('/expence/:id' , require('../controllers/expencectl').updateexpence);

module.exports=router;