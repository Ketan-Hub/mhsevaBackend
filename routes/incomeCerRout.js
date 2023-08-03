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
router.post('/income_Certificate/create', require('../controllers/IncomeCerctl').createIncomeCer);

// Get renew routes
router.get('/income_Certificate', require('../controllers/IncomeCerctl').getincomeCer);
router.get('/income_Certificate/:id', require('../controllers/IncomeCerctl').getSingincomeCer);

// Delete renew routes
router.delete('/income_Certificate/:id', require('../controllers/IncomeCerctl').deletincomeCer);

// Update renew routes
router.put('/income_Certificate/:id' , require('../controllers/IncomeCerctl').updateincomeCer);
// uploaddocsrouts
router.put('/incomeCertificate_reshancard/:id' ,upload.single("reshaCard"), require('../controllers/IncomeCerctl').reshaCard);
router.put('/incomeCertificate_adharCard/:id' ,upload.single("adharCard"), require('../controllers/IncomeCerctl').adharCard);
router.put('/incomeCertificate_lightBill/:id' ,upload.single("lightBill"), require('../controllers/IncomeCerctl').lightBill);
router.put('/incomeCertificate_photo/:id' ,upload.single("photo"), require('../controllers/IncomeCerctl').photo);
router.put('/incomeCertificate_form16/:id' ,upload.single("form16"), require('../controllers/IncomeCerctl').form16);
router.put('/incomeCertificate_consentform/:id' ,upload.single("consentform"), require('../controllers/IncomeCerctl').consentform);
router.put('/incomeCertificate_selfDeclearation/:id' ,upload.single("selfDeclearation"), require('../controllers/IncomeCerctl').selfDeclearation);
router.put('/incomeCertificate_acknowledgmentDocument/:id' ,upload.single("acknowledgmentDocument"), require('../controllers/IncomeCerctl').acknowledgmentDocument);
router.put('/incomeCertificate_finalDocument/:id' ,upload.single("finalDocument"), require('../controllers/IncomeCerctl').finalDocument);

module.exports=router;