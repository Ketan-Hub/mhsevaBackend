const express = require('express');
const router = express.Router();
const multer=require("multer");
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
router.put('/foodLicence_adharCard/:id' ,upload.single("adharCard_businessOwner"), require('../controllers/foodlicencectr').adharCard_businessOwner);
router.put('/foodLicence_passport/:id' ,upload.single("passportSize_Photo_businessOwner"),require('../controllers/foodlicencectr').passportSize_Photo_businessOwner);
router.put('/foodLicence_decBussOner/:id' ,upload.single("declaration_businessOwner"),require('../controllers/foodlicencectr').declaration_businessOwner);
router.put('/foodLicence_affidavitFrom/:id' ,upload.single("affidavitFrom_businessOwner"), require('../controllers/foodlicencectr').affidavitFrom_businessOwner);
router.put('/foodLicence_electricBill/:id' ,upload.single("electricBill_businessPlace"),require('../controllers/foodlicencectr').electricBill_businessPlace);
router.put('/foodLicence_rentAggrement/:id' , upload.single("rentAgreement"),require('../controllers/foodlicencectr').rentAgreement);
router.put('/foodLicence_acknowledgmentDocumentt/:id' , upload.single("acknowledgmentDocument"),require('../controllers/foodlicencectr').acknowledgmentDocument);
router.put('/foodLicence_finalDocument/:id' , upload.single("finalDocument"),require('../controllers/foodlicencectr').finalDocument);

module.exports=router;