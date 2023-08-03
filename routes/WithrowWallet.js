const express = require('express');
const router = express.Router();

// Create renew routes
router.post('/withdrowWallet/create', require('../controllers/withdrowWalletctl').createwithdrowWallet);

// Get renew routes
router.get('/withdrowWallet', require('../controllers/withdrowWalletctl').getwithdrowWallet);
router.get('/withdrowWallet/:id', require('../controllers/withdrowWalletctl').getSinglewithdrowWallet);
// router.get('/recharge/getByUser/:userId', require('../controllers/valletCtl').);


// Delete renew routes
router.delete('/withdrowWallet/:id', require('../controllers/withdrowWalletctl').deletewithdrowWallet);

// Update renew routes
router.put('/withdrowWalletlet/:id' , require('../controllers/withdrowWalletctl').updatewithdrowWallet);

module.exports=router;