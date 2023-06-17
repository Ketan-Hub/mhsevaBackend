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
router.post('/shopact/create', require('../controllers/ShopActCtl').createshopAct);

// Get renew routes
router.get('/shopact', require('../controllers/ShopActCtl').getshopAct);
router.get('/shopact/:id', require('../controllers/ShopActCtl').getsingleshopAct);

// Delete renew routes
router.delete('/shopact/:id', require('../controllers/ShopActCtl').deleteshopAct);

// Update renew routes
router.put('/shopact_ownerPassportPhoto/:id' , require('../controllers/ShopActCtl').ownerPassport_photo);
router.put('/shopact_ownerSignatureAsPer_PAN/:id' , require('../controllers/ShopActCtl').ownerSignatureAsPer_PAN);
router.put('/shopact_adharCard/:id' , require('../controllers/ShopActCtl').adharCard);
router.put('/shopact_shopPhotograph/:id' , require('../controllers/ShopActCtl').shopPhotographFrom_FrontSide_WithBusinessBoard);
router.put('/shopact_selfDeclaration/:id' , require('../controllers/ShopActCtl').selfDeclaration);
router.put('/shopact_ownerPANCard/:id' , require('../controllers/ShopActCtl').ownerPANCard);
router.put('/shopact_oldShopActForRenewal/:id' , require('../controllers/ShopActCtl').oldShopAct_ForRenewal);

module.exports=router;