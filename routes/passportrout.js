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
router.post('/passport/create', require('../controllers/passportctl').createpassport);

// Get renew routes
router.get('/passport', require('../controllers/passportctl').getpassport);
router.get('/passport/:id', require('../controllers/passportctl').getSingpassport);

// Delete renew routes
router.delete('/passport/:id', require('../controllers/passportctl').deletepassport);

// Update renew routes
router.put('/passport/:id' , require('../controllers/passportctl').updatepassport);
router.put('/passport_acknowledgmentDocument/:id' ,upload.single("acknowledgmentDocument"), require('../controllers/passportctl').acknowledgmentDocument);
router.put('/passport_zipAllDocuments/:id' , upload.single("zipAllDocuments"),require('../controllers/passportctl').zipAllDocuments);

module.exports=router;