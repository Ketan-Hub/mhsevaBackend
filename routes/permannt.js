const express = require('express');
const router = express.Router();
const multer=require("multer");
const path =require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({storage});

// Create permanant routes
router.post('/permanant/create', require('../controllers/permanantDl').createPermanntDl);

// Get permanant routes
router.get('/permanant', require('../controllers/permanantDl').getpermanantDl);
router.get('/permanant/:id', require('../controllers/permanantDl').getSingpermanantDl);

// Delete permanant routes
router.delete('/permanant/:id', require('../controllers/permanantDl').deletepermanantDl);

// Update permanant routes
router.put('/permanant/:id' , require('../controllers/permanantDl').updatepermanantDl);
router.put('/addressProof/:id' , require('../controllers/permanantDl').updateAdharDl);
router.put('/ageproof/:id' , require('../controllers/permanantDl').updateAgeProofDl);

module.exports=router;