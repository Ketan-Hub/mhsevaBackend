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
router.post('/votercard/create', require('../controllers/voterCardCtl').createvoterCard);

// Get renew routes
router.get('/votercard', require('../controllers/voterCardCtl').getvoterCard);
router.get('/votercard/:id', require('../controllers/voterCardCtl').getsinglevoterCard);

// Delete renew routes
router.delete('/votercard/:id', require('../controllers/voterCardCtl').deletevoterCard);

// Update renew routes
router.put('/votercard/:id' , require('../controllers/voterCardCtl').updatevoterCard);
//upload docs
router.put('/votercard_addressProofDoc/:id' ,upload.single("addressProof_Doc"), require('../controllers/voterCardCtl').addressProof_Doc);
router.put('/votercard_ageProofDOc/:id' ,upload.single("ageProof_DOc"), require('../controllers/voterCardCtl').ageProof_DOc);
router.put('/votercard_PassportSizePhoto/:id' ,upload.single("PassportSize_photo") ,require('../controllers/voterCardCtl').PassportSize_photo);
router.put('/votercard_ageDeclarationForm/:id' ,upload.single("age_declaration_form"), require('../controllers/voterCardCtl').age_declaration_form);
router.put('/votercard_acknowledgmentDocument/:id' ,upload.single("acknowledgmentDocument"), require('../controllers/voterCardCtl').acknowledgmentDocument);
router.put('/votercard_finalDocumentDocument/:id' ,upload.single("finalDocument"), require('../controllers/voterCardCtl').finalDocument);
 
module.exports=router;