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
// Create learning routes
router.post('/learning/create' ,require('../controllers/learningDl').createLearningDl);

// Get learning routes
router.get('/learning', require('../controllers/learningDl').getlearnningDl);
router.get('/learning/:id', require('../controllers/learningDl').getSingleLearnningDl);

// Delete learning routes
router.delete('/learning/:id', require('../controllers/learningDl').deletelearnningDl);

// Update learning routes
router.put('/learning/:id' , require('../controllers/learningDl').updateLearningDl);

router.put('/addressProof/:id' ,upload.single("addressProof"), require('../controllers/learningDl').updateAdharDl);
router.put('/Ageproof/:id' ,upload.single("ageProof"), require('../controllers/learningDl').updateAgeProofDl);
router.put('/passportPic/:id' ,upload.single("passportSize"), require('../controllers/learningDl').updatepassportSize);
router.put('/signature/:id' ,upload.single("signature"), require('../controllers/learningDl').Uploadsignature);
router.put('/learning_acknowledgmentDocument/:id' ,upload.single("acknowledgmentDocument"), require('../controllers/learningDl').acknowledgmentDocument);
router.put('/learning_finalDocument/:id' ,upload.single("finalDocument"), require('../controllers/learningDl').finalDocument);

module.exports=router;