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
router.post('/notice/create', require('../controllers/Noticectl').createnotice);

// Get renew routes
router.get('/notice', require('../controllers/Noticectl').getNotice);
router.get('/notice/:id', require('../controllers/Noticectl').getSingNotice);

// Delete renew routes
router.delete('/notice/:id', require('../controllers/Noticectl').deletNotice);

// Update renew routes
router.put('/notice/:id' , require('../controllers/Noticectl').updateNotice);
router.put('/notice_image/:id' ,upload.single("image"), require('../controllers/Noticectl').image);

module.exports=router;