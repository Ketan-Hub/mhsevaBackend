const express = require('express');
const router = express.Router();

// Create renew routes
router.post('/wallet/create', require('../controllers/WalletCtl').createWallet);

// Get renew routes
router.get('/wallet', require('../controllers/WalletCtl').getwallet);
router.get('/wallet/:id', require('../controllers/WalletCtl').getSingleWallet);
// router.get('/recharge/getByUser/:userId', require('../controllers/valletCtl').);


// Delete renew routes
router.delete('/wallet/:id', require('../controllers/WalletCtl').deleteWallet);

// Update renew routes
router.put('/wallet/:id' , require('../controllers/WalletCtl').updatewallet);

module.exports=router;