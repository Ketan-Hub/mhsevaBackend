const express = require('express');
const router = express.Router();
// import {uploads} from "../routes/s3"


const path =require("path");
// import { Router } from "express";
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

const awsConfig = {
  region: "ap-south-1",
  accessKeyId: "AKIAZP55XADYWS3FEBHX",
  secretAccessKey: "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",
};

const S3Bucket = new AWS.S3(awsConfig);


 const uploadToS3 = (fileData) => {
  return new Promise((resolve, reject) => {
      const params = {
          Bucket: 'mhaeseva',
          Key: `${Date.now().toString()}.jpg`,
          Body: fileData,
      };
      S3Bucket.upload(params, (err, data) => {
          if (err) {
              console.log(err);
              return reject(err);
          }
          return resolve(data);
      });
  });
};

// Create renew routes
router.post('/Age_Nashnality/create', require('../controllers/ageNashnalityCtl').createageNashnality);

// Get renew routes
router.get('/Age_Nashnality', require('../controllers/ageNashnalityCtl').getageNashnality);
router.get('/Age_Nashnality/:id', require('../controllers/ageNashnalityCtl').getSingageNashnality);

// Delete renew routes
router.delete('/Age_Nashnality/:id', require('../controllers/ageNashnalityCtl').deletageNashnality);

// Update renew routes
router.put('/Age_Nashnality/:id' , require('../controllers/ageNashnalityCtl').updateageNashnality);

//uploads 
router.put("/Age_Nashnality_reshanCard/:id",upload.single("reshanCard"), require("../controllers/ageNashnalityCtl").reshanCard );
router.put("/Age_Nashnality_adharCard/:id",upload.single("adharcard"), require("../controllers/ageNashnalityCtl").adharCard );
router.put("/Age_Nashnality_lightbill/:id",upload.single("lightbill"), require("../controllers/ageNashnalityCtl").lightBill );
router.put("/Age_Nashnality_schoolLeaveCertificate/:id",upload.single("schoolLeaveCertificate"),  require("../controllers/ageNashnalityCtl").schoolLeaveCertificate );
router.put("/Age_Nashnality_taxBill/:id",upload.single("taxBill"),  require("../controllers/ageNashnalityCtl").taxBillOr15yerOldLightbill );
router.put("/Age_Nashnality_photo/:id",upload.single("photo"), require("../controllers/ageNashnalityCtl").photo );
router.put("/Age_Nashnality_selfDeclaretion/:id",upload.single("selfDeclaretion"),  require("../controllers/ageNashnalityCtl").selfDeclaration );
router.put("/Age_Nashnality_acknowledgmentDocument/:id",upload.single("acknowledgmentDocument"),  require("../controllers/ageNashnalityCtl").acknowledgmentDocument );
router.put("/Age_Nashnality_finalDocument/:id",upload.single("finalDocument"),  require("../controllers/ageNashnalityCtl").finalDocument );


module.exports=router;