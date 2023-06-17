const express = require('express');
const router = express.Router();
const multer=require("multer");


// Create renew routes
router.post('/votercard/create', require('../controllers/voterCardCtl').createvoterCard);

// Get renew routes
router.get('/votercard', require('../controllers/voterCardCtl').getvoterCard);
router.get('/votercard/:id', require('../controllers/voterCardCtl').getsinglevoterCard);

// Delete renew routes
router.delete('/votercard/:id', require('../controllers/voterCardCtl').deletevoterCard);

// Update renew routes
router.put('/votercard/:id' , require('../controllers/voterCardCtl').updatevoterCard);
//upload docs
router.put('/votercard_addressProofDoc/:id' , require('../controllers/voterCardCtl').addressProof_Doc);
router.put('/votercard_ageProofDOc/:id' , require('../controllers/voterCardCtl').ageProof_DOc);
router.put('/votercard_PassportSizePhoto/:id' , require('../controllers/voterCardCtl').PassportSize_photo);
router.put('/votercard_ageDeclarationForm/:id' , require('../controllers/voterCardCtl').age_declaration_form);

module.exports=router;