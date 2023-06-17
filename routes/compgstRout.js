const express = require("express");
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
router.put("/compgst/:id", require("../controllers/compgstctl").updatecmpGST);
router.put(
  "/compgst_adharCard/:id",
  require("../controllers/compgstctl").adharCard
);
router.put(
  "/compgst_electricityBill/:id",
  require("../controllers/compgstctl").electricityBill
);
router.put(
  "/compgst_bankPassbook/:id",
  require("../controllers/compgstctl").bankPassbook
);
router.put(
  "/compgst_panCard/:id",
  require("../controllers/compgstctl").panCard
);
router.put(
  "/compgst_passportPhoto/:id",
  require("../controllers/compgstctl").passportPhoto
);
router.put(
  "/compgst_shopActLicence/:id",
  require("../controllers/compgstctl").shopAct_licence
);
router.put(
  "/compgst_rentAgreement/:id",
  require("../controllers/compgstctl").rentAgreement
);
router.put(
  "/compgst_signature/:id",
  require("../controllers/compgstctl").signature
);

module.exports = router;
