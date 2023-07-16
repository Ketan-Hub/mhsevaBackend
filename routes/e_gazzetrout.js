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
  

// Create e_gazzet routes
router.post('/e_gazzet/create', require('../controllers/E_gazzet').createE_gazzet);

// Get e_gazzet routes
router.get('/e_gazzet', require('../controllers/E_gazzet').gete_gazzet);
router.get('/e_gazzet/:id', require('../controllers/E_gazzet').getSinge_gazzet);

// Delete e_gazzet routes
router.delete('/e_gazzet/:id', require('../controllers/E_gazzet').deletee_gazzet);

// Update e_gazzet routes
router.put('/e_gazzet/:id' , require('../controllers/E_gazzet').updatee_gazzet);

router.put('/gazzet_photoID/:id' ,upload.single("photoID"), require('../controllers/E_gazzet').photoID);
router.put('/gazzet_addressProof/:id' ,upload.single("addressProof"), require('../controllers/E_gazzet').addressProof);
router.put('/gazzet_CastCertificate/:id' ,upload.single("Cast_Certificate"), require('../controllers/E_gazzet').Cast_Certificate);
router.put('/gazzet_applicationForm/:id' ,upload.single("applicationForm"), require('../controllers/E_gazzet').applicationForm);
router.put('/gazzet_identityProof/:id' , upload.single("identityProof"),require('../controllers/E_gazzet').identityProof);
router.put('/gazzet_PassportSizePhoto/:id' ,upload.single("Passport_Size_Photo"), require('../controllers/E_gazzet').Passport_Size_Photo);
router.put('/gazzet_OldNameProof/:id' ,upload.single("OldName_Proof"), require('../controllers/E_gazzet').OldName_Proof);
router.put('/gazzet_PresentNameProof/:id' ,upload.single("PresentName_Proof"), require('../controllers/E_gazzet').PresentName_Proof);
router.put('/gazzet_acknowledgmentDocument/:id' ,upload.single("acknowledgmentDocument"), require('../controllers/E_gazzet').acknowledgmentDocument);
router.put('/gazzet_finalDocument/:id' ,upload.single("finalDocument"), require('../controllers/E_gazzet').finalDocument);

module.exports=router;