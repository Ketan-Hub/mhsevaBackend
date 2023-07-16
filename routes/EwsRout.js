const express = require('express');
const router = express.Router();
const AWS =require( 'aws-sdk');
const multer=require("multer");
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
router.post('/Ews/create', require('../controllers/EWSCtl').createEws);

// Get renew routes
router.get('/Ews', require('../controllers/EWSCtl').getEws);
router.get('/Ews/:id', require('../controllers/EWSCtl').getSingEws);

// Delete renew routes
router.delete('/Ews/:id', require('../controllers/EWSCtl').deleteEws);

// Update renew routes
router.put('/Ews/:id' , require('../controllers/EWSCtl').updateEws);

// uploads document
router.put('/EWS_reshaCard/:id' ,upload.single("reshaCard"), require('../controllers/EWSCtl').reshaCard);
router.put('/EWS_adharCard/:id' ,upload.single("adharCard") ,require('../controllers/EWSCtl').adharCard);
router.put('/EWS_lightBill/:id' ,upload.single("lightBill"), require('../controllers/EWSCtl').lightBill);
router.put('/EWS_schoolLeaveCertificate/:id' ,upload.single("schoolLeaveCertificate"), require('../controllers/EWSCtl').schoolLeaveCertificate);
router.put('/EWS_photo/:id' ,upload.single("photo"), require('../controllers/EWSCtl').photo);
router.put('/EWS_incomeCertficate3yearOrForm16/:id' ,upload.single("incomeCertficate3yearOrForm16"), require('../controllers/EWSCtl').incomeCertficate3yearOrForm16);
router.put('/EWS_castProof/:id' ,upload.single("castProof"), require('../controllers/EWSCtl').castProof);
router.put('/EWS_selfDeclearation/:id' ,upload.single("selfDeclearation"), require('../controllers/EWSCtl').selfDeclearation);
router.put('/EWS_acknowledgmentDocument/:id' ,upload.single("acknowledgmentDocument"), require('../controllers/EWSCtl').acknowledgmentDocument);
router.put('/EWS_finalDocument/:id' ,upload.single("finalDocument"), require('../controllers/EWSCtl').finalDocument);

module.exports=router;