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
router.post('/indGST/create', require('../controllers/individalgstctl').createindGST);

// Get renew routes
router.get('/indGST', require('../controllers/individalgstctl').getindGST);
router.get('/indGST/:id', require('../controllers/individalgstctl').getSingindGST);

// Delete renew routes
router.delete('/indGST/:id', require('../controllers/individalgstctl').deleteindGST);

// Update renew routes
router.put('/indGST/:id' , require('../controllers/individalgstctl').updateindGST);
//
router.put('/indGST_adharCardDocs/:id' ,upload.single("adharCard_Docs"), require('../controllers/individalgstctl').adharCard_Docs);
router.put('/indGST_electricityBill/:id' ,upload.single("electricityBill"), require('../controllers/individalgstctl').electricityBill);
router.put('/indGST_bankPassbook/:id' ,upload.single("bankPassbook"), require('../controllers/individalgstctl').bankPassbook);
router.put('/indGST_panCardDocs/:id' ,upload.single("panCard_Docs"), require('../controllers/individalgstctl').panCard_Docs);
router.put('/indGST_passportPhoto/:id' ,upload.single("passportPhoto"), require('../controllers/individalgstctl').passportPhoto);
router.put('/indGST_shopActLicence/:id' ,upload.single("shopAct_licence"), require('../controllers/individalgstctl').shopAct_licence);
router.put('/indGST_rentAgreement/:id' ,upload.single("rentAgreement"), require('../controllers/individalgstctl').rentAgreement);
router.put('/indGST_signature/:id' ,upload.single("signature"), require('../controllers/individalgstctl').signature);
router.put('/indGST_acknowledgmentDocument/:id' ,upload.single("acknowledgmentDocument"), require('../controllers/individalgstctl').acknowledgmentDocument);
router.put('/indGST_finalDocument/:id' ,upload.single("finalDocument"), require('../controllers/individalgstctl').finalDocument);

module.exports=router;