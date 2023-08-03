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

// Create renew routes
router.post('/udhamAbhar/create', require('../controllers/udhamAdharctl').createudhamAbhar);

// Get renew routes
router.get('/udhamAbhar', require('../controllers/udhamAdharctl').getudhamAbhar);
router.get('/udhamAbhar/:id', require('../controllers/udhamAdharctl').getsingleudhamAbhar);

// Delete renew routes
router.delete('/udhamAbhar/:id', require('../controllers/udhamAdharctl').deleteudhamAbhar);

// Update renew routes
router.put('/udhamAbhar/:id' , require('../controllers/udhamAdharctl').updateudhamAbhar);
// upload Docks
router.put('/udhamAbhar_AadharUploadCard/:id' ,upload.single("Aadhar_Upload_Card"), require('../controllers/udhamAdharctl').Aadhar_Upload_Card);
router.put('/udhamAbhar_PanUploadCard/:id' ,upload.single("Pan_Upload_Card"), require('../controllers/udhamAdharctl').Pan_Upload_Card);
router.put('/udhamAbhar_Passport/:id' ,upload.single("Passport"), require('../controllers/udhamAdharctl').Passport);
router.put('/udhamAbhar_BankUploadPassbook/:id' ,upload.single("Bank_Upload_Passbook"), require('../controllers/udhamAdharctl').Bank_Upload_Passbook);
router.put('/udhamAbhar_acknowledgmentDocument/:id' ,upload.single("acknowledgmentDocument"), require('../controllers/udhamAdharctl').acknowledgmentDocument);
router.put('/udhamAbhar_finalDocument/:id' ,upload.single("finalDocument"), require('../controllers/udhamAdharctl').finalDocument);

module.exports=router;