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

// Create renew routes
router.post('/udhamAbhar/create', require('../controllers/udhamAdharctl').createudhamAbhar);

// Get renew routes
router.get('/udhamAbhar', require('../controllers/udhamAdharctl').getudhamAbhar);
router.get('/udhamAbhar/:id', require('../controllers/udhamAdharctl').getsingleudhamAbhar);

// Delete renew routes
router.delete('/udhamAbhar/:id', require('../controllers/udhamAdharctl').deleteudhamAbhar);

// Update renew routes
router.put('/udhamAbhar/:id' , require('../controllers/udhamAdharctl').updateudhamAbhar);
// upload Docks
router.put('/udhamAbhar_AadharUploadCard/:id' , require('../controllers/udhamAdharctl').Aadhar_Upload_Card);
router.put('/udhamAbhar_PanUploadCard/:id' , require('../controllers/udhamAdharctl').Pan_Upload_Card);
router.put('/udhamAbhar_Passport/:id' , require('../controllers/udhamAdharctl').Passport);
router.put('/udhamAbhar_BankUploadPassbook/:id' , require('../controllers/udhamAdharctl').Bank_Upload_Passbook);

module.exports=router;