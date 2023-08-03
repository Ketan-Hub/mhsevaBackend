const express = require('express');
const router = express.Router();
const multer=require("multer");
const path =require("path");
const AWS =require( 'aws-sdk');
let upload = multer({
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: function (req, file, done) {
        const allowedFileTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        // if (file.mimetype.startsWith("application/pdf") || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
            done(null, true);
        } else {
            //prevent the upload
            let newError = new Error("File type is incorrect");
            newError.name = "MulterError";
            done(newError, false);
        }
    },
});



// Create permanant routes
router.post('/permanant/create', require('../controllers/permanantDl').createPermanntDl);

// Get permanant routes
router.get('/permanant', require('../controllers/permanantDl').getpermanantDl);
router.get('/permanant/:id', require('../controllers/permanantDl').getSingpermanantDl);

// Delete permanant routes
router.delete('/permanant/:id', require('../controllers/permanantDl').deletepermanantDl);

// Update permanant routes
router.put('/permanant/:id' , require('../controllers/permanantDl').updatepermanantDl);
router.put('/perAddressProof/:id' ,upload.single("addressProof"), require('../controllers/permanantDl').updateAdharDl);
router.put('/perAgeproof/:id' , upload.single("ageproof"), require('../controllers/permanantDl').updateAgeProofDl);
router.put('/permanant_acknowledgmentDocument/:id' , upload.single("acknowledgmentDocument"), require('../controllers/permanantDl').acknowledgmentDocument);
router.put('/permanant_finalDocument/:id' , upload.single("finalDocument"), require('../controllers/permanantDl').finalDocument);

module.exports=router;