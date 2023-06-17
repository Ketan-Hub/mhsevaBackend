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
router.post('/indGST/create', require('../controllers/individalgstctl').createindGST);

// Get renew routes
router.get('/indGST', require('../controllers/individalgstctl').getindGST);
router.get('/indGST/:id', require('../controllers/individalgstctl').getSingindGST);

// Delete renew routes
router.delete('/indGST/:id', require('../controllers/individalgstctl').deleteindGST);

// Update renew routes
router.put('/indGST/:id' , require('../controllers/individalgstctl').updateindGST);
router.put('/indGST_adharCardDocs/:id' , require('../controllers/individalgstctl').adharCard_Docs);
router.put('/indGST_electricityBill/:id' , require('../controllers/individalgstctl').electricityBill);
router.put('/indGST_bankPassbook/:id' , require('../controllers/individalgstctl').bankPassbook);
router.put('/indGST_panCardDocs/:id' , require('../controllers/individalgstctl').panCard_Docs);
router.put('/indGST_passportPhoto/:id' , require('../controllers/individalgstctl').passportPhoto);
router.put('/indGST_shopActLicence/:id' , require('../controllers/individalgstctl').shopAct_licence);
router.put('/indGST_rentAgreement/:id' , require('../controllers/individalgstctl').rentAgreement);
router.put('/indGST_signature/:id' , require('../controllers/individalgstctl').signature);

module.exports=router;