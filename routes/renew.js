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
router.post('/renew/create', require('../controllers/renewDl').createRenewDl);

// Get renew routes
router.get('/renew', require('../controllers/renewDl').getrenewDl);
router.get('/renew/:id', require('../controllers/renewDl').getSingrenewDl);

// Delete renew routes
router.delete('/renew/:id', require('../controllers/renewDl').deleterenewDl);

// Update renew routes
router.put('/renew/:id' , require('../controllers/renewDl').updaterenewDl);
router.put('/PElicence/:id' , require('../controllers/renewDl').updaterenewDl);

module.exports=router;