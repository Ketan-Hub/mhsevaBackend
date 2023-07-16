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
router.post('/shopact/create', require('../controllers/ShopActCtl').createshopAct);

// Get renew routes
router.get('/shopact', require('../controllers/ShopActCtl').getshopAct);
router.get('/shopact/:id', require('../controllers/ShopActCtl').getsingleshopAct);

// Delete renew routes
router.delete('/shopact/:id', require('../controllers/ShopActCtl').deleteshopAct);

// Update renew routes
router.put('/shopact_ownerPassportPhoto/:id' ,upload.single("ownerPassport_photo"), require('../controllers/ShopActCtl').ownerPassport_photo);
router.put('/shopact_ownerSignatureAsPer_PAN/:id' ,upload.single("ownerSignatureAsPer_PAN"), require('../controllers/ShopActCtl').ownerSignatureAsPer_PAN);
router.put('/shopact_adharCard/:id' ,upload.single("adharCard"), require('../controllers/ShopActCtl').adharCard);
router.put('/shopact_shopPhotograph/:id' ,upload.single("shopPhotographFrom_FrontSide_WithBusinessBoard"), require('../controllers/ShopActCtl').shopPhotographFrom_FrontSide_WithBusinessBoard);
router.put('/shopact_selfDeclaration/:id' ,upload.single("selfDeclaration"), require('../controllers/ShopActCtl').selfDeclaration);
router.put('/shopact_ownerPANCard/:id' , upload.single("ownerPANCard"), require('../controllers/ShopActCtl').ownerPANCard);
router.put('/shopact_oldShopActForRenewal/:id' ,upload.single("oldShopAct_ForRenewal"), require('../controllers/ShopActCtl').oldShopAct_ForRenewal);
router.put('/shopact_acknowledgmentDocumentl/:id' ,upload.single("acknowledgmentDocument"), require('../controllers/ShopActCtl').acknowledgmentDocument);
router.put('/shopact_finalDocument/:id' ,upload.single("finalDocument"), require('../controllers/ShopActCtl').finalDocument);

module.exports=router;