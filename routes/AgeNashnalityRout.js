const express = require('express');
const router = express.Router();

// Create renew routes
router.post('/Age_Nashnality/create', require('../controllers/ageNashnalityCtl').createageNashnality);

// Get renew routes
router.get('/Age_Nashnality', require('../controllers/ageNashnalityCtl').getageNashnality);
router.get('/Age_Nashnality/:id', require('../controllers/ageNashnalityCtl').getSingageNashnality);

// Delete renew routes
router.delete('/Age_Nashnality/:id', require('../controllers/ageNashnalityCtl').deletageNashnality);

// Update renew routes
router.put('/Age_Nashnality/:id' , require('../controllers/ageNashnalityCtl').updateageNashnality);

module.exports=router;