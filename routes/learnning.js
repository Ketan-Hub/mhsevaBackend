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


// Create learning routes
router.post('/learning/create' ,require('../controllers/learningDl').createLearningDl);

// Get learning routes
router.get('/learning', require('../controllers/learningDl').getlearnningDl);
router.get('/learning/:id', require('../controllers/learningDl').getSingleLearnningDl);

// Delete learning routes
router.delete('/learning/:id', require('../controllers/learningDl').deletelearnningDl);

// Update learning routes
router.put('/learning/:id' , require('../controllers/learningDl').updateLearningDl);
// router.put('/adharUpload/:id' ,upload.single("addressProof"), require('../controllers/learningDl').updateAdharDl);
router.put('/adharUpload/:id' ,upload.single("addressProof"), require('../controllers/learningDl').updateAdharDl);

router.put('/Ageproof/:id' ,upload.single("ageProof"), require('../controllers/learningDl').updateAgeProofDl);
router.put('/passportPic/:id' ,upload.single("passportSize"), require('../controllers/learningDl').updatepassportSize);
router.put('/signature/:id' ,upload.single("signature"), require('../controllers/learningDl').Uploadsignature);

module.exports=router;