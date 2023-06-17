const express = require('express');
const { signup, signin ,requireSignin, updateUser, updatePassword} = require('../controllers/Admin/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validator/Admin/auth');
const{ getUser,getAgent}=require('../controllers/Admin/auth')
const router = express.Router();



router.post('/signup',validateSignupRequest, isRequestValidated, signup);
router.post('/signin',validateSigninRequest, isRequestValidated, signin);
router.get('/getretailer',getUser);
router.get('/getagent',getAgent);






// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

module.exports = router;