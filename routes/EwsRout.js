const express = require('express');
const router = express.Router();

// Create renew routes
router.post('/Ews/create', require('../controllers/EWSCtl').createEws);

// Get renew routes
router.get('/Ews', require('../controllers/EWSCtl').getEws);
router.get('/Ews/:id', require('../controllers/EWSCtl').getSingEws);

// Delete renew routes
router.delete('/Ews/:id', require('../controllers/EWSCtl').deleteEws);

// Update renew routes
router.put('/Ews/:id' , require('../controllers/EWSCtl').updateEws);

module.exports=router;