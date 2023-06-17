const express = require('express');
const router = express.Router();

// Create renew routes
router.post('/foodLicence/create', require('../controllers/foodlicencectr').createfoodlicence);

// Get renew routes
router.get('/foodLicence', require('../controllers/foodlicencectr').getfoodlicence);
router.get('/foodLicence/:id', require('../controllers/foodlicencectr').getSingfoodlicence);

// Delete renew routes
router.delete('/foodLicence/:id', require('../controllers/foodlicencectr').deletefoodlicence);

// Update renew routes
router.put('/foodLicence/:id' , require('../controllers/foodlicencectr').updatefoodlicence);
//upload docs
router.put('/foodLicence_adharCard/:id' , require('../controllers/foodlicencectr').adharCard_businessOwner);
router.put('/foodLicence_passport/:id' , require('../controllers/foodlicencectr').passportSize_Photo_businessOwner);
router.put('/foodLicence_decBussOner/:id' , require('../controllers/foodlicencectr').declaration_businessOwner);
router.put('/foodLicence_affidavitFrom/:id' , require('../controllers/foodlicencectr').affidavitFrom_businessOwner);
router.put('/foodLicence_electricBill/:id' , require('../controllers/foodlicencectr').electricBill_businessPlace);
router.put('/foodLicence_rentAggrement/:id' , require('../controllers/foodlicencectr').rentAgreement);

module.exports=router;