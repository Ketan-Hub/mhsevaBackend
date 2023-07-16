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
router.post('/Non_Criminal/create', require('../controllers/NonCriminalctl').createNonCriminal);

// Get renew routes
router.get('/Non_Criminal', require('../controllers/NonCriminalctl').updateNonCriminal);
router.get('/Non_Criminal/:id', require('../controllers/NonCriminalctl').getSingNonCriminal);

// Delete renew routes
router.delete('/Non_Criminal/:id', require('../controllers/NonCriminalctl').deletNonCriminal);

// Update renew routes
router.put('/Non_Criminal/:id' , require('../controllers/NonCriminalctl').updateNonCriminal);

//upload Docs
router.put('/NonCriminal_reshaCard/:id' ,upload.single("reshanCard"), require('../controllers/NonCriminalctl').reshaCard);
router.put('/NonCriminal_adharCard/:id' ,upload.single("adharCard"), require('../controllers/NonCriminalctl').adharCard);
router.put('/NonCriminal_lightBill/:id' ,upload.single("lightBill"), require('../controllers/NonCriminalctl').lightBill);
router.put('/NonCriminal_schoolLeaveCertificate/:id' ,upload.single("schoolLeaveCertificate"), require('../controllers/NonCriminalctl').schoolLeaveCertificate);
router.put('/NonCriminal_photo/:id' ,upload.single("photo"), require('../controllers/NonCriminalctl').photo);
router.put('/NonCriminal_incomeCertficate3year/:id' ,upload.single("incomeCertficate3year"), require('../controllers/NonCriminalctl').incomeCertficate3year);
router.put('/NonCriminal_castProof/:id' ,upload.single("castCertificate"), require('../controllers/NonCriminalctl').castProof);
router.put('/NonCriminal_taxrecipt/:id' ,upload.single("taxRecipt"), require('../controllers/NonCriminalctl').taxRecipt);
router.put('/NonCriminal_acknowledgmentDocument/:id' ,upload.single("acknowledgmentDocument"), require('../controllers/NonCriminalctl').acknowledgmentDocument);
router.put('/NonCriminal_finalDocument/:id' ,upload.single("finalDocument"), require('../controllers/NonCriminalctl').finalDocument);

module.exports=router;