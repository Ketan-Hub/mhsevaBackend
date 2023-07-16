const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
// import multer from "multer";

// import { Router } from "express";
// import AWS from 'aws-sdk';
const AWS = require("aws-sdk");
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
router.post(
  "/compgst/create",
  require("../controllers/compgstctl").createcmpGST
);

// Get renew routes
router.get("/compgst", require("../controllers/compgstctl").getcmpGST);
router.get("/compgst/:id", require("../controllers/compgstctl").getSingcmpGST);

// Delete renew routes
router.delete(
  "/compgst/:id",
  require("../controllers/compgstctl").deletecmpGST
);

// Update renew routes
router.put("/compgst/:id", upload.single("updateCompanyGst"), require("../controllers/compgstctl").updatecmpGST);
router.put("/compgst_adharCard/:id",upload.single("adharCard"),require("../controllers/compgstctl").adharCard);
router.put("/compgst_electricityBill/:id",upload.single("electricityBill"), require("../controllers/compgstctl").electricityBill);
router.put("/compgst_bankPassbook/:id",upload.single("bankPassbook"),require("../controllers/compgstctl").bankPassbook);
router.put("/compgst_panCard/:id",upload.single("panCard"),require("../controllers/compgstctl").panCard);
router.put("/compgst_passportPhoto/:id",upload.single("passportPhoto"),require("../controllers/compgstctl").passportPhoto);
router.put("/compgst_shopActLicence/:id",upload.single("shopAct_licence"),require("../controllers/compgstctl").shopAct_licence);
router.put("/compgst_rentAgreement/:id",upload.single("rentAgreement"),require("../controllers/compgstctl").rentAgreement);
router.put("/compgst_signature/:id",upload.single("signature"),require("../controllers/compgstctl").signature);
router.put("/compgst_acknowledgmentDocument/:id",upload.single("acknowledgmentDocument"),require("../controllers/compgstctl").acknowledgmentDocument);
router.put("/compgst_finalDocument/:id",upload.single("finalDocument"),require("../controllers/compgstctl").finalDocument);

module.exports = router;
