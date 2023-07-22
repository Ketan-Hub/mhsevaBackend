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
router.post('/renew/create', require('../controllers/renewDl').createRenewDl);

// Get renew routes
router.get('/renew', require('../controllers/renewDl').getrenewDl);
router.get('/renew/:id', require('../controllers/renewDl').getSingrenewDl);

// Delete renew routes
router.delete('/renew/:id', require('../controllers/renewDl').deleterenewDl);

// Update renew routes
router.put('/renew/:id' , require('../controllers/renewDl').updaterenewDl);
router.put('/renew_PElicence/:id' ,upload.single("permanantDrivingLicence"), require('../controllers/renewDl').permanantDrivingLicence);
router.put('/renew_acknowledgmentDocument/:id' ,upload.single("acknowledgmentDocument"), require('../controllers/renewDl').acknowledgmentDocument);
router.put('/renew_finalDocument/:id' ,upload.single("finalDocument"), require('../controllers/renewDl').finalDocument);

module.exports=router;