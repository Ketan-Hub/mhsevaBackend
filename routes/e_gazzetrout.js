const express = require('express');
const router = express.Router();
const multer=require("multer");
const path =require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({storage});

// Create e_gazzet routes
router.post('/e_gazzet/create', require('../controllers/E_gazzet').createE_gazzet);

// Get e_gazzet routes
router.get('/e_gazzet', require('../controllers/E_gazzet').gete_gazzet);
router.get('/e_gazzet/:id', require('../controllers/E_gazzet').getSinge_gazzet);

// Delete e_gazzet routes
router.delete('/e_gazzet/:id', require('../controllers/E_gazzet').deletee_gazzet);

// Update e_gazzet routes
router.put('/e_gazzet/:id' , require('../controllers/E_gazzet').updatee_gazzet);
router.put('/gazzet_photoID/:id' , require('../controllers/E_gazzet').photoID);
router.put('/gazzet_addressProof/:id' , require('../controllers/E_gazzet').addressProof);
router.put('/gazzet_applicationForm/:id' , require('../controllers/E_gazzet').applicationForm);
router.put('/gazzet_identityProof/:id' , require('../controllers/E_gazzet').identityProof);
router.put('/gazzet_PassportSizePhoto/:id' , require('../controllers/E_gazzet').Passport_Size_Photo);
router.put('/gazzet_OldNameProof/:id' , require('../controllers/E_gazzet').OldName_Proof);
router.put('/gazzet_PresentNameProof/:id' , require('../controllers/E_gazzet').PresentName_Proof);
router.put('/gazzet_CastCertificate/:id' , require('../controllers/E_gazzet').Cast_Certificate);

module.exports=router;