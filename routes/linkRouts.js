const express = require('express');
const router = express.Router();

// Create renew routes
router.post('/Links/create', require('../controllers/AddLinksctl').createlinks);

// Get renew routes
router.get('/Links', require('../controllers/AddLinksctl').getlinks);
router.get('/Links/:id', require('../controllers/AddLinksctl').getSinglinks);

// Delete renew routes
router.delete('/Links/:id', require('../controllers/AddLinksctl').deletelinks);

// Update renew routes
router.put('/Links/:id' , require('../controllers/AddLinksctl').updatelinks);

module.exports=router;