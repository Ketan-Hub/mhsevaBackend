const express = require('express');
const router = express.Router();

// Create renew routes
router.post('/youtube/create', require('../controllers/Youtube/Youtube').createYoutube);

// Get renew routes
router.get('/youtube', require('../controllers/Youtube/Youtube').getYoutube);
router.get('/youtube/:id', require('../controllers/Youtube/Youtube').getSingYoutube);

// Delete renew routes
router.delete('/youtube/:id', require('../controllers/Youtube/Youtube').deleteYoutube);

// Update renew routes
router.put('/youtube/:id' , require('../controllers/Youtube/Youtube').updateYoutube);

module.exports=router;